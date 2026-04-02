import { createContext, useContext, useState } from 'react'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [learned, setLearned] = useState(
    () => new Set(JSON.parse(localStorage.getItem('rh_learned') || '[]'))
  )
  const [seen, setSeen] = useState(
    () => new Set(JSON.parse(localStorage.getItem('rh_seen') || '[]'))
  )

  function markLearned(id) {
    setLearned(prev => {
      const next = new Set(prev)
      next.add(id)
      localStorage.setItem('rh_learned', JSON.stringify([...next]))
      return next
    })
  }

  function markSeen(id) {
    setSeen(prev => {
      const next = new Set(prev)
      next.add(id)
      localStorage.setItem('rh_seen', JSON.stringify([...next]))
      return next
    })
  }

  return (
    <ProgressContext.Provider value={{ learned, seen, markLearned, markSeen }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}
