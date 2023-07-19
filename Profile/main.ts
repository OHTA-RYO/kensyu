{
  const names = document.querySelectorAll(".name");

  //オブジェクト:キーとバリュー(値)がペアになったもの
  //配列で囲って、 Record<string, string>すると全てstringだよとなる。

  type Profile = {
    name: string;
    birthday: string;
    age: string;
    height: string;
    weight: string;
    tel: string;
    mail: string;
    remarks: string;
  };

  //letに変更
  let profiles: Profile[] = [
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

  const labels: Profile = {
    name: "名前",
    birthday: "生年月日",
    age: "年齢",
    height: "身長",
    weight: "体重",
    tel: "電話番号",
    mail: "メールアドレス",
    remarks: "備考",
  };
  //右側プロフィールエリアのデータを取得
  const profileArea0: Element | null = document.querySelector(".profile-area");

  //保存ボタンのデータを取得
  const save: Element | null = document.getElementById("save");
  const right: Element | null = document.getElementById("right");
  const textarea: HTMLTextAreaElement | null =
    document.querySelector("textarea");
  save?.addEventListener("click", () => {
    const tmpobject: Profile = {
      name: "",
      birthday: "",
      age: "",
      height: "",
      weight: "",
      tel: "",
      mail: "",
      remarks: "",
    };
    const array = Object.keys(labels) as (keyof Profile)[];
    //labelの数だけ回す
    array.forEach((key) => {
      //saveTextは入力用のinputタグhtmlでクラス名をつけたやつだけ取得
      const saveText: HTMLInputElement | null = document.querySelector(
        `input.${key}_num`
      );

      if (key === "name") {
        if (saveText?.value.match(/[^\x01-\x7E]/)) {
          // 日本語が含まれているか
          tmpobject.name = saveText?.value || "";
          console.log(tmpobject.name);
        } else {
          return confirm("名前は日本語で入力して下さい。");
        }
      }
      // /^[0-9]{4}年[1-9]{1}[0-2]{2}月[1-3]{1}[0-9]{2}日/
      ///
      //ありえない数字でも入ってしまう。4桁2桁2桁しかみてない。
      if (key === "birthday") {
        if (saveText?.value.match(/^[0-9]{4}年\d{1,2}月\d{1,2}日$/)) {
          tmpobject.birthday = saveText?.value || "";
        } else {
          return confirm("生年月日は西暦で入力下さい。");
        }
      }
      //生年月日から年齢取れてない。
      if (key === "age") {
        //生年月日からの年齢を計算

        tmpobject.age = saveText?.value || "";
      }
      if (key === "height") {
        if (saveText?.value.match(/^[0-9]+$/)) {
          tmpobject.height = saveText?.value + "cm" || "";
        } else {
          return confirm("身長は数字のみ入力下さい。");
        }
      }
      if (key === "weight") {
        if (saveText?.value.match(/^[0-9]+$/)) {
          tmpobject.weight = saveText?.value + "kg" || "";
        } else {
          return confirm("体重は数字のみ入力下さい。");
        }
      }

      if (key === "tel") {
        if (saveText?.value.match(/\d{2,4}-\d{2,4}-\d{4}/)) {
          tmpobject.tel = saveText?.value || "";
        } else {
          return confirm("電話番号を確認");
        }
      }
      if (key === "mail") {
        if (
          saveText?.value.match(
            /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
          )
        ) {
          tmpobject.mail = saveText?.value || "";
        } else {
          return confirm("メールアドレスに誤りがあります。");
        }
      }
      if (key === "remarks") {
        const saveTextarea: HTMLTextAreaElement | null = document.querySelector(
          `textarea.${key}_num`
        );
        tmpobject.remarks = saveTextarea?.value || "";
        // console.log(saveText);
      }

      if (saveText !== null) saveText.value = "";
    });
    const saveK = window.confirm("エラーを解消しましたか？");
    if (saveK) {
      //コメントアウト解除すること
      profiles.push(tmpobject);
      console.log(profiles);

      //setItemをtmpobject→profilesに変更 profilesの全ての情報を保存
      //コメントアウト解除すること
      sessionStorage.setItem("profiles", JSON.stringify(profiles));

      const newDiv = addElement(tmpobject, profiles.length - 1);
      addEvent(newDiv);
    } else {
      return;
    }
  });

  //保存されたデータを取得し呼び出す
  const saveData: Profile[] = JSON.parse(
    sessionStorage.getItem("profiles") || "[]"
  );
  if (saveData.length) {
    profiles = saveData as Profile[];
    console.log(profiles);
  }

  //削除ボタンを押したら、保存したデータが消える。
  const deleteB = document.getElementById("delete");
  deleteB?.addEventListener("click", () => {
    const deleteC = window.confirm("削除しますか？");

    if (!deleteC) return;

    //プロフィールの要素を取得
    const profileEl = document.querySelectorAll(".profile-area");

    //削除する要素を格納する配列
    const openElement = [];
    for (const n of profileEl) {
      // toggleで切り替えてない方のclass名でelementを取得
      const targetEl = n.querySelector(".right-save2");

      //right-saveがない情報が開いている情報なので、配列に格納する。
      if (!targetEl?.classList.contains("right-save")) {
        openElement.push(n);
      }
    }

    //要素を削除する
    for (const deleEl of openElement) {
      deleEl.remove();
    }

    //削除の後に再度ストレージに保存する
    profiles.pop();
    sessionStorage.setItem("profiles", JSON.stringify(profiles));
    //保存したストレージデータを取り出す
    sessionStorage.getItem("profiles") || "[]";
    if (saveData.length) {
      profiles = saveData as Profile[];
      console.log(profiles);
    }
  });

  //編集ボタンを押すと、readonlyが消えて、編集可能にする。
  //アコーディオンが開いているデータのみ外したい。

  const edit = document.getElementById("edit");
  const eventButton = ()=>{
  edit?.addEventListener("click", () => {
    // const profileEl = document.querySelectorAll(".profile-area");
    // const openElement = [];
    // for (const n of profileEl) {
    //   // toggleで切り替えてない方のclass名でelementを取得
    //   const targetEl = n.querySelector(".right-save2");

    //   //right-saveがない情報が開いている情報なので、配列に格納する。
    //   if (!targetEl?.classList.contains("right-save")) {
    //     openElement.push(n);
        const inputs = document.querySelectorAll("input");
        const textareas = document.querySelectorAll("textarea");

        inputs.forEach((input) => {
          input.removeAttribute("readonly");
        });

        textareas.forEach((textarea) => {
          textarea?.removeAttribute("readonly");
        });

        console.log(inputs);
      // }
    // }
  });
}
  //更新ボタンを押すと、readonlyが追加され、編集不能にする。
  //上で行った逆の動きをするだけなので、関数を作って再利用したい。
  eventButton();
  const update = document.getElementById('update');
  update?.addEventListener('click',() =>{
    input.setAttribute("readonly");
    textarea?.setAttribute("readonly");
  });



  //index:numberを追加
  const addElement = (o: Profile, index: number) => {
    const newDiv: Element = document.createElement("div");
    const newDiv2: Element = document.createElement("div");

    if (right !== null) {
      right.appendChild(newDiv);

      const array = Object.keys(o) as (keyof Profile)[];
      array.forEach((key) => {
        const input: Element = document.createElement("input");
        const textarea: HTMLTextAreaElement =
          document.createElement("textarea");
        const label: Element = document.createElement("p");
        label.textContent = labels[key];
        newDiv.appendChild(newDiv2);

        if (key === "remarks") {
          textarea.value = o[key];
          textarea.readOnly = true;
        } else {
          input.setAttribute("value", o[key]);
          input.setAttribute("readonly", o[key]);
        }

        if (key === "name") {
          newDiv.appendChild(label);
          newDiv.appendChild(input);
        } else if (key === "remarks") {
          newDiv2.appendChild(label);
          // console.log(textarea);
          newDiv2.appendChild(textarea);
        } else {
          newDiv2.appendChild(label);
          newDiv2.appendChild(input);
        }
        newDiv2.classList.add("right-save", "right-save2");
        newDiv.classList.add("profile-area");
        //↓にidを追加
        newDiv.id = `profile-area${index}`;
      });
    }
    //リターンは好きなモノをリターンできるのか。リターンはどこにリターン出来るのか？
    return newDiv;
  };
  //予め右側においてお<p>と<input>を作成
  //

  for (let i = 0; i < profiles.length; i++) {
    addElement(profiles[i], i);
  }

  const addEvent = (el: Element) => {
    el.addEventListener("click", (e) => {
      console.log(el);
      // const name = el.querySelector('.name');
      const profile = el.querySelector(".right-save2");
      console.log(names);
      console.log(profile);
      profile?.classList.toggle("right-save");
      console.log(e);
    });
  };
  //アコーディオン展開
  const profileArea = document.querySelectorAll(".profile-area");
  profileArea.forEach((profileEl) => {
    addEvent(profileEl);
  });
}

// if (profileArea0 !== null) {
//   input.setAttribute("value", profiles[i][i]);
//   profileArea0.appendChild(input);
// }

//display　noneの箱になるdivを作成
// const div = document.createElement("div");
// profileArea0?.appendChild(div);
// div.classList.add("right-save", "right-save2");

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

//型がわからない。
//配列:値に順序をつけて格納出来るもの
// const profiles: string  = [
//   ["中島慶樹", "1997年7月7日", "178cm", "73kg", "080-1234-5678"],
//   ["山田次郎", "1945年6月8日", "186cm", "35kg", "090-1234-5678"],
//   ["山田三郎", "1956年5月9日", "156cm", "65kg", "070-1234-5678"],
//   ["山田四郎", "1967年4月10日", "176cm", "85kg", "060-1234-5678"],
//   ["山田五郎", "1978年3月11日", "196cm", "95kg", "050-1234-5678"],
// ];

// // ↓をテキストに入れた。
// const textareaP: string[] = [
//   "名前",
//   "生年月日",
//   "年齢",
//   "身長",
//   "体重",
//   "電話番号",
//   "メールアドレス",
//   "備考",
// ];

// const profileArea0: Element | null = document.querySelector(".profile-area");

//   //保存ボタンのデータを取得
//   const save: Element | null = document.getElementById("save");
//   // const title: object = <object>document.querySelectorAll("p");
//   const right: Element | null = document.getElementById("right");
//   // const saveText: NodeList | null = document.querySelectorAll("input");
//   const textarea: HTMLTextAreaElement | null =
//     document.querySelector("textarea");
//   save?.addEventListener("click", () => {
//     //よくよく考えると1回で良いから↓は不要。
//     // for (let i = 0; i < Object.keys(labels).length; i++) {
//     //labelのkeyの数を取得
//     const array = Object.keys(labels) as (keyof Profile)[];
//     //labelの数だけ回す
//     array.forEach((key) => {
//       //saveTextは入力用のinputタグhtmlでクラス名をつけたやつだけ取得
//       const saveText: Element | null = document.querySelector(
//         `input.${key}_num`
//       );
//       //保存用のpタグを作成
//       const newP: HTMLElement = document.createElement("p");
//       //保存用のtextareaを作成
//       const newTextarea: HTMLTextAreaElement =
//         document.createElement("textarea");
//       //保存用の<p>の値はlabelsのkeyを代入
//       newP.textContent = labels[key];
//       //入力用<input>のnull回避
//       if (saveText !== null) {
//         //保存用の<input>を作成
//         const newInput: Element = document.createElement("input");
//         //keyが'remarks'の場合にはtextareaに表示
//         //↓このifがおかしいかも
//         if (key === "remarks") {
//           if (textarea !== null) {
//             //保存用の表示は入力用のtextareaの値を代入
//             newTextarea.value = textarea.innerText;
//             newTextarea.readOnly = true;
//             console.log(textarea.innerText);
//           }
//           //'remarks'以外は<input>に保存される。
//           //保存用の<input>の値に入力用の<input>の値を代入
//         } else {
//           newInput.value = (saveText as HTMLInputElement).value || "";
//           //保存用の<input>にvalue属性をつける。getAttributeで値は取れない。
//           newInput.setAttribute("value", saveText.getAttribute("value") || "");
//           newInput.setAttribute("readonly", "true");
//         }
//         //
//         right?.appendChild(newP);
//         right?.appendChild(newInput);
//         console.log(newInput.setAttribute);
//         console.log(newP.innerText);

// if (key === "remarks") {
//   if (textarea !== null) {
//     //保存用の表示は入力用のtextareaの値を代入
//     newTextarea.value = textarea.innerText;
//     newTextarea.readOnly = true;
//     console.log(textarea.innerText);
//   }
//   //'remarks'以外は<input>に保存される。
//   //保存用の<input>の値に入力用の<input>の値を代入
// } else {
//   newInput.value = (saveText as HTMLInputElement).value || "";
//   //保存用の<input>にvalue属性をつける。getAttributeで値は取れない。
//   newInput.setAttribute("value", saveText.getAttribute("value") || "");
//   newInput.setAttribute("readonly", "true");
// }
// //
// right?.appendChild(newP);
// right?.appendChild(newInput);
// console.log(newInput.setAttribute);
// console.log(newP.innerText);

//クラスを追加する予定。
// const newDiv: Element = document.createElement("div");
// const newDiv2: Element = document.createElement("div");
// if (key === "name") {
//   newDiv.appendChild(newP);
//   newDiv.appendChild(newInput);
// } else if (key === "remarks") {
//   newDiv2.appendChild(newP);
//   newDiv2.appendChild(newTextarea);
// } else {
//   newDiv2.appendChild(newP);
//   newDiv2.appendChild(newInput);
// }
// newDiv2.classList.add("right-save", "right-save2");
// newDiv.classList.add("profile-area");
//   }
// });
// }
// console.log(newP.textContent);
//         /
// const sp: Element = document.createElement("p");
// const newInput: Element = document.createElement('input').value;
// save?.addEventListener("click", () => {
//   for (let i = 0; i < textareaP.length; i++) {
//     sp.textContent = textareaP[i];
//     profileArea0?.appendChild(sp);
//     right?.appendChild(newInput);
//   }
// });

// for(let n = 1; n <=5; n++){
// const iRight =document.createElement('input');
// iRight.id = 'appendi' + n;
// iRight.innerText = '' + n;
// ni.appendChild(iRight);
// }
// right?.appendChild(ni);
// console.log(np);
