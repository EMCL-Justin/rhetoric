import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PHRASES } from '../data/phrases'
import { useProgress } from '../context/ProgressContext'
import { shuffle } from '../utils'

const QUIZ_LEN = 8
const HISTORY_KEY = 'rh_quiz_history'

const STOPWORDS = new Set([
  'the','and','that','with','which','their','there','those','these','have','has',
  'not','for','are','but','you','your','who','what','when','where','will','would',
  'should','could','than','then','them','they','from','into','only','ever','never',
  'always','been','being','must','may','more','most','some','such','upon','shall',
  'while','about','after','before','other','every','himself','itself','because',
])

function clozeCandidates(text) {
  return [...new Set(
    text.replace(/[^a-zA-Z ]/g, ' ').split(/\s+/)
      .filter(w => w.length >= 5 && !STOPWORDS.has(w.toLowerCase()))
  )]
}

const TYPE_LABELS = {
  meaning: 'Which phrase matches this meaning?',
  cloze:   'Fill in the blank',
  author:  'Who said it?',
}

function buildQuiz(srs, phrases) {
  const studied = phrases.filter(p => srs[p.id])
  const pool = studied.length >= 4 ? studied : phrases
  const picks = shuffle(pool).slice(0, Math.min(QUIZ_LEN, pool.length))

  return picks.map((p, i) => {
    // Author-matching is the favorite format — it gets half of every quiz.
    let type = ['author', 'meaning', 'author', 'cloze'][i % 4]
    if (type === 'cloze' && clozeCandidates(p.text).length === 0) type = 'meaning'

    if (type === 'author') {
      // Prefer authors from the same category so the choices are plausible
      // rivals, then fill from the full author pool.
      const sameCat = [...new Set(phrases.filter(x => x.category === p.category).map(x => x.attribution))]
        .filter(a => a !== p.attribution)
      const rest = [...new Set(phrases.map(x => x.attribution))]
        .filter(a => a !== p.attribution && !sameCat.includes(a))
      const others = [...shuffle(sameCat), ...shuffle(rest)].slice(0, 3)
      return { type, phrase: p, prompt: `“${p.text}”`, options: shuffle([p.attribution, ...others]), answer: p.attribution }
    }

    if (type === 'cloze') {
      const word = shuffle(clozeCandidates(p.text))[0]
      const distractors = shuffle(
        [...new Set(phrases.filter(x => x.id !== p.id).flatMap(x => clozeCandidates(x.text)))]
          .filter(w => w.toLowerCase() !== word.toLowerCase())
      ).slice(0, 3)
      const blanked = p.text.replace(new RegExp(`\\b${word}\\b`), '_____')
      return { type, phrase: p, prompt: `“${blanked}”`, options: shuffle([word, ...distractors]), answer: word }
    }

    const sameCat = phrases.filter(x => x.id !== p.id && x.category === p.category)
    const distractPool = sameCat.length >= 3 ? sameCat : phrases.filter(x => x.id !== p.id)
    const others = shuffle(distractPool).slice(0, 3).map(x => x.text)
    return { type, phrase: p, prompt: p.meaning, options: shuffle([p.text, ...others]), answer: p.text }
  })
}

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') } catch { return [] }
}

export default function Quiz() {
  const { srs } = useProgress()
  const [questions, setQuestions] = useState(() => buildQuiz(srs, PHRASES))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [misses, setMisses] = useState([])
  const [done, setDone] = useState(false)

  const studiedCount = Object.keys(srs).length
  const q = questions[idx]

  function pick(opt) {
    if (picked !== null) return
    setPicked(opt)
    if (opt !== q.answer) setMisses(m => [...m, { q, picked: opt }])
  }

  function next() {
    if (idx + 1 >= questions.length) {
      const correct = questions.length - misses.length
      const history = loadHistory()
      history.push({ t: Date.now(), score: correct, total: questions.length })
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-50)))
      setDone(true)
    } else {
      setIdx(i => i + 1)
      setPicked(null)
    }
  }

  function restart() {
    setQuestions(buildQuiz(srs, PHRASES))
    setIdx(0)
    setPicked(null)
    setMisses([])
    setDone(false)
  }

  if (done) {
    return <Results total={questions.length} misses={misses} onRestart={restart} />
  }

  return (
    <div className="page">
      <div className="quiz-header">
        <div className="quiz-count">Question {idx + 1} / {questions.length}</div>
        <div className="quiz-type">{TYPE_LABELS[q.type]}</div>
      </div>
      {studiedCount < 4 && (
        <div className="practice-note">Quizzing all phrases — study some cards first for a true retention check</div>
      )}

      <div className={`quiz-prompt${q.type === 'meaning' ? ' is-meaning' : ''}`}>{q.prompt}</div>

      <div className="quiz-options">
        {q.options.map(opt => {
          const state = picked === null ? ''
            : opt === q.answer ? ' correct'
            : opt === picked ? ' wrong'
            : ' dim'
          return (
            <button key={opt} className={`quiz-option${state}`} onClick={() => pick(opt)}>
              {opt}
            </button>
          )
        })}
      </div>

      {picked !== null && (
        <>
          {picked !== q.answer && (
            <div className="quiz-reveal">— {q.phrase.attribution}</div>
          )}
          <button className="cta-btn" onClick={next}>
            {idx + 1 >= questions.length ? 'See Results' : 'Next'}
          </button>
        </>
      )}
    </div>
  )
}

function Results({ total, misses, onRestart }) {
  const correct = total - misses.length
  const pct = Math.round((correct / total) * 100)
  const grade = pct >= 90 ? '🏆' : pct >= 70 ? '✨' : pct >= 50 ? '📖' : '💪'
  const history = loadHistory().slice(-6).reverse()

  return (
    <div className="completion page">
      <div className="completion-icon">{grade}</div>
      <div className="completion-title">{correct} / {total}</div>
      <div className="completion-sub">
        {pct >= 90 ? 'Excellent retention.' : pct >= 70 ? 'Solid — the boxes are working.' : 'The gaps show you what to study next.'}
      </div>

      {misses.length > 0 && (
        <div className="quiz-misses">
          <div className="meaning-label">What you missed</div>
          {misses.map(({ q, picked }, i) => (
            <div className="quiz-miss" key={i}>
              <div className="quiz-miss-phrase">{q.phrase.text}</div>
              <div className="quiz-miss-detail">
                You picked <span className="miss-picked">{picked}</span> — it was <span className="miss-answer">{q.answer}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {history.length > 1 && (
        <div className="stat-block">
          {history.map((h, i) => (
            <div className="stat-row" key={i}>
              <span className="stat-label">
                {new Date(h.t).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                {i === 0 ? ' · just now' : ''}
              </span>
              <span className="stat-val">{h.score} / {h.total}</span>
            </div>
          ))}
        </div>
      )}

      <button className="cta-btn" onClick={onRestart}>Quiz Again</button>
      <Link to="/study" className="ghost-btn">Study Weak Cards</Link>
    </div>
  )
}
