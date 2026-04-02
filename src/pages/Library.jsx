import { useState } from 'react'
import { PHRASES, CAT_LABELS } from '../data/phrases'
import { useProgress } from '../context/ProgressContext'

const CATS = ['all', ...Object.keys(CAT_LABELS)]

export default function Library() {
  const { learned, seen } = useProgress()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [openId, setOpenId] = useState(null)

  let filtered = PHRASES
  if (filter !== 'all') filtered = filtered.filter(p => p.category === filter)
  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(p =>
      p.text.toLowerCase().includes(q) ||
      p.attribution.toLowerCase().includes(q) ||
      p.meaning.toLowerCase().includes(q)
    )
  }

  return (
    <div className="page">
      <div className="search-wrap">
        <svg className="search-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="search-input"
          type="text"
          placeholder="Search phrases, authors, meanings…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="pills">
        {CATS.map(c => (
          <button
            key={c}
            className={`pill${filter === c ? ' on' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c === 'all' ? 'All' : CAT_LABELS[c]}
          </button>
        ))}
      </div>

      <div className="lib-meta">{filtered.length} phrase{filtered.length !== 1 ? 's' : ''}</div>

      <div className="phrase-list">
        {filtered.length === 0
          ? <div className="empty-state">No phrases match.</div>
          : filtered.map(p => {
              const isLearned = learned.has(p.id)
              const isNew     = !isLearned && !seen.has(p.id)
              const isOpen    = openId === p.id
              return (
                <div
                  key={p.id}
                  className={[
                    'phrase-card',
                    isLearned ? 'is-learned' : '',
                    isNew     ? 'is-new'     : '',
                    isOpen    ? 'open'       : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                >
                  <div className="pc-quote">{p.text}</div>
                  <div className="pc-footer">
                    <div className="pc-attr">
                      {p.attribution}
                      {p.source && <span className="attr-source">{p.source}</span>}
                    </div>
                    {isLearned
                      ? <span className="learned-tag">✓ Learned</span>
                      : isNew
                        ? <span className="new-tag">New</span>
                        : null
                    }
                    <span className="expand-chevron">▾</span>
                  </div>
                  {isOpen && <div className="pc-meaning">{p.meaning}</div>}
                </div>
              )
            })
        }
      </div>
    </div>
  )
}
