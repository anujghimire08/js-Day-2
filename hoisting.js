data("anuj");

const data = (name) => {
  console.log(`My Name iz: ${name}`);
};
// arrow function doesnot support hoisting
let age = 2;
userage(age);
function userage(age) {
  console.log(`my age iz: ${age}`);
}
//JS brings all declarations to the top before running code.
//So you can sometimes use things before writing them.
