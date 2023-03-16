import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();


function bhaskaraFormula(a, b, c) {
    let x1 = 0;
    let x2 = 0;

    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) return console.log('Delta é menor do que zero. Não existe raíz real para esta equação');

    if (delta == 0) {
        x1 = (-b) / (2 * a);
        x2 = (-b) / (2 * a);

        return console.log(`Delta igual a zero. As duas raízes da equação são iguais:\nx1: ${x1}\nx2: ${x2}`);

    }

    if (delta > 0) {
        x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
        return console.log(`Delta maior do que zero. As duas raízes da equação são diferentes:\nx1: ${x1}\nx2: ${x2}`);
    }



}


function app() {
    let number01 = Number(prompt('Digite o A da equação diferente de 0: '));
    let number02 = Number(prompt('Digite o B da equação: '));
    let number03 = Number(prompt('Digite o C da equação: '));

    let isValidValues = (
        Number.isInteger(number01)
        &&
        number01 != 0
        &&
        Number.isInteger(number02)
        &&
        Number.isInteger(number03)
    );

    if (!isValidValues) return console.log('Digite apenas valores válidos e inteiros! ');

    bhaskaraFormula(number01, number02, number03);
}

app();