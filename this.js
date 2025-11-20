const employee = {
  nam: "uni",
  umer: 16,
  language: function () {
    return this;
  },
};

employee.location();
employee.language();

// this refers to the object that is calling the function.
