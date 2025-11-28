function init() {
	const answers = [
		"For once in my life", "Forget it", "Try to understand", "Travel overseas or overseas travel",
		"Breakfast", "Downtown", "Eyeshadow", "Stepfather", "Once upon a time", "Potatoes",
		"3D movie", "Top secret", "Trip around the world or around the world trip", "Lemonade",
		"Long legs", "Advice", "Spaceman", "Big bad wolf", "Many thanks or thanks a lot",
		"Download", "No idea", "Comfortable", "Forty years", "Excuse me", "Forehead",
		"Good looking", "Waterfall", "Wake up", "Tuna fish", "Foreign language", "Seahorse",
		"Middle-aged", "Broken heart", "Seesaw", "Miss you or missing you", "Teabag"
	];

	const MATCH_KEYWORDS = [
		["foronceinmylife","fourones","1111"], ["forgetit"], ["trytounderstand"], ["traveloverseas"],
		["breakfast"], ["downtown"], ["eyeshadow"], ["stepfather"], ["onceuponatime"], ["potatoes","pot8os"],
		["3dmovie"], ["topsecret"], ["triparoundtheworld"], ["lemonade"], ["longlegs"], ["advice"],
		["spaceman"], ["bigbadwolf"], ["manythanks","thanksalot"], ["download"], ["noidea"],
		["comfortable"], ["fortyyears","40years"], ["excuseme"], ["forehead"], ["goodlooking"],
		["waterfall"], ["wakeup"], ["tunafish"], ["foreignlanguage"], ["seahorse"], ["middleaged"],
		["brokenheart"], ["seesaw"], ["missyou","missingyou"], ["teabag"]
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

	const checkBtn = document.createElement('button');
	checkBtn.textContent = 'Check';
	controls.appendChild(checkBtn);

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

			checkBtn.onclick = () => {
				const guess = input.value.trim();
				if (!guess) {
					feedback.textContent = 'Enter a guess first.';
					return;
				}
				const correct = isCorrect(index, guess);
				feedback.textContent = correct ? 'Correct!' : 'Not quite.';
			};

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
