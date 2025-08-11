const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);
// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);
// Middle
const remove = numbers.splice(1, 1);
console.log(numbers);
// diko moy .bgazei array tsekare to
console.log(remove);
