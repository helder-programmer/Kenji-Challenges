import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

function tabuada(number) {
    console.log(`*** Tabuada do número ${number} ***\n`);
    for (let counter = 1; counter <= number; counter++) {
        console.log(`${counter} x ${number} = ${counter * number}`);
    }
}


function app() {
    let number = Number(prompt('Digite um número: '));
    let isValidNumber = Number.isInteger(number) && number > 0;

    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite um número válido!');

    tabuada(number);
}

app();