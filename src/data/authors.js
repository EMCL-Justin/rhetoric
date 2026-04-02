const AUTHORS = {
  "Gore Vidal":                    "American novelist, essayist, and political provocateur (1925–2012). Spent decades skewering the American establishment from the inside, wielding wit as a primary weapon.",
  "John Milton":                   "English poet and polemicist (1608–1674). Wrote Paradise Lost after going blind — a defense of free will dressed as theology, and one of the most ambitious poems in the language.",
  "Lord Acton":                    "British historian and moralist (1834–1902). Never held high office himself, which may be why he understood power's corrupting influence better than those who did.",
  "Plato":                         "Athenian philosopher (c. 428–348 BC). Student of Socrates, teacher of Aristotle — the central link in a chain of thought that shaped all of Western philosophy.",
  "Beyoncé":                       "American singer, songwriter, and cultural force (born 1981). One of the most decorated recording artists in history, as well known for business acumen as for artistry.",
  "Lavrentiy Beria":               "Head of Stalin's secret police (NKVD), 1938–1953. Oversaw the imprisonment and execution of millions. Arrested and shot within months of Stalin's death by the very colleagues he had terrorized.",
  "Martin Luther King Jr.":        "Baptist minister and civil rights leader (1929–1968). Mobilized a mass movement using nonviolent resistance and redefined the moral and legal landscape of the United States. Assassinated at 39.",
  "Henry Wadsworth Longfellow":    "America's most popular poet of the 19th century (1807–1882). Made classical ideals of justice and perseverance accessible to a mass audience.",
  "Harry S. Truman":               "33rd President of the United States (1884–1972). Ordered the atomic bomb, recognized Israel, and integrated the military — usually without consensus, always decisively.",
  "Emperor Justinian":             "Byzantine Emperor (527–565 AD). Commissioned the Corpus Juris Civilis, a codification of Roman law that became the foundation of legal systems across the modern Western world.",
  "Frederick Douglass":            "Escaped slave, abolitionist, orator, and statesman (c. 1818–1895). His autobiography is one of the most powerful indictments of slavery ever written. Rose to become a U.S. Marshal and advisor to presidents.",
  "Sun Tzu":                       "Chinese military strategist, traditionally dated to the 5th century BC. The Art of War has never been out of print — applied equally to military campaigns, corporate strategy, and courtroom tactics.",
  "Abraham Lincoln":               "16th President of the United States (1809–1865). Led the country through the Civil War and abolished slavery. Assassinated five days after the war ended.",
  "Theodore Roosevelt":            "26th President of the United States (1858–1919). Soldier, naturalist, trust-buster, and Nobel Peace Prize winner — governed with a blend of force and idealism few presidents have matched.",
  "Thomas Jefferson":              "3rd President and primary author of the Declaration of Independence (1743–1826). His tension between stated ideals and lived contradictions defines the American project.",
  "Winston Churchill":             "British Prime Minister (1874–1965). Rallied Britain against Nazi Germany through sheer force of rhetoric and will. Also a Nobel Prize–winning author and prodigious drinker.",
  "Alexander the Great":           "King of Macedon (356–323 BC). Conquered an empire stretching from Greece to northwestern India by age 32. Died young enough that his legend was never diminished by decline.",
  "Andrew Jackson":                "7th President of the United States (1767–1845). War hero, populist, and authoritarian — the first president to truly represent the frontier West. His legacy includes both democratic expansion and the Trail of Tears.",
  "Benjamin Disraeli":             "British Prime Minister and novelist (1804–1881). The first and only Jewish prime minister of Britain, who rose through a system designed to exclude him by outmaneuvering everyone in it.",
  "Edmund Hillary":                "New Zealand mountaineer (1919–2008). One of the first two people to summit Everest. Later devoted his life to building schools and hospitals in Nepal.",
  "Oscar Wilde":                   "Irish playwright, novelist, and wit (1854–1900). Imprisoned for homosexuality at the height of his fame, he emerged broken and died in poverty. His epigrammatic style remains unmatched.",
  "Che Guevara":                   "Argentine Marxist revolutionary (1928–1967). Physician turned guerrilla, central to the Cuban Revolution. Executed in Bolivia at 39, becoming a global icon whose image outlived his politics.",
  "Friedrich Nietzsche":           "German philosopher (1844–1900). Declared God dead, championed the will to power, and was catastrophically misread by the Nazis. One of the most influential and most misquoted thinkers in history.",
  "Albert Camus":                  "French-Algerian novelist and philosopher (1913–1960). Nobel Prize winner who argued that life is absurd and worth living anyway. Died in a car crash at 46, at the height of his powers.",
  "Aristotle":                     "Greek philosopher (384–322 BC). Student of Plato, tutor of Alexander the Great. His writings on ethics, politics, and logic shaped Western thought for two thousand years.",
  "Charlotte Brontë":              "English novelist (1816–1855). Jane Eyre broke conventions of what a female protagonist could be — willful, proud, and unwilling to trade integrity for security.",
  "William Shakespeare":           "English playwright and poet (1564–1616). Wrote 37 plays and 154 sonnets that remain the most performed and quoted works in the English language. Almost nothing certain is known about his personal life.",
  "Ernest Hemingway":              "American novelist (1899–1961). Nobel Prize winner who covered wars, hunted big game, and wrote prose so stripped-down it redefined American fiction. His life was as much a performance as his work.",
  "Julius Caesar":                 "Roman general and dictator (100–44 BC). Conquered Gaul, crossed the Rubicon, and transformed Rome from a republic into an empire — then was stabbed 23 times by senators who thought they were saving it.",
  "Virgil":                        "Roman poet (70–19 BC). His Aeneid became the foundational epic of Roman identity — written in Latin so precise it was used to teach the language for centuries after his death.",
  "Flavius Vegetius Renatus":      "Roman military writer (late 4th century AD). His Epitoma Rei Militaris was the standard military manual in Europe through the Middle Ages, read by commanders a thousand years after his death.",
  "Edmund Burke":                  "Irish-British statesman and philosopher (1729–1797). Father of modern conservatism, fierce critic of the French Revolution. His ideas about the dangers of unchecked ideology remain relevant.",
  "Aung San Suu Kyi":              "Myanmar pro-democracy leader (born 1945). Spent 15 years under house arrest rather than leave her country. Nobel Peace Prize winner whose later record in government complicated her legacy.",
  "Lao Tzu":                       "Ancient Chinese philosopher, traditionally 6th century BC. Credited with writing the Tao Te Ching — 81 short chapters on power, nature, and restraint. His actual existence is debated by historians.",
  "José Martí":                    "Cuban poet and revolutionary (1853–1895). The intellectual father of Cuban independence, who died in battle on its first day. One of the most revered figures in Latin American history.",
  "Mahatma Gandhi":                "Indian independence leader (1869–1948). Developed the philosophy of nonviolent resistance that defeated the British Empire in India and influenced civil rights movements worldwide. Assassinated months after independence.",
  "Woodrow Wilson":                "28th President of the United States (1856–1924). Architect of the League of Nations, for which he could not win Senate ratification. A progressive on some fronts, a committed segregationist on others.",
  "Geoffrey Chaucer":              "English poet (c. 1343–1400). The Canterbury Tales was one of the first major literary works in the English vernacular — the beginning of English as a literary language.",
  "John Stuart Mill":              "English philosopher and economist (1806–1873). The leading voice of 19th-century liberalism and a fierce defender of individual liberty and women's suffrage.",
  "Ayn Rand":                      "Russian-American novelist and philosopher (1905–1982). Creator of Objectivism, a philosophy of rational self-interest. The Fountainhead and Atlas Shrugged remain foundational texts for a certain strain of American individualism.",
  "Peter Drucker":                 "Austrian-American management consultant (1909–2005). Essentially invented modern management theory and shaped how organizations understand their purpose for decades.",
  "Samuel Johnson":                "English author and lexicographer (1709–1784). Compiled the first comprehensive English dictionary largely alone. His aphorisms on human nature remain among the sharpest in the language.",
  "Confucius":                     "Chinese philosopher (551–479 BC). His teachings on ethics, family, and governance — collected in the Analects — shaped East Asian civilization for 2,500 years.",
  "Elvis Presley":                 "American musician (1935–1977). The first global superstar of rock and roll, who synthesized Black American music for a mass audience and changed popular culture permanently.",
  "Niccolò Machiavelli":           "Florentine diplomat and political theorist (1469–1527). The Prince, written after he was tortured and exiled from politics, remains the most clear-eyed — and most feared — manual on the exercise of power.",
  "Otto von Bismarck":             "Prussian statesman (1815–1898). Unified Germany through a calculated combination of war, diplomacy, and realpolitik. Served as Chancellor for 26 years, reshaping the map of Europe.",
  "Charles Maurice de Talleyrand": "French statesman and diplomat (1754–1838). Survived the Revolution, Napoleon, the Restoration, and the July Monarchy by switching sides at precisely the right moment. The gold standard of political survival.",
}

export function getAuthorBio(attribution) {
  if (!attribution) return null
  if (AUTHORS[attribution]) return AUTHORS[attribution]
  // Strip trailing parenthetical: "Abraham Lincoln (attributed)" → "Abraham Lincoln"
  const noParens = attribution.replace(/\s*\(.*?\)\s*$/, '').trim()
  if (AUTHORS[noParens]) return AUTHORS[noParens]
  // Strip "Attributed to " prefix
  const noPrefix = attribution.replace(/^Attributed to\s+/i, '').trim()
  if (AUTHORS[noPrefix]) return AUTHORS[noPrefix]
  // Strip after comma: "Julius Caesar, crossing the Rubicon" → "Julius Caesar"
  const beforeComma = attribution.split(',')[0].trim()
  if (AUTHORS[beforeComma]) return AUTHORS[beforeComma]
  return null
}
