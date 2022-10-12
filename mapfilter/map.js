/**
 * ARRAY MAP FUNCTION
 *
 * Using the .map function to perform actions on array items!
 *
 * Make sure you're read up on arrow functions so that the syntax here doesn't confuse you going forwards!
 *
 * @see ../functions/arrowfunctions.js
 */

/**
 * The .map function is available on all arrays in javascript. It allows you to perform actions on each item in an array.
 *
 * Take the following example where we want to get all the pizzas we have in our array of pizzas.
 */
function demo1() {
    const pizzas = [
        { type: 'Hawaiian', size: 'Large', isHot: true },
        { type: 'Cheese', size: 'Medium', isHot: false },
        { type: 'Vegetarian', size: 'Small', isHot: true },
    ];

    // See this line here? This is where the magic happens.
    // After executing this line, the "pizzaTypes" variable will have an array containing only the pizza types we have.
    const pizzaTypes = pizzas.map((pizza) => pizza.type);
    console.log(pizzaTypes);
}

/**
 * .map is a function that takes a function as an argument. What this means is that when you call it, you pass a function inside the parentheses.
 *
 * The function passed to .map will execute the code within it's block for all items in the array in question.
 *
 * The argument passed to the function is the item that is being processed. Think of .map as a shortcut of using a for loop to act on all items in an array.
 *
 * In the case above, we use a compact arrow function to simply return the 'type' property of our pizza.
 *
 * Below is a more readable version in case you're not used to super compact arrow functions yet.
 */

function demo2() {
    const pizzas = [
        { type: 'Hawaiian', size: 'Large', isHot: true },
        { type: 'Cheese', size: 'Medium', isHot: false },
        { type: 'Vegetarian', size: 'Small', isHot: true },
    ];

    const pizzaTypes = pizzas.map((pizza) => {
        return pizza.type;
    });
    console.log(pizzaTypes);
}

/**
 * And finally, an even more readable version. No arrow functions this time.
 *
 * I do recommend getting used to arrow function syntax though! It's the norm now.
 */
function demo3() {
    const pizzas = [
        { type: 'Hawaiian', size: 'Large', isHot: true },
        { type: 'Cheese', size: 'Medium', isHot: false },
        { type: 'Vegetarian', size: 'Small', isHot: true },
    ];

    const pizzaTypes = pizzas.map(function (pizza) {
        return pizza.type;
    });
    console.log(pizzaTypes);
}

console.log("--------------------------------------------------");
console.log("Demo 1");
console.log("--------------------------------------------------");
demo1();
console.log("--------------------------------------------------");
console.log("Demo 2");
console.log("--------------------------------------------------");
demo2();
console.log("--------------------------------------------------");
console.log("Demo 3");
console.log("--------------------------------------------------");
demo3();
console.log("--------------------------------------------------");