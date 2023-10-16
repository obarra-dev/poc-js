const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
console.log(hello("omar"));


 const helloArrow = (who: string = world): string => {
  return `Hello using arrow func: ${who}! `;
}
console.log(helloArrow("omar"));


const helloArrow2: (who: string) =>  string = (who = world) => {
  return `Hello using arrow2 func: ${who}! `;
}

console.log(helloArrow2("omar"));




function helloWith({name, age}: {name: string, age: number}): string {
  return `Hello ${name}, age ${age}! `;
}

console.log(helloWith({name: "omar", age: 4}));


function helloWith2(person: {name: string, age: number}): string {
  const {name, age} = person
  return `Hello ${name}, age ${age}! `;
}

console.log(helloWith2({name: "barra", age: 7}));


const sayHiFromFunction = (fn: (name: string) => string ) => fn("Omar from function")
console.log(sayHiFromFunction(hello))
// console.log(sayHiFromFunction(() =>  444)) does not compile


// Function is the any for the functions
const sayHiFromFunctionAny = (fn: Function ) => fn("Omar from function with the any function")
console.log(sayHiFromFunctionAny(hello))
console.log(sayHiFromFunctionAny(() =>  444))


// no muy usado
function throwError(message: string): never {
  throw new Error(message)
}


function showName(name: string): void {
  console.log(`Name ${name}` )
}
const names = ["omar", "barra"]
// inferencia funciones anonimas segun el contexto
names.forEach(name =>  showName(name))

// literal type (exact, specific)
let quantity: 50 = 50

// nulleable types, if it is just string it cannot be null
let name: string | null


// objects
const employee : {
  readonly id: number,
  name: string,
  retire: () => string
} = {id: 1, name: "omaralberto", retire : () => "retire: now"}
console.log(employee)
console.log(employee.retire())


  // arrays


  const  arr = [] // deberia ser array de never pero es any xq?

  const  languages: string[] = [] 
  languages.push("dsd")

  const  languagesOther: Array<string> = [] // it is the same above
  languagesOther.push("dsd")


  const  languagesNumOrStr: (number | string)[] = [] 
  languagesNumOrStr.push("dsd")
  languagesNumOrStr.push(3)


type CellValue = 'X' | '0' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue], // it is a tupla
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard : GameBoard = [
  ['X' , '0' , ''],
  ['X' , '0' , ''],
  ['X' , '0' , '']
]

console.log(gameBoard)

type RGB = [number, number, number]
const rgb: RGB = [1,2,3]
console.log(rgb)
rgb.push(4) // I think it is a bug
console.log(rgb) 



type State = [string, (nameState: string) => void]
const [message, setMessage] : State = ["hello world", (message: string) => {console.log(`setting: ${message}`)}]
setMessage(message)
