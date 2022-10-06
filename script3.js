let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let botao = document.getElementById("botao");

let resultado = 0;

const calcular = () => {
    resultado = peso.value * altura.value ** 2
    alert(resultado)
}

botao.addEventListener("click", calcular)
