"use strict";
Survey()
Calculator()
function Survey() {
    function createSurvey() {
        let user = {
            name: null,
            age: 123,
            city: null,
            color: null,
            work: null
        }
        user.name = prompt("What is your name?");
        user.age = Number(prompt("What is your age?"));
        user.city = prompt("Where do you live?");
        user.color = prompt("What is your favorite color?");
        user.work = prompt("What is your profession?");

        return user;
    }
    function displaySurvey(user) {
        if (user.age > 18) {
            alert(`Welcome ${user.name}, you are an adult, you live in ${user.city}, your favorite color is ${user.color} and you work as a ${user.work}.`);
        } else {
            alert(`Welcome ${user.name}, you are a minor, you live in ${user.city}, your favorite color is ${user.color} and you work as a ${user.work}.`);
        }
        console.log(`Welcome ${user.name}, you are ${user.age} years old, you live in ${user.city}, your favorite color is ${user.color} and you work as a ${user.work}.`);
    }
    const survey = createSurvey();
    displaySurvey(survey);
}
function Calculator() {
    function Multiply(a) {
        return function (b) {
            return function (c) {
                return c * a + b;
            }
        }
    }

    const CtF = Multiply(1.8)(32);
    const FtC = Multiply(1 / 1.8)(-32 / 1.8);

    const val = Number(prompt("Enter a value to convert:"));
    const oper = prompt("Enter operation ('C to F' or 'F to C'):").toUpperCase();

    if (oper === "C TO F") {
        alert(`${val}°C is equal to ${CtF(val)}°F.`);
    } else if (oper === "F TO C") {
        alert(`${val}°F is equal to ${FtC(val)}°C.`);
    } else {
        alert("Invalid operation. Please enter 'C to F' or 'F to C'.");
    }
}