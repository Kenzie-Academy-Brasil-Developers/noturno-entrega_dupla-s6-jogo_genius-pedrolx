function criaTemplateJogo () {
    const main = document.querySelector('main');
    const logoJogo = document.createElement('h1');
    logoJogo.innerText = 'Genius';
    main.appendChild(logoJogo);

    const section = document.createElement('section');
    section.setAttribute('id', 'containerPrincipal');
    main.appendChild(section);

    const botaoVerde = document.createElement('div');
    botaoVerde.innerHTML = `<div></div>`;
    botaoVerde.setAttribute('class', 'box');
    botaoVerde.setAttribute('id', 'boxVerde');

    const botaoVermelho = document.createElement('div');
    botaoVermelho.innerHTML = `<div></div>`;
    botaoVermelho.setAttribute('class', 'box');
    botaoVermelho.setAttribute('id', 'boxVermelha');

    const botaoAzul = document.createElement('div');
    botaoAzul.innerHTML = `<div></div>`;
    botaoAzul.setAttribute('class', 'box');
    botaoAzul.setAttribute('id', 'boxAzul');

    const botaoAmarelo = document.createElement('div');
    botaoAmarelo.innerHTML = `<div></div>`;
    botaoAmarelo.setAttribute('class', 'box');
    botaoAmarelo.setAttribute('id', 'boxAmarela');

    section.appendChild(botaoVerde);
    section.appendChild(botaoVermelho);
    section.appendChild(botaoAzul);
    section.appendChild(botaoAmarelo);

    const circuloCentral = document.createElement('div');
    circuloCentral.setAttribute('class', 'circuloCentral');

    section.appendChild(circuloCentral);

    const info = document.createElement('div');
    info.setAttribute('id', 'info');
    main.appendChild(info);

    const botaoIniciar = document.createElement('button');
    botaoIniciar.innerText = 'Iniciar Sequência';
    botaoIniciar.setAttribute('id', 'botaoIniciar');
    info.appendChild(botaoIniciar);

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.innerText = 'Reiniciar';
    botaoReiniciar.setAttribute('id', 'botaoReiniciar');
    info.appendChild(botaoReiniciar);

    const placar = document.createElement('div');
    placar.setAttribute('id', 'placar');
    info.appendChild(placar);

    const pontos = document.createElement('p');
    pontos.setAttribute('id', 'pontuacao');
    pontos.innerText = 0;
    placar.appendChild(pontos);
}

criaTemplateJogo();

let mensagemInicial = document.createElement('h2');
mensagemInicial.innerText = 'Clique no botão para iniciar e memorize a sequência de cores.'
let circuloCentral = document.querySelector('div.circuloCentral');
circuloCentral.appendChild(mensagemInicial);

const boxVerde = document.getElementById('boxVerde');
const boxVermelha = document.getElementById('boxVermelha');
const boxAzul = document.getElementById('boxAzul');
const boxAmarela = document.getElementById('boxAmarela');

let controledeCores = [];
let coresPressionadas = [];

const botaoIniciar = document.getElementById('botaoIniciar');
const botaoReiniciar = document.getElementById('botaoReiniciar');
let pontos = document.getElementById('pontuacao');

const cores = {
    1: boxVerde.id,
    2: boxAmarela.id,
    3: boxVermelha.id,
    4: boxAzul.id
}

botaoIniciar.addEventListener('click', inicioJogo);
botaoReiniciar.addEventListener('click', reiniciaJogo);

boxVerde.addEventListener('click', selecionaBox);
boxAmarela.addEventListener('click', selecionaBox);
boxAzul.addEventListener('click', selecionaBox);
boxVermelha.addEventListener('click', selecionaBox);

let validacoes = [];

function inicioJogo () {
    incrementaArrayCores();
    leArrayCores(controledeCores);
}
let ponto = 0;
function passarRodada () {
    switch (validaJogo()) {
        case true && validacoes.length >= 1 && controledeCores.length === coresPressionadas.length:
            coresPressionadas.length = 0;
            validacoes.length = 0;
            ponto++
            pontos.innerText = ponto;
            inicioJogo();
            break;
        case false:
            reiniciaJogo();
            break;
    }
}

function validaJogo () {
    comparaCores();
    let result = validacoes.every((elemen, index)=>{
        return elemen === true;
    });

    return result;
}

function comparaCores() {
    for (let i = 0; i < coresPressionadas.length; i++) {
        if (coresPressionadas[i] === controledeCores[i]) {
            validacoes.push(true);
        } else {
            validacoes.push(false);
        }
    }
 // chamar reinicia jogo dentro de um if para caso false
 // caso true incrementar
}

function reiniciaJogo() {
    controledeCores.length = 0;
    coresPressionadas.length = 0;
    mensagemInicial.innerText = `Vamos começar novemente.`
    pontos.innerText = 0;
    inicioJogo();
}

function selecionaBox(event) {
    let target = event.target.id;
    piscaCor(target)
    coresPressionadas.push(target);
    passarRodada();
}

function piscaCor (idbox) {
        let corSelecionada = document.getElementById(`${idbox}`);
        corSelecionada.classList.add('boxClaro');
        setTimeout(()=>{
            corSelecionada.classList.remove('boxClaro');
        },500);

}

function incrementaArrayCores () {
        let corAleatoria = geraCorAleatoriaBox();
        controledeCores.push(corAleatoria);

}

function leArrayCores (array) {
    let contador = 0;
    const sequenciaCores = setInterval(function () {
            piscaCor(array[contador]);
            contador++;
        if (contador == array.length) {
            clearInterval(sequenciaCores);
            setTimeout(()=>{
                mensagemInicial.innerText = 'Agora é sua vez. Clique nas cores que piscaram e depois em iniciar sequência para verificar.';
            }, 1000);
        }
    }, 1500)

}

function geraCorAleatoriaBox () {
    const numero = Math.round(Math.random() * (4 - 1) + 1);
    return cores[numero];
}