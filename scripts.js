const select1Value = document.querySelector('.select-1')
const select2Value = document.querySelector('.select-2')
const convertImg = document.querySelector('.convert-img')
const convertedImg = document.querySelector('.converted-img')

function clickButton() {

    const valueToConvert = document.querySelector('.value-to-convert')
    const valueConverted = document.querySelector('.value-converted')
    const inputValue = document.querySelector('.input-value').value


    //valores pra converter do real
    const coinValue = 1
    const reaTodolarValue = 5.90
    const realTobitcoinValue = 599524
    const realToeuroValue = 6.06

    //valores para converter do dolar
    const dolarToEuroValue = 0.97
    const dolarToBitcoinValue = 101396.30

    //valores para converter o euro

    const euroToDolarValue = 1.04
    const euroToBitcoinValue = 101369.55

    //select com real

    if (select1Value.value === 'real' && select2Value.value === 'real') {
        const result = inputValue / coinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        valueConverted.innerHTML = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    if (select1Value.value === 'real' && select2Value.value === 'dolar') {

        const result = inputValue / reaTodolarValue

        valueToConvert.innerHTML = inputValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })


        valueConverted.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    if (select1Value.value === 'real' && select2Value.value === 'euro') {
        const result = inputValue / realToeuroValue

        valueToConvert.innerHTML = inputValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        valueConverted.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })

    }

    if (select1Value.value === 'real' && select2Value.value === 'bitcoin') {
        const result = inputValue / realTobitcoinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        valueConverted.innerHTML = result.toFixed(5)
    }

    // select com dolar


    if (select1Value.value === 'dolar' && select2Value.value === 'dolar') {
        const result = inputValue / coinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        valueConverted.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    if (select1Value.value === 'dolar' && select2Value.value === 'real') {
        const result = inputValue * reaTodolarValue

        valueToConvert.innerHTML = inputValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        valueConverted.innerHTML = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
    if (select1Value.value === 'dolar' && select2Value.value === 'euro') {
        const result = inputValue * dolarToEuroValue

        valueToConvert.innerHTML = inputValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        valueConverted.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })
    }

    if (select1Value.value === 'dolar' && select2Value.value === 'bitcoin') {
        const result = inputValue / dolarToBitcoinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        valueConverted.innerHTML = result.toFixed(5)
    }

    // select com euro

    if (select1Value.value === 'euro' && select2Value.value === 'euro') {
        const result = inputValue  / coinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })

        valueConverted.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })
    }




    if (select1Value.value === 'euro' && select2Value.value === 'real') {
        const result = inputValue * realToeuroValue

        valueToConvert.innerHTML = inputValue.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })

        valueConverted.innerHTML = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    if (select1Value.value === 'euro' && select2Value.value === 'dolar') {
        const result = inputValue * euroToDolarValue

        valueToConvert.innerHTML = inputValue.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })

        valueConverted.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    if (select1Value.value === 'euro' && select2Value.value === 'bitcoin') {
        const result = inputValue / euroToBitcoinValue

        valueToConvert.innerHTML = inputValue.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })

        valueConverted.innerHTML = result.toFixed(5)
    }


    //select com bitcoin

    if (select1Value.value === 'bitcoin' && select2Value.value === 'bitcoin') {
        const result = inputValue / coinValue

        valueToConvert.innerHTML = inputValue
        valueConverted.innerHTML = result
    }

    if (select1Value.value === 'bitcoin' && select2Value.value === 'real') {
        const result = inputValue * realTobitcoinValue

        valueToConvert.innerHTML = inputValue
        valueConverted.innerHTML = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    if (select1Value.value === 'bitcoin' && select2Value.value === 'dolar') {
        const result = inputValue * dolarToBitcoinValue

        valueToConvert.innerHTML = inputValue
        valueConverted.innerHTML = result.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    if (select1Value.value === 'bitcoin' && select2Value.value === 'euro') {
        const result = inputValue * euroToBitcoinValue

        valueToConvert.innerHTML = inputValue
        valueConverted.innerHTML = result.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })
    }




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
    clickButton()
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

    clickButton()
}



