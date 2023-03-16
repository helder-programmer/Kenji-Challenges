import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const maxAndMinNumber = (...numbers) => {
    let maxAndMinNumberObject = { max: Math.max(...numbers), min: Math.min(...numbers) };
    return maxAndMinNumberObject;
}

function app() {
    let numbersQuantity = Number(prompt('Digite a quantidade de números que deseja digitar: '));
    let numbersArray = [];

    if (!isIntegerAndPositiveNumber(numbersQuantity)) return console.log('Digite um número válido para quantidade de números!');

    for (let counter = 1; counter <= numbersQuantity; counter++) {
        let number = Number(prompt(`Digite o número ${counter}: `));
        let isValidNumber = Number.isFinite(number);

        if (!isValidNumber) {
            console.log('Digite um número válido!');
            counter--;
            continue;
        }


        numbersArray.push(number);
    }

    console.log(`O maior número que você digitou foi: ${maxAndMinNumber(...numbersArray).max}\nO menor número que você digitou foi ${maxAndMinNumber(...numbersArray).min}`);
}

app();