<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";
import name from "./name.vue";

import { ref, reactive, watch, computed, onMounted } from "vue";
import { InputData, defaultInputData } from "../types";
import { firebaseConfig, app, db } from "../firebase";
import { useRouter } from "vue-router";
import { dataSharing, saveInputData } from "../db/usersdb";
import { router } from "../router/index";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  auth,
  registerUser,
  loginUser,
  isLogin,
  loginSearch,
  logoutButton,
} from "../firebaseAuth";

import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as storageRef,
} from "firebase/storage";
import { blob } from "stream/consumers";

// import { channel } from "diagnostics_channel";

//const refをまとめる。
const inputData = ref<InputData>(defaultInputData());
// const saveInputData = ref<InputData[]>([]);
const isToggle = ref<boolean>(false);
const editIndex = ref<string>("");
const openIndex = ref<string>("");
const searchTextSave = ref<string>("");
const searchText = ref<string>("");
const isReadonly = ref(true);
const isSave = ref(true);

//ファイルをアップロードする
//fileをBlobに変換してアップロードする
const storage = getStorage();
// const storageRef = ref(storage);
const storageRef2 = storageRef(storage, "some-child");
// const storageRef2 = storageRef(storage, "images/image.jpg");
const file = ref<File | null>(null);
// const starsRef = storageRef(storage, "images/stars.jpg");

//ユーザーが選択したファイルを↑に格納する関数を作る。
//pushではない。
//@changeで入力した内容を取得。

//firebaseの画像をimportする。
//プレビュー画面も必要。
//URLもstorageに保存する必要がある。関数必要。
//URLにクエリを持たせる。何の情報を持っているかがわかるから。
//saveDataは新たなコンポーネントを作成しなくて良い。直接pだけ書く。

const imgData = (e: any) => {
  if (e.target.files.length === 0) return;
  file.value = e.target.files[0];
  console.log(e.target.files[0].url);
};

const imgUp = async () => {
  if (!file.value) return;
  const blob = new Blob([file.value], { type: file.value.type });
  await uploadBytes(storageRef2, blob).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};

const getUrl = async () => {
  await getDownloadURL(
    storageRef(storage, "gs://vue3app-7dd14.appspot.com/some-child")
  )
    .then((url) => {
      console.log(url);
      inputData.value.image = url;
    })
    .catch((error) => {});
};

//ログインしていない状態でMainのURLを検索しても
//Mainに飛ばずにlogin画面に飛ばしたい。
//必要な情報はログインしているのか、ログアウトしているのか。

//保存したデータを常に表示させたい。
//保存と同時に出力する。
//必要な処理は

/**
 * //firestoreに保存されたデータがリアルタイムに表示される関数をonMountedで変化が起きた時に1回だけ実行する関数を上乗せ。
 *
 */
onMounted(() => {
  dataSharing();
});

console.log(typeof new Date());

//一旦一番上まで移動。
//更新をした時のfirebaseとの連携に必要なもの
//編集したデータのidとオフジェクトのidが一致していたら、firebaseのデータを更新する(update)
/**
 * 更新を押した時の関数✅
 */

//saveInputDataのidとオブジェクトidが一致しているのを対象にする。
const updateDocument = async () => {
  //saveInputDataの中から、idがオブジェクトのidと一致するデータを取り出す。
  const findData = saveInputData.value.find((d) => d.id === editIndex.value);

  //editIndexでオブジェクトのidを選択肢に入れる。
  const useRef = doc(db, "users", editIndex.value);
  //findDataのidがオブジェクトのidと一致するデータがなければ何もしない。
  if (!findData) return;
  //useRef、第2引数に更新するデータ(findData)を指定
  await updateDoc(useRef, findData);
  //toggleが閉じている時の値がnullの場合は何もしない。
  if (openIndex.value === null) return;
  //isToggleを反転。true→false
  isToggle.value = !isToggle.value;
  //isReadonlyを反転。false→true
  isReadonly.value = !isReadonly.value;

  alert("データを更新しました。");
};

//これからやること。
//redonri クリアした。
//リロードしたら、saveInputDataの順番が変わる現象を修正する。

/**
 * //vueの情報をfirebassに登録する関数
 */

const saveDocument = async () => {
  try {
    await imgUp();
    await getUrl();
    //, inputData.value);を追加した！！
    //{デフォルトであった波括弧を削除した

    //idが0になっているからidを持たせないといけないかも。
    //idを持たせるのに必要なものは...
    //idはsaveInputDataをクリックした時にeditIndexに代入している。
    //}
    const docRef = await addDoc(collection(db, "users"), inputData.value);

    //ここではpushしない。
    //pushする場合は何が必要か。

    //↓onMountedしていないからリロードしたら消える。
    // saveInputData.value.push({
    //   ...inputData.value,
    //   ...{ id: docRef.id },
    // });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  inputData.value = defaultInputData();
};

/**
 * firebaseに保存したデータを削除する関数
 */
const deleteDocument = async () => {
  console.log(editIndex.value);
  //ドキュメントに保存されているデータは消えた。
  //ただし、今のままでは、Idを限定している為、対象を変更する必要がある。
  //idは取れた。doc("id")を処理しないといけない。
  //usersデータから削除する必要がある。

  //isToggleが展開しているデータを削除したい。
  //↓editIndexはtoggleが展開中　閉じている時の値がnullの時は何もしない。
  if (editIndex.value === null) return;
  //findで対象となるオブジェクトの要素を探す。saveInputDataのidとドキュメントのidが一致しているデータ
  const targetData = saveInputData.value.find((d) => d.id === editIndex.value);
  //confirmで選択中の名前をアラートで表示
  if (!targetData) return;
  if (!confirm(`${targetData.name}削除しますか？`)) return;

  //オブジェクトを削除する
  await deleteDoc(doc(db, "users", editIndex.value));
  //editIndexに削除したidが入っているから空文字を入れる。
  editIndex.value = "";
};

/**
 *
 * toggleを切替る関数
 */
const setIndex = (id: string) => {
  console.log(isToggle.value, id);

  if (isToggle.value) return;
  //ここでeditIndexにオブジェクトのidを入れる。
  editIndex.value = id;
  //✅URLにクエリ情報を付与する関数を一旦ここで追加

  router.push(`/ProfileInformation?id=${editIndex.value}`);

  //vueRouterからもクエリを取得できる。

  //idがopenIndex(toggle閉じている。)と等しい時にはopenIndexに空文字を代入。
  if (id === openIndex.value) {
    openIndex.value = "";
    //そうじゃなければopenIndexにオブジェクトidを代入
  } else {
    openIndex.value = id;
  }
  console.log(id);
  console.log(openIndex.value);
};

/**
 * 編集を押した時の関数
 */
const editButton = () => {
  //openIndex(toggleが閉じている時)がnullの時は何もしない。
  if (openIndex.value === null) return;
  //isToggleを反転させる。 false→true
  isToggle.value = !isToggle.value;
  //isReadonlyを反転。 true→false
  isReadonly.value = !isReadonly.value;
  console.log(isReadonly.value);
};

/**
 * saveInputDataの名前検索で対象を抽出する関数。
 */
//computedは計算結果を表示する。
const searchName = computed(() => {
  //saveInputDataをfileterで一旦削除。 includesで検索対象者のみ残す。
  return saveInputData.value.filter((d) => d.name.includes(searchText.value));
});

//

/**
 * 検索ボタンを押した時の関数
 */
const searchButton = () => {
  //editIndex(toggleが開いている時)に空文字を代入
  editIndex.value = "";
  //searchTextに検索窓に入力した値を代入。ここで始めて↑のfileterも走る。
  searchText.value = searchTextSave.value;
};

// シンプルに
// 年齢 = 今年 - 生まれた年
// です。

// そして、もし今年の誕生日がまだ来ていなかったら
// 年齢 = 年齢 - 1

//saveInputDataは配列やから、どのsaveInputDataかを指定する必要がある。
//関数を作って、引数でinputDataとsaveInputDataを渡す。

watch(
  //watchの中にsaveInputDataを追加
  [inputData, saveInputData],
  () => {
    /**
     * inputData.birithdayとsaveInputData.birthdayを渡すと年齢を自動計算する関数
     * @param m inputData.value.birthday　とsaveInputData.value.birthday
     */
    const birthdayFun = (m: string) => {
      let age: number = 0;
      const today = new Date();
      if (m) {
        console.log(m.split("年"));
        console.log(m.split("月"));
        console.log(m.split("月"));
        const yearB = m.split("年")[0];
        const monthB = m.split("月")[0].split("年")[1];
        const dayB = m.split("日")[0].split("月")[1];
        console.log(yearB, monthB, dayB);
        const birthday = new Date(
          Number(yearB),
          Number(monthB) - 1,
          Number(dayB)
        );
        const todayYearA = today.getFullYear();
        const todayMonthA = today.getMonth() + 1;
        const todayDayA = today.getDate();

        console.log(todayYearA);
        console.log(todayMonthA);
        console.log(todayDayA);

        console.log(birthday);
        let birthdayMontB0 = (birthday.getMonth() + 1)
          .toString()
          .padStart(2, "0");
        let birthdayDayB0 = birthday.getDate().toString().padStart(2, "0");
        console.log(birthdayMontB0);
        console.log(birthdayDayB0);

        let todayMontA0 = todayMonthA.toString().padStart(2, "0");
        let todayDayA0 = todayDayA.toString().padStart(2, "0");
        console.log(todayMontA0);
        console.log(todayDayA0);

        age = today.getFullYear() - birthday.getFullYear();

        if (
          Number(`${todayMontA0}${todayDayA0}`) <
          Number(`${birthdayMontB0}${birthdayDayB0}`)
        ) {
          age -= 1;
          console.log(age);
          console.log(birthday);

          console.log(todayMontA0 + todayDayA0);
          console.log(birthdayMontB0 + birthdayDayB0);
        }
        //return 忘れがち、引数あるパターンはreturn
        return age.toString();
      }
    };
    //inputBirthdayに↑で作った関数、引数inputData.value.birthdayを代入
    const inputBirthday = birthdayFun(inputData.value.birthday);
    //inputData.ageに戻り値を代入
    inputData.value.age = inputBirthday!;

    //errarになるから、saveBirthdayを作成。
    //mapでsaveInputDataのidとオブジェクトのidが一致するデータを抽出する
    const saveBirthday = saveInputData.value.map((d, id) => {
      //オブジェクトのidと選択中のデータのidが一致してたら
      if (d.id === editIndex.value) {
        //年齢に↑の関数、引数はdのbirthday
        d.age = birthdayFun(d.birthday) || "";
        //戻り値はd,オブジェクト。　年齢が返ってくる。
      }
      return d;
    });
  },
  { deep: true }
);

//子供からnameDataの値を受け取る。
//valueにtrue,falseの値が入る。
//trueの場合は保存ボタンが押せないようにする。
//現状は
const isAbleToSave = (value: boolean) => {
  isSave.value = value;
  console.log(value);
};

//  const isAbleToSave = nameData.value

//↑のsaveBirthday別バージョン
// const saveBirthday = saveInputData.value.map((d, id) => {
//       if (d.id === editIndex.value) {
//         const a = birthdayFun(d.birthday);
//         if (typeof a === "string") {
//           d.age = a;
//         }
//         return d;
//       }

// watch(
//   [inputData, saveInputData],
//   () => {
//     // const findData = saveInputData.value.find((d) => d.id === editIndex.value);
//     const birthdayFun = () => {
//       const today = new Date();
//       if (inputData.value.birthday) {
//         console.log(inputData.value.birthday.split("年"));
//         console.log(inputData.value.birthday.split("月"));
//         console.log(inputData.value.birthday.split("月"));
//         const yearB = inputData.value.birthday.split("年")[0];
//         const monthB = inputData.value.birthday.split("月")[0].split("年")[1];
//         const dayB = inputData.value.birthday.split("日")[0].split("月")[1];
//         console.log(yearB, monthB, dayB);
//         const birthday = new Date(
//           Number(yearB),
//           Number(monthB) - 1,
//           Number(dayB)
//         );
//         const todayYearA = today.getFullYear();
//         const todayMonthA = today.getMonth() + 1;
//         const todayDayA = today.getDate();

//         console.log(todayYearA);
//         console.log(todayMonthA);
//         console.log(todayDayA);

//         console.log(birthday);
//         let birthdayMontB0 = (birthday.getMonth() + 1)
//           .toString()
//           .padStart(2, "0");
//         let birthdayDayB0 = birthday.getDate().toString().padStart(2, "0");
//         console.log(birthdayMontB0);
//         console.log(birthdayDayB0);

//         let todayMontA0 = todayMonthA.toString().padStart(2, "0");
//         let todayDayA0 = todayDayA.toString().padStart(2, "0");
//         console.log(todayMontA0);
//         console.log(todayDayA0);

//         let age = today.getFullYear() - birthday.getFullYear();

//         if (
//           Number(`${todayMontA0}${todayDayA0}`) <
//           Number(`${birthdayMontB0}${birthdayDayB0}`)
//         ) {
//           age -= 1;
//           console.log(age);
//           console.log(birthday);

//           console.log(todayMontA0 + todayDayA0);
//           console.log(birthdayMontB0 + birthdayDayB0);
//         }
//       }

//       inputData.value.age = age.toString();

//       saveInputData.value.map((d, id) => {
//         if (d.id === editIndex.value) {
//           saveInputData.value[id].age = age.toString();
//         }
//       });
//     };
//   },
//   { deep: true }
// );

// watch(saveInputDataAge, () => {
//   console.log(saveInputDataAge);
// });

//onMountedでリアルタイムに追加している為、コメントアウトした。
/**
 * firebassに保存したデータをsaveInputデータに表示する関数
 *
 */
//const docRef = doc(db, "users", "hGPm6nWVftlN0wkcT1ZJ");

//現状はfirebase保存ボタンを押すとチュートリアルのadaと
//Alanがfirebassに登録されるようになっている。
//これからしたいことはsaveInputDataをfirebassに保存したい。
//saveInputDataを保存する際に必要なことは

//saveDocumentの関数の中にsaveInputDataを入れる。
//saveInputDataとfirebassを同時に登録するならsaveDocumentの関数の中にinputDataを入れるかもしれない。

//保存のされ方がわからないので試してみること、
//①予め登録している5名をada中に入れる。
//②adaとAlanのように5個に分ける。
//

// const testGetDocument = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   //usesから取ってくる
//   querySnapshot.forEach((doc) => {
//     //forEachでquerySnapshotに入ったfirebaseの全てのデータを取り出す。
//     saveInputData.value.push(doc.data() as InputData);
//     //forEachの引数、docをsaveInputDataにpush
//     console.log(doc.id, "=>", doc.data());

//     if (doc.exists()) {
//       console.log("Document data:", doc.data());
//       //docにデータがあったら、表示して、なければ、No suchと表示する。
//     } else {
//       // docSnap.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   });

// const docRef = doc(db, "users", "hGPm6nWVftlN0wkcT1ZJ");
//これやったら1つしか取れなくない！？
//実際に1つしか取れなかった。
// const docSnap = await getDoc(docRef);
//saveInputData.valueにfirebassのデータを表示させたい。
// saveInputData.value.push(docSnap.data() as InputData);
// };

/**
 * saveDocumentとtestGetDocumentをまとめた関数。
 * //保存と出力両方1度に出来る。
 */
// const testSaveGet = () => {
//   saveDocument();
//   testGetDocument();
// };

//firebaseに保存したデータとfirebaseからsaveInputDataに保存したデータを削除する。
//1つずつ対処。

//firebaseに連携したから、saveButtonはコメントアウト
//mapの第２引数にはnumberが入る。第2引数に何が入るかはよく見とくこと。
// const saveButton = () => {
//   saveInputData.value.push(inputData.value);
//   saveInputData.value = saveInputData.value.map((d, id) => {
//     return {
//       ...d,
//       ...{
//         id: id,
//       },
//     };
//   });
//   console.log(inputData);
//   console.log(saveInputData.value);
//   inputData.value = defaultInputData();
// };

//firebaseに引き継いだのでdeleteButtonはコメントアウト
// const deleteButton = () => {
//   // saveInputData.value =
//   if (editIndex.value === null) return;
//   const editName = saveInputData.value[editIndex.value].name;
//   if (!confirm(`${editName}削除しますか？`)) return;
//   saveInputData.value = saveInputData.value.filter(
//     (t, id) => id !== editIndex.value
//   );
//   saveInputData.value = saveInputData.value.map((d, id) => {
//     return {
//       ...d,
//       ...{
//         id: id,
//       },
//     };
//   });
//   editIndex.value = null;
// };

//検索ボタンを押した時の関数。
// const searchName = computed(() => {
//   // saveInputData.value = saveInputData.value.map((d, id) => {
//   //   return {
//   //     ...d,
//   //     ...{
//   //       id: id,
//   //     },
//   //   };
//   // });
//   return saveInputData.value.filter((d) => d.name.includes(searchText.value));
// });

//検索窓に入力した値をwatchで監視
// watch(searchText, () => {
//   console.log(searchText.value);
// });

//編集ボタンをクリックした時の関数
// const updateButton = () => {
//   console.log(isToggle.value);
//   //↓これ必要？
//   if (openIndex.value === null) return;
//   isToggle.value = !isToggle.value;

//   alert("データを更新しました。");
// };

//一旦Mainとinformationを遷移する関数を作成
const contact = () => {
  router.push("/Contact");
};
</script>

<template>
  <div class="container">
    <div class="left-container">
      <ProfileCard
        v-model="inputData"
        :isToggle="true"
        :isPaddingLeft="false"
        :isReadonly="false"
        @isboolean="isAbleToSave"
        :isSaveInputOpen="true"
      />
      <input type="file" class="input-image" @change="imgData" />
      <ProfileButton
        @click="saveDocument"
        label="保存"
        id="save-button"
        :disabled="isSave"
      />
      <ProfileButton label="問合せ" @click="contact" class="contact-us" />
    </div>

    <!-- v-forで回すのをsaveInputDataにすると検索でfileterをかけた時に空の名前のフィールドだけ残ってしまう。 -->
    <div class="right-container">
      <div
        @click="setIndex(s.id)"
        v-for="(s, index) in searchName"
        :key="index"
      >
        <p class="name-data">{{ searchName[index].name }}</p>
        <!-- sarchNameを双方向でバインド　入力とクリックを同時に行うみたいなこと。 -->
        <!-- ↓inputからpタグ変更 -->

        <!-- <ProfileCard
          v-model="searchName[index]"
          :isToggle="s.id === openIndex"
          :isReadonly="isReadonly"
        /> -->
      </div>
      <!-- 現状はidが閉じている時の値と等しくない場合↑ -->
      <!-- 押した時点でidとopenIndexにidが入る -->
      <!-- isReadonlyはtrueの時に書き込みができない。  -->
      <!-- isToggleが展開していたらisReadonlyが解除される -->
      <div class="sub-container">
        <ProfileSarch lablel="名前検索" v-model="searchTextSave" />
        <ProfileButton
          label="ログアウト"
          @click="logoutButton"
          class="logout"
        />
        <div class="button-area">
          <ProfileButton label="検索" @click="searchButton" />
          <ProfileButton
            label="編集"
            @click="editButton"
            :disabled="isToggle"
          />
          <ProfileButton label="更新" @click="updateDocument" />
          <ProfileButton label="削除" @click="deleteDocument" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 32px;
  left: 24px;
}

.left-container {
  width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.input-image {
  padding-top: 16px;
  padding-bottom: 8px;
}

.right-container {
  width: 640px;
  height: 100%;
  /* background: lightgray; */
  padding-left: 32px;
  display: flex;
  flex-direction: column;
}

.sub-container {
  width: 100%;
  margin-left: 80px;
  position: fixed;
  left: 960px;
}

.button-area {
  margin-top: 32px;
}

button:nth-child(n + 2) {
  margin-left: 24px;
}

#save-button {
  margin: 16px 0px;
}

.logout {
  text-decoration: none;
  width: 100px;
  color: #fff;
  background-color: #eb6100;
}

.name-data {
  font-size: 18px;
  margin: 8px 0;
  cursor: pointer;
  color: rgb(0, 153, 255);
  width: 160px;
  /* border: 1px solid black; */
  /* text-align: center; */
}
.contact-us {
  width: 64px;
}
</style>
../firebase
