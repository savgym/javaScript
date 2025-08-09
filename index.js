// for-in loop για arrays

const person = {
  name: "Savvas",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// for of καλυτερο για arrays
const colors = ["red", "green", "blue"];

for (let color of colors) console.log(color);
