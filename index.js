let x = 10;
let y = x;

x = 20;

//Primitives are copied by their value
//Objects are copied by their reference

let d = { value: 10 };
let f = d;

d.value = 30;

let number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);
////
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
