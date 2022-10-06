let tabuada = document.getElementById("tabuada");
let botao = document.getElementById("botao");
let div = document.getElementById("tab1");

let resultado = 0;

const multiplicacao = () => {
    for (let index = 0; index <= 10; index++) {
        resultado = tabuada.value * index
        div.innerHTML += tabuada.value + ' x ' + index + " = " + resultado + "<br>"
    }
}

botao.addEventListener("click", multiplicacao)