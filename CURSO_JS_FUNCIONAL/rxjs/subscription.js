const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
    console.log(`#1 número ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`#2 número ${num}`)
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)

// Depois de 5000 unsubscribe
setTimeout(() => {
    sub.unsubscribe()
}, 5000)