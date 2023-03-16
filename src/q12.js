import PromptSync from "prompt-sync";
const prompt = PromptSync();

function gameDuration(initialHours, initialMinutes, finalHours, finalMinutes) {

    let totalHours = 0;
    let totalMinutes = 0;

    if (initialHours >= finalHours) {
        totalHours += 12;
        finalHours += 12;
    }
    if (initialMinutes > finalMinutes) {

        
        totalHours -= 1
        finalMinutes = finalMinutes + 60
    }
    totalMinutes = (finalMinutes - initialMinutes);  
    totalHours = totalHours + finalHours - initialHours;
    console.log(`O jogo durou ${totalHours}h e ${totalMinutes}m.`);
}



function app() {
    let initialHours = 0;
    let initialMinutes = 0;
    let finalHours = 0;
    let finalMinutes = 0;


    console.log('Informe o horario inicial do jogo: ');

    while (true) {
        initialHours = Number(prompt('Hora inicial: '));
        let isValidInitialHours = initialHours <= 23 && initialHours >= 0;
        if (isValidInitialHours) break;
        console.log('Hora inválida!');
    }

    while (true) {
        initialMinutes = Number(prompt('Minuto inicial: '));
        let isValidInitialMinutes = initialMinutes <= 59 && initialMinutes >= 0;
        if (isValidInitialMinutes) break;
        console.log('Minuto inválido');
    }

    console.log('Informe o horário final do jogo: ');

    while (true) {
        finalHours = Number(prompt('Hora final: '));
        let isValidFinalHours = finalHours <= 23 && finalHours >= 0;
        if (isValidFinalHours) break;
        console.log('Hora inválida!');
    }

    while (true) {
        finalMinutes = Number(prompt('Minuto final: '));
        let isValidFinalMinutes = finalMinutes <= 59 && finalMinutes >= 0;
        if (isValidFinalMinutes) break;
        console.log('Minuto inválido');
    }


    gameDuration(initialHours, initialMinutes, finalHours, finalMinutes);
}


app();