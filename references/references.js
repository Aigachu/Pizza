const Fruit = require("./Fruit");
const Plate = require("./Plate");

let plate1 = new Plate();
let plate2 = new Plate();
let apple = new Fruit("apple");
let kiwi = new Fruit("kiwi");
let banana = new Fruit("banana");
apple.calories = 5;
kiwi.calories = 15;
banana.calories = 25;

plate1.addFruit(apple);
plate2.addFruit(kiwi);
plate2.addFruit(plate1.getFruit("apple"));
apple.calories = 10;

console.log(plate1);
console.log(plate2);
