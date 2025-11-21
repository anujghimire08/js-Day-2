const arr = [
  { name: "xyz", age: 12 },
  { name: "abc", age: 56 },
  { name: "jkl", age: 37 },
];

let user = arr.find((item) => item.name === "jkl");
console.log(user);

//The find() method returns the first element in the array that satisfies the provided condition (callback function). If no element matches, it returns undefined.
