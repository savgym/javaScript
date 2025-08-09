showNumber(10);

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "ODD" : "EVEN";
    console.log(i, message);
  }
}
