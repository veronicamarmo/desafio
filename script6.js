let fatorial = document.getElementById("fatorial");
let botao = document.getElementById("gerar")
let div = document.getElementById("div")

const fatorial2 = () => {

    let zero = 1;

    for (let index = 1; index <= fatorial.value; index++) {
        zero = zero * index
        div.value = zero
        div.innerHTML += div.value + "<br>"
    }

}


botao.addEventListener("click", fatorial2)