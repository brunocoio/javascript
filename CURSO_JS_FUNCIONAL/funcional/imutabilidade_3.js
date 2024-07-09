const pessoa = Object.freeze({
    nome: 'Josney',
    altura: 1.69,
    cidade: 'Lá longe',
    end: Object.freeze({
        rua: 'viela'
    })
})

const outraPessoa = pessoa

function alteraPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'Creuza'
    novaPessoa.cidade = 'Cidade de Deus'
    novaPessoa.end.rua = 'Vó Joana'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a

a++
b--

console.log(a, b)