
function invertString(string){
    let reversed = []
    const charArray = string.split('')
    for (let i = charArray.length - 1; i >= 0 ; i--){
        reversed.push(string[i])
    }
    return reversed.join('')
}

function getIntertedString(){
    const text = document.querySelector('#input')
    
    const invertedString = invertString(text.value)
    
    const write = document.querySelector('.result')

    text.value = ''
    write.innerHTML = `Frase invertida: <strong> ${invertedString}</strong>`
}

function returnMainPage(){
    window.location.href = '/index.html'
}