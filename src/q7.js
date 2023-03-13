import PromptSync from "prompt-sync";
const prompt = PromptSync();

const isInteger = number => {
    let isInteger = Number.isInteger(number);
    if (!isInteger) return false;

    return true




}

const number = Number(prompt('Digite um número inteiro: '));


let isValidNumber = Number.isFinite(number);
if (isValidNumber) {
    if (isInteger(number)) {
        console.log('O valor digitado é inteiro!');
    } else {
        console.log('O valo digitado não é inteiro!');
    }
} else {
    console.log('Digite um valor válido e inteiro!');
}
