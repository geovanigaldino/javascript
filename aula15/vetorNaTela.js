// Cria um vetor (array) chamado 'valores' com os números 5, 8, 2, 9 e 4
let valores = [5, 8, 2, 9, 4];
valores.sort()

//Mostra o vetor completo no console
console.log(valores);

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`);
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
