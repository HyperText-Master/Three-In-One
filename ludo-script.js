const inputElement = document.querySelector('.numberOfButtons');
const buttonsDivElement = document.querySelector('.buttons')
let answer = 0;
const doneElement = document.querySelector('.confirmationButton');
let turnElement = document.querySelector('.js-turn-element');
let alertElement = document.querySelector('.js-alert');
function gettingRandomNumber() {
	let randomNumber = Math.random();
	let result;
	let imageNumber;
	if (randomNumber >= 0 && randomNumber < 1 / 6) {
		result = 1;
		imageNumber = 'one';
	} else if (randomNumber >= 1 / 6 && randomNumber < 2 / 6) {
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

	document.querySelector('.random-number').innerHTML = `The random Number is ${result}`;
	document.querySelector('.image').innerHTML = `<img src="${result}.png">`

	return result;
};


let value = inputElement.value
let turn = 1;
function renderingTurn() {
	turnElement.innerHTML = `It's player ${turn}s turn.`;
};
doneElement.addEventListener('click', () => {
	value = inputElement.value;
	console.log(value);
	if (value === '2') {
		buttonsDivElement.innerHTML = '<button class="random-button1" onclick="playerOneTurn()">Player 1</button><button class="random-button2" onclick="playerTwoTurnWithoutThree()">Player 2</button>'
		turn = 1;
		renderingTurn()
	} else if (value === '3') {
		buttonsDivElement.innerHTML = '<button class="random-button1" onclick="playerOneTurn()">Player 1</button><button class="random-button2" onclick="playerTwoTurnWithThree()">Player 2</button><button class="random-button3" onclick="playerThreeTurnWithoutFour()">Player 3</button>'
		turn = 1;
		renderingTurn()
	} else if (value === '4') {
		buttonsDivElement.innerHTML = '<button class="random-button1" onclick="playerOneTurn()">Player 1</button><button class="random-button2" onclick="playerTwoTurnWithThree()">Player 2</button><button class="random-button3" onclick="playerThreeTurnWithFour()">Player 3</button><button class="random-button4" onclick="playerFourTurn()">Player 4</button>'
		turn = 1;
		renderingTurn()
	} else {
		alertElement.innerHTML = 'minimum 2 and maximum 4';
		function deleteInside() {
			alertElement.innerHTML = '';
		};
		setTimeout(deleteInside, 3000);
	}
})
	



function playerOneTurn() {
	if (turn === 1) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 1;
			renderingTurn()
		} else {
			turn = 2;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}

function playerTwoTurnWithoutThree() {
	if (turn === 2) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 2;
			renderingTurn()
		} else {
			turn = 1;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}

function playerTwoTurnWithThree() {
	if (turn === 2) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 2;
			renderingTurn()
		} else {
			turn = 3;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}

function playerThreeTurnWithFour() {
	if (turn === 3) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 3;
			renderingTurn()
		} else {
			turn = 4;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}

function playerThreeTurnWithoutFour() {
	if (turn === 3) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 3;
			renderingTurn()
		} else {
			turn = 1;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}

function playerFourTurn() {
	if (turn === 4) {
		gettingRandomNumber();
		if (gettingRandomNumber() === 6) {
			turn = 4;
			renderingTurn()
		} else {
			turn = 1;
			renderingTurn()
		}
	} else {
		renderingTurn()
		alert(`its player ${turn}s turn`)
	}
}







