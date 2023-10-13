// Narrowing
// Type guards are typically used for narrowing a type a

// The instanceof keyword

interface Accessory {
  brand: string;
}
class Necklace implements Accessory {
  kind: string;
  brand: string;
  constructor(brand: string, kind: string) {
    this.brand = brand;
    this.kind = kind;
  }
}
class Bracelet implements Accessory {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}
function getRandomAccessory() {
  return Math.random() < 0.5
    ? new Bracelet("cartier", 1880)
    : new Necklace("choker", "TASAKI");
}
let accessory = getRandomAccessory();
if (accessory instanceof Bracelet) {
  console.log(accessory.year);
}
if (accessory instanceof Necklace) {
  console.log(accessory.kind);
}

// The typeof keyword used for boolean string bigint symbol undefined function number
// usa js, para que ts pued inferir
function showLen(object: string | number): number {
  if (typeof object === "string") {
    return object.length;
  } else if (typeof object === "number") {
    return object.toString().length;
  } else {
    object; // es never, xq segun los tipo esto nunca puede ser
    return 9999;
  }
}

console.log(showLen(123));
console.log(showLen("123"));

// The in type guard

if ("house" in { name: "test", house: { parts: "roof" } }) {
  console.log("house property is in the object");
}

if ("house" in { name: "test", house: undefined }) {
  console.log("house property is in the object");
}

if ("house" in { name: "test" }) {
  console.log("house property is in the object");
} else {
  console.log("house property is not in the object");
}

// other example
interface Pupil {
  ID: string;
}
interface Adult {
  SSN: number;
}
interface Person {
  name: string;
  age: number;
}
const someone: Pupil | Adult | Person = {
  ID: "124",
  name: "Omar",
  age: 6,
};
const getIdentifier = (someone: Pupil | Adult | Person) => {
  if ("name" in someone) {
    return someone.name;
  } else if ("ID" in someone) {
    return someone.ID;
  }
  return someone.SSN;
};

console.log(getIdentifier(someone))

// Equality narrowing type guard
function getValues(a: number | string, b: string) : void{
  if(a === b) {
      // this is where the narrowing takes place. narrowed to string
      console.log(typeof a) // string
  } else {
      // if there is no narrowing, type remains unknown
      console.log(typeof a) // number or string
  }
}

getValues(2, "dsdsd")



// Custom Type Guard
interface Bird {
  name: string;
  feathersColor: string;
}

interface Fish {
  name: string;
  finsColor: string;
}

type Animal = Bird | Fish;

const isBird = (animal: Animal): animal is Bird => {
  return (animal as Bird).feathersColor !== undefined;
};

const parrot: Animal = { name: "Parrot", feathersColor: "green" };
const oscar: Animal = { name: "Oscar", finsColor: "orange" };

console.log(isBird(parrot));
console.log(isBird(oscar));

// other example

interface Mario {
  name: string;
  jump(): void;
}

interface Sonic {
  name: string;
  run(): void;
}

type Character = Mario | Sonic;

function checkIsSonic(character: Character): character is Sonic {
  return (character as Sonic).run !== undefined;
}

function play(character: Character): void {
  console.log(`${character.name} is playing`);
  // ahora  si puede inferir
  if (checkIsSonic(character)) {
    character.run();
  } else {
    character.jump();
  }
}

const characterOne: Character = {
  name: "Mario",
  jump: () => console.log(`Jumping`),
};
characterOne.jump();

const characterTwo: Character = {
  name: "Sonic",
  run: () => console.log(`Running`),
};
characterTwo.run();

play(characterTwo);
play(characterOne);
