// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "dodekanisou",
  city: "Athens",
  zipCode: 14235,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
