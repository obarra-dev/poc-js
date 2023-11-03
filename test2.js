// Arrow functions
// Arrow functions are anonymous functions 
// they do not bind to their own this. They get the value of this from the enclosing context. 
// they are not hoisted
// They also provide a more concise syntax. mmmm!!

const add = (x, y) => x + y
let result = add(2, 3) 
console.log(result)

//  Currying
// Double Arrow functions are actually curried functions
const addCurried = x => y => x + y
result = addCurried(2)(3) 
console.log(result)


const addFunction = function (x) {
    return function (y) {
      return x + y
    }
  }
result = addFunction(2)(3) 
console.log(result)

// this is more like const addCurried = x => y => x + y
// because arrow functions lexically bind this
// in this case, the function does not use any context, so it is not important to preserve this.
const addFunctionLikeArrow = function (x) {
    return function (y) {
      return x + y
    }.bind(this)
  }.bind(this)
result = addFunctionLikeArrow(2)(3) 
console.log(result)

// USE CASE of curring
/**
 * when you have to write a callback function which has fixed parameters (arguments),
 *  but you need to pass more variables to the function without using global variables
 * 
 * In the example we make use of a curried function
 *  which returns another function having its own scope of variables without any global variables
 * 
 
const handleClick = id => event {
  event.preventDefault();
 
  // do something with the received ID
  console.log('ID received', id); 
}
 
// within your html
<button onClick=handleClick('45')>
 */
