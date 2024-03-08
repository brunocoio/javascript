function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    const numeros = []
    for (let _ of Array(qtdeNumeros).fill()) {
        // await gerarNumerosEntre(1, 60, numeros)
        numeros.push(gerarNumerosEntre(1, 60, numeros))
    }
}

