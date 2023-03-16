import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const summation = number => {
    let separatedNumber = number.toString().split('');
    let summationResult = 0;
    separatedNumber.forEach(number => {
        summationResult += Number(number);
    });
    return summationResult;
}


function app() {
    let number = Number(prompt('Digite um número inteiro e positivo: '));
    if (!isIntegerAndPositiveNumber(number)) return console.log('Digite um número válido!');
    console.log(`O somatório de ${number} é ${summation(number)}`);
}

app();