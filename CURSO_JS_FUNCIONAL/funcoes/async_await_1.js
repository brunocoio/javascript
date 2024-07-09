function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('executando 1'))
//     .then(esperarPor)
//     .then(() => console.log('executando 2'))
//     .then(esperarPor)
//     .then(() => console.log('executando 3'))

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValor()

    await esperarPor(1000)
    console.log(`a/a 1 ${valor}`)
    await esperarPor(1000)
    console.log(`a/a 2 ${valor}`)
    await esperarPor(1000)
    console.log(`a/a 3 ${valor}`)
}
executar()