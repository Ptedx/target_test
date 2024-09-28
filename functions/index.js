
function invertString(string){
    let reversed = []
    const charArray = string.split('')
    for (let i = charArray.length - 1; i >= 0 ; i--){
        reversed.push(string[i])
    }
    return reversed.join('')
}

const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    

})

function sendToPages(){
    const text = Number(document.querySelector('#input').value)
    
    if(text >=1 && text <= 5){
        window.location.href = `/pages/ex0${text}.html`
    }else{
        alert('Erro: Por favor digite um número válido entre 1 a 5.')
    }
}