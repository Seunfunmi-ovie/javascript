const prompt = require("prompt-sync")()
const name = prompt("What is your name: ");
const age = Number(prompt("How old are you? "));
const email = prompt("Enter email: ");

console.log (name + " " + age + " " + email);
