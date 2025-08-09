// Divisible by 3 => Fuzz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FuzzBuzz
// Not divisible by 3 and 5 => input
// Not a number =>'Not a number'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FuzzBuzz";
  if (input % 5 === 0) return "Buzz";
  if (input % 3 === 0) return "Fuzz";
  return input;
}
