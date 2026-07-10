import { PHRASES } from './src/data/phrases.js'

function toSlug(phrase) {
  const attr = phrase.attribution.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const words = phrase.text.toLowerCase().replace(/[^a-z0-9 ]+/g, '').trim().split(/\s+/).slice(0, 4).join('-')
  return `${attr}-${words}`
}

const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)]
const url = `https://rhetoric.gg/phrase/${toSlug(phrase)}`

const res = await fetch(`https://ntfy.sh/${process.env.NTFY_TOPIC}`, {
  method: 'POST',
  headers: {
    'Title': `— ${phrase.attribution}`,
    'Tags': 'speech_balloon',
    'Click': url,
  },
  body: phrase.text,
})

if (!res.ok) {
  console.error('ntfy error:', res.status, await res.text())
  process.exit(1)
}
console.log(`Sent: "${phrase.text.slice(0, 60)}..."`)
