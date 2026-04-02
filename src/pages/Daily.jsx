import { Link } from 'react-router-dom'
import { PHRASES, CAT_LABELS } from '../data/phrases'
import { useProgress } from '../context/ProgressContext'
import { getDailyPhrase, fmtDate } from '../utils'

export default function Daily() {
  const { learned } = useProgress()
  const p = getDailyPhrase(PHRASES)

  return (
    <div className="page">
      <div className="daily-date">{fmtDate()}</div>
      <div className="daily-card">
        <div className="daily-cat">{CAT_LABELS[p.category] || p.category}</div>
        <div className="daily-quote">{p.text}</div>
        <div className="daily-attr">
          — {p.attribution}
          {p.source && <span className="attr-source">{p.source}</span>}
        </div>
        <div className="daily-hr" />
        <div className="meaning-label">Meaning</div>
        <div className="daily-meaning">{p.meaning}</div>
      </div>
      <Link to="/study" className="cta-btn">Study All Phrases</Link>
      <div className="progress-pill">
        <span className="progress-pill-icon">🎓</span>
        <span className="progress-pill-text">Phrases learned:</span>
        <span className="progress-pill-count">{learned.size} / {PHRASES.length}</span>
      </div>
    </div>
  )
}
