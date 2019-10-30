/**
 * DEMO 1: CHECKING THE PIZZA WHILE COOKING IT
 * @TODO - Demo description.
 */

// Let's assign a variable to track whether our pizza is ready or not.
let pizzaIsReady = false;

// This simple function will tell us if the pizza is ready.
function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! LET'S EAT!`);
  }
}

/**
 * This simple function will cook the pizza.
 * The pizza takes a full on second to cook. I know, CRAZY!
 * In all seriousness though, slow functions are not uncommon.
 * Sometimes you're querying an API or a Database, and those processes can take awhile to complete.
 */
function cookPizza() {
  console.log('Cooking pizza...');
  // Assign a timeout to simulate that it takes 1 full on second to cook the pizza.
  setTimeout(() => {
    // Set the Pizza to ready after this timeout.
    pizzaIsReady = true;
  }, 1000);
}

// So let's check the pizza first.
checkPizza();

// Now let's cook our pizza. Remember, it takes 1 second to cook!
cookPizza();

// Now we check the pizza again.
checkPizza();

/**
 * If you run this script, you'll see that Javascript didn't care that cookPizza() wasn't done executing. It went ahead
 * and ran the second checkPizza() call before the timeout was finished.
 *
 * Essentially, Javascript checked the pizza while it was still being cooked. Come on Javascript!!
 *
 * This is because Javascript is Synchronous by nature.
 * It will not run code asynchronously, line by line, waiting for previous lines to finish. It will execute them at the same time.
 *
 * Many times you'll want to get around this. We'll explore the ways you can, starting with the oldest method.
 *
 * Move on to demo2.js!
 */

