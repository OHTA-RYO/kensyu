// console.log(1+1);
{
  const name: Element | null = document.querySelector('.name');
  const rightSaves: Element | null = document.querySelector('.right-save');
  //保存を取得
  const save: Element | null = document.getElementById('save');
  //↓保存先の親要素を取得
  const right: Element | null = document.getElementById('right');
  const title = document.getElementsByClassName('p');
  let n: number = 1;

  //左側の情報を↓にとってこないといけない。
  save?.addEventListener('click', () => {
    //↓子要素pを追加する
    const pRight = document.createElement('p');
    //↓IDを作成
    pRight.id = 'appendp' + n;
    //↓タイトル
    pRight.innerText = title.textContent;
    //↓1クリックずつ増やす
    n++;
    //↓親にpを追加
    right?.appendChild(pRight);
  });
  save?.addEventListener('click', () => {
    //↓子要素inputを一括追加
    const iRight = document.createElement('input');
    iRight.id = 'appendi' + n;
    iRight.innerText = iRight.textContent;
    n++;
    right?.appendChild(iRight);
  });



  //          　　　元々↓をからにして10行目をrightSaveにしてた。そのような書き方は違うのでしょうか？
  if (rightSaves !== null) {
    rightSaves.forEach((rightSave) => {
      name?.addEventListener('click', () => {
        rightSave.classList.toggle('right-save');
        // ↑全部出てしまう。

        //↓やりたかった処理2個目をクリックしたら1個目が閉じる
        // rightSaves.forEach((close) =>{
        //   if(open !== close){
        //     close.classList.remove('right-save');
        //   }
        // })

      });
    });
  }
}



//一括で要素を取得する方法
// const np = document.createDocumentFragment();
// const ni = document.createDocumentFragment();
// for(let n = 1; n <=5; n++){
// const pRight =document.createElement('p');
// pRight.id = 'appendp' + n;
// pRight.innerText = '名前' + n;
// np.appendChild(pRight);
// }
// right?.appendChild(np);
// console.log(np);

// for(let n = 1; n <=5; n++){
//   const iRight =document.createElement('input');
//   iRight.id = 'appendi' + n;
//   iRight.innerText = '' + n;
//   ni.appendChild(iRight);
//   }
//   right?.appendChild(ni);
//   console.log(np);