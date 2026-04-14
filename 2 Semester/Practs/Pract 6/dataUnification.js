"use strict";
export const combined = (arr1, arr2) => [...arr1, ...arr2];
export function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}