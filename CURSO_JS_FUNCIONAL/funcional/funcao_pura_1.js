//impura pq o PI é um valor externo
const PI = 3.14

function areaCircunferenciaImpura(raio) {
    return raio * raio * PI
}

console.log(areaCircunferenciaImpura(10))

//pura - tratou e retornou valores controláveis e estáveis
function areaCircunferenciaPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircunferenciaPura(10, 3.14))