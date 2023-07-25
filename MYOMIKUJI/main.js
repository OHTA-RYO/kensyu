"use strict";
// let i = 0
function number4(num1) {
    if (num1 >= 4) {
        console.log('値は4以上です。');
    }
    else {
        console.log('値は4未満です。');
    }
}
function number8(num2) {
    if (num2 >= 8) {
        console.log('値は8以上です。');
    }
    else {
        console.log('値は8未満です。');
    }
}
for (let i = 1; i <= 10; i++) {
    console.log(i + 'を関数で確認します。');
    number4(i);
    number8(i);
}
