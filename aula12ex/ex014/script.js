window.onload = function carregar() {
    let msg  = document.getElementById('msg');
    let img = document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/foto-manha.webp';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
       // Boa tarde!
       img.src = 'imagens/foto-tarde.webp';
       document.body.style.background = '#b9846f';
    }
    else {
       // Boa noite!
       img.src = 'imagens/foto-noite.webp';
         document.body.style.background = '#515154';
    }
}
