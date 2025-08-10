// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);

// Constraction Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drow");
  };
}

const circle2 = new Circle(1);
