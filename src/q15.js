import PromptSync from "prompt-sync";
const prompt = PromptSync();

const calculateNumbersAverage = (...numbers) => {
    let sumResult = 0;

    numbers.forEach(currentNumber => {
        sumResult += currentNumber;
    });

    let numbersAverage = sumResult / numbers.length;

    return numbersAverage;
}


let numbersQuantity = 0;
let numbersArray = [];

while (true) {
    numbersQuantity = Number(prompt('Digite quantos números deseja digitar: '));
    let isValidNumberQuantity = Number.isInteger(numbersQuantity) && numbersQuantity > 0;
    if (isValidNumberQuantity) break;
    console.log('Informe um número válido!');
}

for (let counter = 1; counter <= numbersQuantity; counter++) {
    let number = 0;

    while (true) {
        number = Number(prompt(`Digite o número ${counter}: `));
        if (Number.isFinite(number)) break;
        console.log('Digite somente números!');
    }

    numbersArray.push(number);
}

console.log(`A média aritmética dos números que você digitou é ${calculateNumbersAverage(...numbersArray)}`);
