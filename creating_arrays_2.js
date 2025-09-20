//Task 1
// Create an array with 7 slots
let arr = new Array(7);

// Fill all slots with "Hello"
arr.fill("Hello");

console.log(arr); 
// Output: ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

//Task 2
arr.fill("Hi", 0, 3);

console.log(arr);
// Output: ["Hi", "Hi", "Hi", "Hello", "Hello", "Hello", "Hello"]

//Task 3
// Create an array of size 5
let numbers = new Array(5);

// Use a for loop to assign index * 10
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i * 10;
}

console.log(numbers);
// Output: [0, 10, 20, 30, 40]

