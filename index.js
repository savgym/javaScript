let i = 0;
// break
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }
// continue
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
