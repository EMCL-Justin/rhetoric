import { forwardRef } from 'react'
import { CAT_LABELS } from '../data/phrases'
import { getAuthorBio } from '../data/authors'

const FlashCard = forwardRef(function FlashCard({ phrase, flipped, hasFlipped, onFlip }, ref) {
  const bio = getAuthorBio(phrase.attribution)

  return (
    <div className="card-scene">
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
  )
})

export default FlashCard
