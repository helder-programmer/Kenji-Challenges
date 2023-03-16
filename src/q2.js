import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();


function isPrimeNumber(number) {


    for (let currentNumber = 2; currentNumber < number; currentNumber++) {
        let isCompositeNumber = Number.isInteger(number / currentNumber);

        if (isCompositeNumber) {
            return false;
        }
    }
    return true;
}


function app() {
    let number = Number(prompt('Digite um número inteiro positivo: '));
    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite um número válido');
    if (!isPrimeNumber(number)) return console.log('Não é um número primo!');
    return console.log('É um número primo!');
}

app();

