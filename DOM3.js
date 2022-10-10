// manipulação de dom
let botao = document.querySelector('#adicionar')
let contador = document.querySelector('#contador')
let manual = document.querySelector('.manual')

const somar = () => {
    // pegar o que esta dentro da tag - innerHTML (string)
    // converter string em int - parseint
    contador.innerHTml = parseInt(contador.innerHTML) + 1;
}

// Eventos - manipulação
// evento -> ação
botao.addEventListener('click', somar);

manual.addEventListener('input', () => {
    contador.innerHTML = manual.value;
});