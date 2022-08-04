var min = 0
var sec = 0
var hr = 0
var intervalo

function doisDigitos(digitos){
    if(digitos < 10){
        return('0'+digitos)
    } else{
        return(digitos)
    }

}
function iniciar() {
    corPreta()
    watch()
    intervalo = setInterval(watch, 1000)
}

function pausar() {
    corPause()
    clearInterval(intervalo)
}

function zerar() {
    corZera()
    clearInterval(intervalo)
    sec = 0
    min = 0
    hr = 0
    document.getElementById('relogio').innerText= '00:00:00'
}

function watch() {
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 59){
            hr++
            min = 0
        }
    }
    
    document.getElementById('relogio').innerText= `${doisDigitos(hr)}:${doisDigitos(min)}:${doisDigitos(sec)}`

}
function corPreta() {
    document.getElementById('cor-fundo').style.backgroundColor ='#000'
    document.getElementById('relogio').style.color = '#fff'
}
function corPause() {
    document.getElementById('cor-fundo').style.backgroundColor = '#ffa500'
}
function corZera() {
    document.getElementById('cor-fundo').style.backgroundColor = '#fff'
    document.getElementById('relogio').style.color = '#000'
}