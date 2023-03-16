import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();


const dividersFromNumber = number => {
    let dividersArray = [];

    for (let counter = 1; counter <= number; counter++) {
        let isDivider = number % counter == 0;
        if (isDivider) dividersArray.push(counter);
    }

    return dividersArray.length;

}

function app() {
    let number = Number(prompt('Digite um número inteiro e positivo: '));

    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite apenas números inteiros e positivos!');

    console.log(`O número ${number} possui ${dividersFromNumber(number)} divisores`);
}

app();