{
  const names = document.querySelectorAll(".name");
  const title: object = document.querySelectorAll("p");
  //↓null回避するには。確認。
  const saveText: string | null =
    document.querySelector("input")?.value || null;

  const profileArea = document.querySelectorAll(".profile-area");

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
  //配列:値に順序をつけて格納出来るもの
  // const profiles: string  = [
  //   ["中島慶樹", "1997年7月7日", "178cm", "73kg", "080-1234-5678"],
  //   ["山田次郎", "1945年6月8日", "186cm", "35kg", "090-1234-5678"],
  //   ["山田三郎", "1956年5月9日", "156cm", "65kg", "070-1234-5678"],
  //   ["山田四郎", "1967年4月10日", "176cm", "85kg", "060-1234-5678"],
  //   ["山田五郎", "1978年3月11日", "196cm", "95kg", "050-1234-5678"],
  // ];

  //オブジェクト:キーとバリュー(値)がペアになったもの
  //配列で囲って、 Record<string, string>すると全てstringだよとなる。

type Profile = {
  name:string,
  birthday:string,
  age:string,
  height:string,
  weight:string,
  tel:string,
  mail:string,
  remarks:string,
}

  const profiles: Profile[] = [
    {
      name: "中島慶樹",
      birthday: "1997年7月7日",
      age: "",
      height: "178cm",
      weight: "73kg",
      tel: "080-1234-5678",
      mail: "nakashima-k@codelic.co",
      remarks: "筋トレが趣味です",
    },
    {
      name: "山田次郎",
      birthday: "1945年6月8日",
      age: "",
      height: "188cm",
      weight: "73kg",
      tel: "080-1234-5678",
      mail: "nakashima-k@codelic.co",
      remarks: "筋トレが趣味です",
    },
    {
      name: "山田三郎",
      birthday: "2000年1月8日",
      age: "",
      height: "188cm",
      weight: "73kg",
      tel: "080-1234-5678",
      mail: "nakashima-k@codelic.co",
      remarks: "筋トレが趣味です",
    },
    {
      name: "山田四郎",
      birthday: "1999年3月8日",
      age: "",
      height: "188cm",
      weight: "73kg",
      tel: "080-1234-5678",
      mail: "nakashima-k@codelic.co",
      remarks: "筋トレが趣味です",
    },
    {
      name: "山田吾郎",
      birthday: "1978年9月8日",
      age: "",
      height: "188cm",
      weight: "73kg",
      tel: "080-1234-5678",
      mail: "nakashima-k@codelic.co",
      remarks: "筋トレが趣味です",
    },
  ];

  const labels: Profile= 
    {
      name: "名前",
      birthday: "生年月日",
      age: "年齢",
      height: "身長",
      weight: "体重",
      tel: "電話番号",
      mail: "メールアドレス",
      remarks: "備考",
    };

  //保存ボタンで追加するデータ
  //保存ボタンのデータを取得
  const save: Element | null = document.getElementById("save");
  //右側プロフィールエリアのデータを取得
  const profileArea0: Element | null = document.querySelector(".profile-area");
  //保存ボタンを押すと右側に<p>を新たに作成　上に用意した数だけ<p>が作られる。
  const sp: Element = document.createElement("p");
  save?.addEventListener("click", () => {
    for (let i = 0; i < textareaP.length; i++) {
      sp.textContent = textareaP[i];
      profileArea0?.appendChild(sp);
    }
  });

  //予め右側においておく<p>を作成
  //エラー解消できない。
  //<p>の値はtextareaPを表示
  // for (let i = 0; i < textareaP.length; i++) {
  //   const p: Element | String[] = document.createElement("p");
  //   if (profileArea0 !== null) {
  //     p.textContent = textareaP[i];
  //     //プロフィールエリアの下に配置
  //     profileArea0.appendChild(p);
  //     // profileArea0.insertAdjacentHTML('afterbegin'p);
  //   }
  // }

  //予め右側においてお<p>と<input>を作成
  profiles.map((profile) => {
    const newDiv: Element = document.createElement("div");
    profileArea0?.appendChild(newDiv);
    const array=Object.entries(profile) as [keyof Profile,string][];
    array.map(([key,value]) => {
      const input: Element = document.createElement("input");
      input.setAttribute("value",value);
      const label: Element = document.createElement("p");
      label.textContent = labels[key];
      newDiv.appendChild(label);
      newDiv.appendChild(input);
      label.classList.add('right-save2');
      input.classList.add('right-save2');
      newDiv.classList.add('profile-area');
    });
  });
    // if (profileArea0 !== null) {
    //   input.setAttribute("value", profiles[i][i]);
    //   profileArea0.appendChild(input);
    // }

    //display　noneの箱になるdivを作成
    // const div = document.createElement("div");
    // profileArea0?.appendChild(div);
    // div.classList.add("right-save", "right-save2");

    //アコーディオン展開
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

////↓残骸
// const name: Element | null = document.querySelector(".name");
// const rightSaves = document.querySelectorAll(".right-save");

//↓保存先の親要素を取得
// const right: Element | null = document.getElementById("right");

//↓どうやってnull回避するのか。
//   if(saveText === null)return;
//   else{
//   const saveText: string | null = document.querySelector("input").value;
// }

//配列が4つ中身が5つの場合などはiで外側をループ、内側をjでループさせる手法がある。
// for (let i = 0; i < profiles.length; i++) {
//   for (let j = 0; j < profiles.length; i++) {
//     const input: Element = document.createElement("input");
//     if (profileArea0 !== null) {
//       input.setAttribute("value", profiles[i][j]);
//       profileArea0.appendChild(input);
//     }
//   }
// }
