let states = [
    {
        state: 'SP',
        invoicing: 67836.43
    },
    {
        state: 'RJ',
        invoicing: 36678.66
    },
    {
        state: 'MG',
        invoicing: 29229.88
    },
    {
        state: 'ES',
        invoicing: 27165.48
    },
    {
        state: 'Outros',
        invoicing: 19849.53
    }
]

let clicked = false

const result = document.querySelector('.result')
const resultList = document.querySelector('.resultList')

function getMarketShare(){
    let total = states.reduce((acc,day) => acc+=day.invoicing,0)

    const stateWithMarketShare = states.map(state=>({
            ...state,   
            marketshare: ((state.invoicing/total)*100).toFixed(2)
        })
    )

    return stateWithMarketShare
}

function getInvoicingShare(){
    const newStates = getMarketShare()
    
    clicked = !clicked

    if(clicked){
        result.textContent = ('A porcentagem no faturamento de cada estado foi: ')
        newStates.forEach(state => {
            const newItem = document.createElement('div')
            newItem.innerHTML = (`${state.state}: <strong>${state.marketshare}%</strong>`)
            newItem.classList.add('li-item')
            resultList.appendChild(newItem)
        })
    }else{
        while(resultList.firstChild){
            resultList.removeChild(resultList.firstChild)
        }
    }
}

function returnMainPage(){
    window.location.href = '/index.html'
}