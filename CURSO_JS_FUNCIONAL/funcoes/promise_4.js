function geraNumeroEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        geraNumeroEntre(1, 60, 4000),
        geraNumeroEntre(1, 60, 500),
        geraNumeroEntre(1, 60, 3000),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))