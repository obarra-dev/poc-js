const p1 = Promise.resolve(1)
console.log(p1)

p1
.then(x => x + 5)
.then(x => x + 4)
.then(x => Promise.resolve(x + 10))
.then(x => console.log(x))
.then( () => console.log("omar"))
.then(x => console.log(`x is undefined = ${x}`))
.then(x => Promise.reject("Some error"))
.then(x => console.log(x))
.catch(e => console.log(e))



const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 900))

delayed(3)
.then(x => {
    console.log(x)
    return delayed(x + 7)
})
.then(x => {
    console.log(x)
    return x + 10
})
.then(x => console.log(x))
.then(x => Promise.reject("Some error"))
.catch(e => console.log(e))
