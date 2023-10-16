// by MDN Error is a serializable object, so we can use structuredClone and console.log
var error = new Error("some error message");
console.log(error);

const cloneError = structuredClone(error);
console.log(cloneError);


// but using JSON.stringify it does not works so fine

// serialized -> '{}' it gets nothing
let serialized = JSON.stringify(error);
console.log(serialized);

// get all the stack
serialized = JSON.stringify(error, Object.getOwnPropertyNames(error));
console.log(serialized);

// pick the properties you want
serialized = JSON.stringify(error, ["message", "name"]);
console.log(serialized);

// if you add an attribute, this one can be serialized
error.otherAttribute = "added attribute";
serialized = JSON.stringify(error);
console.log(serialized);

/**
 * @param {unknown} error
 * @returns {Error}
 */
function normalizeError(error) {
  if (typeof error === "object" && error instanceof Error) {
    return error;
  } else if (typeof error === "string") {
    return new Error(error);
  }

  // else turn this unknown thing into a string
  return new Error(JSON.stringify(error));
}

// NOW I CAN CATCH ERRORS...
try {
  throw new Error("Something went wrong");
} catch (error) {
  const normalized = normalizeError(error);
  const serialized = normalized.message;
  // serialized -> "Something went wrong"
  console.log(serialized);
}

// throwing a string
try {
    throw "Who throws a string? ME!";
  } catch (error) {
    const normalized = normalizeError(error);
    const serialized = normalized.message;
    // serialized -> "Who throws a string? ME!"
    console.log(serialized);
  }
  

// throwing an object
try {
  throw {a: 'some object'};
} catch (error) {
  const normalized = normalizeError(error);
  const serialized = normalized.message;
  // serialized -> "{"a":"some object"}"
  console.log(serialized);
}
