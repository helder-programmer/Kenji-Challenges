import PromptSync from "prompt-sync";
const prompt = PromptSync();

const greatWeight = (height, sex) => {
    let isMasc = sex == 'm';
    let isFem = sex == 'f';
    if (isMasc) return ((72.7 * height) - 58).toFixed(2);
    if (isFem) return ((62.1 * height) - 44.7).toFixed(2);
}

function app() {
    let sex = prompt('Digite seu sexo: ');
    let height = Number(prompt('Digite sua altura: '));

    let isValidHeight = Number.isFinite(height) && height >= 0;
    let isValidSex = ['m', 'f'].includes(sex);

    if (!isValidSex) return console.log('Digite um sexo válido!');
    if (!isValidHeight) return console.log('Digite um número válido!');

    console.log(`O seu peso ideal é ${greatWeight(height, sex)}`);
}

app();