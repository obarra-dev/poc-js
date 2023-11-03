const people = [ 
    { name: 'john',   age: 12, gender: 'male'}, 
    { name: 'jane',   age: 17, gender: 'female'}, 
    { name: 'jane2',   age: 15, gender: 'female'}, 
]; 

// filter
const females = people.filter(p => p.gender === 'female')
console.log(females)


// map
const ageAndName = people.map(p => [p.age, p.name])
console.log(ageAndName)


// reduce
const indexedByName = people.reduce((acc, p)=> ({
    ...acc,
    [p.name]: p,
}), {})
console.log(indexedByName)
console.log(indexedByName['jane'])


const arrayOfArray = [1, [2, 3], 4, [5]]
const flatted = arrayOfArray.reduce((acc, a) => acc.concat(a), [])
console.log(flatted)

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log(sum)

// recursividad
// common error: maximum call stack size exceeded
// liimted by tail call optimization
const retry5Times = (count = 0) => {
    if (count > 4) {
        return "last 5"
    }

    const res = retry5Times(count + 1)

    return `${res} and ${count}`
}

const ss = retry5Times()
console.log(ss)

// trampoline
// to avoid the maximum call stack sise exceeded
// we can perform tail recursion this way, we will not blow up the call stack.

// const largeNumber = 300000000
const largeNumber = 100

const sumRec = (number, total = 0) => (
    number === 0
    ? total
    : () => sumRec(number -1, total + number)
    )

function trampoline(fn, ...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result();
    }
    
    return result;
}
console.log(trampoline(sumRec, largeNumber))


const  trampolineArrowFunc = fn => (...args) =>  {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result();
    }
    
    return result;
}
const sumTrampolined = trampolineArrowFunc(sumRec)
console.log(sumTrampolined(largeNumber))

// clousure 
// combinacion de una funcion y el alcance lexico que tiene esta
// es el alcance lexico que tiene una funciona al memento de ejecutarlo
// se puede acceder a las variables locales y de nivel superior
const x = 'omar'
const myFunc = () => console.log(x)
myFunc()

function myNormalFunc() {
    console.log(x)
}
myNormalFunc()


const crudder = version => resource => `http://somebase/api/${version}/${resource}`

const version1 = crudder('v1')
console.log(version1('cars'))
console.log(version1('books'))

const version2 = crudder('v2')
console.log(version2('cars'))
console.log(version2('books'))


// composicion
// facil de poder probar
// facil de enterder ya que son pequeñas

const namesToUpperCase = peopleObj=> peopleObj.map(p => ({name: p.name.toUpperCase(), age: p.age, gender: p.gender}))
// get array return arryy
// get array retunr arrystring

const toArrayString = peopleObj => peopleObj.map(p => `${p.name}-${p.age}-${p.gender}`)

// get arraystring, return string
const toString = arrayPeople => arrayPeople.join(' and ');

// se leee de  derecha a izquierda
const resultSimple = toString(toArrayString(namesToUpperCase(people)))
console.log(resultSimple)


const compose = (...funs) => input => funs.reduceRight((acc, fn) => fn(acc), input) 


// se leee de derecha a izq
// notar que composedFunctionToGetStrinPeople llama a otra funcion en este caso esto es redundante, mejor usar programacion tacita (point free)
const composedFunctionToGetStrinPeople = (peopleObj) => compose(toString, toArrayString, namesToUpperCase)(peopleObj);
const resultComposeaa = composedFunctionToGetStrinPeople(people);
console.log(resultComposeaa);

// point free  
const composedFunctionToGetStrinPeoplePointFree = compose(toString, toArrayString, namesToUpperCase);
const resultCompose = composedFunctionToGetStrinPeoplePointFree(people);
console.log(resultCompose);



  