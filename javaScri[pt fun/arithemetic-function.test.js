const { add, subtract, divide } = require('./arithemetic-function') 

test("test addition of two positive numbers",() => {


        //expect(0).toBe(0)
        


let firstNumber = 82;
let secondNumber = 18;
 expect(add(firstNumber, secondNumber)).toBe(100)



})

test("test addition of two positive numbers and a negative number works accurately",() => {


        //expect(0).toBe(0)
        


let firstNumber = 82;
let secondNumber = -18;
 expect(add(firstNumber, secondNumber)).toBe(64)
 })

test("test addition of two positive numbers gives negative number result" ,() => {


        //expect(0).toBe(0)
        


let firstNumber = -10;
let secondNumber = -5;
 expect(add(firstNumber, secondNumber)).toBe(-15)
 })
 
 test("test that subtraction is working" ,() => {


        //expect(0).toBe(0)
        


let firstNumber = 80;
let secondNumber = 15;
 expect(subtract(firstNumber, secondNumber)).toBe(65)
 })
 
 
  test("test that two negative number subtraction give accurate value" ,() => {


        //expect(0).toBe(0)
        


let firstNumber = -8;
let secondNumber = -3;
 expect(subtract(firstNumber, secondNumber)).toBe(-5)
 })
 
 
 

