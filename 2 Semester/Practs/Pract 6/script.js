// script.js
"use strict";
import { greet, add, multiply } from "./utils.js";
console.log("Модульний код підключено!");
// Виклик функцій із модуля
greet("Студент");
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));
// Демонстрація використання шаблонних рядків та деструктуризації
import { info } from "./userdata.js";
console.log(info);
// Демонстрація spread/rest операторів
import{combined, sumAll} from "./dataUnification.js";
export const arr1 = [1, 2, 3];
export const arr2 = [4, 5, 6];
console.log(combined(arr1, arr2));
console.log(sumAll(...combined(arr1, arr2)));
