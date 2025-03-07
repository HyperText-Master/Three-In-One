// Input Elements

const input = document.querySelector('.js-input');
const inputNumber = document.querySelector('.js-input-two');

// Done Button Elements

const done = document.querySelector('.done');
const doneNumber = document.querySelector('.done-number');



// functioning of the player turns

let turn = 1;
let result;
let imageNumber;
let randomNumber;

// display on html document elements. DOM elements

let buttonsDiv = document.querySelector('.buttons');
let h1 = document.querySelector('.text')

function randomizer() {
	let inputValue = inputNumber.value;
	randomNumber = Math.random().toFixed(2);
	if (inputValue !== '') {
		for (let i = 0; i < inputValue; i++) {
			let startingRange = i / inputValue;
			let endingRange = (i + 1) / inputValue;

			if (randomNumber >= startingRange && randomNumber < endingRange) {
				result = i + 1

				break
			}

		}
	} else {
		for (let i = 0; i < 6; i++) {
			let startingRange = i / 6;
			let endingRange = (i + 1) / 6;

			if (randomNumber >= startingRange && randomNumber < endingRange) {
				result = i + 1

				break
			}

		}
	}
	

	return result;	
}


done.addEventListener('click', () => {

	turn = 1;
	let myArray = [];
    let hiString = ""; // Accumulate the "hi" strings
    for (let i = 0; i < input.value; i++) {
        hiString += `<button class="button-${i + 1}">Player ${i + 1}</button>`;
    }



    buttonsDiv.innerHTML = hiString; // Set innerHTML only once

    for (let i = 0; i < input.value; i++) {
        myArray.push(document.querySelector(`.button-${i + 1}`))
    }

    myArray.forEach((button, index) => {
    	if (turn === index + 1) {
			button.classList.add('turn');
			button.classList.remove('notturn');
		} else {
			button.classList.add('notturn')
			button.classList.remove('turn')
		}



    	button.addEventListener('click', () => {
    		updateClass();
    		if (turn === index + 1) {
    			button.classList.add('notturn');
				button.classList.remove('turn');
				if (turn !== myArray.length) {
					document.querySelector(`.button-${index + 2}`).classList.add('turn')
					document.querySelector(`.button-${index + 2}`).classList.remove('notturn')
				} else {
					document.querySelector(`.button-1`).classList.add('turn')
					document.querySelector(`.button-1`).classList.remove('notturn')
				}
    			randomizer();
    			h1.innerHTML = result;
    			if (turn !== myArray.length) {
    				turn++;
    				
    			} else {
    				turn = 1;
    			}
    		} else {
    			console.log(turn);
    		}
    	})
    })

    function updateClass() {
    	myArray.forEach((button, index) => {
    		button.addEventListener('click', () => {
    			if (turn === index + 1) {
					
					console.log(`${index + 2} turn`)
					
				} else {
					button.classList.add('notturn');
					button.classList.remove('turn');
				}	
    		})
    	
    	})
		
	}



});