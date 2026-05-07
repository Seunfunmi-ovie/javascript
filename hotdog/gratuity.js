const prompt = require("prompt-sync")()
const gratuity = Number(prompt("Enter number: "));
const subtotal = Number(prompt("Enter number: "));
gratuityRate = (gratuity/100 * subtotal );
total = (gratuity/100 + subtotal);
console.log (gratuityRate);
console.log (total);

