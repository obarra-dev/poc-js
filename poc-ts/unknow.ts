// important: The unknown type is the type-safe counterpart of any.
// When working with the unknown type, we basically tell TypeScript that we're going to get this value, but we don't know its type.

// important The any type effectively turns off type checking, s

const something: unknown = "Barra Omar";

// ⛔️ Error: Type 'unknown' is not assignable to type 'string'
// const b: string = something;

// If you are certain that the specific value has a compatible type and TypeScript can't know about, you can use assertion
const b = something as string;
console.log(b);

let someString = "";
if (typeof something === "string") {
  someString = something;
}

console.log(someString); // 👉️ "Barra Omar"



// Using a type guard to check for an object
const somePerson: unknown = {
  name: "Omar",
  country: "Argentina",
};

type PersonForTest = {
  name: string;
  country: string;
};

// 👇️ checks if obj has properties of Person
function isPersonxx(obj: unknown): obj is PersonForTest {
  return (
    typeof obj === "object" && obj !== null && "name" in obj && "country" in obj
  );
}

let bobby: PersonForTest;

if (isPersonxx(somePerson)) {
  // 👉️ person has type of Person here
  bobby = somePerson;
} else {
  bobby = { name: "", country: "" };
}

console.log(bobby);


// UNKOWN assignation
function doSomethingWithUnknow(unknownvar: unknown) {
  console.log(unknownvar)
}

let unknownvar: unknown = "unknown"
doSomethingWithUnknow(unknownvar)

let stringvar : string= "string"
doSomethingWithUnknow(stringvar)

let objectvar : object= { name: 'omar'}
doSomethingWithUnknow(objectvar)

unknownvar = stringvar
doSomethingWithUnknow(unknownvar)

unknownvar = objectvar 
doSomethingWithUnknow(unknownvar)

// Type 'unknown' is not assignable to type 'string' or others
// stringvar = unknownvar
// objectvar = unknownvar


// ANY assignation
function doSomethingWithAny(anything: any) {
  console.log(anything)
}

let anyvar: any = "unknown"
doSomethingWithAny(anyvar)

doSomethingWithAny(stringvar)

doSomethingWithAny(objectvar)

anyvar = stringvar
doSomethingWithAny(anyvar)

anyvar = objectvar 
doSomethingWithAny(anyvar)

// type any is assingable to other types, but unkown not
stringvar = anyvar
objectvar = anyvar

doSomethingWithAny(stringvar)
doSomethingWithAny(objectvar)


// UNKOWN and ANY assignation

anyvar = 123
unknownvar = "567"
doSomethingWithUnknow(anyvar)
doSomethingWithAny(unknownvar)

// Type 'unknown' is  assignable to type 'any'
// Type 'any' is  assignable to type 'unknown'


const unknownvar2: unknown = 444
anyvar = unknownvar2
const anyvar2: any = "555"
unknownvar = anyvar2
doSomethingWithUnknow(anyvar)
doSomethingWithAny(unknownvar)


