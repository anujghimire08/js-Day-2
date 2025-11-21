// implicit
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ip = numbers.filter((item) => item % 2 !== 0);
console.log(ip);

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let even = num.filter((item) => {
  return item % 2 === 0;
});
console.log(even);

//The filter() method creates a new array with only the elements that pass a condition (return true in a callback function).
