// Page Elements
const formEl = document.getElementById("main-form");
const diceQuantity = document.getElementById("quantity");
const diceSides = document.getElementById("sides");
const addDice = document.getElementById("add-dice");
const addModifier = document.getElementById("add-modifier");
const rollDice = document.getElementById("roll");
const resultDisplay = document.getElementById("results");

// Additional Form Elements
const additionalDice1 = document.getElementById("additional-dice1");
const diceQuantity2 = document.getElementById("quantity2");
const diceSides2 = document.getElementById("sides2");
const additionalDice2 = document.getElementById("additional-dice2");
const diceQuantity3 = document.getElementById("quantity3");
const diceSides3 = document.getElementById("sides3");
const additionalDice3 = document.getElementById("additional-dice3");
const diceQuantity4 = document.getElementById("quantity4");
const diceSides4 = document.getElementById("sides4");
const additionalDice4 = document.getElementById("additional-dice4");
const diceQuantity5 = document.getElementById("quantity5");
const diceSides5 = document.getElementById("sides5");
const additionalDice5 = document.getElementById("additional-dice5");
const diceQuantity6 = document.getElementById("quantity6");
const diceSides6 = document.getElementById("sides6");
const additionalDice6 = document.getElementById("additional-dice6");
const diceQuantity7 = document.getElementById("quantity7");
const diceSides7 = document.getElementById("sides7");
const additionalDice7 = document.getElementById("additional-dice7");
const diceQuantity8 = document.getElementById("quantity8");
const diceSides8 = document.getElementById("sides8");
const additionalDice8 = document.getElementById("additional-dice8");
const diceQuantity9 = document.getElementById("quantity9");
const diceSides9 = document.getElementById("sides9");
const additionalDice9 = document.getElementById("additional-dice9");
const diceQuantity10 = document.getElementById("quantity10");
const diceSides10 = document.getElementById("sides10");
const additionalDice10 = document.getElementById("additional-dice10");
const diceQuantity11 = document.getElementById("quantity11");
const diceSides11 = document.getElementById("sides11");
const modifier1 = document.getElementById("additional-modifier1");
const modifier2 = document.getElementById("additional-modifier2");
const modifier3 = document.getElementById("additional-modifier3");
const modifier4 = document.getElementById("additional-modifier4");
const modifier5 = document.getElementById("additional-modifier5");
const modifier6 = document.getElementById("additional-modifier6");
const modifier7 = document.getElementById("additional-modifier7");
const modifier8 = document.getElementById("additional-modifier8");
const modifier9 = document.getElementById("additional-modifier9");
const modifier10 = document.getElementById("additional-modifier10");

// Initial Display
additionalDice1.style.display = "none";
additionalDice2.style.display = "none";
additionalDice3.style.display = "none";
additionalDice4.style.display = "none";
additionalDice5.style.display = "none";
additionalDice6.style.display = "none";
additionalDice7.style.display = "none";
additionalDice8.style.display = "none";
additionalDice9.style.display = "none";
additionalDice10.style.display = "none";
modifier1.style.display = "none";
modifier2.style.display = "none";
modifier3.style.display = "none";
modifier4.style.display = "none";
modifier5.style.display = "none";
modifier6.style.display = "none";
modifier7.style.display = "none";
modifier8.style.display = "none";
modifier9.style.display = "none";
modifier10.style.display = "none";


// This is what happens when you click on 'Add Another Dice Type'
function addingDice(event) {
    event.preventDefault();
    
    if (additionalDice1.style.display === "none") {
        additionalDice1.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "none") {
        additionalDice2.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "none") {
        additionalDice3.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "none") {
        additionalDice4.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "none") {
        additionalDice5.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "none") {
        additionalDice6.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "none") {
        additionalDice7.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "none") {
        additionalDice8.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "block" && additionalDice9.style.display === "none") {
        additionalDice9.style.display = "block";
        console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "block" && additionalDice9.style.display === "block" && additionalDice10.style.display === "none") {
        additionalDice10.style.display = "block";
        console.log('Adding dice...');
    } else {
        console.log('You cannot add any more dice types to this roll.')
    }
};

// This is what happens when you click on 'Add a Modifier'
function addingModifier(event) {
    event.preventDefault();

    if (modifier1.style.display === "none") {
        modifier1.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "none") {
        modifier2.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "none") {
        modifier3.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "none") {
        modifier4.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "none") {
        modifier5.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "none") {
        modifier6.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "none") {
        modifier7.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "none") {
        modifier8.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "block" && modifier9.style.display === "none") {
        modifier9.style.display = "block";
        console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "block" && modifier9.style.display === "block" && modifier10.style.display === "none") {
        modifier10.style.display = "block";
        console.log('Adding modifier...');
    } else {
        console.log('You cannot add any more modifiers to this roll.')
    }
};

// This is what happens when you click on 'Roll'
function rollingDice(event) {
    event.preventDefault();
    console.log('Rolling dice...');
    console.log(diceQuantity.value + 'd' + diceSides.value);

    // TESTING
    console.log(diceQuantity2.value + 'd' + diceSides2.value);
    console.log(diceQuantity3.value + 'd' + diceSides3.value);
    console.log(diceQuantity4.value + 'd' + diceSides4.value);
    console.log(diceQuantity5.value + 'd' + diceSides5.value);
    console.log(diceQuantity6.value + 'd' + diceSides6.value);
    console.log(diceQuantity7.value + 'd' + diceSides7.value);
    console.log(diceQuantity8.value + 'd' + diceSides8.value);
    console.log(diceQuantity9.value + 'd' + diceSides9.value);
    console.log(diceQuantity10.value + 'd' + diceSides10.value);
    console.log(diceQuantity11.value + 'd' + diceSides11.value);

    let numberOfDice = diceQuantity.value;
    let diceTotal = 0;
    let diceResults = [];
    let diceArray = ['']

    // Generate a random number (between 1 and the number of sides of the dice) for each dice rolled
    for (numberOfDice; numberOfDice > 0; numberOfDice--) {
        let diceValue = Math.floor((Math.random() * diceSides.value) + 1);
        diceResults.push(diceValue);
    }

    console.log(diceResults);

    // Add up the dice rolls
    for (let i = 0; i < diceResults.length; i++) {
        // Add up the value of the dice rolls
        diceTotal += diceResults[i];
        // Prepare the individual dice values display
        if (i < diceResults.length - 1) {
            diceArray += (diceResults[i] + ' + ')
        } else if (i === diceResults.length - 1) {
            diceArray += (diceResults[i] + ' ');
        }
    }

    // console.log(diceArray);
    // console.log(diceTotal);

    // console.log(diceQuantity.value);
    if (diceQuantity.value == 1) {
        resultDisplay.textContent = diceTotal;
    } else if (diceQuantity.value > 1) {
        resultDisplay.textContent = diceArray + ' = ' + diceTotal;
    }
    
};

// Event Listeners
addDice.addEventListener('click', addingDice);
addModifier.addEventListener('click', addingModifier);
rollDice.addEventListener('click', rollingDice);
