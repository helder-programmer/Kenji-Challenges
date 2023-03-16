import PromptSync from "prompt-sync";
const prompt = PromptSync();

const isEvenNumber = number => {
    if (number % 2 == 0) return true;

    return false;
}

const number = Number(prompt('Digite um número: '));

if (!Number.isInteger(number)) {
    console.log('Digite um número inteiro!');
} else {
    if (isEvenNumber(number)) {
        console.log('Você digitou um número par!');
    } else  {
        console.log('Você digitou um número impar!');
    }
}