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

export function fmtDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  })
}
