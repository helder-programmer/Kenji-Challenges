import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const calculateSalaryAverageAndChildrenNumbersAverage = (...persons) => {
    let salaryAverage = 0;
    let childrenAverage = 0;
    let maxSalary = 0;
    let personPercentageWithSalaryTo350 = 0;

    persons.forEach(currentPerson => {
        salaryAverage += currentPerson.salary;
        childrenAverage += currentPerson.children;
        if (currentPerson.salary <= 350) {
            personPercentageWithSalaryTo350++;
        }
    });

    salaryAverage = (salaryAverage / persons.length);
    childrenAverage = (childrenAverage / persons.length);

    let salaries = persons.map(currentPerson => {
        return currentPerson.salary;
    });
    maxSalary = Math.max(...salaries);
    personPercentageWithSalaryTo350 = (personPercentageWithSalaryTo350 * 100) / persons.length;



    console.log('***Estatísticas da pesquisa***\n\n');
    console.log(`Pessoas entrevistadas: ${persons.length}`);
    console.log(`Média de salário entre as pessoas: ${salaryAverage.toFixed(2)}`);
    console.log(`Média de filhos entre as pessoas: ${childrenAverage.toFixed(2)}`);
    console.log(`Maior salário entre as pessoas: ${maxSalary}`);
    console.log(`Percentual de pessoas com salário de até R$350,00: ${personPercentageWithSalaryTo350.toFixed(2)}%`);
}


function app() {
    let persons = [];

    let personsQuantity = Number(prompt('Digite a quantidade de pessoas que participaram da pesquisa: '));
    if (!isIntegerAndPositiveNumber(personsQuantity)) return console.log('Informe um valor válido de pessoas!');

    for (let counter = 1; counter <= personsQuantity; counter++) {
        while (true) {
            let personSalary = Number(prompt(`Digite o salário da pessoa ${counter}: `));
            let personChilren = Number(prompt(`Digite o a quantidade de filhos da pessoa ${counter}: `));
            let isValidValues = Number.isFinite(personSalary) && Number.isInteger(personChilren);

            if (isValidValues) {
                let person = { salary: 0, children: 0 };
                person.salary = personSalary;
                person.children = personChilren;
                persons.push(person);
                break;
            }
            console.log('Digite um valores válidos para o salário e para o número de filhos da pessoa!');
        }
    }
    calculateSalaryAverageAndChildrenNumbersAverage(...persons);
}

app();
