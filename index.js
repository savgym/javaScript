let first = [1, 2, 3];
let second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, "a", ...second, "b"];

console.log(combined);
// Copy
const slice = combined.slice();
const copy = [...combined];
