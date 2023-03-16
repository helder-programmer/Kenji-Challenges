import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js'
const prompt = PromptSync();

const calculateFactorial = number => {
    let factorial = 1;
    for (let counter = 1; counter <= number; counter++) {
        factorial = factorial * counter;
    }
    return factorial;
}

function app() {
    let number = Number(prompt('Digite um número inteiro positivo: '));

    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite um número válido!');

    console.log(`O fatorial do número digitado é ${calculateFactorial(number)}`);
}

app();