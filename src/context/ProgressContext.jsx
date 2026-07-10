import { createContext, useContext, useState } from 'react'

const ProgressContext = createContext(null)

// Leitner boxes 1–4. A card's box determines how many days until it's due again.
export const BOX_INTERVALS = { 1: 1, 2: 3, 3: 7, 4: 21 }
export const MAX_BOX = 4
const DAY = 86400000

function loadSrs() {
  const raw = localStorage.getItem('rh_srs_v1')
  if (raw) {
    try { return JSON.parse(raw) } catch { /* corrupted — rebuild below */ }
  }
  // One-time migration from the old binary learned/seen model:
  // learned → box 3 with reviews staggered across the next week (avoids a
  // wall of 100 cards all landing on the same day), seen-only → box 1, due now.
  const learned = JSON.parse(localStorage.getItem('rh_learned') || '[]')
  const seen = JSON.parse(localStorage.getItem('rh_seen') || '[]')
  const now = Date.now()
  const srs = {}
  learned.forEach((id, i) => {
    srs[id] = { box: 3, due: now + (1 + (i % 7)) * DAY }
  })
  seen.forEach(id => {
    if (!srs[id]) srs[id] = { box: 1, due: now }
  })
  if (Object.keys(srs).length) localStorage.setItem('rh_srs_v1', JSON.stringify(srs))
  return srs
}

export function ProgressProvider({ children }) {
  const [srs, setSrs] = useState(loadSrs)

  function update(fn) {
    setSrs(prev => {
      const next = fn(prev)
      localStorage.setItem('rh_srs_v1', JSON.stringify(next))
      return next
    })
  }

  // Correct on first try → card moves up a box, next review further out.
  function promote(id) {
    update(prev => {
      const box = Math.min((prev[id]?.box ?? 0) + 1, MAX_BOX)
      return { ...prev, [id]: { box, due: Date.now() + BOX_INTERVALS[box] * DAY } }
    })
  }

  // Miss → back to box 1, due tomorrow.
  function demote(id) {
    update(prev => ({
      ...prev,
      [id]: { box: 1, due: Date.now() + BOX_INTERVALS[1] * DAY },
    }))
  }

  // Derived sets kept for the Library tags and progress pill.
  const seen = new Set(Object.keys(srs).map(Number))
  const learned = new Set(
    Object.entries(srs).filter(([, s]) => s.box >= 3).map(([id]) => Number(id))
  )

  return (
    <ProgressContext.Provider value={{ srs, promote, demote, learned, seen }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}
