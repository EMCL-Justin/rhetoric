import { forwardRef, useRef } from 'react'
import { CAT_LABELS } from '../data/phrases'
import { getAuthorBio } from '../data/authors'

const FlashCard = forwardRef(function FlashCard({ phrase, flipped, hasFlipped, onFlip, onSwipe }, ref) {
  const bio = getAuthorBio(phrase.attribution)
  const touchStart = useRef(null)

  function handleTouchStart(e) {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  function handleTouchEnd(e) {
    if (!touchStart.current) return
    e.preventDefault() // prevent the synthetic click from also firing
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
      onSwipe?.(dx > 0 ? 'right' : 'left')
    } else {
      onFlip()
    }
  }

  return (
    <div className="card-scene">
      <div
        ref={ref}
        className={`flashcard${flipped ? ' flipped' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
  )
})

export default FlashCard
