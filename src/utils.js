export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getDailyPhrase(phrases) {
  const start = new Date(new Date().getFullYear(), 0, 0)
  const day = Math.floor((Date.now() - start) / 86400000)
  return phrases[day % phrases.length]
}

export function toSlug(phrase) {
  const attr = phrase.attribution.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const words = phrase.text.toLowerCase().replace(/[^a-z0-9 ]+/g, '').trim().split(/\s+/).slice(0, 4).join('-')
  return `${attr}-${words}`
}

const DAY = 86400000

// Build today's Leitner session: every due card (weakest boxes first, capped
// at maxSize), topped up to minSize with never-studied cards.
export function buildSession(srs, phrases, { minSize = 10, maxSize = 15 } = {}) {
  const now = Date.now()
  const due = phrases
    .filter(p => srs[p.id] && srs[p.id].due <= now)
    .sort((a, b) => (srs[a.id].box - srs[b.id].box) || (srs[a.id].due - srs[b.id].due))
    .slice(0, maxSize)
    .map(p => p.id)
  const fresh = phrases.filter(p => !srs[p.id]).map(p => p.id)
  const fill = Math.max(0, minSize - due.length)
  return [...shuffle(due), ...shuffle(fresh).slice(0, fill)]
}

export function sessionStats(srs, phrases) {
  const now = Date.now()
  let due = 0, fresh = 0
  for (const p of phrases) {
    const s = srs[p.id]
    if (!s) fresh++
    else if (s.due <= now) due++
  }
  return { due, fresh }
}

export function nextDueDays(srs) {
  const now = Date.now()
  const upcoming = Object.values(srs).map(s => s.due).filter(d => d > now)
  if (!upcoming.length) return null
  return Math.max(1, Math.ceil((Math.min(...upcoming) - now) / DAY))
}

export function fmtDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  })
}
