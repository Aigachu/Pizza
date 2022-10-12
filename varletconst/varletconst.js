/**
 * VAR, LET & CONST
 *
 * Demonstration of how/when to use 'var', 'let' and 'const' to declare variables in your code.
 */

// Let's start with 'const', the easiest one to note.
const pizza = true;

/**
 * Knowing when to use 'const' is very easy. 'const' is short for 'constant'. By definition (in maths at least), a
 * 'constant' is a fixed, non-changing object. So when declaring a variable with 'const', you are implying that the
 * value of this variable will not change throughout the code.
 *
 * After declaring a 'const', most IDEs will yell at you if you try to change the value of it later on in your code.
 *
 * If I were to write:
 *   pizza = false;
 * As my next line, then this would beat the purpose of a 'const', or 'constant'.
 *
 * And...That's it for constants and 'const'!
 *
 * Now, let's get into 'var' vs 'let'.
 */

// Here is the usage of 'var'.
var flour = false;

// And here is let.
let sauce = false;

/**
 * In the above, the two lines seemingly do the same thing. Honestly, what I could tell you is to always use 'let'
 * over 'var' in the future and you'd be good to go. Heck, my IDE is yelling at me for the 'var' usage above! But
 * sometimes it's nice to understand WHY you do things.
 *
 * To make it easier to understand, let's do this inside a function.
 */
function doshit() {
  var flour = false;
  let sauce = false;
  if (flour === false) {
    let oil = false;
  }
}

/**
 * So given the above.
 *
 * The "flour" variable was declared with 'var'.
 *
 * Variables declared with 'var' are "function-scoped". What this means is, the variable is scoped to the entire
 * function it's declared in. So the 'flour' variable will be the same within the "doshit" function.
 *
 * Keep that in mind and stay with me here!
 *
 * Now variables declared with 'let', like "sauce" & "oil" in this case, are "block-scoped". By block, we mean {}
 * brackets. So it's not far off from 'var', but the key here is that for example:
 *
 *   - "sauce" is scoped to the "doshit" function just like "flour", because it's declared in the function's block.
 *   - However, "oil" here is only scoped to the if statement it is declared in, because it is within the if statement's block.
 *
 * As a result, you can quickly see why "let" is favored over "var" in 99% of the cases. It allows for less unwanted
 * issues in your code with a more targeted scope. Because "var" is scoped more widely, you can have unwanted results
 * in your code.
 *
 * That's...Honestly it! For more information on 'var' vs 'let', feel free to google it. There are a BUNCH of articles.
 *
 * But the rule of thumb is...Use 'let'! There should be no more need for 'var' if you're writing clean code. :)
 */