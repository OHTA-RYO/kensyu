{
  keisan();
  function keisan() {
    const names = document.querySelectorAll(".name");
    // const name: Element | null = document.querySelector(".name");
    const rightSaves = document.querySelectorAll(".right-save");

    //↓保存先の親要素を取得
    const right: Element | null = document.getElementById("right");
    const title = document.querySelectorAll("p");

    //↓どうやってnull回避するのか。
    //   if(saveText !== null){
    //   const saveText: string | null = document.querySelector("input").value;
    // }else {
    //   return;
    // }

    const saveText: Element | null = document.querySelector("input");

    let n: number = 1;

    //↓をテキストに入れた。
    const textareaP: string[] = [
      "名前",
      "生年月日",
      "年齢",
      "身長",
      "体重",
      "電話番号",
      "メールアドレス",
      "備考",
    ];

    //型がわからない。
    const profiles = [
      ["中島慶樹", "1997年7月7日", "178cm", "73kg", "080-1234-5678"],
      ["山田次郎", "1945年6月8日", "186cm", "35kg", "090-1234-5678"],
      ["山田三郎", "1956年5月9日", "156cm", "65kg", "070-1234-5678"],
      ["山田四郎", "1967年4月10日", "176cm", "85kg", "060-1234-5678"],
      ["山田五郎", "1978年3月11日", "196cm", "95kg", "050-1234-5678"],
    ];

    //保存ボタンで追加するデータ
    const save: Element | null = document.getElementById("save");
    const profileArea0: Element | null =
      document.querySelector(".profile-area");
    const np: Element = document.createElement("p");
    save?.addEventListener("click", () => {
      for (let i = 0; i < textareaP.length; i++) {
        np.textContent = textareaP[i];
        profileArea0?.appendChild(np);
      }
    });
    
    //初期に配置するデータp
    //エラー解消できない。
    for (let i = 0; i < textareaP.length; i++) {
    const p: Element | String[] = document.createElement("p");
    if (profileArea0 !== null) {
      p.textContent = textareaP[i];
      profileArea0.appendChild(p);
    }
  };

   //初期に配置するデータinput
    //型がわからない。
    for (let i = 0; i < 5; i++) {
      const input: Element = document.createElement("input");
      if (profileArea0 !== null) {
        input.textContent = profiles[0];
        profileArea0.appendChild(input);
      }
    };

    const profileArea = document.querySelectorAll(".profile-area");
    profileArea.forEach((profileEl) => {
      profileEl.addEventListener("click", (e) => {
        console.log(profileEl);
        // const name = profileEl.querySelector('.name');
        const profile = profileEl.querySelector(".right-save2");
        console.log(names);
        console.log(profile);
        profile?.classList.toggle("right-save");
      });
    });
  }
}

    //確認すること。
    // save?.addEventListener("click", () => {
    //   if(saveText !== null){
    //   for (let i = 0; i < saveText.length; i++) {
    //     const ni: Element | null = document.createElement("input");
    //    //↓htmlの左側に入力した値をとりたい。
    //     ni.textContent = saveText[i].value;
    //     np.appendChild(ni);
    //   }
    //   };
    // });

    // //左側の情報を↓にとってこないといけない。
    // save?.addEventListener("click", () => {
    //   //↓子要素pを追加する
    //   const pRight: Element | null = document.createElement("p");
    //   //↓IDを作成
    //   pRight.id = "appendp" + n;
    //   //↓タイトル
    //   if (pRight !== null && title !== null) {
    //     pRight.textContent = title.textContent;
    //     //↓1クリックずつ増やす
    //     n++;
    //     //↓親にpを追加
    //     right?.appendChild(pRight);
    //   }

    //htmlのpのvalueから値をとりたかった。けど無理だった。
    // title.forEach(() => {
    //   save?.addEventListener('click',() =>{
    //   const np = document.createElement("p");
    //   np.textContent = title[].value;
    //     if(profileArea0 !== null){
    //     profileArea0.appendChild('title');
    //   }
    //   })

    // })

    //左側の情報を↓にとってこないといけない。
    // textareaP.forEach((textareap) => {
    // save?.addEventListener("click", () => {
    //   //↓子要素pを追加する
    //   const pRight: Element | null = document.createElement("p");
    //   pRight.textContent = textareaP[1];
    //   //↓タイトル

    //   if (pRight !== null && title !== null) {
    //     pRight.textContent = textareaP[1];
    //     //↓1クリックずつ増やす
    //     // n++;
    //     //↓親にpを追加
    //     right?.appendChild(pRight);
    //   }
    // });
    // });

    // });

    //ターゲットになっているのがnameだから
    //nameにクラスを追加した感じになっている。

    // names.forEach((name) => {
    //   name?.addEventListener('click', (e) => {
    //     const targetElement = e.target! as HTMLElement;
    //     targetElement.classList.add('right-save');
    //   })
    // })

// rightSaves.forEach((rightSave) => {
//   name?.addEventListener("click", (e) => {
//     // rightSave = e.target! as HTMLElement;
//     // const targetElement = e.target! as HTMLElement;
//     rightSave.classList.toggle("right-save");
//     // ↑全部出てしまう。
//   });
// });

// ↓やりたかった処理2個目をクリックしたら1個目が閉じる
// rightSaves.forEach((rightSave) =>{
//   if(rightSave !== rightSave){
//     targetElement.classList.add('right-save');
//   }
// });

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
