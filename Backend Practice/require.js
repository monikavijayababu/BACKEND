/* 1. require */

const userfunctions = require("./userfunctions");
console.log(userfunctions);
// console.log(module);
const output = userfunctions.signin({
    email: "monikavijayababu@gmail.com",
    password: "password"
});
console.log(output);
