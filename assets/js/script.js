// Page Elements
const formEl = document.getElementById("main-form");
const diceQuantity = document.getElementById("quantity");
const diceSides = document.getElementById("sides");
const addDice = document.getElementById("add-dice");
const addModifier = document.getElementById("add-modifier");
const rollDice = document.getElementById("roll");
const resultDisplay = document.getElementById("results");

// This is what happens when you click on 'Add Another Dice Type'
function addingDice(event) {
    event.preventDefault();
    console.log('Adding dice...');
};

// This is what happens when you click on 'Add a Modifier'
function addingModifier(event) {
    event.preventDefault();
    console.log('Adding modifier...');
};

// This is what happens when you click on 'Roll'
function rollingDice(event) {
    event.preventDefault();
    console.log('Rolling dice...');
    console.log(diceQuantity.value + 'd' + diceSides.value);

    let numberOfDice = diceQuantity.value;
    let diceTotal = 0;
    let diceResults = [];
    let diceArray = ['']

    // Generate a random number (between 1 and the number of sides of the dice) for each dice rolled
    for (numberOfDice; numberOfDice > 0; numberOfDice--) {
        let diceValue = Math.floor((Math.random() * diceSides.value) + 1);
        diceResults.push(diceValue);
    }

    // console.log(diceResults);

    // Add up the dice rolls
    for (let i = 0; i < diceResults.length; i++) {
        // Add up the value of the dice rolls
        diceTotal += diceResults[i];
        // Prepare the individual dice values display
        if (i < diceResults.length - 1) {
            diceArray += (diceResults[i] + ' + ')
        } else if (i = diceResults.length - 1) {
            diceArray += (diceResults[i] + ' ');
        }
    }

    // console.log(diceArray);
    // console.log(diceTotal);

    resultDisplay.textContent = diceArray + ' = ' + diceTotal
};

// Event Listeners
addDice.addEventListener('click', addingDice);
addModifier.addEventListener('click', addingModifier);
rollDice.addEventListener('click', rollingDice);
