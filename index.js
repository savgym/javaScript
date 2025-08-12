const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//   let times = 0;

//   for (let n of array) if (n === searchElement) times++;
//   return times;
// }

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurrance = currentValue === searchElement ? 1 : 0;
    return accumulator + occurrance;
  }, 0);
}
