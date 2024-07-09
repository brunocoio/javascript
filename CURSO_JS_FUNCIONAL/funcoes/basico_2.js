function bomDia() {
    console.log('dia')
}

const boaTarde = function () {
    console.log('tarde')
}

//passar function com parametro para outra function
function executarQqrCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQqrCoisa(3)
executarQqrCoisa(bomDia)
executarQqrCoisa(boaTarde)

//retorna function a partir de outra function

// function potencia(base, exp) {
function potencia(base) {
    // return Math.pow(base, exp)
    return function (exp) {
        return Math.pow(base, exp)
    }
}

// const bits8 = potencia(2, 8)
const potenciaDe2 = potencia(2)
// console.log(bits8)
console.log(potenciaDe2(8))

//outra maneira de executar
console.log(potencia(2)(8))
