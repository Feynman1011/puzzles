function init() {
	const answers = [
		"For once in my life", "Forget it", "Try to understand", "Travel overseas or overseas travel",
		"Breakfast", "Downtown", "Eyeshadow", "Stepfather", "Once upon a time", "Potatoes",
		"3D movie", "Top secret", "Trip around the world or around the world trip", "Lemonade",
		"Long legs", "Advice", "Spaceman", "Big bad wolf", "Many thanks or thanks a lot",
		"Download", "No idea", "Comfortable", "Forty years", "Excuse me", "Forehead",
		"Good looking", "Waterfall", "Wake up", "Tuna fish", "Foreign language", "Seahorse",
		"Middle aged", "Broken heart", "Seesaw", "Miss you or missing you", "Teabag",
		"Four-wheel drive", "Apple pie", "Up to you", "Robin Hood", "Design", "Engineer",
		"Vegetables", "Afternoon tea", "Camping overnight", "Time to go", "Long time no see",
		"Polite",
		// 49-60 (existing)
		"Fishing hook", "Farm animal / Animal farm", "Touchdown", "Honeybee", "Cornerstone",
		"Love at first sight", "Freeze over", "Caveman / Mancave", "Catwalk",
		"Hiking in the woods (High king)", "Sandbox", "Lovebirds",
		// 61-72 (existing)
		"Crossbow", "Eggs over easy", "Coffee break", "Multiple choice", "Come into season",
		"I'll get over it", "Raincheck", "I'm bigger than you", "Illegal (ill eagle)",
		"Double agent", "Rock n roll", "Good afternoon",
		// 73-84 (existing)
		"Look me in the eye", "Electric blanket", "Banknote", "One foot in the door",
		"Bookcase", "Five kilograms overweight", "Highway", "Way to go",
		"Toothpick", "Underdogs", "Heartbeat", "Light rain",
		// 85-96 (new)
		"Sunroof", "X-ray", "Doghouse", "Excuse me", "French fry", "Pardon me",
		"Mousetrap", "Turnip", "Phone numbers", "Uproar", "Thunderstorm", "Weekend",
		// 97-108 (new)
		"Microscope", "One night stand", "Eye sockets", "Houseplant", "Neighbourhood",
		"Failure", "Headquarters", "Blanket", "Cut corners", "Cocktail", "Tennis shoes", "Summary"
	];

	const MATCH_KEYWORDS = [
		["foronceinmylife","fourones","1111"], ["forgetit"], ["trytounderstand"], ["traveloverseas"],
		["breakfast"], ["downtown"], ["eyeshadow"], ["stepfather"], ["onceuponatime"], ["potatoes","pot8os"],
		["3dmovie"], ["topsecret"], ["triparoundtheworld"], ["lemonade"], ["longlegs"], ["advice"],
		["spaceman"], ["bigbadwolf"], ["manythanks","thanksalot"], ["download"], ["noidea"],
		["comfortable"], ["fortyyears","40years"], ["excuseme"], ["forehead"], ["goodlooking"],
		["waterfall"], ["wakeup"], ["tunafish"], ["foreignlanguage"], ["seahorse"], ["middleaged"],
		["brokenheart"], ["seesaw"], ["missyou","missingyou"], ["teabag"],
		["fourwheeldrive","4x4","four wheel drive","four-wheel"], //37
		["applepie","apple pie"], //38
		["uptoyou","up to you","itsuptoyou","its up to you","itsuptoyou"], //39
		["robinhood","robin hood"], //40
		["design","designer"], //41
		["engineer","engineering","eng"], //42
		["vegetables","veggies","veg"], //43
		["afternoontea","afternoon tea","tea"], //44
		["campingovernight","camping","overnightcamping","camp overnight"], //45
		["timetogo","time to go","its time to go","its time to go"], //46
		["longtimenosee","long time no see","long time nosee","longtime no see"], //47
		["polite","politeness","polite please"], //48
		// 49-60 keywords
		["fishinghook","fishing","hook","fishhook"], //49
		["farmanimal","animalfarm","farm animal","animal farm"], //50
		["touchdown","touch down","td"], //51
		["honeybee","honey bee","bee"], //52
		["cornerstone","corner stone","corner"], //53
		["loveatfirstsight","loveatfirst","firstsight"], //54
		["freezeover","freeze over","frozenover"], //55
		["caveman","mancave","man cave","cave man"], //56
		["catwalk","cat walk"], //57
		["hikinginthewoods","hiking","highking","high king"], //58
		["sandbox","sand box"], //59
		["lovebirds","love birds","lovebird"], //60
		// 61-72 keywords
		["crossbow","cross bow","bow"], //61
		["eggsovereasy","eggs over easy","eggs"], //62
		["coffeebreak","coffee break","coffee"], //63
		["multiplechoice","multiple choice","mcq"], //64
		["comeintoseason","come into season","in season"], //65
		["illgettoverit","ill get over it","i'll get over it","get over it"], //66
		["raincheck","rain check"], //67
		["imbiggerthanyou","im bigger than you","i'm bigger than you","bigger than you"], //68
		["illegal","ill eagle","ill-eagle"], //69
		["doubleagent","double agent","spy"], //70
		["rocknroll","rock n roll","rock and roll"], //71
		["goodafternoon","good afternoon","afternoon"], //72
		// 73-84 keywords
		["lookmeintheeye","look me in the eye","look me in eyes"], //73
		["electricblanket","electric blanket"], //74
		["banknote","bank note","note"], //75
		["onefootinthedoor","one foot in the door","one foot"], //76
		["bookcase","book case","bookshelf"], //77
		["fivekilogramsoverweight","five kilograms overweight","5kg overweight","five kg overweight"], //78
		["highway","high way","motorway"], //79
		["waytogo","way to go","well done"], //80
		["toothpick","tooth pick"], //81
		["underdogs","under dogs","underdog"], //82
		["heartbeat","heart beat"], //83
		["lightrain","light rain","drizzle"], //84
		// 85-96 keywords
		["sunroof","sun roof"], //85
		["xray","x ray","x-ray"], //86
		["doghouse","dog house","dog house"], //87
		["excuseme","excuse","pardon"], //88
		["frenchfry","french fries","frenchfries"], //89
		["pardonme","pardon me"], //90
		["mousetrap","mouse trap"], //91
		["turnip"], //92
		["phonenumbers","phone numbers","phone#","phone number"], //93
		["uproar","uproarious"], //94
		["thunderstorm","thunder storm","storm"], //95
		["weekend","week end"], //96
		// 97-108 keywords
		["microscope","micro scope"], //97
		["onenightstand","one night stand","one-night stand"], //98
		["eyesockets","eye sockets","eye socket"], //99
		["houseplant","house plant","potted plant"], //100
		["neighbourhood","neighborhood","neighbour hood"], //101
		["failure","fail"], //102
		["headquarters","head quarters","hq"], //103
		["blanket"], //104
		["cutcorners","cut corners","cut-corners"], //105
		["cocktail"], //106
		["tennisshoes","tennis shoes","trainers"], //107
		["summary","summery"] //108
	];

	const container = document.getElementById('puzzles');
	let currentIndex = 0;

	function normalize(s) {
		return (s || '').toString().toLowerCase().replace(/[^a-z0-9]+/g, '');
	}

	function isCorrect(index, guessRaw) {
		const g = normalize(guessRaw);
		if (!g) return false;

		const normalizedAnswers = [normalize(answers[index])];
		const keywords = MATCH_KEYWORDS[index] || [];
		for (const kw of keywords) {
			normalizedAnswers.push(normalize(kw));
		}

		for (const ans of normalizedAnswers) {
			if (g.includes(ans)) return true;
		}
		return false;
	}

	// perform check using currentIndex and UI elements
	function performCheck() {
		const guess = input.value.trim();
		if (!guess) {
			feedback.textContent = 'Enter a guess first.';
			return;
		}
		const correct = isCorrect(currentIndex, guess);
		feedback.textContent = correct ? 'Correct!' : 'Not quite.';
	}

	// Create a single, persistent card
	const card = document.createElement('section');
	card.className = 'card';
	container.appendChild(card);

	const imgContainer = document.createElement('div');
	imgContainer.className = 'img-container';
	card.appendChild(imgContainer);

	const img = document.createElement('img');
	imgContainer.appendChild(img);

	const controls = document.createElement('div');
	controls.className = 'controls';
	card.appendChild(controls);

	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = 'Type your guess here';
	controls.appendChild(input);

	// trigger check on Enter key (added once)
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') performCheck();
	});

	const checkBtn = document.createElement('button');
	checkBtn.textContent = 'Check';
	controls.appendChild(checkBtn);
	// use centralized check handler
	checkBtn.onclick = performCheck;

	const revealBtn = document.createElement('button');
	revealBtn.textContent = 'Reveal answer';
	revealBtn.className = 'secondary';
	controls.appendChild(revealBtn);

	const answerEl = document.createElement('div');
	answerEl.className = 'answer';
	card.appendChild(answerEl);

	const feedback = document.createElement('div');
	feedback.className = 'feedback';
	card.appendChild(feedback);

	// Create persistent navigation
	const nav = document.createElement('div');
	nav.className = 'nav';
	container.appendChild(nav);

	const prevBtn = document.createElement('button');
	prevBtn.textContent = 'Previous';
	nav.appendChild(prevBtn);

	const pager = document.createElement('div');
	pager.id = 'pager';
	nav.appendChild(pager);

	const nextBtn = document.createElement('button');
	nextBtn.textContent = 'Next';
	nav.appendChild(nextBtn);

	function updateCard(index) {
		// Fade out the card to hide the content change
		card.classList.remove('show');

		// After the fade-out transition, update the content and fade back in
		setTimeout(() => {
			const src = `puzzles/puzzle${index + 1}.jpg`;
			img.style.opacity = '0'; // Start faded out

			const preloader = new Image();
			preloader.onload = () => {
				img.src = src;
				requestAnimationFrame(() => {
					img.style.opacity = '1'; // Fade in the new image
				});
			};
			preloader.onerror = () => {
				img.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // Transparent pixel
				img.style.opacity = '1';
			};
			preloader.src = src;

			img.alt = `Puzzle ${index + 1}`;
			answerEl.textContent = answers[index];
			answerEl.style.display = 'none';
			feedback.textContent = '';
			input.value = '';
			pager.textContent = `${index + 1} / ${answers.length}`;

			revealBtn.onclick = () => {
				answerEl.style.display = 'block';
			};

			// Fade the card back in
			card.classList.add('show');
			input.focus();
		}, 350); // This should match the CSS transition time
	}

	function navigate(direction) {
		const newIndex = currentIndex + direction;
		if (newIndex >= 0 && newIndex < answers.length) {
			currentIndex = newIndex;
			updateCard(currentIndex);
		}
	}

	prevBtn.onclick = () => navigate(-1);
	nextBtn.onclick = () => navigate(1);
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') navigate(-1);
		if (e.key === 'ArrowRight') navigate(1);
	});

	// Initial load
	updateCard(currentIndex);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
//to add: puzzles categories, guess the country, food, movie, song, etc. 
// different levels of difficulty, timer, score tracking
// multiplayer mode, hints system
// mobile optimization, sound effects
// share results on social media
// daily challenges
// user-submitted puzzles
// adaptive difficulty based on performance
// achievements and badges
// leaderboard integration
// themed puzzle packs (e.g., holidays, decades)
// customizable avatars or profiles for players
// in-game currency for hints or cosmetic items
// tutorial mode for new players
// offline mode to play without internet connection
// regular updates with new puzzles
// feedback system for users to suggest improvements or report issues
// analytics to track popular puzzles and user engagement
// integration with educational content for learning-based puzzles
// seasonal events or limited-time puzzles
// cross-platform playability (web, mobile, desktop apps)
// accessibility features for players with disabilities
// integration with streaming platforms for live puzzle-solving sessions
// customizable background music or soundtracks during gameplay
// puzzle-solving tips and strategies section
// option to save progress and resume later
// social features to invite friends and compete against them
// option to change font styles and sizes for better readability
// dark mode/light mode toggle for user interface
// integration with puzzle-solving communities or forums
// option to create and share custom puzzles with other players
// regular newsletters with updates, tips, and featured puzzles
// option to rate and review puzzles for quality feedback
// notifications for new puzzle releases or events
// customizable timer settings for different challenge modes
// option to skip particularly difficult puzzles with a penalty
// detailed statistics on player performance and improvement over time
// integration with voice assistants for hands-free playing
// option to change the language of the puzzles and interface
// multiplayer chat feature for team-based puzzle solving
// option to view puzzle solutions and explanations after attempts
// option to adjust difficulty settings manually for personalized challenges
// themed user interface skins based on puzzle categories or seasons
// daily streak rewards for consistent play
// option to bookmark favorite puzzles for easy access later