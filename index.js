// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constraction Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drow");
  };
}

const another = new Circle(1);

new String(); // '',""
new Boolean(); //true ,false
new Number(); //1,2,3
