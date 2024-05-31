/* eslint-disable no-console */
import { promptForNumber, processInput } from './handlers/inputHandler.handler';

async function main() {
    console.log('Welcome to the Odd Number Generator!');
    const loop = true;

    while (loop) {
        const input = await promptForNumber();

        if (input.toLowerCase() === 'exit') {
            console.log('Exiting...');
            break;
        }

        processInput(input);
    }

    console.log('Thank you for using the Odd Number Generator!');
}

main().catch((error) => {
    console.error('An error occurred:', error);
});
