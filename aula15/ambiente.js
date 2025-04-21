// Cria um vetor chamado 'num' com os valores 5, 8, 2, 9 e 4
let num = [5, 8, 2, 9, 4];

num.push(1); // Adiciona o número 1 ao final do vetor
num.sort(); // Ordena os elementos do vetor em ordem alfabética

console.log(num);
console.log(`O vetor tem ${num.length} posições`); //Exibe no console quantos elementos (posições) existem no vetor
console.log(`O primeiro valor do vetor é ${num[0]}.`); //Exibe no console o primeiro valor do vetor (índice 0)

let pos = num.indexOf(9);
if (pos == -1) {
    console.log("O valor não foi encontrado.")
} else {
    console.log(`O valor 8 está na posição ${pos}.`)
}
