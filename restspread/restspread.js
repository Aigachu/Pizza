/**
 * REST & SPREAD
 *
 * The usage and utility of the rest/spread operator.
 */

/**
 * Take a look at the following code.
 * It's a pimped out version of the "sum" function we have in another part of this repo.
 */
function sum(...numbers) {
    let result = 0;
    for (let i of numbers) {
        result += i;
    }
    return result;
}

console.log(sum(3, 4, 5, 10, 20)); // Should give us 42.
console.log(sum(1, 3, 4)); // Should give us 8.

/**
 * So what did we do up here?
 *
 * If you execute the script, you should see 42 & 8 get printed.
 *
 * The "..." before "numbers" in our "sum" function are an example of using Rest.
 *
 * This is mainly used to allow a function that can hold any number of arguments. Realistically, with this, you can
 * use the sum() function to add any amount of numbers as you want. It's way more handy than having to manually define
 * the arguments one by one.
 */

/**
 * A spread operator works similarly, but is used in a different use case. Consider the snippet below:
 */
const pizzas = [
    { type: 'Hawaiian', size: 'Large', isHot: true },
    { type: 'Cheese', size: 'Medium', isHot: false },
    { type: 'Vegetarian', size: 'Small', isHot: true },
];
const morePizzas = [
    { type: 'Meat Lovers', size: 'Small', isHot: true },
    { type: 'Pepperoni', size: 'Medium', isHot: false },
    { type: 'All-Dressed', size: 'X-Small', isHot: false },
];
const allPizzas = [...pizzas, ...morePizzas];
console.log(allPizzas);  // Prints all of our pizzas.

/**
 * The code is pretty self-explanatory when looking at the declaration of "allPizzas".
 *
 * Essentially, inside an array, when using the "..." notation, you're telling javascript to unpack the array.
 *
 * So "allPizzas = [...pizzas, ...morePizzas];" is placing all the elements from both "pizzas" and "morePizzas" into
 * the "allPizzas" variable.
 *
 * This is a useful way to "merge" two arrays/objects, and it's pretty easy to write as well!
 *
 * Note that this "..." spread operator also works on objects and more!
 */