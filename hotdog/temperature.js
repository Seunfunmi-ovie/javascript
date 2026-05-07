const prompt = require("prompt-sync")()
const initial = Number(prompt("Enter number: "));
const final= Number(prompt("Enter number: "));
const amount = Number(prompt("Enter number: "));
energy = amount * (final - initial) * 4184;
console.log (energy);
