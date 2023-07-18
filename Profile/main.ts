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
        tmpobject.name = saveText?.value || "";
      }
      if (key === "birthday") {
        tmpobject.birthday = saveText?.value || "";
      }
      if (key === "age") {
        tmpobject.age = saveText?.value || "";
      }
      if (key === "height") {
        tmpobject.height = saveText?.value || "";
      }
      if (key === "weight") {
        tmpobject.weight = saveText?.value || "";
      }
      if (key === "tel") {
        tmpobject.tel = saveText?.value || "";
      }
      if (key === "mail") {
        tmpobject.mail = saveText?.value || "";
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

    profiles.push(tmpobject);
    console.log(profiles);

    //setItemをtmpobject→profilesに変更 profilesの全ての情報を保存
    sessionStorage.setItem("profiles", JSON.stringify(profiles));

    const newDiv = addElement(tmpobject);
    addEvent(newDiv);
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

    if (deleteC) {
      //activeElmentを削除したかったが、削除ボタンを押した時点でactiveが外れるから別の方法を検討する。
      //right-saveがないやつを削除？
      // document.activeElement;

      sessionStorage.removeItem("profiles");
      //↓profilesからアイテム削除
      profiles.pop();

      //削除の後に再度ストレージに保存する
      sessionStorage.setItem("profiles", JSON.stringify(profiles));
      //保存したストレージデータを取り出す
      sessionStorage.getItem("profiles") || "[]";
      if (saveData.length) {
        profiles = saveData as Profile[];
        console.log(profiles);
      }

      // if(profileArea0 !== null && profileArea0!.parentNode !== null){
      //       profileArea0!.parentNode.removeChild(profileArea0!);
      //     }

      //ノード削除rightの子要素profileArea0を削除
      if (right !== null && profileArea0 !== null) {
        right.removeChild(profileArea0!);
        //   if( right !== null && right.lastElementChild !== null){
        //     //↓こいつで即反映した。
        //   right.lastElementChild.remove();
        // }
        console.log(profiles);
      }
    } else {
      return;
    }
  });
  // console.log(right);
  // console.log(profileArea0);

  const addElement = (o: Profile) => {
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
      });
    }
    //リターンは好きなモノをリターンできるのか。リターンはどこにリターン出来るのか？
    return newDiv;
  };
  //予め右側においてお<p>と<input>を作成
  //

  for (let i = 0; i < profiles.length; i++) {
    addElement(profiles[i]);
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
