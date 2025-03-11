let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function alterarTexto(tag, novoTexto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = novoTexto;
     responsiveVoice.speak(novoTexto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
     alterarTexto(`h1`, `Jogo do número secreto`);
     alterarTexto(`p`, `Escolha um número entre 1 e 100`);
}

function verificarChute() {
     let chute = document.querySelector(`input`).value;

     if (chute == numeroSecreto) {
          alterarTexto(`h1`, `Acertou`);
          alterarTexto(`p`, `Você descobriu o número secreto com ${tentativas} ${tentativas === 1 ? `tentativa` : `tentativas`}`);
          document.querySelector(`#reiniciar`).removeAttribute(`disabled`);

     } else {
          if (chute > numeroSecreto) {
               alterarTexto(`p`, `O número secreto é menor`);
          } else {
               alterarTexto(`p`, `O número secreto é maior`);
          }
          tentativas++
          limparCampo();
     }

}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let QuantidadeDeElementos = listaDeNumerosSorteados.length;
     if (QuantidadeDeElementos == numeroLimite) {
          listaDeNumerosSorteados = [];
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio();
     } else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          return numeroEscolhido;
     }
}

function limparCampo() {
     chute = document.querySelector(`input`);
     chute.value = ``;
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}

