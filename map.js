function increment(number) {
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    let add = number[i] + 1;
    arr = [...arr, add];
  }
  return arr;
}
//increment([1, 2, 3, 4]);

let decrement = [2, 3, 4, 5];
let output = decrement.map((items) => console.log(items - 1));
console.log(output);

//map() is an array method that loops through an array and returns a NEW array after applying a function to each element.
