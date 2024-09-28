
function getFibonacci() {
    const fibonacci = [0, 1]

    for (let i = 0; i <= 100; i++) {
        if (i >= 2) {
            let result = fibonacci[i - 1] + fibonacci[i - 2]
            fibonacci.push(result)
        }
    }
    return fibonacci
}

function getFibonacciNumber() {
    const fibonacci = getFibonacci()

    const numberChoosed = document.querySelector('#input')
    const result = document.querySelector('.result')

    if(Number(numberChoosed.value)){
        const searchResult = fibonacci.reduce((accumulator, number, index) => {
            if (number == Number(numberChoosed.value)) {
                accumulator.push([number, index])
                return accumulator[0]
            }
            return accumulator
        }, [])
    
        if (searchResult.length > 0) {
            result.textContent = (`Número ${searchResult[0]} pertence à sequência fibonacci na posição ${searchResult[1]} !`)
            numberChoosed.value = ''
        } else {
            numberChoosed.value = ''
            result.textContent = ('Número não pertence à sequência de fibonacci!')
        }
    }else{
        numberChoosed.value = ''
        result.textContent =''
        alert('Por favor digite um número válido!')
    }
   
}

function returnMainPage(){
    window.location.href = '/index.html'
}