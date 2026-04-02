import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { PHRASES } from '../data/phrases'
import { useProgress } from '../context/ProgressContext'
import { toSlug } from '../utils'
import FlashCard from '../components/FlashCard'

export default function Phrase() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { markLearned, markSeen } = useProgress()
  const [flipped, setFlipped] = useState(false)
  const [hasFlipped, setHasFlipped] = useState(false)
  const [done, setDone] = useState(false)

  const phrase = PHRASES.find(p => toSlug(p) === slug)
  if (!phrase) return <div className="page" style={{ textAlign: 'center', paddingTop: 60, color: 'var(--muted)' }}>Phrase not found.</div>

  function handleFlip() {
    if (!flipped) setHasFlipped(true)
    setFlipped(f => !f)
  }

  function handleAnswer(got) {
    if (!flipped) return
    markSeen(phrase.id)
    if (got) markLearned(phrase.id)
    setDone(true)
  }

  if (done) {
    return (
      <div className="page" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, marginBottom: 8 }}>Logged.</div>
        <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 32 }}>Keep at it — it sticks with repetition.</div>
        <Link to="/study" className="cta-btn" style={{ marginBottom: 12 }}>Study All Phrases</Link>
        <Link to="/" className="ghost-btn" style={{ display: 'block', padding: '16px', textAlign: 'center', textDecoration: 'none', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text)', fontWeight: 600, fontSize: 15 }}>Back to Daily</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="study-header">
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>From your notification</div>
        <button className="exit-study-btn" onClick={() => navigate('/')} title="Exit">✕</button>
      </div>

      <FlashCard
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
        <div className="study-subhint">Tap the card to flip it</div>
      )}
    </div>
  )
}
