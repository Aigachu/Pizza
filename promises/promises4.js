/**
 * PROMISES DEMO 4: I PROMISE TO COOK THE PIZZA!!
 *
 * Demonstration of Promises and how they work.
 */

// Idem.
let pizzaIsReady = false;
function checkPizza() {
  if (!pizzaIsReady) {
    console.log(`The pizza isn't ready yet...`);
  } else {
    console.log(`OMG it's ready! YES! LET'S EAT!`);
  }
}

// So let's make yet another version of our cookPizza() function.
// Notice that we got rid of the callback parameter. That's already a good sign.
function cookPizza() {
  // So here we're returning a Promise.
  // Don't mind this too much for now. The documentation below will explain this in more detail.
  return new Promise(function (resolve, reject) {
    console.log('Cooking pizza...');
    try  {
      setTimeout(() => {
        pizzaIsReady = true;
        // This 'resolve()' right here is the important part! Remember it!
        resolve();
      }, 1000);
    } catch(e) {
      // This here is important too!
      reject(e);
    }
  });
}

// Let's try out our fancy stuff now!

// Check the pizza.
checkPizza();

// Now, let's use our fancy new function that returns a promise.
cookPizza().then(() => {
  checkPizza();
}).catch((error) => {
  console.log(error);
});

/**
 * A little cleaner than demo 2 & 3 right? So let's explain what's going on here.
 * A Promise is pretty much what it seems like: a 'promise' to eventually complete an operation.
 * Promise.then() is a function you can execute from a Promise to run code that executes AFTER it concludes.
 * Our cookPizza() function RETURNS a Promise, so we can immediately chain the .then() function after the cookPizza() call.
 *
 * By returning a Promise, the 'cookPizza' function is basically saying: "I Promise to cook the pizza."
 * It essentially does what we did with the callback method, but much more cleanly and easier to read.
 * Now let's look at the function's code again.
 */
function cookPizza() {
  // As mentioned above, we return a promise straight up! So everything that runs in this function is within a promise.
  // A Promise is initialized with a function that has 2 parameters: resolve & reject.
  // -- 'resolve' is the function that executes after the Promise properly completes. It will lead to the '.then()' call.
  // -- 'reject' is the function that executes if the Promise properly shits itself. It will lead to the '.catch()' call.
  // Quite similar to our callback solution from demo 2 actually if you think about it! But much more organized.
  return new Promise(function (resolve, reject) {
    console.log('Cooking pizza...');
    // I wrapped this in a try/catch to show the use of reject().
    try  {
      setTimeout(() => {
        pizzaIsReady = true;
        // Calling resolve within our timeout assures that the full second actually went through, and our pizza actually cooked.
        // So essentially what this line means is: Go to '.then()' and run whatever is in there.
        resolve();
      }, 1000);
    } catch(e) {
      // If an error happens, we reject with the error.
      // So essentially what this line means is: Go to '.catch()' and run whatever is in there.
      // Let's be clear though, there's no real way this demo code can throw an error and reach this.
      //  Feel free to alter it to test though!
      reject(e);
    }
  });
}

/**
 * You may have to read this over a couple times to get it, but think of Promises as a beautiful, more organized
 * callback structure than what was saw in demo 2 & 3.
 *
 * Promises are very important in modern JS as they have become quite common. People got real tired of getting stuck
 * in callback hell.
 *
 * Now of course, this doesn't TRULY solve our callback hell problem. It just KIND OF makes it more manageable. But you
 * can technically still end up in "then()" hell.
 *
 * The last demo will show you how to completely avoid this, and is the culmination of why Promises are awesome. This
 * demo was simply to illustrate how Promises truly work, before getting into the fun stuff!
 *
 * If you fully grasp the concept of Promises in THIS demo, you can move on to the last demo where we put it all together
 * with the famous async/await keywords. async/await are directly linked to Promises, and once you understand Promises,
 * you'll quickly grasp what these keywords do.
 *
 * Move on to promises5.js!
 */
