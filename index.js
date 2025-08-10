showStars(10);

// function showStars(rows) {
//   let array = [];
//   let star = "*";

//   for (let row = 0; row < rows; row++) array[row] = row + 1;
//   for (let row = 0; row < array.length; row++)
//     array[row] = star.repeat(row + 1);
//   console.log(array);
// }

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
