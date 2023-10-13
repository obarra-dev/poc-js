// Ways to declare function in interfaces
interface OperationsWay1 {
  add: (product: string) => void;
  get: (id: number) => string;
}

interface OperationsWay2 {
  add(product: string): void;
  get(id: number): string;
}

// se puede usar de nuevo el nombre de la interfas pero con otra firma
interface OperationsWay2 {
  remove(id: number): string;
}

// interface HexaInterface = `#${string}` // it does not compile

// using an interface with json declaration
interface Logger {
  log: (message: string) => void;
}

const logger: Logger = {
  log: (message) => console.log(message),
};
logger.log("Hi world");

// does not compile , it has to be log function
//  logger2: Logger =  {print: (message) => console.log(message)};


// Interfaces extending other interface

interface Clearable {
  clear: () => void;
}

interface LoggerCleareable extends Clearable {
  log: (message: string) => void;
}

const loggerCleareable: LoggerCleareable = {
  log: (message) => console.log(message),
  clear: () => console.log("cleaning"),
};
loggerCleareable.log("Hi world");
loggerCleareable.clear();

// matching interface with object

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

// if the object had the attributes to match with the interface, it is work. The extra attributes does no matter
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Interfaces with Function Types

interface LoggerWithFunction {
  (message: string): void;
  log: (message: string) => void;
}

const loggerWithFunction: LoggerWithFunction = (message) => {
  console.log(`no named function ${message}`);
};

loggerWithFunction.log = (message) => {
  console.log(message);
};
// calling the interface
loggerWithFunction("loggerWithFunction");
loggerWithFunction.log("loggerWithFunction");

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// class implementing a interface
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  showTime() {
    console.log(this.currentTime);
  }
  constructor(h: number) {}
}

const clock = new Clock(2);
clock.showTime();
clock.setTime(new Date("July 21, 1983 01:15:00"));
clock.showTime();
