/**
 * DESTRUCTURING
 *
 * Unpacking values from objects and arrays.
 */

/**
 * To understand destructuring, it helps to take a lot at the archaic methods. Let's take this following example:
 */
function demo1() {
    let pizza = {
        type : 'Hawaiian',
        size : 'Large',
        crust : "Cheesy"
    }

    const type = pizza.type;
    const size = pizza.size;
    const crust = pizza.crust;

    console.log(type);
    console.log(size);
    console.log(crust);

    const toppings = [
        "Bacon",
        "Pineapple",
        "Ham",
        "Pepperoni"
    ];

    const topping1 = toppings[0];
    const topping2 = toppings[1];
    const topping3 = toppings[2];

    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
}


/**
 * So in the above statements, we're getting parts of our "pizza" object and our "toppings" array one by one.
 *
 * In each line, we're grabbing a part of our object and/or our array.
 *
 * There is a much easier way to do this with "Destructuring". Here it is in action below:
 */
function demo2() {
    let pizza = {
        type : 'Hawaiian',
        size : 'Large',
        crust : "Cheesy"
    }

    // This tells javascript to initialize three variables, type/size/crust, with the values from the "pizza" object.
    // It knows which values to put in each due to the names matching directly.
    const { type, size, crust } = pizza;
    console.log(type);
    console.log(size);
    console.log(crust);

    const toppings = [
        "Bacon",
        "Pineapple",
        "Ham",
        "Pepperoni"
    ];

    // This tells javascript to initialize three variables, topping1/2/3, with the first three elements of the toppings array.
    // It will get the elements in order. If we were to add a fourth variable, it would get "pepperoni" as a value.
    const [topping1, topping2, topping3] = toppings;

    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
}

/**
 * This might take a bit more reading to understand it.
 *
 * For the case of objects, remember that the names have to match when declaring an object and destructuring it at the same time.
 *
 * In the case that names can't match, you can do something like this:
 */
function demo3() {
    let pizza = {
        type : 'Hawaiian',
        size : 'Large',
        crust : "Cheesy"
    }

    // This tells javascript to initialize three variables, pizzaType/pizzaSize/pizzaCrust, with the values from the "pizza" object.
    // It knows which values to put in each due to the assignment.
    const {
        type: pizzaType,
        size: pizzaSize,
        crust: pizzaCrust,
    } = pizza;
    console.log(pizzaType);
    console.log(pizzaSize);
    console.log(pizzaCrust);
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