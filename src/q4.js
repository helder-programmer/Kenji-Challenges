import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const convertSeconds = seconds => {

    let hours = Math.trunc(seconds / 3600);
    let minutes = Math.trunc((seconds % 3600) / 60);
    let currentSeconds = Math.trunc(seconds % 60);

    let finalTime = `${hours}:${minutes}:${currentSeconds}`;

    return finalTime;
}


let seconds = Number(prompt('Digite o tempo da fabricação em segundos: '));
if (!isIntegerAndPositiveNumber(seconds)) {
    console.log('Digite um número válido!');
} else {
    console.log(`A fabricação demorou ${convertSeconds(seconds)} para ser concluída!`);
}

