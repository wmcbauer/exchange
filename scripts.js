

function clickButton() {

    const valueToConvert = document.querySelector('.value-to-convert')
const valueConverted =document.querySelector('.value-converted')

    const inputValue = document.querySelector('.input-value').value
    const dolarValue = 5.90
    const realValue = 1

    const resultConvertDolar = inputValue / dolarValue
    const resultConvertReal = inputValue / realValue

   

    valueToConvert.innerHTML = inputValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"})
    valueConverted.innerHTML =  resultConvertReal


}

function changeValue1() {
    console.log('mudou 1')
}

function changeValue2() {
    console.log('mudou 2')

}



