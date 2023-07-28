"use strict";

const button = document.querySelector("button");
const input = document.querySelector("input");
const radios = document.querySelectorAll(".radio");

const addEv = (event: any) => {
  const value = event!.currentTarget!.value;
  console.log(`${value}が選択されました。`);
};

const addBt = (bt: any) => {
  bt.value = input!.value;
  console.log(bt.value);
};

for (let radio of radios) {
  radio.addEventListener("input", addEv);
}

button!.addEventListener("click", addBt);

input!.addEventListener("input", addEv);

// for(let radio of radios){
//   radio.addEventListener('input',(even:any)=>{
//     const value = even!.currentTarget!.value
//     console.log(`${value}が選択されました。`)
//   })
// }

// input!.addEventListener('input',(event:any) =>{
//   const value = event!.currentTarget!.value;
//   console.log(`入力内容:${value}`);
// })

// const radios = document.querySelectorAll('.radio');
// for(let radio of radios ){
//   radio.addEventListener('input',function(event2:any){
//     const value2 = event2!.currentTarget.value;
//     console.log(`${value2}がチェックされました。`)
//   });
// }
// const fun = (event:any) => {
//   const value2 = event!.currentTarget!.value;
//   console.log(`${value2}が選択されました。`)
// }

// for(let radio of radios){
//   radio.addEventListener('input',fun)
// }

// button!.addEventListener('click',fun);

// function alertMessage(){
//   alert('ボタンクリック');
// }

// button!.addEventListener('click',alertMessage);

// function alertMessage(){
//   alert('ボタンをクリックしました。');
// }

// button!.addEventListener('click',alertMessage)

// button!.addEventListener('click',() =>{
//   alert('ボタンがクリックされました。')
// })

// const firstP:Element | null = document.querySelector(".first");
// const newP = document.createElement("p");

// newP.textContent = "firstの前に追加";

// firstP!.replaceWith(newP);

// const newElement = document.createElement('p');
// newElement.textContent = '新しく追加しました。'

// const content = document.querySelector('.content');
// content!.appendChild(newElement);

// const newElement2 = document.createElement('p');
// newElement2.textContent = '先頭に追加しました。'

// content!.prepend(newElement2);

// const element = document.createElement('p');
// // element.textContent = '新しく作成';
// console.log(element);

// const pElement = document.querySelector('p');
// pElement!.style.letterSpacing = '10px'

// pElement.classList.replace('java',javascript);

// const pElement = document.querySelector('.p');
// pElement!.classList.remove('nomar');
// pElement!.classList.add('warning');

// const pElement = document.querySelector('p');
// pElement!.style.fontSize = '36px'

// const scoreElement = document.querySelector('.score');
// const score = scoreElement!.dataset.score;
// if(score >= 80){
//   scoreElement!.style.color = 'blue'
// }

// const p = document.querySelector('p');
// p!.textContent = '変更します。'

// const test = document.getElementById('test');
// const test1 = document.querySelector('.test');

// const items = document.querySelectorAll('.item');

// const elements = document.querySelectorAll('.sample')
// for(const element of elements){
//   console.log(element);
// }

// const tag:Element | null =window.document.querySelector('#sample');
// tag!.textContent = 'テキストを書き換えます。'

// const fun = () =>{
//   console.log('⚪︎秒後に実行')
// }

// setTimeout(fun,1000);

// function fun()  {
// console.log('1秒後に実行')
// }

// setInterval(fun,1000);
// const today = new Date().toLocaleString('ja-JP',{
//   dateStyle:'long'
// });

// console.log(today);

// const formatter:Intl.DateTimeFormat = Intl.DateTimeFormat('ja-JP',{
//   dateStyle:'long'
// })

// const today = formatter.format(new Date());
// console.log(today);

// const theDay = new Date(2030, 8, 15, 15,0, 0 )
// console.log(theDay.getFullYear())
// console.log(theDay.getMonth())
// console.log(theDay.getDate())
// console.log(theDay);

// const now = new Date()
// console.log(now)

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.abs(-200))

// console.log(Math.round(1.4))
// console.log(Math.round(1.5))
// console.log(Math.floor(10.3))
// console.log(Math.ceil(10.3))

// type bicycle  ={color: string , inch: number}

// const bicycle = {color:'red', inch: 25,}

// console.log(bicycle.color);
// bicycle.inch = 16
// console.log(bicycle.inch);

// const fruits:string[] = ['りんご', 'みかん', 'バナナ']

// for(const fruit of fruits){
//   console.log(fruit);
// }

// for(let i = 0; i < fruits.length; i++ ){
//   console.log(fruits[i]);
// }

// let number = 1

// while(number <= 5){
//   console.log(number)
//   number++
// }

// let i = 2
// while( i < 100){
//   console.log(i);
//   i = i * 2
// }

// for(let i = 5; i <=10; i++ ){
//   console.log(i);
// }

// for(let i = 1; i <= 5; i++){
//   console.log(`${i}回目の処理`)
// }

// for(let i = 1; i <= 10; ){
//   console.log('hello')
//   i++
// }

// const a:number = 5;
// const b:number = 3;
// // let c;
// const c = (a <= b ) ? a: b;

// const score = 80;
// const result = (score >= 80)? 'Great': (score >= 60)? 'Good': 'Bad';

// const age:number = 25;

// if(age >= 20 && age <= 29 ){
//   console.log('20代')
// }

// if(age <= 10 || age >= 60){
//   console.log('ジュニアまたはシニア')
// }

//B

// const age:number = 18;

// if(age === 18){
//   console.log('新成人')
// }else if(age > 18){
//   return console.log('成人')
// }else {
//   console.log('未成年')
// }

// const price = 3000
// if(price <= 5000 ) console.log('送料800円');
// if(price >= 5000)console.log('送料無料')

// if(price >= 5000 ){
//   console.log('送料無料')
// }else{
//   console.log('送料800円')
// }

// const foods = ['寿司','カレー','ラーメン'];
// foods.push('パスタ');
// console.log(foods);

//['寿司', 'カレー']

// const string = '読書&料理&キャンプ';

// const a = string.split('&');
// console.log(a);

// const intersts = ['読書', '料理', 'キャンプ'];
// const a = intersts.join('|');
// console.log(a);

// const fruits = ['みかん','りんご','バナナ'];
// const check = fruits.includes('りんご');
// console.log(check);

// const check2 = fruits.includes('ぶどう');
// console.log(check2);

// const alphabet = ['a', 'b', 'c'];
// const last = alphabet.pop()
// console.log(last);
// console.log(alphabet);

// const intersts = ['読書', '料理', 'キャンプ'];
// const count = intersts.length;

// console.log(count);

// intersts.push('散歩');
// console.log(intersts)

// intersts.pop()
// console.log(intersts);

// const foods = ['寿司', 'カレー', 'ラーメン'];

// //0

// console.log(foods[1]);

// function hello(n:string ,s:string = 'さん'){
//   return `${n}${s}`
// }

// console.log(hello('bob'));

//2つの値を受け取り、その合計を計算する関数。

// const sum = (num1:number,num2:number)=>{
//   return num1 + num2;
// }

// console.log(sum(100,150));
// console.log(sum(200,150));

// const judge = (num:number) => {
//   if(num % 2 === 0) return '偶数';
//     return '奇数';
// }

// for( let i = 1; i < 20;){
//   console.log(`${i}:${judge(i)}`)
//   i++
// }

// const dobule = (num:number)=>{
// return num * 2
// }

// console.log(dobule(100));

// function dobule(num){

// }

// function pi(){
//   return 3.14
// }

// const a = pi()

// console.log(a);

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
