import PromptSync from "prompt-sync";
const prompt = PromptSync();

let primeiraNota = Number(prompt("Informe a primeira nota: "));
let segundaNota = Number(prompt("Informe a segunda nota: "));
let terceiraNota = Number(prompt("Informe a terceira nota: "));

let opcao = 0;

function app(primeiraNota, segundaNota, terceiraNota) {

    opcao = prompt("Informe uma opção:\n'A': Média Aritmética\n'P': Média Ponderada\n'H': Média Harmônica\n");

    switch (opcao) {
        case 'A':
            let mediaAritmetica = (primeiraNota + segundaNota + terceiraNota) / 3;
            console.log(`A média aritmética do aluno é ${(mediaAritmetica).toFixed(2)}`);
            break;
        case 'P':
            let mediaPonderada = (5 * primeiraNota + 3 * segundaNota + 2 * terceiraNota) / 10;
            console.log(`A média ponderada da turma é ${(mediaPonderada).toFixed(2)}`);
            break;
        case 'H':
            let mediaHarmonica = (3 / ((1 / primeiraNota) + (1 / segundaNota) + (1 / terceiraNota))).toFixed(2);
            console.log(`A média harmônica da turma é ${mediaHarmonica}`);
            break;
        default:
            console.log("Informe uma opção válida!");
            break;
    }
}

app(primeiraNota, segundaNota, terceiraNota);