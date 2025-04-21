function verificar() {
    // Obtém a data atual e o ano
    let data = new Date();
    let ano = data.getFullYear();
    
    // Obtém o elemento de input do ano de nascimento e o div de resultado
    let fano = document.getElementById('txtano');
    let resultado = document.querySelector('div#resultado');
    
    // Verifica se o campo está vazio ou se o ano é maior que o atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        // Obtém os radio buttons de gênero
        let fsex = document.getElementsByName('radsex');
        // Calcula a idade subtraindo o ano de nascimento do ano atual
        let idade = ano - Number(fano.value);
        let genero = '';

        // Cria um elemento de imagem para exibir a foto correspondente
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        // Verifica se o gênero selecionado é masculino
        if (fsex[0].checked) {
            genero = 'Homem';
            // Define a imagem com base na faixa etária para homens
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menino.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            // Define a imagem com base na faixa etária para mulheres
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menina.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa.png');
            }
        }
        
        // Configura o estilo e exibe o resultado
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        // Adiciona a imagem ao resultado
        resultado.appendChild(img);        
    }
}