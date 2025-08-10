function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drow");
  };
}
Circle.call({}, 1);
Circle.apply({}, [1]); // an exeis array
const another = new Circle(1);
