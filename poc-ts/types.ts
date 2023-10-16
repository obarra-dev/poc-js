// un type puede tener funciones
type sayHyToMe = (name: string) => string;

const sayHyToMe: sayHyToMe = (name) => {
  return `Hello Bro, my name is: ${name}`;
};

console.log(sayHyToMe("omar"));

// un type puede usarse para defirni contrato
type CourseType = {
  title: string;
  url: string;
  chapters: number;
};

const course: CourseType = {
  title: "golang",
  url: "https://go.dev/",
  chapters: 10,
};
console.log(course);

// un type puede ser implementado por una clase
type WebType = {
  name: string;
  someFunction: (name: string) => string;
};

class WebClass implements WebType {
  name = "name form webtype";
  someFunction = (name: string) => "some function executed";
}
console.log(new WebClass());

// Extender con type
// extends cambia la forma con respecto a interface,  pero es lo mismo
// intersection types, para extender

type BookType = {
  name: string;
};

type Bestseller = BookType & { sales: number };

const myBook: Bestseller = { name: "mybook", sales: 10 };
console.log(myBook);

// otro ejemplo
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = { readonly id?: HeroId; active?: boolean };

type HeroComplete = HeroBasicInfo & HeroProperties;

function createHeroComplete(hero: HeroBasicInfo): HeroComplete {
  const { name, age } = hero;
  return { name, age, active: true, id: "a-b-c-d-e" };
}

const completeHero = createHeroComplete({ name: "barra-complete", age: 7 });
console.log(completeHero);




// SOLO SE PUEDE HACER CON types: sobre escribit tipos, union de tipos, tuplas

// sobre escribir un tipo, para mas semantica
// type alias

type Name = string;
const myName: Name = "omar";
console.log(myName);

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
const heroId: HeroId = "550e8400-e29b-41d4-a716-446655440000";
console.log(heroId);

// template union types
type Hexa = `#${string}`;
const color: Hexa = "#00333ff";
// const colorInvalid: Hexa = '00333ff' // it does not compile

// union types
type HeroPowerScale = "local" | "multiversal";
let heroPower: HeroPowerScale = "local";
console.log(heroPower);

heroPower = "multiversal";
console.log(heroPower);

// does not compile
// heroPower = "multiversalCC";

type NumOrString = number | string;
type StringOr3 = string | 3;

// se puede poner un valor por defecto
const enableAnimationDuration: boolean | number = 200;

// union de 2 tipos
type LearingResource = BookType | CourseType;

const courseType: LearingResource = {
  chapters: 1,
  title: "just CourseType",
  url: "url",
};
console.log(courseType);

const bookType: LearingResource = {
  name: "just BookType",
};
console.log(bookType);

const learingResource: LearingResource = {
  chapters: 1,
  name: "my page",
  title: "CourseType and BookType",
  url: "url",
};
console.log(learingResource);

// tambien se puede unit un tipo  y una interface

// TODO diferencia entre | y &

// TUPLE
type LearnersType = [BookType, number];
const learners: LearnersType = [{ name: "my book" }, 8];
console.log(learners);

// un type pude tener readonly, optional
type HeroType = {
  readonly id?: HeroId;
  name: string;
  age: number;
  active?: boolean;
};

function createHero(hero: HeroType): HeroType {
  const { name, age } = hero;
  return { name, age, active: true, id: "a-b-c-d-e" };
}

const newHero = createHero({ name: "barra", age: 7 });
console.log(newHero);

// optional properties
// newHero.id = 323 does no compile

// type indexing, para reutilizar tipos

type SomeProps = {
  name: string;
  address: {
    planet: string;
    city: string;
  };
};

const address: SomeProps["address"] = { planet: "mars", city: "la paz" };
console.log(address);

// type from value
type Address = typeof address;

const newaddress: Address = { planet: "earth", city: "cocha" };
console.log(newaddress);

// type form return function
function createAddress() {
  return { planet: "pluton", city: "santa cruz" };
}
type AddresFromReturn = ReturnType<typeof createAddress>;
const ad: AddresFromReturn = { planet: "earth", city: "otro" };
console.log(ad);




// no se puede usar el mismo nombre de un tipo ya existente, con interfaces si se puede
// type BookType = { id: number };
