const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

//Delete
delete circle.color;

//circle ={} den mporeiw na kaneiw reasined einai const
console.log(circle);
