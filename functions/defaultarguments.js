/**
 * DEFAULT ARGUMENTS
 *
 * This one shows how default arguments can be added to functions.
 */

// I'm honestly going to jump straight to the juice. No need to know how we used to do things in the caveman era.
function sum(a= 10, b= 20){
    return a+b;
}

/**
 * Our function above simply returns the sum of two numbers.
 *
 * Now the catch here is we added default values to the arguments in our function.
 *
 * We did this using the "=" sign, as we would when declaring and initializing a variable.
 *
 * The best way to see this is to check the lines below.
 */

let result1 = sum(); // a = 10, b = 20, result = 30;

let result2 = sum(2, 3); // a = 2, b = 3, result = 5;

let result3 = sum(4); // a = 4, b = 20, result = 24 ;

console.log(result1);
console.log(result2);
console.log(result3);

/**
 * Running this script will show the results as described in the comments.
 *
 * In "result1", we didn't provide any values to the function call. This means we kept the default values of 10 & 20 that are declared in the function declaration at the top of this file.
 *
 * In "result2", we provided both values. So our result is 5, because we're adding "2" & "3".
 *
 * In "result3", we provided only the first value. This gives us "24", as the default value for "b" is "20".
 *
 * As you may have noticed, there's no real way to give the value of "b" and omit the value of "a". This is a limitation that is in most languages.
 * You simply have to organize your function in a way where the default values are at the end of your function declaration.
 *
 * There *is* a way to have more flexibility in your function calls though. This can be done through Object Destructuring.
 *
 * But that will be covered in the destructuring guide. :)
 */