"use strict";
console.log("hello");
// let num1 = 5;
// let num2 = 8;
// console.log(num1 + num2);
// let text1:string[] = ['リンゴ','バナナ'];
// let text2:string[] = ['レモン'] ;
// // text1.pop();
// text1.splice(1,1);
// console.log(`${text1},${text2}`);
// const fun = (arr: number[]) => {
//   return arr.map((item) => item >= 10);
// };
// const fun = (arr: number[]) => {
//   const r = []
//   for (let i = 0; i < arr.length; i++) {
//     r.push(arr[i] >= 10)
//   }
//   return r
// }
// const res = fun([1, 2, 40, 50, 39, 8, 9]);
// console.log(res); // [false, false, true, true, true, false, false]
// const res2 = fun([0, 10]);
// console.log(res2); // [false, true]
// //要素全てが10以上かどうかを評価してtrueかfalseを返してください
// const res = fun([1, 2, 40, 50, 39, 8, 9])
// console.log(res) // [false, false, true, true, true, false, false]
// const res = fun([0, 10])
// console.log(res) // [false, true]
// res.forEach() => {
//   if(res[] >= 10){
// return
//   }
// }
// function fun([]){
//   if(res[] >= 10){
//   }
// }
// console.log(fun);
// const arry =[
//   {id:1,name:'morita'},
//   {id:2,name:'kenji'},
//   {id:4,name:'uro'},
//   {id:3,name:'ken'}
// ];
// arry.sort((a, b) => {
//   if(a.id > b.id){
//     return 1;
//   }else{
//     return -1;
//   }
// })
// console.log((arry));
// CodelandUsernameValidation
// CodelandUsernameValidation( str )関数で、 渡される strパラメータを取得し、次のルールに従ってその文字列が有効なユーザー名であるかどうかを判断します。
// ユーザー名は 4 ～ 25 文字です。
// 文字で始まる必要があります。
// 文字、数字、アンダースコア文字のみを含めることができます。
// アンダースコア文字で終わることはできません。
// ユーザー名が有効な場合、プログラムは文字列trueを返し、それ以外の場合は文字列falseを返す必要があります。
// function checkUsename(useName:string){
//   if(useName.length < 4 || useName.length > 25)return false;
//   if(!useName.charAt(0).match(/[a-zA-Z]/)) return false;
// }
// console.log(checkUsename('aaaaaaaaaaaaaaaaaaaaaa'));
// function checkUsername(useName:string){
// return useName
// }
// console.log(checkUsername('test'))
// 問題です。
// 引数で渡された英語を文字を、大文字にして返す関数を作成してください。
// 半角スペースが入ってきた場合は、その部分をアンダーバーに変換してください。
// function english(word: string): string {
//   const upperWord = word.toUpperCase();
//   console.log(upperWord);
//   const replaceWord = upperWord.replace(" ", "_");
//   return replaceWord;
// }
// const res = english("test");
// console.log(res);
// function upperenglishto(word: string) {
//   const result = word.toLowerCase();
//   const result2 = result.replace(" ", "+");
//   return result2;
// }
// console.log(upperenglishto("COOL "));
// //0から9までの配列をランダムで作る。
// //↓これは配列ではない。[]
// let numbers = Math.floor(Math.random() * 10 );
// console.log(numbers);
// // let number = numbers[index];
// for( let i = numbers; i < 11; i++   ){
//   console.log()
// }
