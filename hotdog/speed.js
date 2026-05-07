const prompt = require("prompt-sync")()
const acceleration = Number(prompt("Enter number: "));
const speed = Number(prompt("Enter number: "));
length = (speed * speed) / (2 * acceleration);
console.log (length);
