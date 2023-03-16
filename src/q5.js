import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const convertCompositAgeToDays = (year, month, day) => {
    let yearToDay = year * 365;
    let monthToDay = month * 30;
    let days = day;

    let ageInDays = yearToDay + monthToDay + days;

    return ageInDays;
}

function app() {
    let ageInYears = Number(prompt(`Qual a sua idade em anos? `));
    let ageInMonth = Number(prompt(`E quantos meses ? `));
    let ageInDays = Number(prompt(`E quantos dias? `));

    let isValidValues = Number.isInteger(ageInDays) && Number.isInteger(ageInMonth) && Number.isInteger(ageInYears);

    if (!isValidValues) return console.log('Informe apenas valores inteiros na sua idade!');

    console.log(`Sua idade expressa em dias é: ${convertCompositAgeToDays(ageInYears, ageInMonth, ageInDays)}`);
}

app();