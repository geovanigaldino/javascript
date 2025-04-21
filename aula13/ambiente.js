// Estrutura de repetição com teste lógico no início (while)
// O loop while executa enquanto a condição for verdadeira

// Inicializa a variável contador com o valor 1
var contador = 1;

// Enquanto o contador for menor ou igual a 6, executa o bloco de código
while (contador <= 6) {
    // Exibe no console a mensagem com o número do passo atual
    console.log(`Passo ${contador}`);
    
    // Incrementa o contador em 1 (contador++ é o mesmo que contador = contador + 1)
    contador++;
}




//Estrutura de repetição com teste lógico no final (do while)
// O loop do while executa pelo menos uma vez, mesmo que a condição seja falsa no início
var contador = 1;
do  {
    console.log(`Passo ${contador}`);
    contador++;
} while (contador <= 6);
