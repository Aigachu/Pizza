/**
 * TEMPLATE LITERALS!
 *
 * This one's cool.
 */

// Here's a description of a pizza.
let pizzaDescription = 'A cheese pizza with cheesy crust and bacon bits.';
let numberOfBaconBits = 43;

// So normally if you wanted to add the number of bacon bits to this description, you would do something like:
let pizzaDescription2 = pizzaDescription + " The pizza has " + numberOfBaconBits + " bacon bits on it. I counted them."

// But if you wanna be a COOL KID, you'll do it like this now.
let pizzaDescription3 = pizzaDescription + ` The pizza has ${numberOfBaconBits} bacon bits on it. I counted them.`;
// Using backticks (`) allows the use of template literals, basically giving you the power to put variables inside the string directly through use of placeholders.

// Heck, you can even do this.
let pizzaDescription4 = `${pizzaDescription} The pizza has ${numberOfBaconBits} bacon bits on it. I counted them.`

// You can run this script and see that all of these lead to the same result. :)
console.log(pizzaDescription2);
console.log(pizzaDescription3);
console.log(pizzaDescription4);

// And...That's it really. Nothing crazy to see here! Just a cleaner way to write strings!