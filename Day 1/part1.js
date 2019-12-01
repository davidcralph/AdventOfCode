const input = require('fs').readFileSync('./input.txt', 'utf8').split('\r\n');

let total = 0;

input.forEach(element => {
    let fuel;
    fuel = Math.floor(element / 3);
    fuel = fuel - 2;
    total = total + fuel;
});

console.log(total);