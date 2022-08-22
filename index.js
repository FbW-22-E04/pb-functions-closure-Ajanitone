// ### Closure

// 1. In your own words, define closure (1-2 sentences).
// 2. Study the following code, then answer the questions below.

function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();

// Answer 1: A Closure is a function containing variables and functions.

// * a. Where is closure used in this code? How can you tell?

// Answer: We have a function returning a function.

// * b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

// Answer: The first time it was 4 and the second time 5. The function remains the same but the value changes.

// * c. What is the lexical scope of `newRoll`?

// Answer: function(name)

// 3. Write a function that would allow you to do this using a closure.

function createBase(num) {
  if (num === 0) {
    return num;
  }
  return num + 6;
}

const addSix = createBase(10);
console.log("Q3:", addSix); // returns 16
// addSix(21); // returns 27
