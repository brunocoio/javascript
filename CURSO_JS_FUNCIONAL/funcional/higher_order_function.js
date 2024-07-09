function executar(fn, ...params) {
    return function (textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multiplicar(a, b) {
    return a * b
}

const r1 = executar(somar, 40, 50, 66)('O resultado da soma é')
const r2 = executar(multiplicar, 33, 44)('O resultado da multiplicação é')

console.log(r1, r2)