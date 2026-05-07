const prompt = require("prompt-sync")()
const velocity = Number (prompt("Enter number: "));
const time = Number (prompt("Enter number: "));
const acceleration = Number(prompt("Enter number: "));
distance = (velocity * time) + (0.5 * acceleration * time * time);
console.log (distance);

