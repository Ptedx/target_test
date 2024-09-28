const monthlyInvoicing = [
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

const invoicingWithoutWeekends = monthlyInvoicing.filter(day => day.valor!=0.0)

let clicked = false

function getAverage(){
    let average = invoicingWithoutWeekends.reduce((acc,day) => acc += day.valor,0) 
     
    return (average/invoicingWithoutWeekends.length).toFixed(2)
}

function getDaysAbove(number){
    let average = number
    let daysAbove = []
    invoicingWithoutWeekends.forEach(day =>{
        if(day.valor > average){
            daysAbove.push(day)
        }
    } )
    return daysAbove
}

function getMaxInvoicing(){
    const maxValue = {dia:0.0, valor:0.0}
    invoicingWithoutWeekends.map(day=> {
        
        if (day.valor > maxValue.valor){
            maxValue.dia = day.dia
            maxValue.valor = day.valor
        }
    })
    return maxValue
}

function getMinInvoicing(){
    const minValue = getMaxInvoicing()
    invoicingWithoutWeekends.map(day=> {

        if (day.valor < minValue.valor){
            minValue.dia = day.dia
            minValue.valor = day.valor
        }
    })
    return minValue
}

function getInvoicingData(){

    const result = document.querySelector('.result')
    const resultList = document.querySelector('.resultList')
    clicked = !clicked

    if(clicked){
        const average = getAverage()
        const daysAbove = getDaysAbove(average)
        const maxValue = getMaxInvoicing()
        const minValue = getMinInvoicing()
        
        result.innerHTML = `A média de faturamento do mês foi <strong>R$${average}</strong>, o valor maior faturamento foi 
        <strong>R$${maxValue.valor.toFixed(2)}</strong> no dia <strong>${maxValue.dia}</strong>, o menor faturamento foi 
        <strong>R$${minValue.valor.toFixed(2)}</strong> no dia <strong>${minValue.dia}</strong> e ao total tiveram 
        <strong>${daysAbove.length}</strong> dias acima da média de faturamento.: `

        daysAbove.map(day =>{
            const novoItem = document.createElement('div')
            novoItem.classList.add('li-item')
            novoItem.innerHTML = `Dia ${day.dia}: <strong>R$${day.valor.toFixed(2)}</strong>`
            resultList.appendChild(novoItem)
        })
    }else{
        while(resultList.firstChild){
            resultList.removeChild(resultList.firstChild)
        }
        result.textContent=''
    }
}

function returnMainPage(){
    window.location.href = '/index.html'
}