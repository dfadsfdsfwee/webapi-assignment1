console.log("Starting my first Node JS application");
const calculator = require("./calculator.js");  // CAN ALSO USE LET INSTEAD OF CONST

console.log("calculator's Description :"+calculator.description);
console.log("Perform add: "+calculator.add(2,3));
console.log("Perform multiply: "+calculator.multiply(2,3));
console.log("Perform subtract: "+calculator.subtract(2,3));


const person = require("./person.js"); 
person.SetAge(10);
person.setName("john");
console.log(person.getName());
console.log(person.getAge());

const course = require("./courseController.js"); 
course.Add("Chinese","EGL789");
console.log(JSON.stringify(course.getModules(2)));



