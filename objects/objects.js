/**
 * ADVANCED OBJECTS
 *
 * Declare and work with objects like a GOD.
 */

/**
 * First let's look at how cavemen do things.
 */
function demo1() {
    let type = 'Cheese';
    let size = 'X-Large';
    let crust = 'Cheesy';
    let isHot = true;

    let pizza = {
        type: type,
        size: size,
        crust: crust,
        isHot: isHot,
    }

    console.log(pizza);

    let calculator = {
        square: function (a) {
            return a * a;
        },
        sum: function (...numbers) {
            let result = 0;
            for (let i of numbers) {
                result += i;
            }
            return result;
        }
    };

    console.log(calculator.square(5));  // 25
    console.log(calculator.sum(4, 5, 10, 15, 23));
}

/**
 * The two things to look at here are the declarations of the "pizza" and "calculator" objects.
 *
 * Compare them with the demo2 implementation below.
 */

function demo2() {
    let type = 'Cheese';
    let size = 'X-Large';
    let crust = 'Cheesy';
    let isHot = true;

    let pizza = {
        type,
        size,
        crust,
        isHot,
    }

    console.log(pizza);

    let calculator = {
        square(number) {
            return number * number;
        },
        sum(...numbers) {
            let result = 0;
            for (let i of numbers) {
                result += i;
            }
            return result;
        }
    };

    console.log(calculator.square(5));
    console.log(calculator.sum(4, 5, 10, 15, 23));
}

/**
 * Both demo functions lead to the same result, but demo2 takes advantage of Object Literals.
 *
 * Basically, when declaring objects without specifying keys and using only variable names, this tells JS to name the
 * object key the same as the variable name, and set the value as the variable itself.
 *
 * Get used to writing and declaring objects like this to make it more readable.
 */

console.log("--------------------------------------------------");
console.log("Demo 1");
console.log("--------------------------------------------------");
demo1();
console.log("--------------------------------------------------");
console.log("Demo 2");
console.log("--------------------------------------------------");
demo2();
console.log("--------------------------------------------------");