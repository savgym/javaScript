let first = [1, 2, 3];
let second = [4, 5, 6];

const combined = first.concat(second);

// const slice = combined.slice(2, 4);
// const slice = combined.slice(2);
// perno copy of original array
const slice = combined.slice();

console.log(combined);
console.log(slice);
