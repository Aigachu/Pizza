/**
 * PROMISES DEMO 5: AWAIT THE PIZZA!
 *
 * Demonstration of the usages of async/await & Promises.
 */

// One more time baby!
let pizzaIsReady = false;
function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! LET'S EAT!`);
  }
}

// With our new knowledge on Promises, we're going to create a separate function that simply handles timing out for a set amount of time.
// All this function does is return a Promise that resolves after the provided amount of milliseconds.
// So basically, it's a promise to 'wait' for a set amount of milliseconds!
// We'll use it to easily demonstrate async/await behavior.
function wait(milliseconds) {
  return new Promise(function(resolve) {
    // Resolve the Promise after the provided amount of milliseconds.
    setTimeout(function() {
      resolve();
    }, milliseconds);
  });
}

// We're changing it up again!
// Let's make use of the async/await keywords!
async function cookPizza() {
  console.log('Cooking pizza...');
  await wait(1000);
  pizzaIsReady = true;
}

/**
 * Interesting! So now, our cookPizza() function has EVEN LESS code! And all we did was add 'async' before 'function'!
 *
 * So what does this 'async' keyword do? Well, quite a number of things actually.
 *
 * First off, this keyword tells Javascript that this function returns a Promise, and wraps whatever you return from
 * your function into a Promise. So no matter what your function returns, heck even if it doesn't return ANYTHING,
 * it'll return a Promise (For functions that return nothing, it will return void wrapped in a Promise).
 *
 * This means that the function can be used asynchronously, anywhere, anytime.
 *
 * As for chaining your function with .then() and .catch() like we saw in Demo 4,
 * .then() will run if no errors occur during the function's execution, and .catch() will run if an error is thrown.
 * Javascript handles all of this for you as long as you put the async keyword before 'function'.
 *
 * When chaining with .then(), you can use a parameter it in, like '.then(function(VALUE) {})', and VALUE will
 * be the return value from your function!
 *
 * As for the 'await' keyword, as you can see, we didn't really need to chain anything from the wait() function.
 *
 * This is because the 'await' keyword essentially eliminates having to chain everything into .then() callbacks. The
 * 'await' keyword makes whatever function following it run synchronously, and Javascript WILL NOT run the following
 * lines until that function executes. So 'pizzaIsReady = true' will ONLY RUN AFTER 'await wait(1000)' resolves.
 *
 * Using await eliminates the possibility to use .then() since you don't need to anymore. But you can still use
 * .catch() (i.e. 'await timeout(1000).catch(function(error))'). This means that if you choose to use 'await' instead
 * of doing a '.then()', you can still '.catch()' to do your error handling!
 *
 * 'await' can only be used with functions that return Promises, and can also only be used in asynchronous functions!
 *
 * So, ready to see all of this in action?
 */

// Look at how simple this.
// We wrap all execution in a process() function that is asynchronous.
// This allows us to use await.
async function makingLunch() {
  // Check the pizza.
  checkPizza();
  // Translates to: Wait for the execution of cookPizza() to complete.
  await cookPizza();
  // Check the pizza.
  // Due to the 'await' in the previous line, the following line only runs when the previous line is complete.
  checkPizza();
}

// Now run it all!
await makingLunch();

/**
 * Quite different from demo 2 & 4 right? But it accomplishes the same goal!
 *
 * It's generally good practice to make functions asynchronous if you're developing apps in Javascript, as you can
 * properly make sure that things execute in order. Of course, there are times where you want to take advantage of
 * Javascript's asynchronous nature, but it's always good to have the choice and control over it!
 *
 * Using await/async makes your code much cleaner to understand, allows for fully synchronous execution AND avoids any
 * sort of callback hell or endless nesting of functions. It's really neat, so get used to using them!
 *
 * Now...I think I'm actually going to order myself a pizza...LOL!
 */
