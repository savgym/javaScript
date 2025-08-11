const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Clone old way
// const another = {};

// for (let key in circle) another[key] = circle[key];

// const another = Object.assign({ color: "yellow" }, circle);
// const another = Object.assign({}, circle);

const another = { ...circle };
console.log(another);
