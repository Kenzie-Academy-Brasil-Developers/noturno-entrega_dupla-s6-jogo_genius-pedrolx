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
    mensagemInicial.innerText = 'Se atente as cores que vão piscar e repita a sequência.';
    piscaCores;
}

function piscaCores() {
    let numeroAleatorio = geraNumeroAleatorio(1, 4);
    if (numeroAleatorio === 1) {
            boxVerde.style.opacity = '100%';
    } else if (numeroAleatorio === 2) { 
            boxVermelha.style.opacity = '100%';
    } else if (numeroAleatorio === 3) {
            boxAzul.style.opacity = '100%';
    } else if (numeroAleatorio === 4) {
            boxAmarela.style.opacity = '100%';
    }
    boxVerde.style.opacity = '70%';
    boxVermelha.style.opacity = '70%';
    boxAzul.style.opacity = '70%';
    boxAmarela.style.opacity = '70%';
}

function geraNumeroAleatorio (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}