export function getOddNumbers(upTo) {
    const oddNumbers = [];
    for (let i = 1; i <= upTo; i += 2) {
        oddNumbers.push(i);
    }
    return oddNumbers;
}

