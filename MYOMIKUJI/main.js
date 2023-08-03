"use strict";
const arrays = [11, 1, 12, 2, 13, 3, 14, 4, 15, 5];
let arraySum = 0; //全体の合計
let arrayLength = 0; //全体の長さ
let array5Sum = 0; //5以上の合計
let array5Length = 0; //5以上の長さ
let array5LessSum = 0; //5未満の合計
let array5LessLength = 0; //5未満の長さ
const upper = arrays.filter((m) => m === 5);
const upperSum = upper.reduce((a, b) => a + b);
const lower = arrays.filter((m) => m < 5);
const lowerSum = lower.reduce((a, b) => a + b);
console.log(upper.length);
console.log(upperSum);
console.log(lower.length);
console.log(lowerSum);
