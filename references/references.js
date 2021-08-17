/**
 * VARIABLE REFERENCES
 *
 * Demonstration of variable references.
 */

/**
 * A simple class to store information on a fruit!
 */
class Fruit {
    constructor(name, isGood) {
        this.name = name;
        this.isGood = isGood;
    }
}

/**
 * Quick class to store information on a plate!
 */
class Plate {
    constructor(name) {
        this.name = name;
        this.fruits = [];
    }

    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    getFruit(name) {
        return this.fruits.find((fruit) => fruit.name === name);
    }
}

// So let's initialize some plates.
let plate1 = new Plate('First Plate');
let plate2 = new Plate('Second Plate');

// And now some fruit.
let apple = new Fruit("apple", false);
let kiwi = new Fruit("kiwi", false);
let banana = new Fruit("banana", true);

// We're going to add our fruits to our plates.
// The thing to note here is that the instances of the fruit stored in the plate are the same as those initialized above.
// This is because what's stored is not the fruit itself, but a reference to it.
plate1.addFruit(apple);
plate2.addFruit(kiwi);
plate2.addFruit(plate1.getFruit("apple"));

// So if we correct the obvious mistake above and say that apples are good on the variable itself..
apple.isGood = true;

// And then inspect our plates...
// The apple that's on both plates should be set to good!
console.log(plate1);
console.log(plate2);

console.log('-----------------------------------')

// Now we'll make a third plate.
// Let's add the same apple into Plate 3.
let plate3 = new Plate('Third Plate');
plate3.addFruit(apple);

// And we're gonna modify the apple through fetching it in Plate 2.
plate2.getFruit('apple').isGood = false;

// The apple will be set to false here, as well as on all other plates!
console.log(plate1);
console.log(plate2);
console.log(plate3);

// Make note of references in your code!
