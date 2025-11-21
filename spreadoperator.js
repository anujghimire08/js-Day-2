const arr = [1, 2, 3, 4];
const brr = [5, 6, 7, 8];
const crr = [...arr, ...brr];
console.log(crr);

//The spread operator (...) in JavaScript is used to expand elements of an array or object into individual elements or properties. It’s commonly used for copying, merging, and passing elements.

const obj = {
  name: "java",
};
const obj1 = {
  ...obj,
  age: 100,
};
console.log(obj1);

//The spread operator (...) in objects is used to copy, merge, or override properties of objects in a clean and concise way.
