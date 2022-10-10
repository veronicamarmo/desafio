// fetch - API

let inputCEP = document.querySelector('#cep');
let inputLogadouro = document.querySelector('#logradouro');
let inputBairro = document.querySelector('#bairro');
let inputLocalidade = document.querySelector('#localidade');
let inputUF = document.querySelector('#uf');

// Via CEP

const ConsultarCEP = (cep) => {

    var endpoint = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': "application/json" }
    })

    .then(response => response.json())
    .then(result => {
    
        inputLogadouro.value = result.logadouro;
        inputBairro.value = result.bairro;
        inputLocalidade.value = result.localidade;
        inputUF.value = result.uf;

    })

    .catch(erro => console.log(erro))
}

inputCEP.addEventListener('input', () => {

    if(inputCEP.value.length > 7 ){
        ConsultarCEP(inputCEP.value)
        console.log('Pode consultar');
    }
})
