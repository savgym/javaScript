const numbers = [1, -1, 2, 3];

// every() check if everything match this cratirial
// sone() check at least one

const allPositive = numbers.every((value) => value >= 0);

const atLeastOnePositive = numbers.some((value) => value >= 0);

console.log(allPositive);
console.log(atLeastOnePositive);
