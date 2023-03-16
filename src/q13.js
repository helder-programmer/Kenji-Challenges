import PromptSync from "prompt-sync";
const prompt = PromptSync();

function classificateTriangle(side01, side02, side03) {
    let isTriangle = side01 < (side02 + side03) && side02 < (side01 + side03) && side03 < (side01 + side02);

    if (!isTriangle) return console.log('Nenhum triângulo é formado a partir dos valores digitados!');

    let isEquilateralTriangle = side01 == side02 && side02 == side03;
    let isIsoscelesTriangle = side01 == side02 || side01 == side03 || side02 == side03;
    let isScaleneTriangle = side01 != side02 && side02 != side03;

    if (isEquilateralTriangle) return console.log('Os valores digitados formam um triângulo equilátero!');
    if (isIsoscelesTriangle) return console.log('Os valores digitados formam um triângulo isósceles!');
    if (isScaleneTriangle) return console.log('Os valores digitados formam um triângulo escaleno!');
}


function app() {
    let side01 = Number(prompt('Digite o lado 01 do triângulo: '));
    let side02 = Number(prompt('Digite o lado 02 do triângulo: '));
    let side03 = Number(prompt('Digite o lado 03 do triângulo: '));

    let isValidValues = Number.isFinite(side01) && Number.isFinite(side02) && Number.isFinite(side03); 

    if (!isValidValues) return console.log('Digite apenas números!');
    classificateTriangle(side01, side02, side03);
}

app();