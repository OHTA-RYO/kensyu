"use strict";
{
  const $display = document.querySelector(".display-textarea");
  const $buttons = document.querySelectorAll(".push-text");
  let calcFlow="";
  const calcKigou = ['+','-','*','/'];
  $buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetElement = e.target;
      const val = targetElement.getAttribute("data-calc");
      if(val==="="){
        console.log(calcFlow);
        let result=eval(calcFlow).toString();
        if(result>9){
          result=result.slice(0,9);
        }
        $display.textContent = eval(calcFlow).toString();
        calcFlow = $display.textContent;
        return;
      }
      if (val === "AC"){ 
        $display.textContent = "";
        calcFlow = "";
        return;
      };
      if (calcKigou.includes(val)) {
        calcFlow += val;
        $display.textContent = "";
        return;
      }
      if($display.textContent.length < 9){
        $display.textContent += targetElement.textContent
        calcFlow += val;
        return;
      };
    });
  });
}


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
//   num1: '1',
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
// // // // });
