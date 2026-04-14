"use strict";
const person = { name: "Олена", age: 30, profession: "Інженер" };
const { name, age, profession } = person;
export const info = `Користувач: ${name}, Вік: ${age}, Професія: ${profession}`;
console.log(info);