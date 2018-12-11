/*
 * SOLUTION: Hello.
 */

// shorthand - define (def) func (func) variable (var)

function hello() { // def func hello
  let result = "Hello, AP Computer Science Principles!"; // def var result as the string "Hello, AP Computer Science Principles!"
  document.getElementById("output1").innerHTML = result; // prints the result to the page element output1

  check("hello"); // checks the result to see if it is correct using the hidden js file
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() { // def func helloAgain
  let name = prompt("What is your name?"); // gives a prompt to the user with the prompt 'What is your name?' and stores it in var name

  let result = "Hello, " + name + "!"; // makes a new var and gives it the result of the var name plus strings "Hello " and "!"
  document.getElementById("output2").innerHTML = result; // prints the result to the page element outpu2

  check("helloAgain", name); // checks the result to see if it is correct using the hidden js file
}

/*
 * SOLUTION: Celsius.
 */

function celsius() { // def func celsius
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); // declares a var cels which has a random value bewteen -100 and 1000 rounded to 2 decimals

  let fahr = cels * 9 / 5 + 32; // declares var fahr with the value of cels * 9 / 5 + 32
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; // declares var result with a value of cels plus a string, var fahr, and another string
  document.getElementById("output3").innerHTML = result; // prints the result to the page element output3

  check("celsius", cels); // checks the resutl to see if it is correct using the hidden js file
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() { // def func fahrenheit
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); // declares var fahr to equal a random number bewteen -100 and 1000 with a limit of 2 decimal places

  let cels = (fahr - 32) * 5 / 9; // declares var cels with the value of (fahr - 32) * 5 / 9
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; // declares var result with a value of fahr plus a string, var cels, and another string
  document.getElementById("output4").innerHTML = result; // prints the result to the page element output4

  check("fahrenheit", fahr); // checks the result to see if it is correct using the hidden js file
}

/*
 * SOLUTION: Inches.
 */

function inches() { // def func inches
  const MILE = 63360; // declares const MILE with a value of 63360
  const YARD = 36; // declares const YARD with a value of 36
  const FOOT = 12; // declares const FOOT with a value of 12

  let input = -1; // declares var input with a value of -1
  while (input < 0) { // starts a while loop with the condition that input must be less than 0 until it breaks
    input = Number(prompt("Enter a non-negative integer.")); // displays a prompt whenever the loop goes through one time

    if (input === null) { // declares an if statement that if the var input has nothing in it
      break; // declares that the if statement should break and continue onto the next statement
    } else if (Number.isNaN(input)) { // declares an if statement with the condition that if the input is not a number....
      input = -1; // declares var as -1
    } else if (!Number.isInteger(input)) { // declares an if statement with the condition that if the input is not an integer...
      input = -1; // declares var as -1
    }
  }

  if (input !== null) { // declares an if statement that withe the condition that if input is equal to null....
    let inches = input; // declares var inches as the value of var input
    let miles = Math.floor(inches / MILE); // declares var miles as the value of var inches divided by var miles
    inches = inches % MILE; // declares inches as the value of the remainder of inches divided by miles
    let yards = Math.floor(inches / YARD); // declares var yards and gives it the value of inches divided by yards
    inches = inches % YARD; // declares inches as the value of the remainder of inches divided by yards
    let feet = Math.floor(inches / FOOT); // declares var feet as the value of var inches divided by var foot
    inches = inches % FOOT; // declares inches as the value of the reminader of inches dvidied by var foot

    let result = "Miles: " + miles + "<br/>" + // declares var result the combination of a string, var miles, string...
                 "Yards: " + yards + "<br/>" + // sring, var yards, string...
                 "Feet: " + feet + "<br/>" + // string, var feet, string.....
                 "Inches: " + inches; // string, and var inches
    document.getElementById("output5").innerHTML = result; // prints the result to the page element resutl
  } else { // declares an else statement if the above if statement did not work
    document.getElementById("output5").innerHTML = ""; // if the if above did not work, it prints nothing
  }

  check("inches", input); // checks the result to see if it correc using the hidden js file
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() { // def func centimeters
  const KILOMETER = 100000; // declares const KILOMETER to the value of 100000
  const METER = 100; // declares const METER to the value of 100

  let input = -1; // def var input to the value of -1
  while (input < 0) { // starts a while statement with the condition that if input is less than 0....
    input = Number(prompt("Enter a non-negative integer.")); // def var input as the user input from a prompt that dgives a string

    if (input === null) { // declares an if statement that if input is equal to null...
      break; // breaks out of the if statement and continues beyond all if statements
    } else if (Number.isNaN(input)) { // starts an else if statement that only fies if the above if statement did not work or did not satisfy. the condition if if input is equal to a Number
      input = -1; // sets the value of var input to -1 so t returns to the while loop
    } else if (!Number.isInteger(input)) { // starts an else if statement that only fires if the above if statement did not work or did not satisfy. The condition is if a condition is not an integer.
      input = -1; // sets the value of var input to -1 so it returns to the while loop
    }
  }

  if (input !== null) { // def if statement with conditon that if input does not have a value...
    let centimeters = input; // def var centimeters to the value of var input
    let kilometers = Math.floor(centimeters / KILOMETER); // def kilometers to the valeu of centimeters divided by value of var KILOMETER
    centimeters = centimeters % KILOMETER; // def var centimeters to the value of centimeters divided by the value of var KILOMETER
    let meters = Math.floor(centimeters / METER); // def var meters to the value of centimeters to the value of centimeters divided by EMETER
    centimeters = centimeters % METER; // def centimeters to the value of the remainder of centimeters divided by METER

    let result = "Kilometers: " + kilometers + "<br/>" + // def var result as the combination of a string, var kilometers, string....
                 "Meters: " + meters + "<br/>" + // string, var meters, string....
                 "Centimeters: " + centimeters; // string, and var centimeters
    document.getElementById("output6").innerHTML = result; // prints var result to the page element of output6
  } else {
    document.getElementById("output6").innerHTML = ""; // if the above if above did not work it prints nothing
  }

  check("centimeters", input); // checks the resutl to see if it is correct usnig the hidden js file
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() { // def var fluidOunces
  const GALLON = 128; // declares const GALLON and sets it to the value of 128
  const QUART = 32; // declares const QUART and sets it to the value of 32
  const PINT = 16; // declares const PINT and sets it to the value of 16
  const CUP = 8; // declares const CUP and sets it to the value of 8

  let input = -1; // def var input and sets it to the value of -1
  while (input < 0) { // starts a while loop with the condition if input is less than 0
    input = Number(prompt("Enter a non-negative integer.")); // declares a var input with the value of a prompt on the browser displaying a string

    if (input === null) { // declares an if statement if the value of var input contained nothing...
      break; // breaks out of the if statement and continues on with the code
    } else if (Number.isNaN(input)) { // def an else if statement that only fires if the above if statemetn did not work or was not satisfied. Checks if input is a number.
      input = -1; // def var input as -1
    } else if (!Number.isInteger(input)) { // def an else if statement that only fires if the above if statement did not work or was not satisfied. Checks if number is not an integer.
      input = -1; // def var input as -1
    }
  }

  if (input !== null) { // starts an if statement if the input value is equal to nothing
    let fluidOunces = input; // def var fluidOunces with the value of input
    let gallons = Math.floor(fluidOunces / GALLON); // def var gallons with the value of fluidOunces divided by GALLON
    fluidOunces = fluidOunces % GALLON; // def fluidOunces as the remainder of fluidOunces divided by var GALLON 
    let quarts = Math.floor(fluidOunces / QUART);
    fluidOunces = fluidOunces % QUART;
    let pints = Math.floor(fluidOunces / PINT);
    fluidOunces = fluidOunces % PINT;
    let cups = Math.floor(fluidOunces / CUP);
    fluidOunces = fluidOunces % CUP;

    let result = "Gallons: " + gallons + "<br/>" +
                 "Quarts: " + quarts + "<br/>" +
                 "Pints: " + pints + "<br/>" +
                 "Cups: " + cups + "<br/>" +
                 "Fluid Ounces: " + fluidOunces;
    document.getElementById("output7").innerHTML = result;
  } else {
    document.getElementById("output7").innerHTML = "";
  }

  check("fluidOunces", input);
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000;
  const POUND = 16;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let ounces = input;
    let tons = Math.floor(ounces / TON);
    ounces = ounces % TON;
    let pounds = Math.floor(ounces / POUND);
    ounces = ounces % POUND;

    let result = "Tons: " + tons + "<br/>" +
                 "Pounds: " + pounds + "<br/>" +
                 "Ounces: " + ounces;
    document.getElementById("output8").innerHTML = result;
  } else {
    document.getElementById("output8").innerHTML = "";
  }

  check("ounces", input);
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100;
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;

  let input = -1;
  while (input < 0) {
    input = Number(prompt("Enter a non-negative integer."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    } else if (!Number.isInteger(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let pennies = input;
    let dollars = Math.floor(pennies / DOLLAR);
    pennies = pennies % DOLLAR;
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let result = "Dollars: " + dollars + "<br/>" +
                 "Quarters: " + quarters + "<br/>" +
                 "Dimes: " + dimes + "<br/>" +
                 "Nickels: " + nickels + "<br/>" +
                 "Pennies: " + pennies;
    document.getElementById("output9").innerHTML = result;
  } else {
    document.getElementById("output9").innerHTML = "";
  }

  check("money", input);
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25;
  const DIME = 10;
  const NICKEL = 5;

  let input = -1;
  while (input < 0 || input >= 1) {
    input = Number(prompt("Enter a non-negative number less than 1.00."));

    if (input === null) {
      break;
    } else if (Number.isNaN(input)) {
      input = -1;
    }
  }

  if (input !== null) {
    let pennies = input;
    pennies = Number((pennies * 100.00).toFixed(0));
    let quarters = Math.floor(pennies / QUARTER);
    pennies = pennies % QUARTER;
    let dimes = Math.floor(pennies / DIME);
    pennies = pennies % DIME;
    let nickels = Math.floor(pennies / NICKEL);
    pennies = pennies % NICKEL;

    let coins = quarters + dimes + nickels + pennies;
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins.");
  } else {
    document.getElementById("output10").innerHTML = "";
  }

  check("change", input);
}
