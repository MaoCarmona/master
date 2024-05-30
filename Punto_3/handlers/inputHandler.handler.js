const readline = require('readline');
const numberGenerator = require('../utils/oddNumbersGenerator.util');

function promptForNumber() {
    return new Promise((resolve, reject) => {
        const readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Enter an integer (or type "exit" to quit): ', (answer) => {
            readLine.close();
            resolve(answer);
        });
    });
}

function processInput(input) {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('Please enter a valid integer.');
    } else {
        const result = numberGenerator.getOddNumbers(number);
        console.log('Odd numbers:', result);
    }
}

module.exports = { promptForNumber, processInput };
