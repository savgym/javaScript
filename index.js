//Function Declaration
function walk() {
  console.log("walk");
}

walk();

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

let move = run;
move();
run();
// Named Function Expression
let run2 = function walk() {
  console.log("run");
};

run2();
