import { PHRASES } from './src/data/phrases.js'

function toSlug(phrase) {
  const attr = phrase.attribution.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const words = phrase.text.toLowerCase().replace(/[^a-z0-9 ]+/g, '').trim().split(/\s+/).slice(0, 4).join('-')
  return `${attr}-${words}`
}

const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)]
const url = `https://rhetoricapp.netlify.app/phrase/${toSlug(phrase)}`

const res = await fetch('https://api.pushover.net/1/messages.json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    token: process.env.PUSHOVER_TOKEN,
    user:  process.env.PUSHOVER_USER,
    title: `— ${phrase.attribution}`,
    message: phrase.text,
    url,
    url_title: 'Study this phrase →',
  }),
})

const data = await res.json()
if (data.status !== 1) {
  console.error('Pushover error:', data)
  process.exit(1)
}
console.log(`Sent: "${phrase.text.slice(0, 60)}..."`)
