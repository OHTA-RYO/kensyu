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

{
  // let plusClickCount = 0;
  // let mainasuClickCount = 0;
  // let kakeruClickCount = 0;
  // let waruClickCount = 0;

  const display = document.querySelector(".display-textarea");
  let saveNum = 0;
  let displayLength = display.textContent.length;
  const $numbers = document.querySelectorAll(
    "#num1,#num2,#num3,#num4,#num5,#num6,#num7,#num8,#num9,#num0,#num10"
  );

  const $kigous = document.querySelectorAll(
    "#sakujo, #kigou1,#kigou2,#kigou3,#kigou4,#kigou5,#kigou6,#kigou7"
  );
  const kigouNum = ['+', '-', '*', '/'];
  let saveKigou = '';
  //↑一応宣言しておいた。

  $numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (saveNum !== 0 && displayLength === 0) {
        display.textContent = "";
        console.log(displayLength);
        console.log(saveNum);
      }

      if (displayLength < 9) {
        const value = number.textContent;
        display.textContent += value;
        displayLength++;
        console.log(display.textContent);
      }
    });
  });

 
  $kigous.forEach((kigou) => {
    kigou.addEventListener("click", () => {
      saveNum = (display.textContent);
      displayLength = 0;
      console.log(saveNum);
      console.log(display.textContent);
      console.log(kigou.textContent);

      if (kigou.textContent === '×') kigou.textContent = '*';
      if (kigou.textContent === '÷') kigou.textContent = '/';
      
      //↓kigouNumの中にkigou.textContent(+-*/)が含まれる且つ
      //saveKigou に+-*/が代入された時に発動したかった。
      //5+5-5の場合に-の押した時点でkigou.textContentに-が上書きされて0になる
      //その為1回目の処理の時が終わってからsaveKigouに代入した。
      //エラーとなる。
      if(kigouNum.includes(kigou.textContent) && saveKigou === kigou.textContent) {
        display.textContent = eval(`${saveNum} ${saveKigou} ${display.textContent}`)
        
        console.log(saveNum);
        console.log(kigou.textContent);
        console.log(display.textContent); 
      } 

      let saveKigou = kigou.textContent; 



      //someを使ったやり方でできなかった。
      // if (kigouNum.some((k) => k === kigouButton )) {
      //   console.log(saveNum);
      //   display.textContent = eval(`${saveNum} ${kigouButton} ${display.textContent}`);

      //   console.log(saveNum);
      //   console.log(kigouButton);
      //   console.log(display.textContent);
      // }

 
    //↓エラーが出る。
      if (kigou.textContent === '=') {
        //イコールの処理
        display.textContent = eval(`${saveNum} ${saveKigou} ${display.textContent}`);
      }

    });
  });


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

// else if(kigou.textContent === kigouNum[1]){
//   display.textContent = eval(saveNum - Number(display.textContent));
// }

//       if (kigou.textContent === "+") {
//         saveNum = Number(display.textContent);
//         plusClickCount++;
//         console.log(plusClickCount);
//       }

// let kigouNum = kigou['+','-','×','÷'];
// kigouNum.some(k => k === kigou.textContent);
// console.log(kigouNum[0]);
// console.log(kigouNum[1]);
// console.log(kigouNum[2]);

// if (kigou.textContent === '=' && plusClickCount >= 1) {
//   display.textContent = eval(saveNum + Number(display.textContent));
//   // console.log(saveNum);
//   // console.log(display.textContent);
//   plusClickCount = 0;

// }

// コードレビュー前
//   $kigous.forEach((kigou) => {
//     kigou.addEventListener("click", () => {
//       const $kigouValue = kigou.textContent;
//       console.log(saveNum);
//       displayLength = 0;
//       console.log(kigou.textContent);
//       console.log(display.textContent);

//       //↓まとめる　　or じゃなくてsome or includeを使う　配列を使う。
//       if (kigou.textContent === '=' && plusClickCount >= 1) {
//         display.textContent = eval(saveNum + Number(display.textContent));
//         // console.log(saveNum);
//         // console.log(display.textContent);
//         plusClickCount = 0;

//       }

//       else if (kigou.textContent === '+' && plusClickCount >= 1) {
//         display.textContent = eval(saveNum + Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         plusClickCount = 0;
//       }

//       else if (kigou.textContent !== '+' && kigou.textContent !== '=' && plusClickCount >= 1) {
//         display.textContent = eval(saveNum + Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         plusClickCount = 0;
//       }

//       if (kigou.textContent === '=' && mainasuClickCount >= 1) {
//         display.textContent = eval(saveNum - Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         mainasuClickCount = 0;

//       }
//       else if (kigou.textContent === '-' && mainasuClickCount >= 1) {
//         display.textContent = eval(saveNum - Number(display.textContent));
//         console.log(saveNum);
//         mainasuClickCount = 0;
//         console.log(display.textContent);
//       }
//       //↓修正
//       else if (kigou.textContent !== '-' && kigou.textContent !== '=' && mainasuClickCount >= 1) {
//         display.textContent = eval(saveNum - Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         mainasuClickCount = 0;
//       }

//       if (kigou.textContent === '=' && kakeruClickCount >= 1) {
//         display.textContent = eval(saveNum * Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         kakeruClickCount = 0;

//       } else if (kigou.textContent === '×' && kakeruClickCount >= 1) {
//         display.textContent = eval(saveNum * Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         kakeruClickCount = 0;
//         console.log(kakeruClickCount);
//       }

//       else if (kigou.textContent !== '×' && kigou.textContent !== '=' && kakeruClickCount >= 1) {
//         display.textContent = eval(saveNum * Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         mainasuClickCount = 0;
//       }

//       if (kigou.textContent === '=' && waruClickCount >= 1) {
//         display.textContent = eval(saveNum / Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         waruClickCount = 0;

//       } else if (kigou.textContent === '÷' && waruClickCount >= 1) {
//         display.textContent = eval(saveNum / Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         waruClickCount = 0;
//         console.log(waruClickCount);
//       }

//       else if (kigou.textContent !== '÷' && kigou.textContent !== '=' && waruClickCount >= 1) {
//         display.textContent = eval(saveNum / Number(display.textContent));
//         console.log(saveNum);
//         console.log(display.textContent);
//         waruClickCount = 0;
//       }

//       if (kigou.textContent === "+") {
//         saveNum = Number(display.textContent);
//         plusClickCount++;
//         console.log(plusClickCount);
//       }

//       if (kigou.textContent === "-") {
//         saveNum = Number(display.textContent);
//         mainasuClickCount++;
//       }

//       if (kigou.textContent === "÷") {
//         saveNum = Number(display.textContent);
//         waruClickCount++;
//       }

//       if (kigou.textContent === "×") {
//         saveNum = Number(display.textContent);
//         kakeruClickCount++;
//       }

//       if (kigou.textContent === 'AC') {
//         saveNum = 0;
//         display.textContent = '';
//         displayLength = 0;
//         plusClickCount = 0;
//         mainasuClickCount = 0;
//         kakeruClickCount = 0;
//         waruClickCount = 0;
//       }

//       if(kigou.textContent === '%'){
//         display.textContent = Number(display.textContent * 0.01) ;
//         console.log(display.textContent);
//         saveNum = 0;
//         displayLength = 0;
//         plusClickCount = 0;
//         mainasuClickCount = 0;
//         kakeruClickCount = 0;
//         waruClickCount = 0;
//       };

//       if(kigou.textContent === '+/-'){
//         display.textContent = -(display.textContent);
//       }

//     });
//   });
// }

// $kigous.forEach(kigou => {
//   kigou.addEventListener('click', () => {
//     saveNum = Number(display.textContent);
//     const $kigouValue = kigou.textContent;
//     // display.textContent = '';
//     // kigou.textContent = String(kigou.textContent);
//       console.log(saveNum);
//       displayLength = 0;
//       console.log(displayLength);
//       console.log(kigou.textContent);
//       console.log(display.textContent);

//      if (kigou.textContent === '+'){
//     //  saveNum = Number(display.textContent);
//       display.textContent = '';
//       console.log(display.textContent);
//       console.log(saveNum);
//     };

//       if (kigou.textContent === '=') {
//         display.textContent = eval((saveNum) + Number(display.textContent));
//         // display.textContent = (saveNum + Number(display.textContent)).toString();
//         // console.log(display.textContent);
//         // displayLength = 0;
//         // plusClickCount = 0;
//         console.log(saveNum);
//         console.log(display.textContent);

//       };
//     });
//   });
// }

//     if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);

//   ikouru.addEventListener('click', () => {
// if (display.textContent === '=') {
//   display.textContent = eval((saveNum) + Number(display.textContent));
//   console.log(display.textContent);
//   displayLength = 0;
//   plusClickCount = 0;
//     }

//   num1.addEventListener('click', () => {
//     //1クリック目はスルーされる。「+,-,*,/」をクリックするとdisplayLngthを0にしているので2回目の1クリックから1回だけ適応
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//       // console.log(saveNum);
//       // console.log(displayLength);
//       // console.log(display.textContent);
//     }

//     if (displayLength < 9) {
//       display.textContent += String(1);
//       // console.log(display.textContent);
//       displayLength++;
//       // console.log(displayLength);
//     }
//   });

//   num2.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(2);
//       displayLength++;
//     }
//   });

//   num3.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(3);
//       displayLength++;
//     }
//   });

//   num4.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(4);
//       displayLength++;
//     }
//   });

//   num5.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(5);
//       displayLength++;
//     }
//   });

//   num6.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(6);
//       displayLength++;
//     }
//   });

//   num7.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(7);
//       displayLength++;
//     }
//   });

//   num8.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(8);
//       displayLength++;
//     }
//   });

//   num9.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(9);
//       displayLength++;
//     }
//   });

//   num0.addEventListener('click', () => {
//     if (saveNum !== 0 && displayLength === 0) {
//       display.textContent = '';
//     }

//     if (displayLength < 9) {
//       display.textContent += String(0);
//       displayLength++;
//     }
//   });

//   plus.addEventListener('click', () => {
//     plusClickCount++;
//     console.log(plusClickCount);
//     //一回目のクリックはスルーされる。
//     if (plusClickCount >= 2) {
//       display.textContent = eval((saveNum) + Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//     }

//     if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);

//   });

//   mainasu.addEventListener('click', () => {
//     mainasuClickCount++;
//     console.log(mainasuClickCount);
//     if (mainasuClickCount >= 2) {
//       display.textContent = eval((saveNum) - Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//     }

//     if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);

//   });

//   //「＋」を連続しておしても何もならないようにする。

//   kakeru.addEventListener('click', () => {
//     kakeruClickCount++;
//     console.log(kakeruClickCount);
//     if (kakeruClickCount >= 2) {
//       display.textContent = eval((saveNum) * Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//     }

//     if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);

//   });

//   waru.addEventListener('click', () => {
//     waruClickCount++;
//     console.log(kakeruClickCount);
//     if (waruClickCount >= 2) {
//       display.textContent = eval((saveNum) / Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//     }

//     if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);

//   });

//   ikouru.addEventListener('click', () => {
//     if (plusClickCount >= 1) {
//       display.textContent = eval((saveNum) + Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//       plusClickCount = 0;
//     }

//     if (mainasuClickCount >= 1) {
//       display.textContent = eval((saveNum) - Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//       mainasuClickCount = 0;
//     }

//     if (kakeruClickCount >= 1) {
//       display.textContent = eval((saveNum) * Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//       kakeruClickCount = 0;
//     }

//     if (waruClickCount >= 1) {
//       display.textContent = eval((saveNum) / Number(display.textContent));
//       console.log(display.textContent);
//       displayLength = 0;
//       waruClickCount = 0;
//     }
//   });

//   sakujo.addEventListener('click', () => {
//     display.textContent = '';
//     saveNum = 0
//     displayLength = 0;
//     plusClickCount = 0;
//     mainasuClickCount = 0;
//     kakeruClickCount = 0;
//     waruClickCount = 0;
//   });

// }

//ここから↓バックアップ
// plus.addEventListener('click', () => {
//   clickCount++;
//   console.log(clickCount);
//   if(clickCount >= 2){
//     display.textContent = eval((saveNum) + Number(display.textContent));
//     console.log(display.textContent);
//     displayLength = 0;
//   }

//   if (display.textContent === "") return;
//     saveNum = Number(display.textContent);
//     displayLength = 0;
//     console.log(saveNum);
//     ikouru.addEventListener('click', () => {
//       //もし足し算だったら↓の式で引き算だったらとする必要がある。
//     });
// });

// ikouru.addEventListener('click', () => {
//   //もし足し算だったら↓の式で引き算だったらとする必要がある。
//   display.textContent = eval((saveNum) + Number(display.textContent));
//   console.log(display.textContent);
//   displayLength = 0;
//   clickCount = 0;
// });

// console.log(displayLength);

// {
//   const num0 = document.getElementById("num0");
//   const num1 = document.getElementById("num1");
//   const num2 = document.getElementById("num2");
//   const num3 = document.getElementById("num3");
//   const num4 = document.getElementById("num4");
//   const num5 = document.getElementById("num5");
//   const num6 = document.getElementById("num6");
//   const num7 = document.getElementById("num7");
//   const num8 = document.getElementById("num8");
//   const num9 = document.getElementById("num9");
//   const num10 = document.getElementById("num10");
//   const waru = document.getElementById("kigou1");
//   const kakeru = document.getElementById("kigou2");
//   const mainasu = document.getElementById("kigou3");
//   const plus = document.getElementById("kigou4");
//   const ikouru = document.getElementById("kigou5");
//   const pasent = document.getElementById("kigou6");
//   const plusMainasu = document.getElementById("kigou7");
//   const sakujo = document.getElementById("sakujo");
//   const display = document.querySelector(".display-textarea");
//   let numbers = [
//     num0,
//     num1,
//     num2,
//     num3,
//     num4,
//     num5,
//     num6,
//     num7,
//     num8,
//     num9,
//     num10,
//   ];
//   const kigous = [
//     kigou1,
//     kigou2,
//     kigou3,
//     kigou4,
//     kigou5,
//     kigou6,
//     kigou7,
//     sakujo,
//   ];
//   let displayLength = display.textContent.length;
//   let saveNum = 0;

//   numbers.forEach((numbers) => {
//     numbers.addEventListener("click", () => {
//       if (displayLength < 9) {
//         display.textContent += numbers.textContent;
//         displayLength++;
//         console.log(display);
//         //もしかしたら、ここで9回以上入力した時にlengthリセットが必要かも。//処理がわかない。
//       }
//     });
//   });

//   kigous.forEach((kigous) => {
//     kigous.addEventListener("click", () => {
//       saveNum = display.textContent;
//       display.textContent = "";
//       console.log(saveNum);
//       //↑ここで記号をクリックするまでの数字を記憶
//       //↓クリックしたのが＋だった場合の処理を
//       //(数字 ＋ )の関数にしておいて
//       function tasu() {
//         if(saveNum === plus){
//           saveNum += numbers.textContent;
//           console.log(saveNum);
//         }
//       }
//       //↓の=をクリックした時に↑の＋の処理と連結したい
//       if(numbers.textContent === ikouru){
//         tasu();
//         return;
//         console.log(display.textContent);
//       }
//     });
//   });
// }

// //ここから

//    //ディスプレイのデータを取得
// {
//   const $display = document.querySelector('.display-textarea');
//   const $numbers = document.querySelectorAll('.push-text');

//   $numbers.forEach((value) =>{
//   $numbers.addEventListener('click', () => {
//   alert($numbers.value);
//     });
//   });

// }

//昨日まで
// {
//   let shoeText = ''
//   let length = 0;
//   let PlusNumber = 0;

//   //ディスプレイのデータを取得
//   const $display = document.querySelector('.display-textarea')

//   /** ボタンをクリック */
//   function clickKey(text) {
//     if (typeof text === 'number' && shoeText.length < 9) {
//       shoeText += String(text);
//       $display.textContent = shoeText
//     }

//     switch ($display.textContent) {
//       case '+':
//       $display.textContent = '';
//       break;
//       case '=':
//         $display.textContent = $display.textContent + $display.textContent;
//         console.log($display.textContent);
//         break;
//     }

//     // if (text === 'AC') {
//     //   $display.textContent = "";
//     //   shoeText = '';
//     //   length = 0;
//     // } console.log(text) // ACの関数

//     // if (text === '+') {
//     //   plusNumber = Number($display.textContent);
//     //   shoeText = '';
//     // }

//     // if (text === '=') {
//     //   const currentValue = Number($display.textContent);
//     //   const result = plusNumber + currentValue;
//     //   $display.textContent = result;
//     //   shoeText = String(result);
//     // }

//     // // if (text === '+') {
//     // //   const plus = Number($display.textContent);
//     // //   $display.textContent = plus + plus ;
//     // // } // +の関数

//     // if (text === '÷') {
//     //   $display.textContent = ($display.textContent / $display.textContent);
//     // } console.log(text) // ÷の関数

//     // if (text === '×') {
//     //   $display.textContent = ($display.textContent * $display.textContent);
//     // } console.log(text) // ×の関数

//     // if (text === '-') {
//     //   $display.textContent = ($display.textContent - $display.textContent);
//     // } console.log(text) // -の関数

//     //   if (text === '=') {
//     //     $display.textContent = ($display.textContent + $display.textContent);
//     //     console.log(text) // =の関数
//     // }

//   }
// }

// //onclick使用前
// //夜 JavaScriptでフォントサイズと位置を指定してたのを
// //cssに書き足した。

// {
//   //ディスプレイのデータを取得
//   const $display = document.querySelector(".display-textarea");

//   //AC〜＝までのボタンデータを取得
//   const $buttons = document.querySelectorAll(".push-text");

//   const calcPlus = (type) => {
//     if (type !== '+') return
//     console.log(type)
//   }

//   //関数
//   //forEachでボタンデータを1つずつ処理
//   //関数でボタンに対するクリックイベントを実施
//   //event.targetでクリックされた要素を取得
//   //ディスプレイに表示される情報をターゲットテキストで代入して表示
//   $buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       //条件分岐 文字数が9以上ならクリックしても表示されない。
//       //↓のletをlength9の中で宣言していた。外に持ってきたらエラー解消された。
//       const targetElement = e.target;
//       if (length < 9) {
//         length++;
//         $display.textContent += targetElement.textContent;
//         console.log(targetElement.textContent);
//       }
//       if (targetElement.textContent === "AC") {
//         $display.textContent = "";
//         length = 0;
//       }
//       //↓が上手く作用しない ↑の関数をconstに入れて、↓に使いたい。
//       //＝をクリックした時に結果を表示させたい。
//       // if (targetElement.textContent === '+') {
//       //   Number($display.textContent + targetElement.textContent);
//       //   console.log(targetElement.textContent);
//       // }

//       calcPlus(targetElement.textContent);
//     });
//   });
// }

//残骸
//  // const push = console.log(display);
// const displayNumber =  buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(display.innerHTML);
//     display.textContent = display.innerHTML;

// function button(target) {
//   console.log(target);
// }

//   });
// });

// // displayNumber
// if(display === 'AC'){
//   display.innerHTML='10';
//   console.log('AC');
// } else {

//   console.log('それ以外')
// }

// buttons.addEventListener("click", (target) => {
//   display.innerHTML;
// let targetBtton = target.innerHTML;
//   console.log(target);
// });

// //夕方時点
// {
//   const button = document.querySelectorAll('#sakujo,#num7,#num6,#num5,#num4,#num3');
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
//   const $display = document.querySelector(".display-textarea")
//   // let displayLength = ('display.textContent.length');

//   button[0].addEventListener("click", () => {
//     if (length < 9) {
//       $display.textContent += numbers[1];
//       length++;
//       $display.style.textAlign = 'right';
//       $display.style.fontSize = '60px';
//       console.log(numbers);
//     }
//   });

//   button[1].addEventListener("click", (e) => {
//     if (length < 9) {
//       $display.textContent += numbers[e.taret];
//       length++;
//       $display.style.textAlign = 'right';
//       $display.style.fontSize = '60px';
//       console.log(numbers);
//     }
//   });

// }

// let index = 0;
// while(index < numbers.length){
//   //繰り返ししたい処理
//   console.log(numbers[index]);
//   index++;
// }

// // if else
// if(numbers.length < 5){
//   console.log('Yes');
// } else{
//   console.log('No');
// }

// 関数
// 同じ命令を何度も使いたい時
// 任意のタイミングで命令を実行させたい時
// argは引数を英語にしただけ
// const number = (arg) => {
//   //ここに実行したい命令を書く
//   if (numbers.length === arg) {
//     console.log('numbers');
//   } else {
//     console.log('No');
//   }
// };
// number(0);
// number(1);
// number(2);
// number(3);

// const number = (arg) => {
//   //ここに実行したい命令を書く
//   if (numbers.length === arg) {
//     console.log(numbers);
//   } else {
//     console.log('No');
//   }
// };
// number(1);
// number(2);
// number(3);
// number(10);

// console.log(numbers);
// number(15);

// const numbers = {
//   num2: '1',
//   num2: '2',
//   num3: '3',
//   num4: '4',
//   num5: '5',
//   num6: '6',
//   num7: '7',
//   num8: '8',
//   num9: '9',
//   num0: '0',
// }

// console.log(numbers.num1);
// console.log(numbers.num3);
// console.log(numbers.num0);

//Saturday分
// {
//   const display = document.querySelector('.display-textarea');
//   console.log(display)
//   const num1 = document.getElementById('num1');
//   const num2 = document.getElementById('num2');
//   const num3 = document.getElementById('num3');
//   const num4 = document.getElementById('num4');
//   const num5 = document.getElementById('num5');
//   const num6 = document.getElementById('num6');
//   const num7 = document.getElementById('num7');
//   const num8 = document.getElementById('num8');
//   const num9 = document.getElementById('num9');
//   const num0 = document.getElementById('num0');
//   const sakujo = document.getElementById('sakujo');
//   let length = display.textContent.length;

//   num1.addEventListener('click', () => {

//     if (length < 9) {
//       display.textContent += '1';
//       length++;
//       display.style.textAlign = 'right';
//       display.style.fontSize = '60px';
//       console.log(num1)
//     }
//   })

//   // display-textarea.style.fontSize.60px;
//   //  document.querySelector(".display-textarea").style.textAlign = "right";

//   // const num1 = 1;
//   // const num2 = 2;
//   // const num3 = 3;
//   // const num4 = 4;
//   // const num5 = 5;
//   // const num6 = 6;
//   // const num7 = 7;
//   // const num8 = 8;
//   // const num9 = 9;
//   // const num0 = 0;
//   // const sakujo = "";
//   // let clickCount = 0;
//   // let memoryNumber = 0;
// }

// // const nums = [
// //   1,2,3,4,5,6,7,8,9,
// // ];

// const num1 = 1;
// const num2 = 2;
// const num3 = 3;
// const num4 = 4;
// const num5 = 5;
// const num6 = 6;
// const num7 = 7;
// const num8 = 8;
// const num9 = 9;
// const num0 = 0;
// const sakujo = "";
// let clickCount = 0;
// let memoryNumber = 0;
// // let sumNumber = 0;

// {//9文字で制限をかけてみる
//   // const maxLength = 9;
//   const buttons = document.querySelectorAll(
//     ".push-text,.push-text1,.push-text-kigou"
//   );

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (clickCount < 9) {
//         clickCount++;

//         // if (document.querySelector(".display-textarea").length < maxLength) {
//         //   textContent += button.textContent;
//         // }
//         document.querySelector(".display-textarea").textContent += (Number(button.textContent).toLocaleString());
//         console.log(button.textContent);
//       }
//     });
//   });
//   document.querySelector(".display-textarea").style.fontSize = "60px";
//   document.querySelector(".display-textarea").style.textAlign = "right";

//   document.querySelector("#sakujo").addEventListener("click", () => {
//     document.querySelector(".display-textarea").textContent = sakujo;
//     clickCount = 0;
//     memoryNumber = 0;

//   });

//   document.querySelector("#plus").addEventListener("click", () => {
//     memoryNumber = Number(document.querySelector(".display-textarea").textContent);
//     console.log(memoryNumber)
//   });

//   document.querySelector("#subtraction").addEventListener("click", () => {
//     memoryNumber = Number(document.querySelector(".display-textarea").textContent);
//     console.log(memoryNumber)
//   });

// }

//         // function handleClick() {
//         //   document.querySelector(".display-textarea").textContent += button.textContent;
//         // }
//         // button.addEventListener("click", handleClick);
//         // const inputText = button.textContent;
//         // const displayTextarea = document.querySelector(".display-textarea");

//         // if (displayTextarea.textContent.length < maxLength) {
//         //   displayTextarea.textContent += inputText;
//         // }

// // {
// //   const buttons = document.querySelectorAll(".push-text,.push-text1,.push-text-kigou");

// //   buttons.forEach((button) => {
// //     button.addEventListener("click", () => {
// //       if (clickCount < 9) {
// //         clickCount++;
// //         let inputValue;
// //         if (button.classList.contains("push-text")) {
// //           inputValue = num1;
// //         } else if (button.classList.contains("push-text1")) {
// //           inputValue = num2;
// //         } else {
// //           inputValue = button.textContent;
// //         }
// //         document.querySelector(".display-textarea").textContent += inputValue;
// //         console.log(inputValue);
// //       }
// //     });
// //   });
// // }

// //9回クリックするまで数字が表示される。。これはいけた。
// //クリックした数字は記憶され、+-*/をクリックして、
// //ディスプレイ上は一度リセットされる。また、数字がクリックされt
// //最後に＝をクリックするとディスプレイに計算結果が現れる。

// // {
// //   const buttons = document.querySelectorAll(".push-button1,.push-button2");

// //   buttons.forEach((button) => {
// //     button.addEventListener("click", () => {
// //       if (clickCount < 9) {
// //         clickCount++;
// //         document.querySelector(".display-textarea").textContent += buttons;
// //         // num2 = Number(document.querySelector(".display-textarea").textContent);
// //         console.log(num1)
// //       }
// //     });
// //   });

// // }

// // // document.querySelector("#num1").addEventListener("click", () => {
// // //   if (clickCount < 9) {
// // //     clickCount++;
// // //     document.querySelector(".display-textarea").textContent += num2;
// // //     // num2 = Number(document.querySelector(".display-textarea").textContent);
// // //     console.log(num1)
// // //   }
// // // });
// //   //   // for (let clickCount = 0; clickCount < 1; clickCount++)
// //   //   // if (clickCount < 9) {
// //   //   //   clickCount++;
// //   //   if (clickCount < 9) {
// //   //     clickCount++;
// //   //     document.querySelector(".display-textarea").textContent += num1;
// //   //     // document.querySelector(".display-textarea").textContent =document.querySelector(".display-textarea").textContent + num1
// //   //     // num1 = Number(document.querySelector(".display-textarea").textContent);
// //   //     console.log(num1)
// //   //   }
// //   // });

// //   document.querySelector(".display-textarea").style.fontSize = "60px";
// //   document.querySelector(".display-textarea").style.textAlign = "right";

// //   document.querySelector("#num2").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num2;
// //       // num2 = Number(document.querySelector(".display-textarea").textContent);
// //       console.log(num2)
// //     }
// //   });
// //   document.querySelector(".display-textarea").style.fontSize = "60px";
// //   document.querySelector(".display-textarea").style.textAlign = "right";

// //   //⇧⇩消すこと

// //   document.querySelector("#num3").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num3;
// // console.log(num3);

// //       // num3 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num4").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num4;
// //       console.log(num4);

// //       // num4 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num5").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num5;
// //       console.log(num5);

// //       // num5 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num6").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num6;
// //       console.log(num6);

// //       // num6 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num7").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num7;
// //       console.log(num7);

// //       // num7 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num8").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num8;
// //       console.log(num8);

// //       // num8 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num9").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num9;
// //       console.log(num9);
// //       // num9 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#num0").addEventListener("click", () => {
// //     if (clickCount < 9) {
// //       clickCount++;
// //       document.querySelector(".display-textarea").textContent += num0;
// //       // num0 = Number(document.querySelector(".display-textarea").textContent);
// //     }
// //   });

// //   document.querySelector("#sakujo").addEventListener("click", () => {
// //     document.querySelector(".display-textarea").textContent = sakujo;
// //     clickCount = 0;
// //     memoryNumber = 0;

// //   });

// //   document.querySelector("#plus").addEventListener("click", () => {
// //     memoryNumber = Number(document.querySelector(".display-textarea").textContent);
// //     console.log( memoryNumber)
// //   });

// //   document.querySelector("#subtraction").addEventListener("click", () => {
// //     memoryNumber = Number(document.querySelector(".display-textarea").textContent);
// //     console.log( memoryNumber)
// //     // document.querySelector(".display-textarea").style.textAlign = "right";
// //   });

// // }

// // // {
// // //   document.querySelector("#subtraction").addEventListener("click", () => {
// // //     memoryNumber = Number(document.querySelector(".display-textarea").textContent);
// // //     console.log( memoryNumber)
// // //     document.querySelector(".display-textarea").style.textAlign = "right";
// // //   });
// // // }

// //   // if (num1 = num1) {
// //   //   document.querySelector(".display-textarea")
// //   //   return;
// //   // }

// // //↓コメントアウト外すこと

// // //  num1++;

// // // if (num1 >= 9) {
// // //   return
// // //   clickCount ++;
// // // }

// // // document.querySelector(".display-textarea").textContent = num1;

// // // {
// // //   let num1 = Number('1');
// // //   // let num = parseInt(num1);
// // //   // console.log(num1)
// // //   let num2 = Number('2');
// // //   // let num = parseInt(num2);
// // //   let num3 = Number('3');
// // //   let num4 = Number('4');
// // //   let num5 = Number('5');
// // //   let num6 = Number('6');
// // //   let sakujo = "";

// // //   let sum = 0;

// // //   console.log(num3)
// // //   console.log(num4)
// // //   console.log(num5)
// // //   console.log(num6)
// // //   console.log(sakujo)
// // //   let clickCount = 0;

// // //   document.querySelector("#num1").addEventListener("click", () => {

// // //     if (clickCount >= 9) {
// // //       return;
// // //     }
// // //     clickCount++;
// // //     document.querySelector(".display-textarea").textContent += num1;
// // //     // console.log(num1);
// // //     // document.querySelector(".display-textarea").style.position = "absolute";
// // //     // document.querySelector(".display-textarea").style.left = '100px';
// // //     // document.querySelector(".display-textarea").style.top  = '100px';
// // //     document.querySelector(".display-textarea").style.fontSize = "60px";
// // //     document.querySelector(".display-textarea").style.textAlign = "right";

// // //     // if (clickCount >= 9) {}
// // //     // document.querySelector('#num1').disabled = true;
// // //     // num1.textContent = "制限に達しました";

// // //     // for (let num1 = 1; num1 < 9; num1++)
// // //     // document.querySelector('.display-textarea').textContent = num1;
// // //     console.log(num1);

// // //     // display-textarea.style.font-size =';' '64px';

// // //     // .display-textarea.style.position = 'absolute';
// // //     // .display-textarea.style.left = '100px';
// // //     // .display-textarea.style.top  = '100px';
// // //   });

// // //   document.querySelector("#num2").addEventListener("click", () => {

// // //     if (clickCount >= 9) {
// // //       return;
// // //     }
// // //     clickCount++;
// // //     document.querySelector(".display-textarea").textContent += num2;
// // //     // console.log(num1);
// // //     // document.querySelector(".display-textarea").style.position = "absolute";
// // //     // document.querySelector(".display-textarea").style.left = '100px';
// // //     // document.querySelector(".display-textarea").style.top  = '100px';
// // //     document.querySelector(".display-textarea").style.fontSize = "60px";
// // //     document.querySelector(".display-textarea").style.textAlign = "right";

// // //   });

// // //   document.querySelector("#sakujo").addEventListener("click", () => {
// // //     document.querySelector(".display-textarea").textContent = sakujo;
// // //     document.querySelector(".display-textarea").style.fontSize = "60px";
// // //     document.querySelector(".display-textarea").style.textAlign = "right";

// // //   });

// // //   //ディスプレイに表示されている数値をプラスボタンで合計する。
// // //   //実際の表示は＝を押したら出てくる。

// // //     document.querySelector("plus").addEventListener("click", () => {
// // //     document.querySelector(".display-textarea").textContent = sakujo;
// // //     document.querySelector(".display-textarea").style.fontSize = "60px";
// // //     document.querySelector(".display-textarea").style.textAlign = "right";

// // //   });

// // // }

// // // // {
// // // //   // const x="oota";
// // // //   // console.log(x);

// // // //   const num1 = 1 ;
// // // //   console.log(num1);

// // // //   // function display1() {
// // // //   //   console.log(num1)
// // // //   // }

// // // //   // #num1.addEventListener('click', showMessage);

// // // // }

// // // // {

// // // //   // const num1 = 1 ;
// // // //   // console.log(num1);

// // // //   document.querySelector('button').addEventListener('click', () => {
// // // //   // console.log(num1);
// // // //   // document.querySelector('#main-display').textContent = num1;
// // // //   document.querySelector('#main-display').textContent = 1;

// // // //   // document.querySelector('#num1').textContent;

// // // //   });

// // // //   // document.querySelector('#main-display').textContent = num1;

// // // //   }

// // // // document.querySelector('.pushi-botton1').addEventListener('click', () => {
// // // //   // document.querySelector('li').textContent = 'Changed!';
// // // //   // document.querySelectorAll('li')[0].textContent = 'Changed!';
// // // //   // document.querySelectorAll('li')[1].textContent = 'Changed!';
// // // //   // document.querySelectorAll('li')[2].textContent = 'Changed!';
// // // //   document.querySelector('dentaku-display').textContent = 1;
// // // // })
