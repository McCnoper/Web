// utils.js
"use strict";
// Функція оголошення
export function greet(name) {
console.log(`Привіт, ${name}!`);
}
// Функція додавання (функціональний вираз)
export const add = function(a, b) {
return a + b;
};
// Стрілочна функція для множення
export const multiply = (a, b) => a * b;