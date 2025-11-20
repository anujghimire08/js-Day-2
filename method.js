const user = {
  name: "anuj",
  age: 100,
  Email: function () {
    console.log("ahds@gmail.com", this);
  },
};

user.Email();

// Functions inside objects are called methods, and they can use this to refer to the object itself.
