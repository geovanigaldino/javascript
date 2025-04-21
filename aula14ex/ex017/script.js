function tabuada() {
    // Obtém o elemento de entrada do número
    let num = document.getElementById('txtn');
    // Obtém o elemento da lista onde a tabuada será exibida
    let tab = document.getElementById('seltab');

    // Verifica se o campo de entrada está vazio
    if (num.value.length == 0) {
        alert('Por favor, digite um número!'); // Exibe um alerta ao usuário
    } else {
        let n = Number(num.value); // Converte o valor digitado para número
        let c = 1; // Inicializa o contador

        tab.innerHTML = ''; // Limpa qualquer conteúdo anterior na lista

        // Loop para gerar a tabuada de 1 a 10
        while (c <= 10) {
            let item = document.createElement('option'); // Cria um novo elemento <option>
            item.text = `${n} x ${c} = ${n * c}`; // Define o texto do item com o cálculo da tabuada
            item.value = `tab${c}`; // Define um valor para o item (opcional, mas útil)
            tab.appendChild(item); // Adiciona o item à lista
            c++; // Incrementa o contador
        }
    }
}
