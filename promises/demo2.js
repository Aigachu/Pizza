/**
 * PROMISES DEMO 2: CHECK THE PIZZA AFTER COOKING IT
 * @TODO - Demo description.
 */

// Let's bring these back again. No changes here.
let pizzaIsReady = false;
function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! LET'S EAT!`);
  }
}

// Let's modify our checkPizza() function and add a fourth parameter called 'callback'.
// This parameter expects a function that will run after the values are reassigned, as coded below.
function cookPizza(callback) {
  // Flavour text & set a 1 second timer to reassign the variables above.
  console.log('Cooking pizza...');

  // Assign a timeout to simulate that it takes 1 full on second to cook the pizza.
  setTimeout(() => {
    // Set the Pizza to ready after this timeout.
    pizzaIsReady = true;
    // Now we run the callback function provided, after setting our pizza to ready.
    callback();
  }, 1000);
}

// So let's go ahead and test with this.

// Again, we check the pizza first.
checkPizza();

// Now, we run our new function.
// For the callback parameter, we add a newly created function.
// As coded above, this callback function will run after the timeout we put in the cookPizza() function.
cookPizza(function () {
  checkPizza();
});

/**
 * So now we actually get the intended result! But things can actually get pretty dirty, pretty fast with this method.
 * Say you want to serve the pizza after it's cooked...Then you'd have to let it cool off for a bit, and then slice it...
 * Then you gotta add extra toppings for certain people, right? Like crazy people that put ketchup and mustard on their slices...
 * Basically, what I'm getting at is, all of these tasks take time, which means they all have to run asynchronously.

 * You would have to have callbacks in literally all of those functions that you want to run asynchronously.
 * And think about it...You'd have to nest each function within each other to properly make sure that everything runs in
 * order.

 * Wanna simulate this?
 *
 * Take a look at the horror that is demo3.js!
 */
