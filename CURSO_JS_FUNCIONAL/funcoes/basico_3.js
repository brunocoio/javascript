//arrow function
const FN = () => console.log('Feliz natal');
FN();

const saudacao = nome => `Fala ${nome} blz?`
console.log(saudacao('maria'));

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// function potencia(base) {
//     return function (exp) {
//         return Math.pow(base, exp)
//     }
// }

//forma simplificada da function acima
// const potencia = (base) => (exp) => Math.pow(base, exp)
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

// this
Array.prototype.log = function(){
    console.log(this);
}
const numeros = ['1,2,3']
numeros.log()