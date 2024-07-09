function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro){}
}

setTimeout(()=> console.log('exec 1'), 3000)
setTimeout(()=> {
    esperarPor(3000)
    console.log('exec 2')
}, 300)

esperarPor(5000)
console.log('fim');