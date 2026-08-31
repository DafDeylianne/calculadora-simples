const display = document.querySelector(".display");

const botoesNumeros = document.querySelectorAll(".btn-num");

botoesNumeros.forEach(function(botao) {

    botao.addEventListener("click", function() {

        display.value = display.value + botao.textContent;

    });

});


const botaoLimpar = document.querySelector(".btn-limpar");

botaoLimpar.addEventListener("click", function() {

    display.value = "";

});


const botoesOperacao = document.querySelectorAll(".btn-operacao");

let primeiroNumero;
let operacaoAtual;

botoesOperacao.forEach(function(botao) {

    botao.addEventListener("click", function() {

        primeiroNumero = display.value;

        operacaoAtual = botao.textContent;

        display.value = "";

    });

});


const botaoIgual = document.querySelector(".btn-igual");

botaoIgual.addEventListener("click", function() {

    let segundoNumero;

    segundoNumero = display.value;

    segundoNumero = Number(segundoNumero);
    primeiroNumero = Number(primeiroNumero);

    if (operacaoAtual === "+") {

        display.value = primeiroNumero + segundoNumero;

    } else if (operacaoAtual === "-") {

        display.value = primeiroNumero - segundoNumero;

    } else if (operacaoAtual === "X") {

        display.value = primeiroNumero * segundoNumero;

    } else if (operacaoAtual === "/") {

        display.value = primeiroNumero / segundoNumero;

    }

});

const botaoDeletarTudo = document.querySelector(".btn-deletar-tudo");

botaoDeletarTudo.addEventListener("click", function() {

    display.value = "";
    primeiroNumero = "";
    operacaoAtual = "";

});