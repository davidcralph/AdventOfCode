const input = require('fs').readFileSync('./input.txt', 'utf8').split('\r\n');

let total = 0;

const calculateFuel = (mass) => {
    let fuel;
    fuel = Math.floor(mass / 3);
    fuel = fuel - 2;
    return fuel;
} 

input.forEach(element => {
    let fuel = calculateFuel(element);
    total = total + fuel;
    while (fuel > -1) {
        fuel = calculateFuel(fuel);
        if (fuel === -1 || fuel === -2 || fuel === 0) return;
        total = total + fuel;
    }
});

console.log(total);