let mensagemInicial = document.createElement('h2');
mensagemInicial.innerText = 'Clique aqui para iniciar.'
let circuloCentral = document.querySelector('div.circuloCentral');
circuloCentral.appendChild(mensagemInicial);
let boxVerde = document.getElementById('boxVerde');
let boxVermelha = document.getElementById('boxVermelha');
let boxAzul = document.getElementById('boxAzul');
let boxAmarela = document.getElementById('boxAmarela');

mensagemInicial.addEventListener('click', iniciaJogo);

function iniciaJogo () {
    let contador 
    mensagemInicial.innerText = 'Se atente as cores que vão piscar e repita a sequência.';
    piscaCores;
}

function piscaCores() {
    let numeroAleatorio = geraNumeroAleatorio(1, 4);
    console.log(numeroAleatorio);
    switch (numeroAleatorio) {
        case 1:
            boxVerde.style.boxShadow = '1px 1px 3px 10px green';
            boxVerde.style.filter = 'brightness(2)';
        break;
        case 2:
            boxVermelha.style.boxShadow = '1px 1px 3px 10px red';
            boxVermelha.style.filter = 'brightness(2)';
        break
        case 3:
            boxAzul.style.boxShadow = '1px 1px 3px 10px blue';
            boxAzul.style.filter = 'brightness(2)';
        break;
        case 4:
            boxAmarela.style.boxShadow = '1px 1px 3px 10px yellow';
            boxAmarela.style.filter = 'brightness(2)';
        break;
    }
    boxVerde.style.filter = 'brightness(0.75)';
    boxVermelha.style.filter = 'brightness(0.75)';
    boxAzul.style.filter = 'brightness(0.75)';
    boxAmarela.style.filter = 'brightness(0.75)';
}

function geraNumeroAleatorio (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}