// 1
function mutateArray(items: (number | string)[]) {
  items.push(33);
}

const items = ["hi", "world"];
mutateArray(items);
console.log(items);

function doSomethingToStringsOnly(strings: string[]) {
  strings.push("other string");
}

// it compiles, it does not check the type
doSomethingToStringsOnly(items);
console.log(items);



// 2
type ReadOnlyResult = {
  readonly foo: number;
  readonly bar: number;
};

type Result = {
  foo: number;
  bar: number;
};

function produceReadOnlyResult(): ReadOnlyResult {
  return {
    foo: 12,
    bar: 34,
  };
}

const readOnlyResult = produceReadOnlyResult();

function mutateResult(r: Result) {
  r.bar = 99;
  r.foo = 100;
}

mutateResult(readOnlyResult);
// error, the readOnlyResult was mutate
console.log(readOnlyResult);
