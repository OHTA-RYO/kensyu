"use strict";
const arry = [11, 1, 12, 2, 13, 3, 14, 4, 15, 5];
let sum = 0;
let longSum = 0;
let sum5 = 0;
let sum4 = 0;
let longsum5 = 0;
let longsum4 = 0;
// const fun = (j) => {
for (let i = 0; i < 10; i++) {
    console.log(arry[i]);
    if (arry[i] >= 5) {
        console.log(`要素の値${arry[i]}は5以上です。`);
        sum5 += arry[i];
        longsum5++;
    }
    else {
        console.log(`要素の値${arry[i]}は5未満です。`);
        sum4 += arry[i];
        longsum4++;
    }
    longSum++;
    sum += arry[i];
}
console.log(`要素の長さは${longSum}でした。`);
console.log(`要素の合計は${sum}でした。`);
console.log(`5以上の値の要素の長さは${longsum5}`);
console.log(`5以上の値の要素の合計は${sum5}`);
console.log(`5未満の値の要素の長さは${longsum4}`);
console.log(`5以上の値の要素の合計は${sum4}`);
// };
// fun(0);
console.log(sum);
