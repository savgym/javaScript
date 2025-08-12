const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => "<li>" + n + "<li>");

const html = "<ul>" + items.join("") + "<ul>";

console.log(filtered);
console.log(items);
console.log(html);

const items2 = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));

console.log(items2);
