/* eslint-disable no-console */
import { createInterface } from 'readline';

import { getOddNumbers } from '../utils/oddNumbersGenerator.util';

function promptForNumber() {
    return new Promise((resolve) => {
        const readLine = createInterface({
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
        const result = getOddNumbers(number);
        console.log('Odd numbers:', result);
    }
}

export default { promptForNumber, processInput };
