/**
 * ARRAY FILTER FUNCTION
 *
 * Using the .map function to extract array items that have certain properties!
 *
 * Make sure you're read up on arrow functions so that the syntax here doesn't confuse you going forwards!
 *
 * @see ../functions/arrowfunctions.js
 */

/**
 * The .filter function is available on all arrays in javascript. It allows you to extract array items given certain criteria, that you define yourself!
 *
 * Take the following example where we want to get all the LARGE pizzas we have in our array of pizzas.
 */
function demo1() {
    const pizzas = [
        { type: 'Hawaiian', size: 'Large', isHot: true },
        { type: 'Cheese', size: 'Large', isHot: false },
        { type: 'Vegetarian', size: 'Small', isHot: true },
        { type: 'Meat Lovers', size: 'Large', isHot: true },
        { type: 'Pepperoni', size: 'Medium', isHot: false },
        { type: 'All-Dressed', size: 'Large', isHot: true },
    ];

    // See this line here? This is where the magic happens.
    // After executing this line, the "largePizzas" variable will have an array containing only the large pizzas.
    const largePizzas = pizzas.filter((pizza) => pizza.size === 'Large');
    console.log("These are the large pizzas.");
    console.log(largePizzas);
}

/**
 * .filter is a function that takes a function as an argument. What this means is that when you call it, you pass a function inside the parentheses.
 *
 * The function passed to .filter will execute the code within it's block for all items in the array in question.
 *
 * The argument passed to the function is the item that is being processed.
 *
 * For .filter, the function passed to it is expected to return a boolean (true or false).
 * If the logic returns true, it means the item that is being processed by the function should be returned.
 * If the logic returns false, the object won't be returned and will be omitted.
 * In the case above, "pizza.size === 'Large'" will only return true if the item being processed has "Large" as a size.
 * This is why our console.log only ends up printing pizzas that have "Large" as a size.
 *
 * Below is a very similar example, but with a different condition. It's easy to figure out!
 */

function demo2() {
    const pizzas = [
        { type: 'Hawaiian', size: 'Large', isHot: true },
        { type: 'Cheese', size: 'Large', isHot: false },
        { type: 'Vegetarian', size: 'Small', isHot: true },
        { type: 'Meat Lovers', size: 'Large', isHot: true },
        { type: 'Pepperoni', size: 'Medium', isHot: false },
        { type: 'All-Dressed', size: 'Large', isHot: true },
    ];

    // Here's the difference. Since "isHot" is already a boolean, we simply return it.
    // This gives us all the pizzas that are hot!
    const hotPizzas = pizzas.filter((pizza) => pizza.isHot);
    console.log("These are the hot pizzas.");
    console.log(hotPizzas);
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