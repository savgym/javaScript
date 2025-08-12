const numbers = [1, -1, 2, 3];

//a = 0 , c=1 => a =1
//a = 1 , c= -1 => a =0
//a = 0 , c=2 => a =2
//a = 2 , c=3 => a =5

const sum = numbers.reduce(
  (accummulator, currentValue) => accummulator + currentValue,
  0
);

console.log(sum);
