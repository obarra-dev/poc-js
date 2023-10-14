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

// test asing unk to string, string to unos , in func, with any etc