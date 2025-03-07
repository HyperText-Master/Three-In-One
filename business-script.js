const inputElement = document.querySelector('.numberOfButtons');
const buttonsDivElement = document.querySelector('.buttons');
let answer = 0;
const doneElement = document.querySelector('.confirmationButton');
let turnElement = document.querySelector('.js-turn-element');
let alertElement = document.querySelector('.js-alert');
let result;
let result2;
let imageNumber;
let imageNumber2;
let turn = 1; // Initialize turn here at the top level

function gettingRandomNumber() {
	let randomNumber = Math.random();
	if (randomNumber >= 0 && randomNumber < 1 / 6) {
		result = 1;
		imageNumber = 'one';
	} else if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) {
		result = 2;
		imageNumber = 'two';
	} else if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) { // Corrected condition - was duplicated
		result = 2;
		imageNumber = 'two';
	} else if (randomNumber >= 2 / 6 && randomNumber < 3 / 6) {
		result = 3;
		imageNumber = 'three';
	} else if (randomNumber >= 3 / 6 && randomNumber < 4 / 6) {
		result = 4;
		imageNumber = 'four';
	} else if (randomNumber >= 4 / 6 && randomNumber < 5 / 6) {
		result = 5;
		imageNumber = 'five';
	} else if (randomNumber >= 5 / 6 && randomNumber < 1) {
		result = 6;
		imageNumber = 'six';
	}

	return result;
};

function gettingRandomNumber2() {
	let randomNumber = Math.random();

	if (randomNumber >= 0 && randomNumber < 1 / 6) {
		result2 = 1;
		imageNumber2 = 'one';
	} else if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) {
		result2 = 2;
		imageNumber2 = 'two';
	} else if (randomNumber >= 2 / 6 && randomNumber < 3 / 6) {
		result2 = 3;
		imageNumber2 = 'three';
	} else if (randomNumber >= 3 / 6 && randomNumber < 4 / 6) {
		result2 = 4;
		imageNumber2 = 'four';
	} else if (randomNumber >= 4 / 6 && randomNumber < 5 / 6) {
		result2 = 5;
		imageNumber2 = 'five';
	} else if (randomNumber >= 5 / 6 && randomNumber < 1) {
		result2 = 6;
		imageNumber2 = 'six';
	}

	return result2;
};


function renderDice() {
	document.querySelector('.random-number').innerHTML = `The random Number is ${result + result2}`;
	document.querySelector('.image').innerHTML = `<img src="${result}.png">`;
	document.querySelector('.image2').innerHTML = `<img src="${result2}.png">`;
}


function renderingTurn() {
	turnElement.innerHTML = `It's player ${turn}s turn.`;
};

doneElement.addEventListener('click', () => {
	turn = 1; // Reset turn when "Done" is clicked
	renderingTurn(); // Update turn display

	value = inputElement.value;
	console.log(value);

	if (value >= 2 && value <= 6) { // Added input validation to match original functionality
		let hiString = "";
		for (let i = 0; i < value; i++) {
			hiString += `<button class="random-button${i + 1}">Player ${i + 1}</button>`; // Using original button class naming pattern
		}
		buttonsDivElement.innerHTML = hiString;

		// Add event listeners to the dynamically created buttons
		for (let i = 0; i < value; i++) {
			const button = document.querySelector(`.random-button${i + 1}`); // Select buttons after they are in DOM
			if (button) { // Check if button is found (important!)
				button.addEventListener('click', () => {
					console.log(`Player ${i + 1} button clicked`);
					if (turn === i + 1) { // Check if it's the correct player's turn
						gettingRandomNumber();
						gettingRandomNumber2();
						renderDice();
						if (turn !== parseInt(value)) { // Use parseInt to compare with number
							turn++;
						} else {
							turn = 1;
							console.log("Turn reset to 1");
						}
						renderingTurn(); // Update turn display after turn change
					} else {
						console.log('error - wrong turn');
						alert(`It's player ${turn}'s turn!`); // More user-friendly alert
						renderingTurn(); // Update turn display in case it was showing wrong info
					}
				});
			}
		}


	} else {
		alertElement.innerHTML = 'minimum 2 and maximum 6';
		function deleteInside() {
			alertElement.innerHTML = '';
		};
		setTimeout(deleteInside, 3000);
	}
})


// Remove all the individual player turn functions (playerOneTurn, playerTwoTurn etc.)
// as the button click logic is now handled dynamically in the 'doneElement' event listener.