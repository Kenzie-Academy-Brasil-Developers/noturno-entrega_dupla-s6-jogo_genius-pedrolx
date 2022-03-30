let mensagemInicial = document.createElement('h2');
mensagemInicial.innerText = 'Clique aqui para iniciar.'
let circuloCentral = document.querySelector('div.circuloCentral');
circuloCentral.appendChild(mensagemInicial);
let boxVerde = document.getElementById('boxVerde');
let boxVermelha = document.getElementById('boxVermelha');
let boxAzul = document.getElementById('boxAzul');
let boxAmarela = document.getElementById('boxAmarela');
let pontos = 5;
let contador = 0;

mensagemInicial.addEventListener('click', iniciaJogo);

function iniciaJogo () {
    mensagemInicial.innerText = 'Se atente as cores que vão piscar e repita a sequência.';

    setTimeout(()=>{
        piscaCores();
    }, 1000);
}

function piscaCores() {
    let numeroAleatorio = geraNumeroAleatorio(1, 4);
    console.log(numeroAleatorio);
    switch (numeroAleatorio) {
        case 1:
            acendeCorBox(boxVerde, '5');
            setTimeout(()=>{
                apagaCorBox(boxVerde, 1)
            }, 1000);
        break;
        case 2:
            acendeCorBox(boxVermelha, '5');
            setTimeout(()=>{
                apagaCorBox(boxVermelha, 1)
            }, 1000);
        break;
        case 3:
            acendeCorBox(boxAzul, '5');
            setTimeout(()=>{
                apagaCorBox(boxAzul, 1)
            }, 1000);
        break;
        case 4:
            acendeCorBox(boxAmarela, '5');
            setTimeout(()=>{
                apagaCorBox(boxAmarela, 1)
            }, 1000);
        break;
    }
}

function acendeCorBox(box, valor) {
    box.style.filter = `brightness(${valor})`;
    console.log(`Mudou o box`);
}

function apagaCorBox (box, valor) {
    box.style.filter = `brightness(${valor})`;
    console.log(`Apagou o box`);
}

function geraNumeroAleatorio (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
