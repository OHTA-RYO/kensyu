"use strict";

function pi(){
  return 3.14
}

const a = pi()

console.log(a);

// function formatName(name:string,title:string = 'さん'){
//   return `${name}${title}`
// }

// console.log(formatName('bob'))
// console.log(formatName('alice','くん'))
// function hello(name1:string){
//   const hello2 = name1 + 'さん'
//   return hello2
// }

// console.log(hello('bob'));

// function hello(name:string = 'ゲスト'){
//   console.log(`こんにちは${name}さん`)
// }

// hello('alice')
// hello()

// function sum(num1:number, num2:number){
//   const result = num1 + num2 
//   return result
// }

// console.log(sum(1,1))
// console.log(sum(1,1000))

// function judge(num:number){
//   const judgeNum = num
//   if(judgeNum % 2 === 0){
//     return '偶数'
//   }else {
//     return '奇数'
//   }
// }

// for(let i = 1; i < 20; ){
//   console.log(`${i}:${judge(i)}`)
//   // console.log(`${i}回目`)
// i++
// }

// function dobule(num:number) {
//   const result = num * 2;
//   return result
// }

// const a = dobule(10);
// const b = dobule(1000);

// console.log(a)
// console.log(b)



// function dobule(num:number){
//   const result:number = num * 2;
//   return result 
// }

// const a = dobule(10)
// const b = dobule(100)

// console.log(a)
// console.log(b)

// console.log(dobule(10));

// function dobule(num:number){
//   return num * 2
// }

// console.log(dobule(10));

// function pi(){
//   return 3.14
// }

// const a = pi();
// console.log(a);

// function en(pai:number){
//   return pai
// }
// console.log(en(3.14));

// function names(call:string){
//   console.log(`こんにちは ${call}  さん`)
// }
// names('alice');
// names('bob');

// let text = `私は'JavaScript'を学ぶ`

// console.log(text);

// console.log((5+3)*2)//16
// console.log(12<=5)//false

// let a = '100'
// let b = 100
// // console.log(a === b);//false
// let number = 1000;
// let lang = 'Javascript'


// console.log(typeof(true))
// typeof(text.vaule);

// let arry = [1,2,3,4,5,6,7,8,9,10];

// function gSum(b:number[]){
// arry.forEach((a:number) =>{
// let arrySum = 0;
// let arrylength = 0;
// arrySum += a;
// arrylength = a++;
// console.log(arrySum);
// console.log(arrylength);
// console.log(arrySum + arrylength);
// })
// }
// console.log(gSum(arry))
// function cocos(myhando: "グー" | "チョキ" | "パー") {
//   let rondomIndex = Math.floor(Math.random() * 3);
//   const hands = ["グー", "チョキ", "パー"];
//   const aite = hands[rondomIndex];
//   if (myhando === "グー") {
//     if (aite === "グー") {
//       return "あいこ";
//     } else if (aite === "チョキ") {
//       return "勝ち";
//     } else if (aite === "パー") {
//       return "負け";
//     }
//   }
// }

// console.log(cocos("グー"));

// //関数にして引数を渡して判定できるように。
// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function compare(a: number[], b: number[]) {
//   a.forEach(function (num1) {
//     b.forEach(function (num2) {
//       let i = 1;
//       console.log(`${i}+回目のチェックです。`);
//       i++;
//       if (num1 < num2) {
//         console.log(`${num2}の方が大きいです。`);
//       } else if (num1 > num2) {
//         console.log(`${num1}の方が大きいです。`);
//       } else if (num1 === num2) {
//         console.log(`${num1}と${num2}は同じ値です。`);
//       }
//     });
//   });
// }

// compare(num1, num2);

// num1.forEach(function(num1){
//   num2.forEach(function(num2){
//     let i = 1
//     console.log(`${i}+回目のチェックです。`)
//     i++
//     if(num1 < num2 ){
//       console.log(`${num2}の方が大きいです。`)
//     }else if(num1 > num2){
//       console.log(`${num1}の方が大きいです。`)
//     }else if( num1 === num2){
//       console.log(`${num1}と${num2}は同じ値です。`)

//     }
//   })
// })

// num2.forEach(function(num2){
//   console.log(num2);
// })

// let i = 0

// function number4(num1:any){
//   if(num1 >= 4){
//   console.log('値は4以上です。')
//   }else{
//     console.log('値は4未満です。')
//   }
// }

// function number8(num2:any){
//   if(num2 >= 8){
//     console.log('値は8以上です。')
//   }else {
//     console.log('値は8未満です。')
//   }
// }

// for(let i = 1; i <=10; i++){
//   console.log(i + 'を関数で確認します。')

//   number4(i);
//   number8(i);
// }

// function number(num:any){
//   for(num = 1; num <= 10;){
//     num++
//   }

// }
// console.log(number('fka'));

// let arry:{id:Number, name:String}[] =[
//   {id:1,name:'morita'},
//   {id:2,name:'kenji'},
//   {id:4,name:'uro'},
//   {id:3,name:'ken'}
//   ];

//   arry.sort((a:Number,b:Number) => {
//     return a.id > b.id;

//   });
//   console.log(arry.sort);

// let start = "Tokyo";
// let goal = "Osaka";

// // let temp = ''
// // temp = start ;
// // start = goal;
// // goal = temp;

// [goal, start] = [start, goal];

// console.log(start);
// console.log(goal);
