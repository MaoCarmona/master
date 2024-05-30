const inputHandler = require('./handlers/inputHandler.handler');

async function main() {
    console.log('Welcome to the Odd Number Generator!');

    while (true) {
        const input = await inputHandler.promptForNumber();

        if (input.toLowerCase() === 'exit') {
            console.log('Exiting...');
            break;
        }

        inputHandler.processInput(input);
    }

    console.log('Thank you for using the Odd Number Generator!');
}

main().catch((error) => {
    console.error('An error occurred:', error);
});
