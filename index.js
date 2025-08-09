// for-in loop για arrays

const person = {
  name: "Savvas",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// // Dot Notation
// person.name;
// // Bracket Notation
// person["name"];

// Arrays οχι τοσο καλο για Arrays
const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);
