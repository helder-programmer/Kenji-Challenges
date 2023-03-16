import PromptSync from "prompt-sync";
const prompt = PromptSync();

const verifyNumber = number => {
    let isPositiveNumber = number > 0;
    if (isPositiveNumber) return true;
    return false;
}


function app() {
    let number = Number(prompt('Digite um número inteiro: '));
    let isValidNumber = Number.isInteger(number) && number != 0;

    if (!isValidNumber) return console.log('Digite somente valores inteiros e diferentes de zero!');

    if (verifyNumber(number)) return console.log(`O número digitado é um número positivo`);
    return console.log(`O número digitado é um número negativo`);    

}

app();