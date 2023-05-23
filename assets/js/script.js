// Page Elements
const formEl = document.getElementById("main-form");
const diceQuantity = document.getElementById("quantity");
const diceSides = document.getElementById("sides");
const addDice = document.getElementById("add-dice");
const addModifier = document.getElementById("add-modifier");
const rollDice = document.getElementById("roll");
const resultDisplay = document.getElementById("results");
const nextRoll = document.getElementById("next-roll");
const reRoll = document.getElementById("re-roll");
const newRoll = document.getElementById("new-roll");

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
const modP1 = document.getElementById("modifier1+");
const modM1 = document.getElementById("modifier1-");
const mod1 = document.getElementById("modifier1");
const modifier2 = document.getElementById("additional-modifier2");
const modP2 = document.getElementById("modifier2+");
const modM2 = document.getElementById("modifier2-");
const mod2 = document.getElementById("modifier2");
const modifier3 = document.getElementById("additional-modifier3");
const modP3 = document.getElementById("modifier3+");
const modM3 = document.getElementById("modifier3-");
const mod3 = document.getElementById("modifier3");
const modifier4 = document.getElementById("additional-modifier4");
const modP4 = document.getElementById("modifier4+");
const modM4 = document.getElementById("modifier4-");
const mod4 = document.getElementById("modifier4");
const modifier5 = document.getElementById("additional-modifier5");
const modP5 = document.getElementById("modifier5+");
const modM5 = document.getElementById("modifier5-");
const mod5 = document.getElementById("modifier5");
const modifier6 = document.getElementById("additional-modifier6");
const modP6 = document.getElementById("modifier6+");
const modM6 = document.getElementById("modifier6-");
const mod6 = document.getElementById("modifier6");
const modifier7 = document.getElementById("additional-modifier7");
const modP7 = document.getElementById("modifier7+");
const modM7 = document.getElementById("modifier7-");
const mod7 = document.getElementById("modifier7");
const modifier8 = document.getElementById("additional-modifier8");
const modP8 = document.getElementById("modifier8+");
const modM8 = document.getElementById("modifier8-");
const mod8 = document.getElementById("modifier8");
const modifier9 = document.getElementById("additional-modifier9");
const modP9 = document.getElementById("modifier9+");
const modM9 = document.getElementById("modifier9-");
const mod9 = document.getElementById("modifier9");
const modifier10 = document.getElementById("additional-modifier10");
const modP10 = document.getElementById("modifier10+");
const modM10 = document.getElementById("modifier10-");
const mod10 = document.getElementById("modifier10");

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
nextRoll.style.display = "none";


// rollDice.style.display = "none";



// This is what happens when you click on 'Add Another Dice Type'
function addingDice(event) {
    event.preventDefault();
    
    if (additionalDice1.style.display === "none") {
        additionalDice1.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "none") {
        additionalDice2.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "none") {
        additionalDice3.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "none") {
        additionalDice4.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "none") {
        additionalDice5.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "none") {
        additionalDice6.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "none") {
        additionalDice7.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "none") {
        additionalDice8.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "block" && additionalDice9.style.display === "none") {
        additionalDice9.style.display = "block";
        // console.log('Adding dice...');
    } else if (additionalDice1.style.display === "block" && additionalDice2.style.display === "block" && additionalDice3.style.display === "block" && additionalDice4.style.display === "block" && additionalDice5.style.display === "block" && additionalDice6.style.display === "block" && additionalDice7.style.display === "block" && additionalDice8.style.display === "block" && additionalDice9.style.display === "block" && additionalDice10.style.display === "none") {
        additionalDice10.style.display = "block";
        // console.log('Adding dice...');
    } else {
        console.log('You cannot add any more dice types to this roll.')
    }
};

// This is what happens when you click on 'Add a Modifier'
function addingModifier(event) {
    event.preventDefault();

    if (modifier1.style.display === "none") {
        modifier1.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "none") {
        modifier2.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "none") {
        modifier3.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "none") {
        modifier4.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "none") {
        modifier5.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "none") {
        modifier6.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "none") {
        modifier7.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "none") {
        modifier8.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "block" && modifier9.style.display === "none") {
        modifier9.style.display = "block";
        // console.log('Adding modifier...');
    } else if (modifier1.style.display === "block" && modifier2.style.display === "block" && modifier3.style.display === "block" && modifier4.style.display === "block" && modifier5.style.display === "block" && modifier6.style.display === "block" && modifier7.style.display === "block" &&  modifier8.style.display === "block" && modifier9.style.display === "block" && modifier10.style.display === "none") {
        modifier10.style.display = "block";
        // console.log('Adding modifier...');
    } else {
        console.log('You cannot add any more modifiers to this roll.')
    }
};

// This is what happens when you click on 'Roll'
function rollingDice(event) {
    event.preventDefault();

    let numberOfDice = diceQuantity.value;
    let diceTotal = 0;
    let diceResults = [];
    let diceArray = [''];
    let numberOfDice2 = diceQuantity2.value;
    let diceTotal2 = 0;
    let diceResults2 = [];
    let diceArray2 = [''];
    let numberOfDice3 = diceQuantity3.value;
    let diceTotal3 = 0;
    let diceResults3 = [];
    let diceArray3 = [''];
    let numberOfDice4 = diceQuantity4.value;
    let diceTotal4 = 0;
    let diceResults4 = [];
    let diceArray4 = [''];
    let numberOfDice5 = diceQuantity5.value;
    let diceTotal5 = 0;
    let diceResults5 = [];
    let diceArray5 = [''];
    let numberOfDice6 = diceQuantity6.value;
    let diceTotal6 = 0;
    let diceResults6 = [];
    let diceArray6 = [''];
    let numberOfDice7 = diceQuantity7.value;
    let diceTotal7 = 0;
    let diceResults7 = [];
    let diceArray7 = [''];
    let numberOfDice8 = diceQuantity8.value;
    let diceTotal8 = 0;
    let diceResults8 = [];
    let diceArray8 = [''];
    let numberOfDice9 = diceQuantity9.value;
    let diceTotal9 = 0;
    let diceResults9 = [];
    let diceArray9 = [''];
    let numberOfDice10 = diceQuantity10.value;
    let diceTotal10 = 0;
    let diceResults10 = [];
    let diceArray10 = [''];
    let numberOfDice11 = diceQuantity11.value;
    let diceTotal11 = 0;
    let diceResults11 = [];
    let diceArray11 = [''];
    const modArray = [];
    let modList = [''];
    let modTotal = 0;
    let modifiersPresent = true;
    let fullResults = [];

    // Generate a random number (between 1 and the number of sides of the dice) for each dice rolled
    for (numberOfDice; numberOfDice > 0; numberOfDice--) {
        let diceValue = Math.floor((Math.random() * diceSides.value) + 1);
        diceResults.push(diceValue);
    }

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

    if (diceQuantity.value == 1) {
        fullResults.push(diceQuantity.value + 'd' + diceSides.value + ': ' + diceTotal);
    } else if (diceQuantity.value > 1) {
        fullResults.push(diceQuantity.value + 'd' + diceSides.value + ': ' + diceArray + '= ' + diceTotal);
    };

    let totalDiceTally = diceTotal;

    // Additional dice types:
    if (additionalDice1.style.display === 'block') {
        for (numberOfDice2; numberOfDice2 > 0; numberOfDice2--) {
            let diceValue2 = Math.floor((Math.random() * diceSides2.value) + 1);
            diceResults2.push(diceValue2);
        }

        for (let i = 0; i < diceResults2.length; i++) {
            // Add up the value of the dice rolls
            diceTotal2 += diceResults2[i];
            // Prepare the individual dice values display
            if (i < diceResults2.length - 1) {
                diceArray2 += (diceResults2[i] + ' + ')
            } else if (i === diceResults2.length - 1) {
                diceArray2 += (diceResults2[i] + ' ');
            }
        }

        if (diceQuantity2.value == 1) {
            fullResults.push(diceQuantity2.value + 'd' + diceSides2.value + ': ' + diceTotal2);
        } else if (diceQuantity2.value > 1) {
            fullResults.push(diceQuantity2.value + 'd' + diceSides2.value + ': ' + diceArray2 + '= ' + diceTotal2);
        };

        totalDiceTally += diceTotal2;
    }
    if (additionalDice2.style.display === 'block') {
        for (numberOfDice3; numberOfDice3 > 0; numberOfDice3--) {
            let diceValue3 = Math.floor((Math.random() * diceSides3.value) + 1);
            diceResults3.push(diceValue3);
        }

        for (let i = 0; i < diceResults3.length; i++) {
            // Add up the value of the dice rolls
            diceTotal3 += diceResults3[i];
            // Prepare the individual dice values display
            if (i < diceResults3.length - 1) {
                diceArray3 += (diceResults3[i] + ' + ')
            } else if (i === diceResults3.length - 1) {
                diceArray3 += (diceResults3[i] + ' ');
            }
        }

        if (diceQuantity3.value == 1) {
            fullResults.push(diceQuantity3.value + 'd' + diceSides3.value + ': ' + diceTotal3);
        } else if (diceQuantity3.value > 1) {
            fullResults.push(diceQuantity3.value + 'd' + diceSides3.value + ': ' + diceArray3 + '= ' + diceTotal3);
        };

        totalDiceTally += diceTotal3;
    }
    if (additionalDice3.style.display === 'block') {
        for (numberOfDice4; numberOfDice4 > 0; numberOfDice4--) {
            let diceValue4 = Math.floor((Math.random() * diceSides4.value) + 1);
            diceResults4.push(diceValue4);
        }

        for (let i = 0; i < diceResults4.length; i++) {
            // Add up the value of the dice rolls
            diceTotal4 += diceResults4[i];
            // Prepare the individual dice values display
            if (i < diceResults4.length - 1) {
                diceArray4 += (diceResults4[i] + ' + ')
            } else if (i === diceResults4.length - 1) {
                diceArray4 += (diceResults4[i] + ' ');
            }
        }

        if (diceQuantity4.value == 1) {
            fullResults.push(diceQuantity4.value + 'd' + diceSides4.value + ': ' + diceTotal4);
        } else if (diceQuantity4.value > 1) {
            fullResults.push(diceQuantity4.value + 'd' + diceSides4.value + ': ' + diceArray4 + '= ' + diceTotal4);
        };
        totalDiceTally += diceTotal4;
    }
    if (additionalDice4.style.display === 'block') {
        for (numberOfDice5; numberOfDice5 > 0; numberOfDice5--) {
            let diceValue5 = Math.floor((Math.random() * diceSides5.value) + 1);
            diceResults5.push(diceValue5);
        }

        for (let i = 0; i < diceResults5.length; i++) {
            // Add up the value of the dice rolls
            diceTotal5 += diceResults5[i];
            // Prepare the individual dice values display
            if (i < diceResults5.length - 1) {
                diceArray5 += (diceResults5[i] + ' + ')
            } else if (i === diceResults5.length - 1) {
                diceArray5 += (diceResults5[i] + ' ');
            }
        }

        if (diceQuantity5.value == 1) {
            fullResults.push(diceQuantity5.value + 'd' + diceSides5.value + ': ' + diceTotal5);
        } else if (diceQuantity5.value > 1) {
            fullResults.push(diceQuantity5.value + 'd' + diceSides5.value + ': ' + diceArray5 + '= ' + diceTotal5);
        };

        totalDiceTally += diceTotal5;
    }
    if (additionalDice5.style.display === 'block') {
        for (numberOfDice6; numberOfDice6 > 0; numberOfDice6--) {
            let diceValue6 = Math.floor((Math.random() * diceSides6.value) + 1);
            diceResults6.push(diceValue6);
        }

        for (let i = 0; i < diceResults6.length; i++) {
            // Add up the value of the dice rolls
            diceTotal6 += diceResults6[i];
            // Prepare the individual dice values display
            if (i < diceResults6.length - 1) {
                diceArray6 += (diceResults6[i] + ' + ')
            } else if (i === diceResults6.length - 1) {
                diceArray6 += (diceResults6[i] + ' ');
            }
        }

        if (diceQuantity6.value == 1) {
            fullResults.push(diceQuantity6.value + 'd' + diceSides6.value + ': ' + diceTotal6);
        } else if (diceQuantity6.value > 1) {
            fullResults.push(diceQuantity6.value + 'd' + diceSides6.value + ': ' + diceArray6 + '= ' + diceTotal6);
        };

        totalDiceTally += diceTotal6;
    }
    if (additionalDice6.style.display === 'block') {
        for (numberOfDice7; numberOfDice7 > 0; numberOfDice7--) {
            let diceValue7 = Math.floor((Math.random() * diceSides7.value) + 1);
            diceResults7.push(diceValue7);
        }

        for (let i = 0; i < diceResults7.length; i++) {
            // Add up the value of the dice rolls
            diceTotal7 += diceResults7[i];
            // Prepare the individual dice values display
            if (i < diceResults7.length - 1) {
                diceArray7 += (diceResults7[i] + ' + ')
            } else if (i === diceResults7.length - 1) {
                diceArray7 += (diceResults7[i] + ' ');
            }
        }

        if (diceQuantity7.value == 1) {
            fullResults.push(diceQuantity7.value + 'd' + diceSides7.value + ': ' + diceTotal7);
        } else if (diceQuantity7.value > 1) {
            fullResults.push(diceQuantity7.value + 'd' + diceSides7.value + ': ' + diceArray7 + '= ' + diceTotal7);
        };

        totalDiceTally += diceTotal7;
    }
    if (additionalDice7.style.display === 'block') {
        for (numberOfDice8; numberOfDice8 > 0; numberOfDice8--) {
            let diceValue8 = Math.floor((Math.random() * diceSides8.value) + 1);
            diceResults8.push(diceValue8);
        }

        for (let i = 0; i < diceResults8.length; i++) {
            // Add up the value of the dice rolls
            diceTotal8 += diceResults8[i];
            // Prepare the individual dice values display
            if (i < diceResults8.length - 1) {
                diceArray8 += (diceResults8[i] + ' + ')
            } else if (i === diceResults8.length - 1) {
                diceArray8 += (diceResults8[i] + ' ');
            }
        }

        if (diceQuantity8.value == 1) {
            fullResults.push(diceQuantity8.value + 'd' + diceSides8.value + ': ' + diceTotal8);
        } else if (diceQuantity8.value > 1) {
            fullResults.push(diceQuantity8.value + 'd' + diceSides8.value + ': ' + diceArray8 + '= ' + diceTotal8);
        };

        totalDiceTally += diceTotal8;
    }
    if (additionalDice8.style.display === 'block') {
        for (numberOfDice9; numberOfDice9 > 0; numberOfDice9--) {
            let diceValue9 = Math.floor((Math.random() * diceSides9.value) + 1);
            diceResults9.push(diceValue9);
        }

        for (let i = 0; i < diceResults9.length; i++) {
            // Add up the value of the dice rolls
            diceTotal9 += diceResults9[i];
            // Prepare the individual dice values display
            if (i < diceResults9.length - 1) {
                diceArray9 += (diceResults9[i] + ' + ')
            } else if (i === diceResults9.length - 1) {
                diceArray9 += (diceResults9[i] + ' ');
            }
        }

        if (diceQuantity9.value == 1) {
            fullResults.push(diceQuantity9.value + 'd' + diceSides9.value + ': ' + diceTotal9);
        } else if (diceQuantity9.value > 1) {
            fullResults.push(diceQuantity9.value + 'd' + diceSides9.value + ': ' + diceArray9 + '= ' + diceTotal9);
        };

        totalDiceTally += diceTotal9;
    }
    if (additionalDice9.style.display === 'block') {
        for (numberOfDice10; numberOfDice10 > 0; numberOfDice10--) {
            let diceValue10 = Math.floor((Math.random() * diceSides10.value) + 1);
            diceResults10.push(diceValue10);
        }

        for (let i = 0; i < diceResults10.length; i++) {
            // Add up the value of the dice rolls
            diceTotal10 += diceResults10[i];
            // Prepare the individual dice values display
            if (i < diceResults10.length - 1) {
                diceArray10 += (diceResults10[i] + ' + ')
            } else if (i === diceResults10.length - 1) {
                diceArray10 += (diceResults10[i] + ' ');
            }
        }

        if (diceQuantity10.value == 1) {
            fullResults.push(diceQuantity10.value + 'd' + diceSides10.value + ': ' + diceTotal10);
        } else if (diceQuantity10.value > 1) {
            fullResults.push(diceQuantity10.value + 'd' + diceSides10.value + ': ' + diceArray10 + '= ' + diceTotal10);
        };

        totalDiceTally += diceTotal10;
    }
    if (additionalDice10.style.display === 'block') {
        for (numberOfDice11; numberOfDice11 > 0; numberOfDice11--) {
            let diceValue11 = Math.floor((Math.random() * diceSides11.value) + 1);
            diceResults11.push(diceValue11);
        }

        for (let i = 0; i < diceResults11.length; i++) {
            // Add up the value of the dice rolls
            diceTotal11 += diceResults11[i];
            // Prepare the individual dice values display
            if (i < diceResults11.length - 1) {
                diceArray11 += (diceResults11[i] + ' + ')
            } else if (i === diceResults11.length - 1) {
                diceArray11 += (diceResults11[i] + ' ');
            }
        }

        if (diceQuantity11.value == 1) {
            fullResults.push(diceQuantity11.value + 'd' + diceSides11.value + ': ' + diceTotal11);
        } else if (diceQuantity11.value > 1) {
            fullResults.push(diceQuantity11.value + 'd' + diceSides11.value + ': ' + diceArray11 + '= ' + diceTotal11);
        };

        totalDiceTally += diceTotal11;
    }

    // Add any modifiers
    if (modifier1.style.display === 'block') {
        if (modP1.checked) {
            modArray.push('+' + mod1.value);
            modTotal += Number(mod1.value);
        } else if (modM1.checked) {
            modArray.push('-' + mod1.value);
            modTotal -= mod1.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    } else {
        modifiersPresent = false
    }
    if (modifier2.style.display === 'block') {
        if (modP2.checked) {
            modArray.push('+' + mod2.value);
            modTotal += Number(mod2.value);
        } else if (modM2.checked) {
            modArray.push('-' + mod2.value);
            modTotal -= mod2.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier3.style.display === 'block') {
        if (modP3.checked) {
            modArray.push('+' + mod3.value);
            modTotal += Number(mod3.value);
        } else if (modM3.checked) {
            modArray.push('-' + mod3.value);
            modTotal -= mod3.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier4.style.display === 'block') {
        if (modP4.checked) {
            modArray.push('+' + mod4.value);
            modTotal += Number(mod4.value);
        } else if (modM4.checked) {
            modArray.push('-' + mod4.value);
            modTotal -= mod4.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier5.style.display === 'block') {
        if (modP5.checked) {
            modArray.push('+' + mod5.value);
            modTotal += Number(mod5.value);
        } else if (modM5.checked) {
            modArray.push('-' + mod5.value);
            modTotal -= mod5.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier6.style.display === 'block') {
        if (modP6.checked) {
            modArray.push('+' + mod6.value);
            modTotal += Number(mod6.value);
        } else if (modM6.checked) {
            modArray.push('-' + mod6.value);
            modTotal -= mod6.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier7.style.display === 'block') {
        if (modP7.checked) {
            modArray.push('+' + mod7.value);
            modTotal += Number(mod7.value);
        } else if (modM7.checked) {
            modArray.push('-' + mod7.value);
            modTotal -= mod7.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier8.style.display === 'block') {
        if (modP8.checked) {
            modArray.push('+' + mod8.value);
            modTotal += Number(mod8.value);
        } else if (modM8.checked) {
            modArray.push('-' + mod8.value);
            modTotal -= mod8.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier9.style.display === 'block') {
        if (modP9.checked) {
            modArray.push('+' + mod9.value);
            modTotal += Number(mod9.value);
        } else if (modM9.checked) {
            modArray.push('-' + mod9.value);
            modTotal -= mod9.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }
    if (modifier10.style.display === 'block') {
        if (modP10.checked) {
            modArray.push('+' + mod10.value);
            modTotal += Number(mod10.value);
        } else if (modM10.checked) {
            modArray.push('-' + mod10.value);
            modTotal -= mod10.value;
        } else {
            console.log('You must select either "+" or "-" for modifiers.');
        }
    }

    if (modifiersPresent) {
        if (modTotal >= 0) {
            if (modifier2.style.display === 'block') {
                for (let i = 0; i < modArray.length; i++) {
                    modList += (modArray[i] + ' ')
                }
                fullResults.push('Modifiers: ' + modList + ' = +' + modTotal);
            } else {
                fullResults.push('Modifiers: +' + modTotal);
            }
        } else {
            if (modifier2.style.display === 'block') {
                for (let i = 0; i < modArray.length; i++) {
                    modList += (modArray[i] + ' ')
                }
                fullResults.push('Modifiers: ' + modList + ' = ' + modTotal);
            } else {
                fullResults.push('Modifiers: ' + modTotal);
            }
        }
    }

    const finalTally = totalDiceTally + modTotal;

    if (additionalDice1.style.display === 'block' || modifier1.style.display === 'block') {
        fullResults.push("Total: " + finalTally)
    }

    for (let i = 0; i < fullResults.length; i++) {
        const resultListEl = document.createElement("li");
        resultListEl.innerText = fullResults[i];
        resultDisplay.appendChild(resultListEl);
    }

    const resultSpacer = document.createElement("br");
    resultDisplay.appendChild(resultSpacer);
        
    nextRoll.style.display = "block";
    rollDice.style.display = "none";
};

// Re-Roll the same dice
function reRollingDice(event) {
    event.preventDefault();

    rollingDice(event);
};

// Reset the dice
function clearDice(event) {
    event.preventDefault();

    // Reset Display
    rollDice.style.display = "block";
    nextRoll.style.display = "none";
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
    nextRoll.style.display = "none";
    resultDisplay.textContent = null;

    // Reset Values
    modP1.checked = false;
    modM1.checked = false;
    mod1.value = null;
    modP2.checked = false;
    modM2.checked = false;
    mod2.value = null;
    modP3.checked = false;
    modM3.checked = false;
    mod3.value = null;
    modP4.checked = false;
    modM4.checked = false;
    mod4.value = null;
    modP5.checked = false;
    modM5.checked = false;
    mod5.value = null;
    modP6.checked = false;
    modM6.checked = false;
    mod6.value = null;
    modP7.checked = false;
    modM7.checked = false;
    mod7.value = null;
    modP8.checked = false;
    modM8.checked = false;
    mod8.value = null;
    modP9.checked = false;
    modM9.checked = false;
    mod9.value = null;
    modP10.checked = false;
    modM10.checked = false;
    mod10.value = null;
    diceQuantity.value = null;
    diceSides.value = null;
    diceQuantity2.value = null;
    diceSides2.value = null;
    diceQuantity3.value = null;
    diceSides3.value = null;
    diceQuantity4.value = null;
    diceSides4.value = null;
    diceQuantity5.value = null;
    diceSides5.value = null;
    diceQuantity6.value = null;
    diceSides6.value = null;
    diceQuantity7.value = null;
    diceSides7.value = null;
    diceQuantity8.value = null;
    diceSides8.value = null;
    diceQuantity9.value = null;
    diceSides9.value = null;
    diceQuantity10.value = null;
    diceSides10.value = null;
    diceQuantity11.value = null;
    diceSides11.value = null;
};

// Event Listeners
addDice.addEventListener('click', addingDice);
addModifier.addEventListener('click', addingModifier);
rollDice.addEventListener('click', rollingDice);
reRoll.addEventListener('click', reRollingDice);
newRoll.addEventListener('click', clearDice);
