"use strict";
keisan();
function keisan() {
    const display = document.querySelector(".display-textarea");
    let saveNum = 0;
    if ((display === null || display === void 0 ? void 0 : display.textContent) === null)
        return;
    if (display === null)
        return;
    let displayLength = display.textContent.length;
    const $numbers = document.querySelectorAll("#num1,#num2,#num3,#num4,#num5,#num6,#num7,#num8,#num9,#num0,#num10");
    const $kigous = document.querySelectorAll("#sakujo, #kigou1,#kigou2,#kigou3,#kigou4,#kigou5,#kigou6,#kigou7");
    const kigouNum = ['+', '-', '*', '/'];
    let saveKigou = '';
    $numbers.forEach((number) => {
        number.addEventListener("click", () => {
            if (saveNum !== 0 && displayLength === 0) {
                display.textContent = "";
                console.log(displayLength);
                console.log(saveNum);
            }
            if (displayLength < 9) {
                const value = number.textContent;
                if (display.textContent === null)
                    return;
                display.textContent += value;
                displayLength++;
                console.log(display.textContent);
            }
        });
    });
    $kigous.forEach((kigou) => {
        kigou.addEventListener("click", () => {
            displayLength = 0;
            console.log(saveNum);
            console.log(display.textContent);
            console.log(kigou.textContent);
            if (kigou.textContent === '×')
                kigou.textContent = '*';
            if (kigou.textContent === '÷')
                kigou.textContent = '/';
            if (kigouNum.some((k) => k === kigou.textContent && !!saveKigou)) {
                console.log(saveNum);
                display.textContent = (eval(`${saveNum} ${saveKigou} ${display.textContent}`)).toString();
                console.log(saveNum);
                console.log(saveKigou);
                console.log(display.textContent);
            }
            if (kigou.textContent === '=') {
                console.log(`${saveNum} ${saveKigou} ${display.textContent}`);
                display.textContent = eval(`${saveNum} ${saveKigou} ${display.textContent}`);
            }
            saveNum = Number(display.textContent);
            if (kigou.textContent === '=') {
                saveKigou = '';
            }
            else {
                saveKigou = String(kigou.textContent);
            }
        });
    });
}
