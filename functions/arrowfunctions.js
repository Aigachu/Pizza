/**
 * ARROW FUNCTIONS
 *
 * A cleaner way to write functions in your code!
 */

// We'll just hop into this one.
let numbers = [1, 2, 3, 4, 5];

// Using the "map" function, we get an array of the numbers above multiplied by themselves.
let numbersSquared = numbers.map(function(number) {
    return number * number;
});
console.log(numbersSquared);

/**
 * So the above is pretty simply stuff. The key part to look at here is the "map" function.
 *
 * As its first argument, the "map" function takes a function. So this forces us to declare a function within it.
 *
 * Let's be honest, the code isn't all that clean when we have to write "function" inside a function's call.
 *
 * This is where arrow functions come into play. Consider the example below that does the same thing.
 */
let numbers2 = [1, 2, 3, 4, 5];

let numbersSquared2 = numbers2.map(number => number * number);
console.log(numbersSquared2);

/**
 * Crazy right?
 *
 * Arrow functions are a cleaner way to write functions. It makes things more compact and easier to read, granted you know how to read them.
 *
 * Consider this part: numbers2.map(number => number * number);
 *
 * Compare every part in here with the longer way to write it in the first example at the top:
 *
 * The first "number" is the function argument. Everything past the arrow (=>) is the function's body (so what you would have between the brackets).
 * So in this case, we multiply "number" by itself.
 *
 * Now this is THE MOST compact way to write it, but it might be confusing to understand. (Especially with number being repeated so often LOL!).
 *
 * The following two examples are less compact but still compact enough for you to be part of the cool kids.
 *
 * Me personally, I opt for one of the below options, since it's slightly more readable, but retains the compactness of arrow functions.
 */

// This example simply adds parentheses around the function argument.
// This makes it a little clearer that we're declaring the function argument as "number" and then using it in the function body afterwards.
let numbers3 = [1, 2, 3, 4, 5];

let numbersSquared3 = numbers3.map((number) => number * number);
console.log(numbersSquared3);

// This example puts back our lovely brackets, properly isolating the function body.
// However, this requires us to put back the "return" keyword.
// When the brackets aren't placed, javascript expects only ONE statement, and will automatically return the result of that statement (see above).
let numbers4 = [1, 2, 3, 4, 5];

let numbersSquared4 = numbers4.map((number) => {
    return number * number
});
console.log(numbersSquared4);