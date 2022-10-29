const numNames = prompt("How many people are doing Kris Kringle");



const names[];

while (names.length < numNames.length - 1) {

names.push(prompt(`Name ${names.length + 1}`));

}

let draw = {

    [
        name: names[0],
        recipient: ""
    ]

};