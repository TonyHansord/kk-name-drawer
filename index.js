//const numNames = prompt("How many people are doing Kris Kringle");

const names = ["Wendy", "Mike", "Tony", "Kat", "Andy"];

// while (names.length < numNames) {
//   const name = prompt("Enter a name");
//   names.push(name);
// }

//gererate random number

const hat = [...names];

console.log(hat);

const draw = new Map();

const recipients = [];
for (let i = 0; i < names.length; i++) {
  let randomNum = Math.floor(Math.random() * hat.length);
  console.log(`rand: ${randomNum}`);
  while (hat[randomNum] === names[i]) {
    randomNum = Math.floor(Math.random() * hat.length);
    console.log(`rand: ${randomNum}`);
  }
  recipients.push(hat[randomNum]);
  console.log(`recipients: ${recipients[i]}`);
  hat.splice(randomNum, 1);
  draw.set(names[i], recipients[i]);
}

console.log(draw);
