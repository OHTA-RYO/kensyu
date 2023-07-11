"use strict";
// {
// const $display = document.querySelector('.display-textarea');
// const $numbers = document.querySelectorAll('.push-text');
// let displayLength = $display.textContent.length;
// let result = 0;
// //テキストのデータを取得
// $numbers.forEach((number) => {
//   number.addEventListener('click', () => {
//     if (displayLength < 9) {
//       $display.textContent += String(number.textContent);
//       console.log(number.textContent);
//       displayLength++;
//     };
//           //↓で5つをクリックしても反応しないようにして
//       //別で情報を取る。
// 　　　　　　.includesを使ってみる
//       if($display.textContent === ('+') ||
//       $display.textContent === '-' ||
//       $display.textContent === '×' ||
//       $display.textContent === '÷'||
//       $display.textContent === '=' ){
//       $display.textContent = '';
//       console.log($display.textContent);
//       };
//   });
// });
// }
//onclickのパターン
// function value(text){
//   $display.textContent = (text);
// };
//htmlには↓入れる
//onclick="value('AC')"
// console.log(value);
//短く出来なかった。別の方法を試そう
// "use strict";
// //2回目の記号が入った時には直前の計算をすでにさせておく。
// //↑ 本当は1+2*3= 7だけど　1+2*3=9になっても良い。↑の処理を目的とする為。
// //まず1+1=2の処理をする。
// // {
// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const num3 = document.getElementById('num3');
// const num4 = document.getElementById('num4');
// const num5 = document.getElementById('num5');
// const num6 = document.getElementById('num6');
// const num7 = document.getElementById('num7');
// const num8 = document.getElementById('num8');
// const num9 = document.getElementById('num9');
// const num0 = document.getElementById('num0');
// const sakujo = document.getElementById('sakujo');
// const waru = document.getElementById('kigou1');
// const kakeru = document.getElementById('kigou2');
// const mainasu = document.getElementById('kigou3');
// const plus = document.getElementById('kigou4');
// const ikouru = document.getElementById('kigou5');
keisan();
function keisan() {
    // let plusClickCount = 0;
    // let mainasuClickCount = 0;
    // let kakeruClickCount = 0;
    // let waruClickCount = 0;
    var display = document.querySelector(".display-textarea");
    var saveNum = 0;
    if (!(display === null || display === void 0 ? void 0 : display.textContent))
        return;
    var displayLength = display.textContent.length;
    var $numbers = document.querySelectorAll("#num1,#num2,#num3,#num4,#num5,#num6,#num7,#num8,#num9,#num0,#num10");
    var $kigous = document.querySelectorAll("#sakujo, #kigou1,#kigou2,#kigou3,#kigou4,#kigou5,#kigou6,#kigou7");
    var kigouNum = ['+', '-', '*', '/'];
    var saveKigou = '';
    //↑一応宣言しておいた。
    $numbers.forEach(function (number) {
        number.addEventListener("click", function () {
            if (saveNum !== 0 && displayLength === 0) {
                display.textContent = "";
                console.log(displayLength);
                console.log(saveNum);
            }
            if (displayLength < 9) {
                var value = number.textContent;
                if (display.textContent === null)
                    return;
                display.textContent += value;
                displayLength++;
                console.log(display.textContent);
            }
        });
    });
    $kigous.forEach(function (kigou) {
        kigou.addEventListener("click", function () {
            displayLength = 0;
            console.log(saveNum);
            console.log(display.textContent);
            console.log(kigou.textContent);
            if (kigou.textContent === '×')
                kigou.textContent = '*';
            if (kigou.textContent === '÷')
                kigou.textContent = '/';
            //↓kigouNumの中にkigou.textContent(+-*/)が含まれる且つ
            //saveKigou に+-*/が代入された時に発動したかった。
            //5+5-5の場合に-の押した時点でkigou.textContentに-が上書きされて0になる
            //その為1回目の処理の時が終わってからsaveKigouに代入した。
            //エラーとなる。
            if (kigouNum.some(function (k) { return k === kigou.textContent && !!saveKigou; })) {
                console.log(saveNum);
                display.textContent = (eval("".concat(saveNum, " ").concat(saveKigou, " ").concat(display.textContent))).toString();
                console.log(saveNum);
                console.log(saveKigou);
                console.log(display.textContent);
            }
            // if(kigou.textContent === null) return;
            // if(kigouNum.includes(kigou.textContent) &&  !!saveKigou ) {
            //   console.log(`${saveNum} ${saveKigou} ${display.textContent}`);
            //   display.textContent = (eval(`${saveNum} ${saveKigou} ${display.textContent}`)).toString();
            //   console.log(saveNum);
            //   console.log(kigou.textContent);
            //   console.log(display.textContent); 
            // } 
            if (kigou.textContent === '=') {
                //イコールの処理
                console.log("".concat(saveNum, " ").concat(saveKigou, " ").concat(display.textContent));
                display.textContent = eval("".concat(saveNum, " ").concat(saveKigou, " ").concat(display.textContent));
            }
            //↓元々はsaveNum = display.textContentだった。tsエラーの為、Numberを追加
            saveNum = Number(display.textContent);
            // saveKigou = kigou.textContent=="=" ? "" : kigou.textContent;
            if (kigou.textContent === '=') {
                saveKigou = '';
            }
            else {
                // if(saveKigou === null) return;
                saveKigou = String(kigou.textContent);
            }
        });
    });
    //someを使ったやり方でできなかった。
    // if (kigouNum.some((k) => k === kigouButton )) {
    //   console.log(saveNum);
    //   display.textContent = eval(`${saveNum} ${kigouButton} ${display.textContent}`);
    //   console.log(saveNum);
    //   console.log(kigouButton);
    //   console.log(display.textContent);
    // }
    //↓エラーが出る。
    // if (kigouNum.some(k => k === kigouBox.textContent)) {
    //   let result = kigouNum[0].some;
    //   display.textContent = eval(saveNum + Number(display.textContent));
    //   console.log(saveNum);
    //   displayLength = 0;
    //   console.log(kigouBox.textContent);
    //   console.log(display.textContent);
    // };
    // kigouBox = kigou.textContent;
    // if(kigouBox === kigouNum[0] ){
    //   // kigouNum[0] ;
    //   display.textContent = eval(saveNum + Number(display.textContent));
    //   // kigouNum[1];
    //   // display.textContent = eval(saveNum - Number(display.textContent));
    // console.log(saveNum);
    // displayLength = 0;
    // // console.log(kigou.textContent);
    // console.log(display.textContent);
    // }
    // const $kigouValue = kigou.textContent;
    // let kigouNum = ['+','-','×','÷','='];
    // kigouNum.some(k => k === kigou.textContent);
}
