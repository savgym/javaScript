// Divisible by 3 => Fuzz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FuzzBuzz
// Not divisible by 3 and 5 => input
// Not a number =>'Not a number'

checkSpeed(75);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;

  if (speed < speedLimit + kmPerPoints) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoints);
  if (points >= 12) console.log("License supspended");
  else console.log("Points", points);
}
