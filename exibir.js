const consertos = require("./consertos");

/** PASSO 2 */

let itensProntos = [];

itensProntos.push(consertos.aparelho[2], consertos.pronto[0]);


itensProntos.forEach(pronto => {
    console.log(pronto);
})

console.log('-----------------------')


let itensAConsertar = [];

itensAConsertar.push(consertos.aparelho[0], consertos.aparelho[1], consertos.pronto[1]);
itensAConsertar.forEach(pendente => {
    console.log(pendente);
})

console.log('-----------------------')

/** PASSO 3 */


let consertado = [];

consertado.push(consertos.aparelho[2]);

consertado.push([
    consertos.itensconsertados[0], 
    consertos.itensconsertados[1],
    consertos.itensconsertados[2],
    consertos.itensconsertados[3],
    consertos.itensconsertados[4], 
    consertos.itensconsertados[5],
    consertos.itensconsertados[6],
    consertos.itensconsertados[7],
]);


let consertadoValor =[ 
    consertos.valores[0],
    consertos.valores[1],
    consertos.valores[2],
    consertos.valores[3],
    consertos.valores[4],
    consertos.valores[5],
    consertos.valores[6],
    consertos.valores[7],
]
const soma = consertadoValor.reduce((valorA,valorB) => valorA + valorB );


console.log(`Aparelho: ${consertado[0]}`);
console.log(`Itens consertados: ${consertado[1]}`);
console.log(`Valor total: R$ ${soma},00`);



