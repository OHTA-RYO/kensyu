console.log("hello");

// 問題です。
// 引数で渡された英語を文字を、大文字にして返す関数を作成してください。
// 半角スペースが入ってきた場合は、その部分をアンダーバーに変換してください。

function english(word: string): string {
  const upperWord = word.toUpperCase();

  console.log(upperWord);
  const replaceWord = upperWord.replace(" ", "_");
  return replaceWord;
}

const res = english("test");
console.log(res);

function upperenglishto(word: string) {
  const result = word.toLowerCase();
  const result2 = result.replace(" ", "+");
  return result2;
}
console.log(upperenglishto("COOL "));

// //0から9までの配列をランダムで作る。

// //↓これは配列ではない。[]
// let numbers = Math.floor(Math.random() * 10 );
// console.log(numbers);

// // let number = numbers[index];

// for( let i = numbers; i < 11; i++   ){
//   console.log()
// }
