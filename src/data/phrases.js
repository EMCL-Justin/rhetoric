export const CAT_LABELS = {
  power:     'Power',
  justice:   'Justice',
  strategy:  'Strategy',
  resilience:'Resilience',
  rhetoric:  'Rhetoric',
  literary:  'Literary',
  classical: 'Classical',
  morality:  'Morality',
  conflict:  'Conflict',
  ambition:  'Ambition',
}

export const PHRASES = [
  // Power
  { id:1,  text:"It is not enough to succeed. Others must fail.", meaning:"True victory in competitive arenas is not merely your own success — it requires the defeat of your rivals. A ruthless but honest reckoning with zero-sum games.", attribution:"Gore Vidal", category:"power" },
  { id:2,  text:"Better to reign in Hell than serve in Heaven.", meaning:"It is preferable to hold authority in a lesser place than to be subservient in a greater one. Satan's defiant credo — and the mantra of every ambitious man who refuses to bow.", attribution:"John Milton", source:"Paradise Lost", category:"power" },
  { id:3,  text:"Power tends to corrupt, and absolute power corrupts absolutely.", meaning:"The more power a person holds, the more likely they are to act in self-serving ways. A warning that applies equally to those who wield it and those who chase it.", attribution:"Lord Acton", category:"power" },
  { id:4,  text:"The measure of a man is what he does with power.", meaning:"Character is not revealed in adversity alone — it is most clearly shown in how a person exercises authority and advantage over others.", attribution:"Plato (attributed)", category:"power" },
  { id:5,  text:"Power is not given to you. You have to take it.", meaning:"Authority and influence are not bestowed — they are seized. Those who wait to be handed power will wait forever.", attribution:"Beyoncé", category:"power" },

  // Justice
  { id:6,  text:"Show me the man and I'll show you the crime.", meaning:"A chilling observation about prosecutorial overreach: target a person first, search for crimes second, and you will always find something to charge. A warning about the abuse of legal power.", attribution:"Lavrentiy Beria, Stalin's NKVD chief", category:"justice" },
  { id:7,  text:"The arc of the moral universe is long, but it bends toward justice.", meaning:"Progress toward justice may be slow and painful, but it is inevitable. A call for patience and faith that the right side will ultimately prevail.", attribution:"Martin Luther King Jr. (adapting Theodore Parker)", category:"justice" },
  { id:8,  text:"The wheels of justice grind slow, but they grind exceedingly fine.", meaning:"Justice may be delayed, but when it arrives it is thorough and complete. Those who evade it momentarily should not mistake delay for escape.", attribution:"Henry Wadsworth Longfellow", category:"justice" },
  { id:9,  text:"I never gave anybody hell. I just told the truth and they thought it was hell.", meaning:"The truth is the most devastating weapon. Those who live by deception experience honesty as an attack. No malice required — accuracy is sufficient.", attribution:"Harry S. Truman", category:"justice" },
  { id:10, text:"Justice is the constant and perpetual will to allot every man his due.", meaning:"Justice is not a feeling or an outcome — it is a discipline, a commitment to giving each person exactly what they deserve, neither more nor less.", attribution:"Emperor Justinian, Institutes", category:"justice" },
  { id:11, text:"Where justice is denied, where poverty is enforced, where ignorance prevails, neither persons nor property will be safe.", meaning:"Injustice is not stable — it is pressure building toward an explosion. Social disorder is not the cause of injustice; it is its consequence. Order requires equity.", attribution:"Frederick Douglass", category:"justice" },

  // Strategy
  { id:12, text:"All warfare is based on deception.", meaning:"The foundation of strategy is misdirection. Let your enemy believe you are weak when you are strong, absent when you are present, passive when you are preparing to strike.", attribution:"Sun Tzu", source:"The Art of War", category:"strategy" },
  { id:13, text:"Know your enemy and know yourself and you need not fear the result of a hundred battles.", meaning:"Victory requires two kinds of intelligence: understanding your opponent's capabilities, and having an unflinching assessment of your own. Ignorance of either is fatal.", attribution:"Sun Tzu", source:"The Art of War", category:"strategy" },
  { id:14, text:"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", meaning:"Preparation and planning are not obstacles to action — they are its multipliers. Those who rush in with a dull blade work twice as hard for half the result.", attribution:"Abraham Lincoln (attributed)", category:"strategy" },
  { id:15, text:"Speak softly and carry a big stick.", meaning:"Project calm and restraint while ensuring your adversaries know the full force available to you. The threat of power, held quietly, is often more effective than its use.", attribution:"Theodore Roosevelt", category:"strategy" },
  { id:16, text:"In matters of style, swim with the current; in matters of principle, stand like a rock.", meaning:"Be flexible and adaptive where it costs you nothing. On the questions that define who you are, be utterly immovable. Know which battles are about tactics and which are about character.", attribution:"Thomas Jefferson (attributed)", category:"strategy" },

  // Resilience
  { id:17, text:"Success is not final, failure is not fatal: it is the courage to continue that counts.", meaning:"Neither victory nor defeat is permanent. What determines the arc of a life is not a single moment but the will to keep moving forward regardless of the score.", attribution:"Winston Churchill", category:"resilience" },
  { id:18, text:"If you're going through hell, keep going.", meaning:"The worst thing to do in the middle of a crisis is to stop. The only path to safety is through — pausing in hell only prolongs the suffering.", attribution:"Winston Churchill", category:"resilience" },
  { id:19, text:"The price of greatness is responsibility.", meaning:"You cannot claim the rewards of power without accepting its burdens. Greatness is not a gift — it is a contract, and the terms require accountability.", attribution:"Winston Churchill", category:"resilience" },
  { id:20, text:"I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.", meaning:"Leadership is the decisive variable. A mediocre force with brilliant command will defeat a superior force with weak leadership. The man at the top matters more than the men below.", attribution:"Alexander the Great (attributed)", category:"resilience" },
  { id:21, text:"One man with courage makes a majority.", meaning:"The conviction and boldness of a single determined person can shift the moral and political calculus. Don't wait for consensus — forge it.", attribution:"Andrew Jackson (attributed)", category:"resilience" },
  { id:22, text:"I am prepared for the worst, but hope for the best.", meaning:"The disciplined mind holds two positions simultaneously: clear-eyed acknowledgment of how badly things could go, and optimism about how well they might. Preparation without paralysis.", attribution:"Benjamin Disraeli", category:"resilience" },
  { id:23, text:"It is not the mountain we conquer but ourselves.", meaning:"Every great external challenge is ultimately an internal one. The question is never just 'can it be done?' but 'do I have the will, discipline, and character to do it?'", attribution:"Edmund Hillary", category:"resilience" },

  // Rhetoric
  { id:24, text:"The truth is rarely pure and never simple.", meaning:"Reality is complex and layered. Anyone offering a clean, simple version of the truth is either naive or lying. Wisdom lies in tolerating — and navigating — ambiguity.", attribution:"Oscar Wilde", source:"The Importance of Being Earnest", category:"rhetoric" },
  { id:25, text:"Silence is argument carried out by other means.", meaning:"Saying nothing is not neutrality — it is a choice with consequences. In conflict, silence signals something: consent, fear, strategy, or contempt. It is always read.", attribution:"Che Guevara", category:"rhetoric" },
  { id:26, text:"Whoever fights monsters should see to it that in the process he does not become a monster.", meaning:"The pursuit of evil by any means necessary transforms the pursuer. The prosecutor who abandons principle to win becomes what he sought to destroy.", attribution:"Friedrich Nietzsche", source:"Beyond Good and Evil", category:"rhetoric" },
  { id:27, text:"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", meaning:"When systems are designed to constrain you, the radical act is to refuse to be constrained — not through violence but through the sovereign exercise of your own judgment and will.", attribution:"Albert Camus", category:"rhetoric" },
  { id:28, text:"He who is not angry when there is just cause for anger is immoral.", meaning:"Righteous anger is not a weakness — it is a moral response to injustice. Complacency in the face of wrongdoing is its own form of corruption.", attribution:"Aristotle", category:"rhetoric" },

  // Literary
  { id:29, text:"I am no bird; and no net ensnares me.", meaning:"A declaration of radical personal freedom. Whatever traps are laid — professional, legal, emotional — a person of will refuses to be caught in them.", attribution:"Charlotte Brontë", source:"Jane Eyre", category:"literary" },
  { id:30, text:"There is nothing either good or bad, but thinking makes it so.", meaning:"Reality is neutral — our judgments impose meaning on events. Your moral framework is a choice, not a fact of nature.", attribution:"William Shakespeare", source:"Hamlet", category:"literary" },
  { id:31, text:"The lady doth protest too much, methinks.", meaning:"Excessive denial or insistence on innocence often signals the opposite. The more forcefully someone argues they have nothing to hide, the more suspicious the argument becomes.", attribution:"William Shakespeare", source:"Hamlet", category:"literary" },
  { id:32, text:"To thine own self be true.", meaning:"Often misread as self-indulgence, this is a counsel of integrity: know who you are and act in accordance with it. Betraying your own nature to please others is the deepest dishonesty.", attribution:"William Shakespeare", source:"Hamlet (Polonius)", category:"literary" },
  { id:33, text:"The first thing we do, let's kill all the lawyers.", meaning:"Dick the Butcher's line is often read as anti-lawyer — but Shakespeare's point is the opposite: lawyers protect order and rights. To destroy civilization, destroy its legal defenders first.", attribution:"William Shakespeare", source:"Henry VI Part 2", category:"literary" },
  { id:34, text:"There is no hunting like the hunting of man, and those who have hunted armed men long enough and liked it, never care for anything else thereafter.", meaning:"The pursuit of a worthy, dangerous adversary is its own addiction. Once you have operated at that level — legally, strategically, at real stakes — nothing lesser satisfies.", attribution:"Ernest Hemingway", category:"literary" },

  // Classical
  { id:35, text:"Veni, vidi, vici.", meaning:"I came, I saw, I conquered. Caesar's dispatch describing a swift, decisive victory. The model of confident, economical action — no hesitation, no extended campaign, no equivocation.", attribution:"Julius Caesar", category:"classical" },
  { id:36, text:"Audentes fortuna iuvat.", meaning:"Fortune favors the bold. The timid and the hesitant are left behind — history and luck both belong to those who act decisively and take calculated risks.", attribution:"Virgil", source:"Aeneid", category:"classical" },
  { id:37, text:"Per aspera ad astra.", meaning:"Through hardship to the stars. The path to greatness runs through adversity, not around it. Every obstacle is a toll on the road to where you're going.", attribution:"Latin proverb (attributed to Seneca)", category:"classical" },
  { id:38, text:"Alea iacta est.", meaning:"The die is cast. Caesar's declaration upon crossing the Rubicon — the point of no return has been passed. There is no going back; now only forward.", attribution:"Julius Caesar, crossing the Rubicon", category:"classical" },
  { id:39, text:"Dum spiro, spero.", meaning:"While I breathe, I hope. As long as you are alive, there is possibility. Surrender is the only true defeat — breathing means fighting is still an option.", attribution:"Latin proverb (attributed to Cicero)", category:"classical" },
  { id:40, text:"Si vis pacem, para bellum.", meaning:"If you want peace, prepare for war. The paradox of deterrence: the surest way to avoid conflict is to make the cost of attacking you prohibitive.", attribution:"Flavius Vegetius Renatus", category:"classical" },

  // Morality
  { id:41, text:"The only thing necessary for the triumph of evil is for good men to do nothing.", meaning:"Evil does not require active assistance — passivity and inaction are sufficient. Anyone who stands aside while wrongdoing occurs bears a share of the responsibility for its outcome.", attribution:"Attributed to Edmund Burke", category:"morality" },
  { id:42, text:"Power without love is reckless and abusive, and love without power is sentimental and anemic.", meaning:"Neither strength nor compassion alone is sufficient. Real justice requires both — the capacity to act forcefully and the wisdom to act rightly.", attribution:"Martin Luther King Jr.", category:"morality" },
  { id:43, text:"It is not power that corrupts but fear.", meaning:"Power itself is neutral. What corrupts is the fear of losing it — the anxiety that leads the powerful to compromise, deceive, and brutalize in order to hold their position.", attribution:"Aung San Suu Kyi", category:"morality" },
  { id:44, text:"He who controls others may be powerful, but he who has mastered himself is mightier still.", meaning:"External authority — over armies, institutions, people — is a lesser power than the authority a person has over their own desires, fears, and impulses.", attribution:"Lao Tzu", source:"Tao Te Ching", category:"morality" },
  { id:45, text:"The first duty of a man is to think for himself.", meaning:"Intellectual independence is not optional — it is the foundation of integrity. To outsource your thinking to others is to outsource your agency.", attribution:"José Martí", category:"morality" },
  { id:46, text:"An eye for an eye makes the whole world blind.", meaning:"Retributive justice, taken to its logical conclusion, destroys everyone. At some point the cycle of revenge must be broken — or it consumes both parties.", attribution:"Mahatma Gandhi (attributed)", category:"morality" },

  // Conflict
  { id:47, text:"If you want to make enemies, try to change something.", meaning:"Resistance to change is universal. Anyone who attempts to reform systems, institutions, or power structures will acquire enemies — often from the people who should be allies.", attribution:"Woodrow Wilson", category:"conflict" },
  { id:48, text:"The guilty think all talk is of themselves.", meaning:"Those with a guilty conscience interpret every conversation as accusation. Their anxiety makes them confessors before they are ever questioned.", attribution:"Geoffrey Chaucer (paraphrased)", category:"conflict" },
  { id:49, text:"A man who has nothing for which he is willing to fight is a miserable creature.", meaning:"Conviction — something worth defending, worth sacrificing for — is what gives a life weight and meaning. A man of no convictions is available for any use.", attribution:"John Stuart Mill", category:"conflict" },
  { id:50, text:"You can avoid reality, but you cannot avoid the consequences of avoiding reality.", meaning:"Denial is expensive. Ignoring facts, risks, and problems does not make them go away — it compounds their eventual impact and removes your ability to respond on your own terms.", attribution:"Ayn Rand", category:"conflict" },

  // Ambition
  { id:51, text:"The best way to predict the future is to create it.", meaning:"Passive observation and prediction are for spectators. Those who shape outcomes don't wait to see what happens — they decide what happens.", attribution:"Peter Drucker (attributed)", category:"ambition" },
  { id:52, text:"The chains of habit are too light to be felt until they are too heavy to be broken.", meaning:"The patterns and behaviors that define us accumulate gradually, invisibly — until one day they are the prison we live in. Discipline at the start prevents confinement at the end.", attribution:"Samuel Johnson (attributed)", category:"ambition" },
  { id:53, text:"The man who moves a mountain begins by carrying away small stones.", meaning:"Monumental achievements are assembled through incremental action. No mountain falls in a day — but every stone removed is progress, and progress compounds.", attribution:"Confucius", category:"ambition" },
  { id:54, text:"Do what you can, with what you have, where you are.", meaning:"Stop waiting for ideal conditions, perfect resources, or the right moment. The materials at hand, used well, are sufficient. Act now.", attribution:"Theodore Roosevelt", category:"ambition" },
  { id:55, text:"Ambition is a dream with a V8 engine.", meaning:"Raw desire for success is not enough — ambition is desire with power behind it, with the drive to actually get somewhere. Know the difference between wanting and pursuing.", attribution:"Elvis Presley", category:"ambition" },

  // Machiavelli
  { id:56, text:"It is better to be feared than loved, if you cannot be both.", meaning:"Love is a bond people break when it suits them; fear is a bond held in place by the consequences of breaking it. A ruler who depends on goodwill depends on others — a ruler who commands fear depends only on himself.", attribution:"Niccolò Machiavelli", source:"The Prince", category:"power" },
  { id:57, text:"Never do an enemy a small injury.", meaning:"Half-measures against an opponent leave them wounded but functional — and now motivated. If you must strike, strike decisively. An enemy you merely inconvenience becomes an enemy with a grievance.", attribution:"Niccolò Machiavelli", source:"The Prince", category:"strategy" },
  { id:58, text:"The lion cannot protect himself from traps, and the fox cannot defend himself from wolves. One must be a fox to recognize traps, and a lion to frighten wolves.", meaning:"Neither raw force nor cunning alone is sufficient. The complete operator knows when to impose strength and when to move quietly. Knowing which posture the moment demands is the real skill.", attribution:"Niccolò Machiavelli", source:"The Prince", category:"strategy" },

  // Bismarck
  { id:59, text:"Politics is the art of the possible.", meaning:"Idealism unmoored from reality accomplishes nothing. The statesman works within constraints — not because he lacks vision, but because he understands that what cannot be achieved is irrelevant. Master the possible first.", attribution:"Otto von Bismarck", category:"strategy" },
  { id:60, text:"Laws are like sausages — it is better not to see them being made.", meaning:"The process by which order is created is often ugly, compromised, and unglamorous. The finished product may be necessary and good; the making of it rarely is. Govern accordingly.", attribution:"Otto von Bismarck (attributed)", category:"rhetoric" },

  // Talleyrand
  { id:61, text:"They have learned nothing and forgotten nothing.", meaning:"Said of the Bourbon dynasty returning to power after Napoleon — unchanged by exile, unchastened by catastrophe. The ultimate indictment: to have been destroyed by history and still arrive back with the same assumptions intact.", attribution:"Charles Maurice de Talleyrand", category:"conflict" },
  { id:62, text:"Speech was given to man to disguise his thoughts.", meaning:"Language is not merely for communication — it is a tool of concealment. The sophisticated operator understands that what is said and what is meant are not the same thing, and acts accordingly.", attribution:"Charles Maurice de Talleyrand (attributed)", category:"rhetoric" },
]
