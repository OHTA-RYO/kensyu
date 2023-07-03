"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  btn.addEventListener("click", () => {
    const results = ['大吉','中吉','凶','小吉'];
    //↑追加
    const n = Math.floor(Math.random() * results.length);
                            //↑lengthに配列の数と文字数がある。
    result.textContent = results[n];
    //↑追加　　　　　　　　　　↑のnはどういう意味かが
    //わかりません。n番目を取ってくるのはなぜエラーにならないのか。
    //↓の書き方と↑の書き方が同じ理由がわからない。
    
    // switch (n) {
    //   case 0:
    //     result.textContent ='大吉';
    //     break;
    //     case 1:
    //       result.textContent = '中吉';
    //       break;
    //       case 2:
    //         result.textContent = '凶';
    //         break;
    // }

    //result.textContent = n;
    //教材と違うパターンで表示させた。
    // if (n === 0) {
    //   result.textContent = "大吉";
    // } else if (n === 1) {
    //   result.textContent = "小吉";
    // } else if (n === 2) {
    //   result.textContent = "凶";
    // }
  });
}


