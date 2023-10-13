
// Narrowing


// forma js de hacer narrowing
function showLen(object: string | number) : number {
    if ( typeof object === 'string') {
      return object.length
    } else if (typeof object === 'number') {
      return object.toString().length
    } else {
      object // es never, xq segun los tipo esto nunca puede ser
      return 9999
    }
  }
  
  console.log(showLen(123))
  console.log(showLen("123"))
    

interface Bird {
  name: string;
  feathersColor: string;
}

interface Fish {
  name: string;
  finsColor: string;
}

type Animal = Bird | Fish;

// Custom Type Guard
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

// type guard
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

