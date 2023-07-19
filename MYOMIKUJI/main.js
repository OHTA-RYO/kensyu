"use strict";


// function getAge(year, month, day) {
//   const today = new Date();
//   const birthdate = new Date(year,month - 1, day);
//   const currentYearBithday = new Date(today.getFullYear(), birthdate.getMonth(),birthdate.getDate());
//   let age = today.getFullYear() - birthdate.getFullYear();
//   if(today < currentYearBithday){
//     age--;
//   }
//   return age;
// }

// console.log(getAge(age));

// const rate = 1.1;

// for (let price = 150; price <= 160; price++) {
//   console.log(`price: ${price}`);
//   for (let amount = 120; amount <= 140; amount += 10){
//     console.log(price * amount * rate);
//   }
// }



// for(let i = 1; i<=10; i++){
//   console.log(`${i}:Hello`)
// }

// const fname = 'Taro';
// const lname = 'Ymada';

// console.log(`My name is ${fname} ${lname},call me ${fname}!`);

// let rate = 1.1;
// let price = 150;

// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

// {
// const  result = document.getElementById('result');
// const  btn = document.getElementById('btn');

// btn.addEventListener('click',() =>{
//   const results = ['大吉','中吉','凶','小吉'];
//   const n = Math.floor(Math.random() * results.length);

//   result.textContent = results[n];
//   // switch (n) {
//   //   case 0:
//   //   result.textContent ='大吉';
//   //   break;
//   //   case 1:
//   //   result.textContent ='中吉';
//   //   break;
//   //   case 2:
//   //   result.textContent ='凶';
//   //   break;
//   // }
// });

// }

// {
//   const btn = document.getElementById("btn");
//   const result = document.getElementById("result");
//   btn.addEventListener("click", () => {
//     const results = ['大吉','中吉','凶','小吉'];
//     //↑追加
//     const n = Math.floor(Math.random() * results.length);
//                             //↑lengthに配列の数と文字数がある。
//     result.textContent = results[n];
//     //↑追加　　　　　　　　　　↑のnはどういう意味かが
//     //わかりません。n番目を取ってくるのはなぜエラーにならないのか。
//     //↓の書き方と↑の書き方が同じ理由がわからない。

//     switch (n) {
//       case 0:
//         result.textContent ='大吉';
//         break;
//         case 1:
//           result.textContent = '中吉';
//           break;
//           case 2:
//             result.textContent = '凶';
//             break;
//     }

//     // result.textContent = n;
//     // 教材と違うパターンで表示させた。
//     // if (n === 0) {
//     //   result.textContent = "大吉";
//     // } else if (n === 1) {
//     //   result.textContent = "小吉";
//     // } else if (n === 2) {
//     //   result.textContent = "凶";
//     // }
//   });
// }

// {
//   const result = document.getElementById('result');
//   const btn =document.getElementById('btn');
//   const numbers = Math.floor(Math.random() * 3);
//   console.log(numbers);
//   const results = ['小吉','中吉','大吉'];
//   // console.log(results[0]);

//   console.log(result);
//   console.log(btn);

//   btn.addEventListener('click', () => {

//     if(numbers === 0){
//       result.textContent = '小吉';
//     } else if(numbers === 1){
//       result.textContent = '中吉';
//     }else {
//       result.textContent = '大吉';
//     }
//     // result.textContent = numbers;
//   });

//   }
