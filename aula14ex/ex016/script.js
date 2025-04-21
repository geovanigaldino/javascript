function contar() {
    // Obtém os elementos de entrada e saída do HTML
    let ini = document.getElementById('txti'); // Campo do número inicial
    let fim = document.getElementById('txtf'); // Campo do número final
    let passo = document.getElementById('txtp'); // Campo do passo
    let res = document.getElementById('res'); // Div onde o resultado será exibido

    // Verifica se algum dos campos está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'; // Mensagem de erro no HTML
        return; // Encerra a função
    }

    res.innerHTML = 'Contando: <br>'; // Prepara a área de resultado
    let i = Number(ini.value); // Converte o valor inicial para número
    let f = Number(fim.value); // Converte o valor final para número
    let p = Number(passo.value); // Converte o passo para número

    // Se o passo for inválido (0 ou negativo), assume o valor 1 e avisa o usuário
    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1.');
        p = 1;
    }

    // Verifica se será uma contagem crescente ou regressiva
    if (i < f) {
        // Contagem crescente
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `; // Adiciona número e emoji de seta
        }
    } else {
        // Contagem regressiva
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449} `; // Adiciona número e emoji de seta
        }
    }

    res.innerHTML += `\u{1F3C1}`; // Adiciona emoji de bandeira no final
}
