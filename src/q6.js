import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const isPerfectValue = number => {
    let dividersArray = [];

    for (let counter = 1; counter < number; counter++) {
        let isDivider = number % counter == 0;
        if (isDivider) dividersArray.push(counter);
    }

    let sumResult = 0;

    dividersArray.forEach(divider => {
        sumResult += divider;
    });


    if (sumResult == number) return true;
    return false;
}


function app() {
    let number = Number(prompt('Digite um número: '));
    

    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite apenas números inteiros e positivos!');
    
    if(isPerfectValue(number)) return console.log(`O número ${number} é perfeito!`);
    return console.log(`O número ${number} não é perfeito!`);

}

app();