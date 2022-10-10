// manpulação de DOM - Funções Nativas do Javascript

// ID

let e1 = document.getElementById('cpf');
console.log(e1.className)

// Class

let e2 = document.getElementsByClassName('documento');
console.log(e2[0].value);

// Seletor padrao - querSeletor

let e3 = document.querySelector('#rg');
console.log(e3.value)

// let e4 = document.querySelectorAll('input');
let e4 = document.querySelectorAll('.documento');
console.log(e4[1].value)