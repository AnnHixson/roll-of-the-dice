const formEl = document.getElementById("main-form");
const diceQuantity = document.getElementById("quantity");
const diceSides = document.getElementById("sides");
const addDice = document.getElementById("add-dice");
const addModifier = document.getElementById("add-modifier");
const rollDice = document.getElementById("roll");
const resultDisplay = document.getElementById("results");

function addingDice(event) {
    event.preventDefault();
    console.log('Adding dice...');
};

function addingModifier(event) {
    event.preventDefault();
    console.log('Adding modifier...');
};

function rollingDice(event) {
    event.preventDefault();
    console.log('Rolling dice...');
    console.log(diceQuantity.value + 'd' + diceSides.value);

    let numberOfDice = diceQuantity.value;
    let diceTotal = 0;
    let diceResults = [];
    let diceArray = ['']

    for (numberOfDice; numberOfDice > 0; numberOfDice--) {
        let diceValue = Math.floor((Math.random() * diceSides.value) + 1);
        diceResults.push(diceValue);
    }

    console.log(diceResults);

    for (let i = 0; i < diceResults.length; i++) {
        diceTotal += diceResults[i];
        diceArray += (diceResults[i] + ' ');
    }

    console.log(diceArray);
    console.log(diceTotal);
};

addDice.addEventListener('click', addingDice);
addModifier.addEventListener('click', addingModifier);
rollDice.addEventListener('click', rollingDice);
