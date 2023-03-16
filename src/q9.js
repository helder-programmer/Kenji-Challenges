import PromptSync from "prompt-sync";
const prompt = PromptSync();

const classificateFinalAverage = finalAverage => {
    let isClassificationD = finalAverage >= 0 && finalAverage <= 4.9;
    let isClassificationC = finalAverage >= 5 && finalAverage <= 6.9;
    let isClassificationB = finalAverage >= 7 && finalAverage <= 8.9;
    let isClassificationA = finalAverage >= 9 && finalAverage <= 10;

    if (isClassificationD) return 'Conceito D';
    if (isClassificationC) return 'Conceito C';
    if (isClassificationB) return 'Conceito B';
    if (isClassificationA) return 'Conceito A';
}


function app() {
    let average = Number(prompt('Digite a média final do aluno: '));
    let isValidAverage = isFinite(average) && average >= 0;
    if (!isValidAverage) return console.log('Digite um número válido!');

    console.log(`A média do aluno faz parte do ${classificateFinalAverage(average)}`);
}
app();