import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PHRASES } from '../data/phrases'
import { useProgress } from '../context/ProgressContext'
import { shuffle } from '../utils'
import FlashCard from '../components/FlashCard'

export default function Study() {
  const navigate = useNavigate()
  const { learned, markLearned, markSeen } = useProgress()
  const cardRef = useRef(null)

  const [deck, setDeck] = useState(() => shuffle(PHRASES.map(p => p.id)))
  const [total] = useState(PHRASES.length)
  const [correct, setCorrect] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [hasFlipped, setHasFlipped] = useState(false)
  const [complete, setComplete] = useState(false)

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
        total={total}
        correct={correct}
        learnedCount={learned.size}
        onRestart={restart}
      />
    )
  }

  const phrase = PHRASES.find(p => p.id === deck[0])
  if (!phrase) return null

  const doneCount = total - deck.length
  const progress  = total > 0 ? (doneCount / total) * 100 : 0

  function handleFlip() {
    if (!flipped) setHasFlipped(true)
    setFlipped(f => !f)
  }

  function handleAnswer(got) {
    if (!flipped) return
    const id = deck[0]
    markSeen(id)

    if (got) {
      const newCorrect = correct + 1
      setCorrect(newCorrect)
      markLearned(id)
      const newDeck = deck.slice(1)
      if (newDeck.length === 0) {
        setComplete(true)
        return
      }
      animateAndAdvance(got, newDeck)
    } else {
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
      animateAndAdvance(got, newDeck)
    }
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

  function restart() {
    setDeck(shuffle(PHRASES.map(p => p.id)))
    setCorrect(0)
    setFlipped(false)
    setHasFlipped(false)
    setComplete(false)
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

      <FlashCard
        ref={cardRef}
        phrase={phrase}
        flipped={flipped}
        hasFlipped={hasFlipped}
        onFlip={handleFlip}
      />

      <div className="study-actions">
        <button className="act-btn btn-more" disabled={!flipped} onClick={() => handleAnswer(false)}>
          ✕&nbsp; Study More
        </button>
        <button className="act-btn btn-got" disabled={!flipped} onClick={() => handleAnswer(true)}>
          ✓&nbsp; Got It
        </button>
      </div>
      {!hasFlipped && (
        <div className="study-subhint">Tap the card to flip it &nbsp;·&nbsp; ← → arrow keys also work</div>
      )}
    </div>
  )
}

function Completion({ total, correct, learnedCount, onRestart }) {
  const pct   = total > 0 ? Math.round((correct / total) * 100) : 0
  const grade = pct >= 90 ? '🏆' : pct >= 70 ? '✨' : pct >= 50 ? '📖' : '💪'
  return (
    <div className="completion page">
      <div className="completion-icon">{grade}</div>
      <div className="completion-title">Session Complete</div>
      <div className="completion-sub">
        You've worked through all {total} phrases.<br />
        {pct >= 80 ? 'Excellent recall.' : pct >= 60 ? 'Good progress.' : 'Keep at it — it sticks with repetition.'}
      </div>
      <div className="stat-block">
        <div className="stat-row">
          <span className="stat-label">Got It</span>
          <span className="stat-val good">{correct}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Score</span>
          <span className="stat-val">{pct}%</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Total learned (all time)</span>
          <span className="stat-val">{learnedCount} / {total}</span>
        </div>
      </div>
      <button className="ghost-btn" onClick={onRestart}>Study Again</button>
    </div>
  )
}
