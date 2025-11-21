const user = {
  name: "uvw",
  caste: "xyz",
  city: "abc",
  province: "jkl",
};

const { name, caste, ...rest } = user;


//The rest operator (...) in JavaScript is used to collect multiple elements into a single array or object. It's basically the opposite of the spread operator.
//It collects remaining arguments into an array.
