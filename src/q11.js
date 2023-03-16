import PromptSync from "prompt-sync";
const prompt = PromptSync();


const sortNumbers = (number01, number02, number03) => {

    let numbersArray = [number01, number02, number03];
    let sortedNumbersArray = numbersArray.sort((number01, number02) => {
        if (number01 < number02) return -1;
        if (number01 > number02) return 1;
        if (number01 == number02) return 0;
    });

    return sortedNumbersArray;
}



function app() {
    let number01 = Number(prompt('Digite o número 01: '));
    let number02 = Number(prompt('Digite o número 02: '));
    let number03 = Number(prompt('Digite o número 03: '));

    let isValidNumbers = Number.isInteger(number01) && Number.isInteger(number02) && Number.isInteger(number03);

    if (!isValidNumbers) return console.log('Digite apenas números inteiros!');
    
    console.log(`Aqui estão seus números em ordem crescente: ${sortNumbers(number01, number02, number03)}`);
}

app();




