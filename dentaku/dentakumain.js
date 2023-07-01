"use strict";

// const nums = [
//   1,2,3,4,5,6,7,8,9,
// ];

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;
let num0 = 0;
let sakujo = "";
let clickCount = 0;
let memoryNumber = 0;
// let sumNumber = 0;


console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
//9回クリックするまで数字が表示される。。これはいけた。
//クリックした数字は記憶され、+-*/をクリックして、
//ディスプレイ上は一度リセットされる。また、数字がクリックされt
//最後に＝をクリックするとディスプレイに計算結果が現れる。
{

  document.querySelector("#num1").addEventListener("click", () => {
    // for (let clickCount = 0; clickCount < 1; clickCount++)
    // if (clickCount < 9) {
    //   clickCount++;
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num1;
      // document.querySelector(".display-textarea").textContent =document.querySelector(".display-textarea").textContent + num1
      // num1 = Number(document.querySelector(".display-textarea").textContent);
      console.log(num1)
    }
  });

  document.querySelector(".display-textarea").style.fontSize = "60px";
  document.querySelector(".display-textarea").style.textAlign = "right";



  document.querySelector("#num2").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num2;
      // num2 = Number(document.querySelector(".display-textarea").textContent);
      console.log(num2)
    }
  });
  document.querySelector(".display-textarea").style.fontSize = "60px";
  document.querySelector(".display-textarea").style.textAlign = "right";


//⇧⇩消すこと


  document.querySelector("#num3").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num3;
      num3 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num4").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num4;
      num4 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num5").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num5;
      num5 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num6").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num6;
      num6 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num7").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num7;
      num7 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num8").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num8;
      num8 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num9").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num9;
      num9 = Number(document.querySelector(".display-textarea").textContent);
    }
  });

  document.querySelector("#num0").addEventListener("click", () => {
    if (clickCount < 9) {
      clickCount++;
      document.querySelector(".display-textarea").textContent += num0;
      num0 = Number(document.querySelector(".display-textarea").textContent);
    }
  });


  document.querySelector("#sakujo").addEventListener("click", () => {
    document.querySelector(".display-textarea").textContent = sakujo;
    clickCount = 0;
    memoryNumber = 0;

  });

  document.querySelector("#plus").addEventListener("click", () => {
    memoryNumber = Number(document.querySelector(".display-textarea").textContent);
    console.log( memoryNumber)
  });

  document.querySelector("#subtraction").addEventListener("click", () => {
    memoryNumber = Number(document.querySelector(".display-textarea").textContent);
    console.log( memoryNumber)
    document.querySelector(".display-textarea").style.textAlign = "right";
  });

}

{
  document.querySelector("#subtraction").addEventListener("click", () => {
    memoryNumber = Number(document.querySelector(".display-textarea").textContent);
    console.log( memoryNumber)
    document.querySelector(".display-textarea").style.textAlign = "right";
  });
}



  // if (num1 = num1) {
  //   document.querySelector(".display-textarea")
  //   return;
  // }


//↓コメントアウト外すこと

//  num1++;

// if (num1 >= 9) {
//   return
//   clickCount ++;
// }

// document.querySelector(".display-textarea").textContent = num1;

// {
//   let num1 = Number('1');
//   // let num = parseInt(num1);
//   // console.log(num1)
//   let num2 = Number('2');
//   // let num = parseInt(num2);
//   let num3 = Number('3');
//   let num4 = Number('4');
//   let num5 = Number('5');
//   let num6 = Number('6');
//   let sakujo = "";

//   let sum = 0;

//   console.log(num3)
//   console.log(num4)
//   console.log(num5)
//   console.log(num6)
//   console.log(sakujo)
//   let clickCount = 0;

//   document.querySelector("#num1").addEventListener("click", () => {

//     if (clickCount >= 9) {
//       return;
//     }
//     clickCount++;
//     document.querySelector(".display-textarea").textContent += num1;
//     // console.log(num1);
//     // document.querySelector(".display-textarea").style.position = "absolute";
//     // document.querySelector(".display-textarea").style.left = '100px';
//     // document.querySelector(".display-textarea").style.top  = '100px';
//     document.querySelector(".display-textarea").style.fontSize = "60px";
//     document.querySelector(".display-textarea").style.textAlign = "right";

//     // if (clickCount >= 9) {}
//     // document.querySelector('#num1').disabled = true;
//     // num1.textContent = "制限に達しました";

//     // for (let num1 = 1; num1 < 9; num1++)
//     // document.querySelector('.display-textarea').textContent = num1;
//     console.log(num1);

//     // display-textarea.style.font-size =';' '64px';

//     // .display-textarea.style.position = 'absolute';
//     // .display-textarea.style.left = '100px';
//     // .display-textarea.style.top  = '100px';
//   });

//   document.querySelector("#num2").addEventListener("click", () => {

//     if (clickCount >= 9) {
//       return;
//     }
//     clickCount++;
//     document.querySelector(".display-textarea").textContent += num2;
//     // console.log(num1);
//     // document.querySelector(".display-textarea").style.position = "absolute";
//     // document.querySelector(".display-textarea").style.left = '100px';
//     // document.querySelector(".display-textarea").style.top  = '100px';
//     document.querySelector(".display-textarea").style.fontSize = "60px";
//     document.querySelector(".display-textarea").style.textAlign = "right";

//   });

//   document.querySelector("#sakujo").addEventListener("click", () => {
//     document.querySelector(".display-textarea").textContent = sakujo;
//     document.querySelector(".display-textarea").style.fontSize = "60px";
//     document.querySelector(".display-textarea").style.textAlign = "right";

//   });

//   //ディスプレイに表示されている数値をプラスボタンで合計する。
//   //実際の表示は＝を押したら出てくる。

//     document.querySelector("plus").addEventListener("click", () => {
//     document.querySelector(".display-textarea").textContent = sakujo;
//     document.querySelector(".display-textarea").style.fontSize = "60px";
//     document.querySelector(".display-textarea").style.textAlign = "right";

//   });

// }

// // {
// //   // const x="oota";
// //   // console.log(x);

// //   const num1 = 1 ;
// //   console.log(num1);

// //   // function display1() {
// //   //   console.log(num1)
// //   // }

// //   // #num1.addEventListener('click', showMessage);

// // }

// // {

// //   // const num1 = 1 ;
// //   // console.log(num1);

// //   document.querySelector('button').addEventListener('click', () => {
// //   // console.log(num1);
// //   // document.querySelector('#main-display').textContent = num1;
// //   document.querySelector('#main-display').textContent = 1;

// //   // document.querySelector('#num1').textContent;

// //   });

// //   // document.querySelector('#main-display').textContent = num1;

// //   }

// // document.querySelector('.pushi-botton1').addEventListener('click', () => {
// //   // document.querySelector('li').textContent = 'Changed!';
// //   // document.querySelectorAll('li')[0].textContent = 'Changed!';
// //   // document.querySelectorAll('li')[1].textContent = 'Changed!';
// //   // document.querySelectorAll('li')[2].textContent = 'Changed!';
// //   document.querySelector('dentaku-display').textContent = 1;
// // });
