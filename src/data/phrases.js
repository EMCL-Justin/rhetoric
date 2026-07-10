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

  // JP Morgan
  { id:63, text:"A man always has two reasons for doing anything: a good reason and the real reason.", meaning:"Surface justifications are almost never the true ones. The skilled operator learns to read past the stated rationale — in negotiation, in politics, in court — to the actual motive underneath.", attribution:"J.P. Morgan", category:"power" },

  // Bismarck
  { id:64, text:"Not by speeches and votes of the majority are the great questions of the time decided, but by iron and blood.", meaning:"The decisive forces in history are not rhetoric and democratic process — they are force and will. Bismarck's blunt dismissal of idealism: the world is moved by power, not persuasion.", attribution:"Otto von Bismarck", source:"Speech to Prussian Parliament, 1862", category:"power" },

  // Demosthenes
  { id:65, text:"Nothing is easier than self-deceit. For what each man wishes, that he also believes to be true.", meaning:"The most dangerous lies are the ones we tell ourselves. Desire warps perception — we see evidence for what we want to be true and dismiss what contradicts it. The disciplined mind fights this constantly.", attribution:"Demosthenes", category:"rhetoric" },

  // Nixon farewell
  { id:66, text:"Always remember, others may hate you. And those who hate you don't win unless you hate them — and then you destroy yourself.", meaning:"Hatred directed at you is only dangerous if you return it. The moment you hate back, you've given your enemy the victory. Nixon's most lucid insight, delivered as his career ended.", attribution:"Richard Nixon", source:"Farewell Address, 1974", category:"power" },

  // Richard III
  { id:67, text:"I am determined to prove a villain, and hate the idle pleasures of these days.", meaning:"Richard III's opening declaration — the self-aware, unrepentant embrace of ambition and malice. The most dangerous adversary is one who has consciously chosen ruthlessness and wears it openly.", attribution:"William Shakespeare", source:"Richard III, Act I", category:"literary" },

  // Cicero sinews of war
  { id:68, text:"The sinews of war are infinite money.", meaning:"Military power, political power, and legal power all rest on financial power. Money is not the goal — it is the enabler of every other goal. Those who forget this learn it the hard way.", attribution:"Marcus Tullius Cicero", source:"Philippics", category:"strategy" },

  // Iago
  { id:69, text:"I am not what I am.", meaning:"Iago's three-word declaration of intent — the complete philosophy of the sophisticated manipulator. Identity is a performance. What others see is what you choose to show them, and no more.", attribution:"William Shakespeare", source:"Othello, Act I (Iago)", category:"literary" },

  // De Gaulle - servant/master
  { id:70, text:"In order to become the master, the politician poses as the servant.", meaning:"The path to power runs through the appearance of selflessness. Those who seek authority rarely announce it — they cloak the ambition in the language of service until the position is secure.", attribution:"Charles de Gaulle", category:"power" },

  // Napoleon - interrupt enemy
  { id:71, text:"Never interrupt your enemy when he is making a mistake.", meaning:"Restraint is its own weapon. When your adversary is sabotaging himself, the worst thing you can do is intervene. Stay quiet, let the error compound, and collect the consequences.", attribution:"Napoleon Bonaparte", category:"strategy" },

  // Napoleon - stupidity
  { id:72, text:"In politics, stupidity is not a handicap.", meaning:"Intelligence is neither required nor reliable as a predictor of political success. The forces that determine outcomes — loyalty, fear, tribalism, money — operate independently of reason.", attribution:"Napoleon Bonaparte", category:"rhetoric" },

  // Napoleon - history
  { id:73, text:"History is a set of lies agreed upon.", meaning:"The official record is always the record written by whoever controls the narrative. Facts are less durable than consensus — and consensus is manufactured by the powerful.", attribution:"Napoleon Bonaparte", category:"rhetoric" },

  // Kissinger - aphrodisiac
  { id:74, text:"Power is the ultimate aphrodisiac.", meaning:"Authority over others is inherently seductive — both to those who hold it and to those around them. Anyone who believes they are immune to this dynamic has not yet held enough of it.", attribution:"Henry Kissinger", category:"power" },

  // Kissinger - illegal
  { id:75, text:"The illegal we do immediately. The unconstitutional takes a little longer.", meaning:"A dark joke from inside the machinery of power — and a genuine insight into how those at the top relate to legal constraints. Rules are administered differently at different altitudes.", attribution:"Henry Kissinger", source:"Staff Meeting, 1975", category:"power" },

  // TR - Man in the Arena
  { id:76, text:"It is not the critic who counts; not the man who points out how the strong man stumbles. The credit belongs to the man who is actually in the arena.", meaning:"The judgment of those who never risk anything is worth nothing. The only opinion that matters is the verdict of action — to enter the fight, take the damage, and keep going.", attribution:"Theodore Roosevelt", source:"Citizenship in a Republic, 1910", category:"resilience" },

  // Lady Macbeth
  { id:77, text:"Look like the innocent flower, but be the serpent under it.", meaning:"Lady Macbeth's counsel on operational concealment: the most effective strategy wears the face of harmlessness. Danger that announces itself is danger that can be prepared for.", attribution:"William Shakespeare", source:"Macbeth, Act I (Lady Macbeth)", category:"strategy" },

  // Sun Tzu - subdue without fighting
  { id:78, text:"The supreme art of war is to subdue the enemy without fighting.", meaning:"Victory through force is expensive and uncertain. The highest skill is arranging conditions so that the adversary cannot or will not fight — through positioning, alliance, and psychological pressure.", attribution:"Sun Tzu", source:"The Art of War", category:"strategy" },

  // Sun Tzu - appear weak
  { id:79, text:"Appear weak when you are strong, and strong when you are weak.", meaning:"Managing your adversary's perception of you is itself a form of combat. The strong invite attack; the weak invite underestimation. Control what your enemy believes, and you control the engagement.", attribution:"Sun Tzu", source:"The Art of War", category:"strategy" },

  // Mencken - urge to save
  { id:80, text:"The urge to save humanity is almost always only a false face for the urge to rule it.", meaning:"Altruism at scale deserves scrutiny. The reformer, the ideologue, the crusader — examine the impulse carefully and you will often find the will to power wearing the costume of benevolence.", attribution:"H.L. Mencken", category:"morality" },

  // Mencken - simple answers
  { id:81, text:"For every complex problem there is an answer that is clear, simple, and wrong.", meaning:"Simplicity is seductive and almost always false. Reality is resistant to clean solutions. Anyone offering one is either naive about the problem or dishonest about the answer.", attribution:"H.L. Mencken", category:"rhetoric" },

  // Henry Adams
  { id:82, text:"Politics is the systematic organization of hatreds.", meaning:"Political coalitions are not built on shared visions — they are built on shared enemies. The glue of any movement is less what it is for than what, and who, it is against.", attribution:"Henry Adams", source:"The Education of Henry Adams", category:"power" },

  // Cicero - ignorance of history
  { id:83, text:"To be ignorant of what occurred before you were born is to remain always a child.", meaning:"Without historical context, every crisis seems unprecedented and every precedent seems novel. The person without history is permanently naive — manipulable by anyone who has read more than they have.", attribution:"Marcus Tullius Cicero", source:"Orator", category:"rhetoric" },

  // Buffett - tide
  { id:84, text:"Only when the tide goes out do you discover who's been swimming naked.", meaning:"In good conditions, incompetence and recklessness are invisible — they are covered by the rising water. It is only in adversity that real exposure, real risk, and real character are revealed.", attribution:"Warren Buffett", category:"strategy" },

  // Vanderbilt
  { id:85, text:"Law? What do I care about the law? Ain't I got the power?", meaning:"The blunt confession of a man who understood that legal constraints operate differently depending on your resources. Not admirable — but honest about how power has always related to rules.", attribution:"Cornelius Vanderbilt (attributed)", category:"power" },

  // Lombardi
  { id:86, text:"Winning isn't everything — it's the only thing.", meaning:"Not a counsel of immorality but of total commitment. The person who treats winning as one of several acceptable outcomes will lose to the person who does not. Decide what you are here to do.", attribution:"Vince Lombardi", category:"ambition" },

  // Patton
  { id:87, text:"Lead me, follow me, or get out of my way.", meaning:"The only three acceptable positions in a serious endeavor. Neutrality is not an option — it is just a passive form of obstruction. The man in charge does not wait for the uncommitted to find their footing.", attribution:"George S. Patton", category:"conflict" },

  // Wilde - forgive enemies
  { id:88, text:"Always forgive your enemies; nothing annoys them so much.", meaning:"Forgiveness deployed strategically is a weapon. It denies your enemy the satisfaction of your resentment, occupies the moral high ground, and — most usefully — irritates them deeply.", attribution:"Oscar Wilde", category:"conflict" },

  // Dostoyevsky
  { id:89, text:"To go wrong in one's own way is better than to go right in someone else's.", meaning:"Authentic error is worth more than borrowed correctness. The person who fails by their own judgment learns something; the person who succeeds by following others learns nothing and owns nothing.", attribution:"Fyodor Dostoyevsky", source:"Crime and Punishment", category:"morality" },

  // Fitzgerald - two ideas
  { id:90, text:"The test of a first-rate intelligence is the ability to hold two opposed ideas in the mind at the same time, and still retain the ability to function.", meaning:"Intellectual maturity is not certainty — it is the capacity to carry contradiction without being paralyzed by it. The person who needs resolution before acting is poorly equipped for a complex world.", attribution:"F. Scott Fitzgerald", source:"The Crack-Up", category:"rhetoric" },

  // Richelieu
  { id:91, text:"If you give me six lines written by the hand of the most honest of men, I will find something in them which will hang him.", meaning:"No one is without exposure. The question is never whether a target is vulnerable but whether anyone is looking hard enough. Power protects; exposure is a function of enemies, not guilt.", attribution:"Cardinal Richelieu (attributed)", category:"power" },

  // JFK
  { id:92, text:"Forgive your enemies, but never forget their names.", meaning:"Mercy and memory are not mutually exclusive. The magnanimous gesture costs nothing if you maintain a precise accounting of who did what, and when. Grace is not naivety.", attribution:"John F. Kennedy (attributed)", category:"conflict" },

  // Clemenceau
  { id:93, text:"War is too serious a matter to entrust to military men.", meaning:"The people who fight wars are poorly positioned to decide whether to fight them — their training, identity, and incentives all run in one direction. The decision to use force requires a mind outside the machinery.", attribution:"Georges Clemenceau", category:"strategy" },

  // De Gaulle - graveyards
  { id:94, text:"The graveyards are full of indispensable men.", meaning:"No one is actually irreplaceable — not you, not the institution, not the movement. The belief in one's own indispensability is flattering and dangerous. The work goes on without everyone eventually.", attribution:"Charles de Gaulle (attributed)", category:"power" },

  // Lincoln - fool people
  { id:95, text:"You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.", meaning:"Deception has limits. Short-term manipulation is always available; durable, total deception is not. The operator who builds on lies is building on a foundation with a known expiration date.", attribution:"Abraham Lincoln (attributed)", category:"rhetoric" },

  // Pericles
  { id:96, text:"The secret to happiness is freedom. And the secret to freedom is courage.", meaning:"Freedom is not granted — it is maintained by the willingness to defend it at cost. The comfortable life purchased by compliance is not freedom; it is a more pleasant captivity.", attribution:"Pericles (via Thucydides)", source:"Funeral Oration", category:"resilience" },

  // Hemingway - world breaks
  { id:97, text:"The world breaks everyone, and afterward, many are strong at the broken places.", meaning:"Damage is not the end of strength — it can be the source of it. What survives the breaking is harder than what existed before. The wound and the scar are not the same thing.", attribution:"Ernest Hemingway", source:"A Farewell to Arms", category:"resilience" },

  // Von Moltke
  { id:98, text:"No plan survives contact with the enemy.", meaning:"Planning is essential and plans are temporary. The point of preparation is not a perfect script — it is the judgment and adaptability to respond when reality deviates from the plan, which it always does.", attribution:"Helmuth von Moltke the Elder (paraphrased)", category:"strategy" },

  // Fitzgerald - boats
  { id:99, text:"So we beat on, boats against the current, borne back ceaselessly into the past.", meaning:"The closing line of The Great Gatsby — the condition of human ambition. We push forward while forces pull us back. The effort is real even when the destination is unreachable.", attribution:"F. Scott Fitzgerald", source:"The Great Gatsby", category:"literary" },

  // Faulkner
  { id:100, text:"The past is never dead. It's not even past.", meaning:"History is not safely behind us — it is present, active, and continuing to generate consequences. Those who believe they have escaped the past are most thoroughly in its grip.", attribution:"William Faulkner", source:"Requiem for a Nun", category:"literary" },

  // Twain - easier to fool
  { id:101, text:"It's easier to fool people than to convince them that they have been fooled.", meaning:"The mind defends the beliefs it holds. Admitting deception requires admitting vulnerability — and most people will construct elaborate rationalizations rather than accept that they were manipulated.", attribution:"Mark Twain (attributed)", category:"rhetoric" },

  // Twain - majority
  { id:102, text:"Whenever you find yourself on the side of the majority, it is time to pause and reflect.", meaning:"Consensus is not evidence. The majority is frequently wrong, always late, and often the last to know. The point at which everyone agrees is often the point at which the smart money is already moving.", attribution:"Mark Twain", category:"morality" },

  // Nietzsche
  { id:103, text:"There are no facts, only interpretations.", meaning:"What we call objective reality is always mediated by the frameworks we bring to it. Every fact is selected, framed, and presented by someone with a perspective. Understanding this is not nihilism — it is literacy.", attribution:"Friedrich Nietzsche", source:"Notebooks", category:"rhetoric" },

  // Shaw - cynicism
  { id:104, text:"The power of accurate observation is commonly called cynicism by those who have not got it.", meaning:"What optimists call cynicism is often simply the discipline of seeing clearly. The 'cynical' view and the realistic view are frequently the same view — the difference is whether you can tolerate it.", attribution:"George Bernard Shaw", category:"rhetoric" },

  // Shaw - democracy
  { id:105, text:"Democracy is a device that ensures we shall be governed no better than we deserve.", meaning:"Self-governance is not a guarantee of good governance — it is a mirror. The quality of political leadership reflects the quality of the political culture that produces it. You get what you select for.", attribution:"George Bernard Shaw", category:"power" },

  // Frederick the Great
  { id:106, text:"He who defends everything defends nothing.", meaning:"Spreading resources across every threat leaves none of them adequately protected. The discipline of strategy is choosing what to sacrifice in order to secure what matters most.", attribution:"Frederick the Great", category:"strategy" },

  // Iago - good name
  { id:107, text:"He that filches from me my good name robs me of that which not enriches him, and makes me poor indeed.", meaning:"Reputation is not merely social currency — it is the foundation of every other form of power. Its theft leaves the victim impoverished and the thief no better off. The malice is the point.", attribution:"William Shakespeare", source:"Othello, Act III (Iago)", category:"literary" },

  // Marcus Aurelius
  { id:108, text:"If it is not right, do not do it; if it is not true, do not say it.", meaning:"A deceptively simple rule that, if actually followed, would eliminate most of what passes for strategy and communication. The discipline required to live by it is the discipline of a lifetime.", attribution:"Marcus Aurelius", source:"Meditations", category:"morality" },

  // John Adams
  { id:109, text:"Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.", meaning:"Reality does not negotiate. No force of will, no intensity of desire, no political consensus makes the false true. The advocate who ignores inconvenient facts does not defeat them — he is eventually destroyed by them.", attribution:"John Adams", source:"Defense of the British Soldiers, 1770", category:"justice" },

  // Schopenhauer
  { id:110, text:"All truth passes through three stages: first, it is ridiculed; second, it is violently opposed; third, it is accepted as self-evident.", meaning:"Correct ideas do not win on merit alone — they win by outlasting resistance. The person whose position is mocked and then attacked is often closer to right than the person who is immediately believed.", attribution:"Arthur Schopenhauer", category:"rhetoric" },

  // Keynes
  { id:111, text:"Practical men who believe themselves to be quite exempt from any intellectual influence are usually the slaves of some defunct economist.", meaning:"No one operates without a theoretical framework — most people simply inherited theirs without noticing. The person who scorns ideas is not free of them; they are merely unaware of which ones are running them.", attribution:"John Maynard Keynes", source:"The General Theory", category:"rhetoric" },

  // Wilde - experience
  { id:112, text:"Experience is simply the name we give our mistakes.", meaning:"The thing we call wisdom is largely the accumulated record of error — rebranded for respectability. The more experience someone claims, the more they are really telling you about how many times they've been wrong.", attribution:"Oscar Wilde", source:"Lady Windermere's Fan", category:"rhetoric" },

  // --- Expansion: 113–145 ---

  // Power
  { id:113, text:"Nearly all men can stand adversity, but if you want to test a man's character, give him power.", meaning:"Hardship is a common examination and most people pass it. Power is the rarer and harder test — it removes external constraints and reveals what a person does when nothing forces them to behave.", attribution:"Abraham Lincoln (attributed)", category:"power" },
  { id:114, text:"Knowledge itself is power.", meaning:"Information is not an accessory to power — it is its raw material. The one who understands the terrain, the opponent, and the rules commands options the ignorant simply do not have.", attribution:"Francis Bacon", source:"Meditationes Sacrae", category:"power" },
  { id:115, text:"When you strike at a king, you must kill him.", meaning:"A wounded power is more dangerous than an untouched one. If you move against someone stronger than you, the attempt must be total and final — a failed strike guarantees retaliation from an enemy you have now educated.", attribution:"Ralph Waldo Emerson", category:"power" },

  // Justice
  { id:116, text:"Injustice anywhere is a threat to justice everywhere.", meaning:"Rights are a system, not a collection of local privileges. Tolerating a violation in one place establishes the precedent that undermines protection in every place — no one's justice is secure while anyone's is negotiable.", attribution:"Martin Luther King Jr.", source:"Letter from Birmingham Jail", category:"justice" },
  { id:117, text:"The law is reason, free from passion.", meaning:"What separates law from revenge is the removal of emotion. Justice administered in anger is merely retaliation with paperwork — the entire value of legal process lies in its coldness.", attribution:"Aristotle", category:"justice" },
  { id:118, text:"It is better that ten guilty persons escape than that one innocent suffer.", meaning:"The asymmetry at the foundation of criminal law: wrongful punishment corrupts the system itself, while a guilty man's escape corrupts only one outcome. A state that punishes the innocent has become the criminal.", attribution:"William Blackstone", source:"Commentaries on the Laws of England", category:"justice" },

  // Strategy
  { id:119, text:"Everybody has a plan until they get punched in the mouth.", meaning:"Plans are hypotheses, and contact with a real opponent is the experiment. The measure of a strategist is not the elegance of the plan but the speed and composure of the adjustment when it fails.", attribution:"Mike Tyson", category:"strategy" },
  { id:120, text:"Strategy without tactics is the slowest route to victory; tactics without strategy is the noise before defeat.", meaning:"Vision without execution accomplishes nothing slowly. Execution without vision accomplishes the wrong things quickly. Winning requires the discipline to hold both at once.", attribution:"Sun Tzu (attributed)", category:"strategy" },
  { id:121, text:"Amateurs talk strategy. Professionals talk logistics.", meaning:"Grand designs are cheap — anyone can draw arrows on a map. The unglamorous questions of supply, capacity, and sustainment are where campaigns are actually won or lost.", attribution:"Omar Bradley (attributed)", category:"strategy" },
  { id:122, text:"Take time to deliberate; but when the time for action arrives, stop thinking and go in.", meaning:"Deliberation and action are separate phases and mixing them ruins both. Doubt during planning is diligence; doubt during execution is sabotage.", attribution:"Andrew Jackson", category:"strategy" },

  // Resilience
  { id:123, text:"He who has a why to live can bear almost any how.", meaning:"Endurance is not a function of strength but of purpose. Suffering becomes survivable the moment it means something — and unbearable the moment it doesn't.", attribution:"Friedrich Nietzsche", category:"resilience" },
  { id:124, text:"Fall seven times, rise eight.", meaning:"The count that matters is not how many times you go down but whether the number of times you stand is greater by one. Recovery, not avoidance of failure, is the entire skill.", attribution:"Japanese proverb", category:"resilience" },
  { id:125, text:"Man is not made for defeat. A man can be destroyed but not defeated.", meaning:"Destruction is something done to you; defeat is something you consent to. External forces can take everything except the decision to yield — that one is always yours.", attribution:"Ernest Hemingway", source:"The Old Man and the Sea", category:"resilience" },

  // Rhetoric
  { id:126, text:"Speak clearly, if you speak at all; carve every word before you let it fall.", meaning:"Words released carelessly cannot be recalled. Treat every sentence as a finished object — deliberate, shaped, and intended — or do not release it.", attribution:"Oliver Wendell Holmes Sr.", category:"rhetoric" },
  { id:127, text:"First learn the meaning of what you say, and then speak.", meaning:"Most speech is performed before it is understood. The Stoic discipline reverses the order: comprehension first, expression second — which silences most of what people say.", attribution:"Epictetus", category:"rhetoric" },
  { id:128, text:"The most powerful weapon on earth is the human soul on fire.", meaning:"Conviction outperforms every material advantage. Armies, budgets, and institutions are ultimately moved — or stopped — by people who believe totally in what they are doing.", attribution:"Ferdinand Foch", category:"rhetoric" },

  // Literary
  { id:129, text:"All animals are equal, but some animals are more equal than others.", meaning:"The corruption of every egalitarian revolution, compressed into one sentence. Power does not abolish hierarchy — it rewrites the language until hierarchy sounds like equality.", attribution:"George Orwell", source:"Animal Farm", category:"literary" },
  { id:130, text:"Beware; for I am fearless, and therefore powerful.", meaning:"The creature's warning to its maker: fear is the lever by which people are controlled, and the person who has nothing left to lose cannot be moved by it. Fearlessness is power in its rawest form.", attribution:"Mary Shelley", source:"Frankenstein", category:"literary" },
  { id:131, text:"Hell is empty and all the devils are here.", meaning:"Evil is not elsewhere — not in some other realm, some other country, some other institution. The capacity for it walks around in ordinary human form, in whatever room you are standing in.", attribution:"William Shakespeare", source:"The Tempest", category:"literary" },
  { id:132, text:"Not all those who wander are lost.", meaning:"Apparent aimlessness and actual aimlessness are different things. Some paths only look like drift from the outside — the deep game is invisible to spectators who mistake motion toward an unseen goal for no goal at all.", attribution:"J.R.R. Tolkien", source:"The Fellowship of the Ring", category:"literary" },

  // Classical
  { id:133, text:"Carthago delenda est.", meaning:"Carthage must be destroyed. Cato ended every speech with this sentence, whatever the topic, until Rome finally acted. The model of message discipline: one demand, repeated without variation, until it becomes policy.", attribution:"Cato the Elder", category:"classical" },
  { id:134, text:"Festina lente.", meaning:"Make haste slowly. Augustus's paradoxical motto: urgency in purpose, deliberateness in execution. Speed that produces errors is not speed — the fastest path is the one you don't have to walk twice.", attribution:"Augustus", category:"classical" },
  { id:135, text:"Vincit qui se vincit.", meaning:"He conquers who conquers himself. Every external victory is downstream of an internal one — over impulse, fear, laziness, and appetite. The first opponent is always in the mirror.", attribution:"Latin proverb", category:"classical" },
  { id:136, text:"Memento mori.", meaning:"Remember that you will die. Whispered to triumphant Roman generals at the height of their glory. Not morbidity but calibration — mortality is the deadline that gives every ambition its urgency and every vanity its absurdity.", attribution:"Latin phrase", category:"classical" },

  // Morality
  { id:137, text:"Waste no more time arguing about what a good man should be. Be one.", meaning:"Ethical debate can become a substitute for ethical action — an infinite postponement dressed as diligence. At some point the philosophy is complete and the only remaining step is conduct.", attribution:"Marcus Aurelius", source:"Meditations", category:"morality" },
  { id:138, text:"The best revenge is to be unlike him who performed the injury.", meaning:"Retaliation makes you a student of your enemy — you learn his methods and repeat them. The only revenge that costs him something and you nothing is to remain what he could not make you.", attribution:"Marcus Aurelius", source:"Meditations", category:"morality" },
  { id:139, text:"Conscience is the inner voice that warns us somebody may be looking.", meaning:"Mencken's acid test for moral seriousness: much of what passes for virtue is merely surveillance-awareness. The real measure of character is behavior when discovery is impossible.", attribution:"H.L. Mencken", category:"morality" },

  // Conflict
  { id:140, text:"Never wrestle with pigs. You both get dirty and the pig likes it.", meaning:"Some opponents win simply by dragging you into their arena. Engaging on their terms costs you standing they never had — the strategic move is to refuse the fight entirely.", attribution:"George Bernard Shaw (attributed)", category:"conflict" },
  { id:141, text:"War is the continuation of politics by other means.", meaning:"Violence is never separate from negotiation — it is negotiation at a different intensity. Every conflict is still a conversation about terms, which is why wars end at tables.", attribution:"Carl von Clausewitz", source:"On War", category:"conflict" },
  { id:142, text:"The hottest places in hell are reserved for those who, in times of great moral crisis, maintain their neutrality.", meaning:"Neutrality in a genuine crisis is not abstention — it is a vote for the stronger side. History judges the bystander with the participants, because inaction was itself an action.", attribution:"Attributed to Dante Alighieri", category:"conflict" },

  // Ambition
  { id:143, text:"A man's reach should exceed his grasp, or what's a heaven for?", meaning:"Aiming only at the achievable is a quiet form of surrender. The purpose of an ideal is not to be reached but to pull you past what you would otherwise have settled for.", attribution:"Robert Browning", source:"Andrea del Sarto", category:"ambition" },
  { id:144, text:"I would rather be first in a village than second in Rome.", meaning:"Caesar's confession, passing through a small alpine town: rank matters more than arena. Some people are built to lead, and for them subordination anywhere is worse than sovereignty somewhere small.", attribution:"Julius Caesar (attributed)", category:"ambition" },
  { id:145, text:"Hitch your wagon to a star.", meaning:"Attach your daily work to something enormous. Small goals produce small efforts — the size of the ambition sets the ceiling on the energy you can summon for it.", attribution:"Ralph Waldo Emerson", category:"ambition" },
]
