let nick = document.getElementById("nick")
let comecar = document.getElementById("comecar")
let frase = document.getElementById("frase")
let setor = document.getElementById("setor")
let numero = document.getElementById("numero")
let jogar = document.getElementById("jogar")
let tentativas = document.getElementById("tentativas")
let tentativas2 = document.getElementById("tentativas2")
let valor = 0;
let vidas = 3;




const paragrafo = () => {

    frase.innerHTML = "Olá " + "<b>" + nick.value + "</b>" + ", vamos jogar! De acordo com a opção de intervalo que você escolheu, descubra o número."

}


const jogo = () => {

    if (numero.value == valor) {
        (tentativas.innerHTML = "Parabéns, você conseguiu adivinhar o número!")
    }

    else if (numero.value < valor) {
        (tentativas.innerHTML = "O número é maior")
    }
    else {
        (tentativas.innerHTML = "O número é menor")
    }


    vidas--
    tentativas2.innerHTML = "<br> você tem apenas " + vidas + " tentativas!"

}


const dificuldade = () => {
    if (setor.value == "opcao1") {

        valor = Math.floor(Math.random() * 10)

    }
    else if (setor.value == "opcao2") {

        valor = Math.floor(Math.random() * 100)

    }

    else if (setor.value == "opcao3") {

        valor = Math.floor(Math.random() * 200)

    }
    console.log(valor);
}


const perder = () => {
    if (vidas == 1) {
        resultado.innerHTML = "<button id='botao' onclick='window.location.reload()'>RECARREGAR JOGO</buton> "

    }
}

jogar.addEventListener("click", perder)
comecar.addEventListener("click", dificuldade)
jogar.addEventListener("click", jogo)
comecar.addEventListener("click", paragrafo)