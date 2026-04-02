import { forwardRef, useRef, useState, useEffect } from 'react'
import { CAT_LABELS } from '../data/phrases'
import { getAuthorBio } from '../data/authors'

const FlashCard = forwardRef(function FlashCard({ phrase, flipped, hasFlipped, onFlip, onSwipe }, ref) {
  const bio = getAuthorBio(phrase.attribution)
  const touchStart = useRef(null)
  const isDragging = useRef(false)
  const [drag, setDrag] = useState(0)
  const [settling, setSettling] = useState(false)

  // Reset drag when a new card arrives
  useEffect(() => {
    setDrag(0)
    setSettling(false)
    isDragging.current = false
    touchStart.current = null
  }, [phrase.id])

  function handleTouchStart(e) {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    isDragging.current = false
    setSettling(false)
  }

  function handleTouchMove(e) {
    if (!touchStart.current) return
    const dx = e.touches[0].clientX - touchStart.current.x
    const dy = e.touches[0].clientY - touchStart.current.y
    if (isDragging.current || (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6)) {
      isDragging.current = true
      setDrag(dx)
    }
  }

  function handleTouchEnd(e) {
    if (!touchStart.current) return
    e.preventDefault()
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    const wasDragging = isDragging.current
    touchStart.current = null
    isDragging.current = false

    if (!wasDragging) {
      // tap
      setDrag(0)
      onFlip()
    } else if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      // committed swipe — fly card off screen, then notify parent
      const dir = dx > 0 ? 'right' : 'left'
      setSettling(true)
      setDrag(dir === 'right' ? 600 : -600)
      setTimeout(() => onSwipe?.(dir), 260)
    } else {
      // not enough — snap back
      setSettling(true)
      setDrag(0)
      setTimeout(() => setSettling(false), 320)
    }
  }

  const tintOpacity = Math.min(Math.abs(drag) / 120, 0.32)
  const tintColor = drag > 0
    ? `rgba(77,217,132,${tintOpacity})`
    : `rgba(240,96,96,${tintOpacity})`

  return (
    <div className="card-scene">
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transform: drag ? `translateX(${drag}px) rotate(${drag * 0.025}deg)` : undefined,
          transition: settling ? 'transform 0.26s cubic-bezier(0.4,0,0.2,1)' : 'none',
          willChange: 'transform',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {drag !== 0 && (
          <div style={{
            position: 'absolute', inset: 0,
            background: tintColor,
            borderRadius: 'var(--radius)',
            zIndex: 10,
            pointerEvents: 'none',
          }} />
        )}
        <div
          ref={ref}
          className={`flashcard${flipped ? ' flipped' : ''}`}
          onClick={onFlip}
        >
          <div className="card-face card-front">
            <div className="card-front-quote">{phrase.text}</div>
            <div className="card-front-attr">
              — {phrase.attribution}
              {phrase.source && <span className="attr-source">{phrase.source}</span>}
            </div>
            {!hasFlipped && (
              <div className="card-front-hint">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                Tap to reveal
              </div>
            )}
          </div>

          <div className="card-face card-back">
            <div className="card-back-cat">{CAT_LABELS[phrase.category] || phrase.category}</div>
            <div className="card-back-scroll">
              <div className="meaning-label">Meaning</div>
              <div className="card-back-meaning">{phrase.meaning}</div>
              {bio && (
                <>
                  <div className="card-back-bio-sep" />
                  <div className="meaning-label">About</div>
                  <div className="card-back-bio">{bio}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FlashCard
