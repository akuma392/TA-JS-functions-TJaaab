// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/
function string(number) {
   number = prompt("enter the number")

  return `the string is ${number}`;

}
console.log(string());
// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(numA, numB){
  return numA + numB;

}
addOne(45,67);
console.log(addOne(45,67));

// - Write a Function Expression

const add() = function addOne(numA, numB){
  return numA + numB;

}

// - Write an Arrow Function without curly brackets(if possible)

const add = (numA,numB) => (numA +numB);

// - Write an Arrow Function with curly brackets

const add = (numA,numB) =>{
 return numA + numB;
} 

// - Execute the function

add();

// - Execute the function and store the return value in a variable.
let x = add(25,56);

// - What is the typeof returnValue
typeof add(25,56);

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function subOne(numA, numB){
  return numA - numB;

}

// - Write a Function Expression
const sub() = function subOne(numA, numB){
  return numA + numB;

}

// - Write an Arrow Function without curly brackets(if possible)

const sub = (numA,numB) => (numA - numB);

// - Write an Arrow Function with curly brackets
const sub = (numA,numB) => {
  (numA - numB);
}

// - Execute the function
sub(25,56);
// - Execute the function and store the return value in a variable.

let y = sub(45,21);

// - What is the typeof returnValue

typeof(sub(56,22));
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1,num2){
  return num1+num2;
}
// - Write a Function Expression
 const add = function sum(num1,num2){
   return num1+num2;
 }
// - Write an Arrow Function without curly brackets(if possible)
 const add = (num1,num2) =>(num1+num2);
// - Write an Arrow Function with curly brackets
const add = (num1,num2) => {
  return num1 + num2;
}
// - Execute the function
sum();
// - Execute the function and store the return value in a variable
 let sumOfNumber= sum(45,56);
// - What is the typeof returnValue
 typeof(sum(56,12));
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function square(num){
   return num*num;

 }
// - Write a Function Expression
 const squareOfNumber =  function square(num){
  return num*num;

}
// - Write an Arrow Function without curly brackets(if possible)
 const squareOfNumber = (num)=> (num*num);
// - Write an Arrow Function with curly brackets
const squareOfNumber = (num)=> {
  return num*num;
}
// - Execute the function
squareOfNumber(15);
// - Execute the function and store the return value in a variable

let sq = squareOfNumber(12);
// - What is the typeof returnValue
 typeof(squareOfNumber(11));
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return `${x} is greater than ${y}`;
  }
  else{
    return `${y} is greater than ${x}`;
  }
}

// - Write a Function Expression
const greater = function isGreater(x,y){
  if(x>y){
    return `${x} is greater than ${y}`;
  }
  else{
    return `${y} is greater than ${x}`;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
const greater = (x,y)=>
  if(x>y){
    return `${x} is greater than ${y}`;
  }
  else{
    return `${y} is greater than ${x}`;
  }


// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if(number % 2 == 0){
    return `${number} is even`;

  }
  else{
    return `${number} is odd`;
  }
}

// - Write an anonymous Function Expression
const oddEven = function oddOrEven(number){
  if(number % 2 == 0){
    return `${number} is even`;

  }
  else{
    return `${number} is odd`;
  }
}

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => num % 2 == 0 ? "NUmber is even" : "Number is Odd";

// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => { num % 2 == 0 ? "NUmber is even" : "Number is Odd" };
// - Execute the function
oddOrEven(25);
// - Execute the function and store the return value in a variable
Let oddNum = oddOrEven();
// - What is the typeof returnValue

typeof(oddOrEven()); //"Number"
