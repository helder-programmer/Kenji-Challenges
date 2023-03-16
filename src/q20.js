import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const summation = number => {
    let summationResult = 0;
    for (let counter = 1; counter <= number; counter++) {
        summationResult += counter;
    }

    return summationResult;
}


function app() {
    let number = Number(prompt('Digite um número inteiro e positivo: '));
    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite apenas números inteiros e positivos!');
    console.log(`O somatório de ${number} é ${summation(number)}`);
}

app();