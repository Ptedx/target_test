
function getAddition(){
    const indice = document.querySelector('#input');
    const result = document.querySelector('.result')
    if(Number(indice.value)){
        let soma = 0;
        for (let k = 0; k < Number(indice.value); k++) {
            soma += k;
        }
        indice.value = ''
        result.textContent = soma
    }else{
        indice.value = ''
        alert('Erro: Por favor digite um número válido!')
    }
}

function returnMainPage(){
    window.location.href = '/index.html'
}