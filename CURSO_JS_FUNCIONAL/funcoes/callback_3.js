const nums = [1, 2, 3, 4, 5]
//const dobro = (n, i, a) => n*2 + i  + a.length //n = valor i = indice  a array (tamanho)
const dobro = (n) => n * 2

console.log(nums.map(dobro))

const nomes = ['maria', 'jose', 'josney', 'audriel']
const pLetra = texto => texto[0]
console.log(nomes.map(pLetra))

//

const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99 },
    { nome: 'impressora', qtde: 0, preco: 649.50 },
    { nome: 'caderno', qtde: 4, preco: 27.10 },
    { nome: 'lapis', qtde: 3, preco: 5.82 },
    { nome: 'tesoura', qtde: 1, preco: 19.20 },
]

// const getNome = item => item.nome
// console.log(carrinho.map(getNome))

// const getTotal = item => item.qtde * item.preco
// const totais = carrinho.map(getTotal)
// console.log(totais)

//

Array.prototype.meuMap = function (fn) {
    const novoArray =[]
    for (let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)