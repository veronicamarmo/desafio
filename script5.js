let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let div = document.getElementById("div")
let div2 = document.getElementById("div2")
let botao1 = document.getElementById("converter1")
let botao2 = document.getElementById("converter2")


const conversao1 = () => {

    let conversao_fahrenheit = 0;

    conversao_fahrenheit = celsius.value - 32 / 1.8;

    div.innerHTML = conversao_fahrenheit

}

const conversao2 = () => {

    let conversao_celsius = 0;

    conversao_celsius = fahrenheit.value * 1.8 + 32;

    div2.innerHTML = conversao_celsius

}

botao1.addEventListener("click", conversao1)
botao2.addEventListener("click", conversao2)