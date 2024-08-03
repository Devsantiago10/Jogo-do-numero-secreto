
let numeroSecreto = gerarNumero();
let tentativas = 1;
let palavraTentativa;
exibirTextoInicial();

function inserirTxt (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate: 1.6});
}

function exibirTextoInicial() {
    inserirTxt ('h1','Jogo do Número Secreto');
    inserirTxt ('p','Escolha um número de 1 a 50:') 
}

function chutar() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute);
    if (chute == '') {
        alert ('Não é possível chutar um número sem antes digitá-lo no campo disponível.')
    //responsiveVoice.speak('Não é possível chutar um número sem antes digitá-lo no campo disponível.', 'Brazilian Portuguese Male', {rate:1.2});
} else {
    if (chute == numeroSecreto) {
    palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    inserirTxt ('h1', 'Parabéns!')
    inserirTxt ('p', `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}.`); 
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto) {
    inserirTxt ('p', `O Número Secreto é menor que ${chute}.`);
} else {
    inserirTxt ('p', `O Número Secreto é maior que ${chute}.`);
}
    tentativas ++;
    limparCampo();   
}
    }
        }

function gerarNumero() {
    return parseInt(Math.random() * 50 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
