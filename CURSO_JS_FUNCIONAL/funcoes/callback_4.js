const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99 },
    { nome: 'impressora', qtde: 0, preco: 649.50 },
    { nome: 'caderno', qtde: 4, preco: 27.10 },
    { nome: 'lapis', qtde: 3, preco: 5.82 },
    { nome: 'tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome
const qtdeMZero = item => item.qtde > 0
// const qtdeMIZero = item => item.qtde >= 0
// const qtdeGrande = item => item.qtde >= 1000

const nomesItensValidos = carrinho
    .filter(qtdeMZero)
    .map(getNome)

console.log(nomesItensValidos)

//

Array.prototype.meuFilter = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomesItensValidos2 = carrinho
    .meuFilter(qtdeMZero)
    .map(getNome)

console.log(nomesItensValidos2)