import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PHRASES } from '../data/phrases'
import { useProgress, BOX_INTERVALS, MAX_BOX } from '../context/ProgressContext'
import { buildSession, nextDueDays, shuffle } from '../utils'
import FlashCard from '../components/FlashCard'

export default function Study() {
  const navigate = useNavigate()
  const { srs, promote, demote } = useProgress()
  const cardRef = useRef(null)

  const [mode, setMode] = useState('session') // 'session' scores boxes; 'practice' doesn't
  const [deck, setDeck] = useState(() => buildSession(srs, PHRASES))
  const [total, setTotal] = useState(deck.length)
  const [correct, setCorrect] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [hasFlipped, setHasFlipped] = useState(false)
  const [complete, setComplete] = useState(false)
  const missed = useRef(new Set())

  // Use refs so keyboard handler always has latest values without re-subscribing
  const flipRef = useRef(null)
  const answerRef = useRef(null)
  flipRef.current = handleFlip
  answerRef.current = handleAnswer

  useEffect(() => {
    function onKey(e) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipRef.current() }
      if (e.key === 'ArrowRight')             { e.preventDefault(); answerRef.current(true) }
      if (e.key === 'ArrowLeft')              { e.preventDefault(); answerRef.current(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (complete) {
    return (
      <Completion
        mode={mode}
        total={total}
        correct={correct}
        srs={srs}
        onRestart={restart}
      />
    )
  }

  if (total === 0) {
    return <CaughtUp srs={srs} onPractice={startPractice} />
  }

  const phrase = PHRASES.find(p => p.id === deck[0])
  if (!phrase) return null

  const doneCount = total - deck.length
  const progress  = total > 0 ? (doneCount / total) * 100 : 0

  function handleFlip() {
    if (!flipped) setHasFlipped(true)
    setFlipped(f => !f)
  }

  function handleAnswer(got, fromSwipe = false) {
    const id = deck[0]
    if (id === undefined) return
    const firstTry = !missed.current.has(id)

    if (got) {
      if (firstTry) {
        setCorrect(c => c + 1)
        if (mode === 'session') promote(id)
      }
      // A card missed earlier this session was already demoted — clearing it
      // now just removes it from the deck without touching its box.
      const newDeck = deck.slice(1)
      if (newDeck.length === 0) {
        setComplete(true)
        return
      }
      fromSwipe ? applyDeck(newDeck) : animateAndAdvance(got, newDeck)
    } else {
      if (firstTry && mode === 'session') demote(id)
      missed.current.add(id)
      const remaining = deck.slice(1)
      let newDeck
      if (remaining.length === 0) {
        newDeck = [id]
      } else {
        const minGap = Math.min(5, remaining.length)
        const pos    = minGap + Math.floor(Math.random() * (remaining.length - minGap + 1))
        const r      = [...remaining]
        r.splice(Math.min(pos, r.length), 0, id)
        newDeck = r
      }
      fromSwipe ? applyDeck(newDeck) : animateAndAdvance(got, newDeck)
    }
  }

  function applyDeck(newDeck) {
    setDeck(newDeck)
    setFlipped(false)
  }

  function animateAndAdvance(got, newDeck) {
    if (cardRef.current) {
      cardRef.current.classList.add(got ? 'card-exit-right' : 'card-exit-left')
    }
    setTimeout(() => {
      setDeck(newDeck)
      setFlipped(false)
    }, 290)
  }

  function resetSession(newDeck, newMode) {
    missed.current = new Set()
    setMode(newMode)
    setDeck(newDeck)
    setTotal(newDeck.length)
    setCorrect(0)
    setFlipped(false)
    setHasFlipped(false)
    setComplete(false)
  }

  function restart() {
    resetSession(buildSession(srs, PHRASES), 'session')
  }

  function startPractice() {
    resetSession(shuffle(PHRASES.map(p => p.id)).slice(0, 10), 'practice')
  }

  return (
    <div className="page">
      <div className="study-header">
        <div className="progress-wrap">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-text">{doneCount} / {total}</div>
        </div>
        <div className="remaining-count">{deck.length} left</div>
        <button className="exit-study-btn" onClick={() => navigate('/')} title="Exit session">✕</button>
      </div>
      {mode === 'practice' && <div className="practice-note">Practice round — progress not recorded</div>}

      <FlashCard
        ref={cardRef}
        phrase={phrase}
        flipped={flipped}
        hasFlipped={hasFlipped}
        onFlip={handleFlip}
        onSwipe={dir => handleAnswer(dir === 'right', true)}
      />

      <div className="study-actions">
        <button className="act-btn btn-more" disabled={!flipped} onClick={() => handleAnswer(false)}>
          ✕&nbsp; Study More
        </button>
        <button className="act-btn btn-got" disabled={!flipped} onClick={() => handleAnswer(true)}>
          ✓&nbsp; Got It
        </button>
      </div>
      {hasFlipped && <div className="study-subhint">Swipe to answer</div>}
    </div>
  )
}

function CaughtUp({ srs, onPractice }) {
  const days = nextDueDays(srs)
  return (
    <div className="completion page">
      <div className="completion-icon">🧘</div>
      <div className="completion-title">All caught up</div>
      <div className="completion-sub">
        Nothing is due for review right now.<br />
        {days ? `Your next cards come due in ${days} day${days > 1 ? 's' : ''}.` : 'Start studying to fill your boxes.'}
      </div>
      <button className="cta-btn" onClick={onPractice}>Practice 10 Anyway</button>
      <Link to="/" className="ghost-btn">Back to Daily</Link>
    </div>
  )
}

function Completion({ mode, total, correct, srs, onRestart }) {
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0
  const grade = pct >= 90 ? '🏆' : pct >= 70 ? '✨' : pct >= 50 ? '📖' : '💪'

  const boxes = [0, 0, 0, 0, 0]
  let fresh = 0
  for (const p of PHRASES) {
    const s = srs[p.id]
    if (!s) fresh++
    else boxes[s.box]++
  }
  const days = nextDueDays(srs)

  return (
    <div className="completion page">
      <div className="completion-icon">{grade}</div>
      <div className="completion-title">Session Complete</div>
      <div className="completion-sub">
        {correct} of {total} on the first try.<br />
        {mode === 'practice'
          ? 'Practice round — your boxes are unchanged.'
          : days
            ? `Next review in ${days} day${days > 1 ? 's' : ''}.`
            : 'More cards are due now — keep going if you have it in you.'}
      </div>
      <div className="stat-block">
        <div className="stat-row">
          <span className="stat-label">First-try score</span>
          <span className="stat-val good">{pct}%</span>
        </div>
        {Array.from({ length: MAX_BOX }, (_, i) => i + 1).map(b => (
          <div className="stat-row" key={b}>
            <span className="stat-label">Box {b} <span className="stat-sub">· every {BOX_INTERVALS[b]}d</span></span>
            <span className="stat-val">{boxes[b]}</span>
          </div>
        ))}
        <div className="stat-row">
          <span className="stat-label">Not yet studied</span>
          <span className="stat-val">{fresh}</span>
        </div>
      </div>
      <button className="ghost-btn" onClick={onRestart}>Next Session</button>
    </div>
  )
}
