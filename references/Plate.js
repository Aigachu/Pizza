module.exports = class Plate {

  constructor() {
    this.fruits = [];
  }

  addFruit(fruit) {
    this.fruits.push(fruit);
  }

  getFruit(name) {
    return this.fruits.find((fruit) => fruit.name === name);
  }

};
