/**
 * PROMISES DEMO 3: PIZZA CALLBACK HELL
 * @TODO - Demo description.
 */

// Again, no changes here.
let pizzaIsReady = false;
function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! Okay let's get to work!`);
  }
}

// Same function as demo 2. Move on!
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

// Function to let the pizza cool.
function letPizzaCool(callback) {
  // 3 seconds is enough time for a pizza to cool off, right?
  console.log('Omfg wait let it cool off first...');
  setTimeout(() => {
    console.log('Okay it should be good!');
    callback();
  }, 3000);
}

// Function to add toppings the pizza.
function addToppingsToPizza(callback) {
  // Adding some greens.
  console.log('Adding the toppings...');
  setTimeout(() => {
    console.log('MORE VEGGIES! Yum.');
    callback();
  }, 1000);
}

// Function to slice the pizza.
function slicePizza(callback) {
  // 2 seconds of slicing. We fast as !%@?.
  console.log('OKAY CUT IT UP!');
  setTimeout(() => {
    console.log('CALL ME THE PIZZA NINJA BABY.');
    callback();
  }, 3000);
}

// Function to serve the pizza.
function servePizza(callback) {
  // 5 seconds to serve it to everyone! Everyone being just me!
  console.log('Serving...');
  setTimeout(() => {
    console.log('FINALLY...EVERYTHING IS READY.');
    callback();
  }, 5000);
}

// Now let's do all of this asynchronously with all of our beautiful callbacks.
checkPizza();

cookPizza(function () {
  checkPizza();
  letPizzaCool(function () {
    addToppingsToPizza(function () {
      slicePizza(function () {
        servePizza(function () {
          console.log("Okay. Let's eat!");
        })
      })
    })
  })
});

/**
 * Now it's that just beautiful? Everything ran asynchronously!
 *
 * BUT...Look at that code. It's ridiculous! We can't possibly use this as a solution since in actual big projects,
 * it'll be insane. These functions are very simple, but in real world scenarios, you're going to have much more to do
 * in your functions than just a console.log or a setTimeout!
 *
 * So what's the better solution? PROMISES!
 *
 * Move on to demo4.js!
 */
