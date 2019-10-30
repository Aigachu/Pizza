/**
 * PROMISES DEMO 5: AWAIT THE PIZZA!
 * @TODO - Demo description.
 */

let pizzaIsReady = false;

function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! LET'S EAT!`);
  }
}

// With our new knowledge on async/await, we're going to create a separate function that simply handles timing out for a set amount of time.
// All this function does is return a promise that resolves after the provided amount of milliseconds.
// We'll use it to easily demonstrate async/await behavior.
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Let's keep the beautiful version of our function from demo 4...
// JUST KIDDING! We're changing it up again.
// Let's make use of the async keyword!
async function cookPizza() {
  console.log('Cooking pizza...');
  // Wait for a second, using the fancy 'await' keyword.
  await timeout(1000);
  pizzaIsReady = true;
}

/**
 * Interesting! So now, our cookPizza() function has EVEN LESS code! And all we did was add 'async' before 'function'!
 * So what does this 'async' keyword do? Well, quite a number of things actually.
 *
 * First off, this keyword tells Javascript that this function returns a Promise. So no matter what your function returns,
 * even if it doesn't return ANYTHING, it'll return a Promise. This means that the function can be used asynchronously
 * anywhere, anytime.
 *
 * As for .then() and .catch(), .then() will run if no errors occur during the function's execution, and .catch() will
 * run if an error is thrown.
 *
 * When chaining with .then(), you can user a parameter it in, like '.then(function(returnValue) {})', and it will
 * pass on the return value from your function!
 *
 * As for the 'await' keyword, as you can see, we didn't really need to chain anything from the timeout() function.
 *
 * This is because the 'await' keyword essentially eliminates having to chain everything into .then() callbacks. The
 * 'await' keyword makes whatever function your running completely asynchronous, and WILL NOT run the following lines
 * until that function executes. So 'pizzaIsReady = true' will ONLY RUN AFTER 'await timeout(1000)' resolves.
 *
 * 'await' can only be used with functions that return Promises, and can also only be used in asynchronous functions!
 *
 * So, ready to see all of this in action?
 */

// Look at how simple this.
// We wrap all execution in a process() function that is asynchronous.
// This allows us to use await.
async function process() {
  // Check the pizza.
  checkPizza();
  await cookPizza();
  checkPizza();
}

// Now we run process!
process();

/**
 * Quite different from demo 2 right? But it accomplishes the same goal!
 *
 * It's generally good practice to make functions asynchronous if you're developing apps in Javascript, as you can
 * properly make sure that things execute in order. Of course, there are times where you want to take advantage of
 * Javascript's synchronous nature, but it's always good to have the choice and control over it!
 */
