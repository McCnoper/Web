"use strict";
let name = prompt("What is your name?");
let age = Number(prompt("What is your age?"));
let city = prompt("Where do you live?");
let color = prompt("What is your favorite color?");
let work = prompt("What is your profession?");
console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof color);
console.log(typeof work);
if(age>18){
    alert(`Welcome ${name}, you are an adult, you live in ${city}, your favorite color is ${color} and you work as a ${work}.`);
}else{
    alert(`Welcome ${name}, you are a minor, you live in ${city}, your favorite color is ${color} and you work as a ${work}.`);
}
console.log(`Welcome ${name}, you are ${age} years old, you live in ${city}, your favorite color is ${color} and you work as a ${work}.`);