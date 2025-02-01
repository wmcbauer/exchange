const select1Value = document.querySelector('.select-1')
const select2Value = document.querySelector('.select-2')
const convertImg = document.querySelector('.convert-img')
const convertedImg = document.querySelector('.converted-img')

function clickButton() {

    const valueToConvert = document.querySelector('.value-to-convert')
    const valueConverted = document.querySelector('.value-converted')
    const inputValue = document.querySelector('.input-value').value



    const dolarValue = 5.90
    const realValue = 1
    const bitcoinValue = 599524
    const euroValue = 6.06

    const resultConvertDolar = inputValue / dolarValue
    const dolarFormated = resultConvertDolar.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const resultConvertReal = inputValue / realValue
    const realFormated = resultConvertReal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    valueToConvert.innerHTML = realFormated
    valueConverted.innerHTML = resultConvertDolar 
    

}

function changeValue1() {
    
    if (select1Value.value === 'dolar') {
        convertImg.src = './assets/estados-unidos (1) 1.png'
    }

    if (select1Value.value === 'real') {
        convertImg.src = './assets/brasil 2.png'
    }

    if (select1Value.value === 'euro') {
        convertImg.src = './assets/euro 2.png'
    }

    if (select1Value.value === 'bitcoin') {
        convertImg.src = './assets/bitcoin 1.png'

    }

}

function changeValue2() {
    if (select2Value.value === 'dolar') {
        convertedImg.src = './assets/estados-unidos (1) 1.png'
    }

    if (select2Value.value === 'real') {
        convertedImg.src = './assets/brasil 2.png'
    }

    if (select2Value.value === 'euro') {
        convertedImg.src = './assets/euro 2.png'
    }

    if (select2Value.value === 'bitcoin') {
        convertedImg.src = './assets/bitcoin 1.png'
    

}
}



