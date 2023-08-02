<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";

import { ref, reactive, watch, computed, onMounted } from "vue";
import { InputData, defaultInputData } from "../types";
import { firebaseConfig, app, db } from "../firebass";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

//const refをまとめる。
const inputData = ref<InputData>(defaultInputData());
const saveInputData = ref<InputData[]>([]);
const isToggle = ref<boolean>(false);
const editIndex = ref<string>("");
const openIndex = ref<string>("");
const searchIndex = ref<string>("");
const searchTextSave = ref<string>("");
const searchText = ref<string>("");

//保存したデータを常に表示させたい。
//保存と同時に出力する。
//必要な処理は

/**
 * //firestoreに保存されたデータがリアルタイムに表示される関数。
 *
 */
onMounted(() => {
  const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
    snapshot.docChanges().forEach((s) => {
      //firebaseに登録されているデータは常に表示されている。
      //saveInputDataに表示させたい。
      //↓のやつは初めだけ表示されている？
      // 処理できた。
      //saveInputDataに追加
      if (s.type === "added") {
        console.log("New users:", s.doc.data());
        //...はオブジェクト,配列も合体するやつ。
        saveInputData.value.push({
          ...(s.doc.data() as InputData),
          ...{ id: s.doc.id },
        });
      }
      //saveInputDataを修正
      if (s.type === "modified") {
        console.log("Modified users:", s.doc.data());
      }
      //saveInputDataを削除
      //効いてない。
      if (s.type === "removed") {
        //フィルターで新しい配列をsaveInputDataに入れる。
        //削除対象のidとドキュメントのidが一致していないデータで配列が返ってくる。
        saveInputData.value = saveInputData.value.filter(
          (d, id) => d.id !== s.doc.id
        );
        console.log("Removed users:", s.doc.data());
      }
    });
  });
});

//現状はfirebase保存ボタンを押すとチュートリアルのadaと
//Alanがfirebassに登録されるようになっている。
//これからしたいことはsaveInputDataをfirebassに保存したい。
//saveInputDataを保存する際に必要なことは

//testSaveDocumentの関数の中にsaveInputDataを入れる。
//saveInputDataとfirebassを同時に登録するならtestSaveDocumentの関数の中にinputDataを入れるかもしれない。

//保存のされ方がわからないので試してみること、
//①予め登録している5名をada中に入れる。
//②adaとAlanのように5個に分ける。
//

/**
 * //vueの情報をfirebassに登録する関数
 */

const testSaveDocument = async () => {
  try {
    //, inputData.value);を追加した！！
    //{デフォルトであった波括弧を削除した

    //idが0になっているからidを持たせないといけないかも。
    //idを持たせるのに必要なものは...
    //inputDataのidをsaveInputDataのlengthを代入。
    // inputData.value.id = saveInputData.value.length;
    //}
    const docRef = await addDoc(collection(db, "users"), inputData.value);
    //この中にinputDataを保存する。

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  inputData.value = defaultInputData();
};

//onMountedでリアルタイムに追加している為、コメントアウトした。
/**
 * firebassに保存したデータをsaveInputデータに表示する関数
 *
 */
//const docRef = doc(db, "users", "hGPm6nWVftlN0wkcT1ZJ");

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
 * testSaveDocumentとtestGetDocumentをまとめた関数。
 * //保存と出力両方1度に出来る。
 */
// const testSaveGet = () => {
//   testSaveDocument();
//   testGetDocument();
// };

//firebaseに保存したデータとfirebaseからsaveInputDataに保存したデータを削除する。
//1つずつ対処。

/**
 * firebaseに保存したデータを削除する関数
 */
const testDeleteDocument = async () => {
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
  await deleteDoc(doc(db, "users", "editIndex.value"));
  //saveInputDataにfilterをかけて選択中のデータを削除

  saveInputData.value = saveInputData.value.filter(
    //indexがeditIndexではないデータを新しい配列として作成する。
    (s, id) => s.id !== editIndex.value
  );

  console.log(saveInputData);

  //mapでidに削除後のsaveInputDataのindexを追加している。
  // saveInputData.value = saveInputData.value.map((d, id) => {
  //   return {
  //     ...d,
  //     ...{
  //       id: id,
  //     },
  //   };
  // }); //editIndexにnullを代入。
  editIndex.value = "";

  //   saveInputData.value = saveInputData.value.map((d, index) => {
  //     return {
  //       ...d,
  //       ...{
  //         id: index,
  //       },
  //     };
  //   });
};

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

const setIndex = (id: string) => {
  console.log(isToggle.value, id);
  if (isToggle.value) return;
  editIndex.value = id;

  if (id === openIndex.value) {
    openIndex.value = "";
  } else {
    openIndex.value = id;
  }
  console.log(id);
};

const editButton = () => {
  if (openIndex.value === null) return;
  isToggle.value = !isToggle.value;
};

const updateButton = () => {
  console.log(isToggle.value);
  if (openIndex.value === null) return;
  isToggle.value = !isToggle.value;
  alert("データを更新しました。");
};

watch(searchText, () => {
  console.log(searchText.value);
});

//検索はまだfirebaseに連携出来てないけど
//エラーがあるから一旦コメントアウト✅
//コメントアウトしたら、saveInputDataが表示されない。

/**
 * saveInputDataの名前検索で対象を抽出する関数。
 */
const searchName = computed(() => {
  // saveInputData.value = saveInputData.value.map((d, id) => {
  //   return {
  //     ...d,
  //     ...{
  //       id: id,
  //     },
  //   };
  // });
  return saveInputData.value.filter((d) => d.name.includes(searchText.value));
});

//フィルターをかけた状態で削除すると削除対象がズレる。
//index番号を

const searchButton = () => {
  editIndex.value = "";
  // console.log(saveInputData.value[setIndex.length])
  searchText.value = searchTextSave.value;
};

// シンプルに
// 年齢 = 今年 - 生まれた年
// です。

// そして、もし今年の誕生日がまだ来ていなかったら
// 年齢 = 年齢 - 1

watch(
  inputData,
  () => {
    const today = new Date();
    if (inputData.value.birthday) {
      console.log(inputData.value.birthday.split("年"));
      console.log(inputData.value.birthday.split("月"));
      console.log(inputData.value.birthday.split("月"));
      const yearB = inputData.value.birthday.split("年")[0];
      const monthB = inputData.value.birthday.split("月")[0].split("年")[1];
      const dayB = inputData.value.birthday.split("日")[0].split("月")[1];
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

      let age = today.getFullYear() - birthday.getFullYear();

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
      inputData.value.age = age.toString();
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="container">
    <div class="left-container">
      <ProfileCard
        v-model="inputData"
        :isToggle="true"
        :isPaddingLeft="false"
        :isReadonly="false"
      />
      <ProfileButton @click="" label="保存" id="save-button" />
      <ProfileButton label="firestoreに保存" @click="testSaveDocument" />
      <ProfileButton
        label="firestoreから保存したデータを削除"
        @click="testDeleteDocument"
      />
    </div>

    <div class="right-container">
      <div
        @click="setIndex(s.id)"
        v-for="(s, index) in searchName"
        :key="index"
      >
        <ProfileCard
          v-model="searchName[index]"
          :isToggle="s.id === openIndex"
          :isReadonly="!(s.id === openIndex)"
        />
      </div>
      <div class="sub-container">
        <ProfileSarch lablel="名前検索" v-model="searchTextSave" />
        <div class="button-area">
          <ProfileButton label="検索" @click="searchButton" />
          <ProfileButton
            label="編集"
            @click="editButton"
            :disabled="isToggle"
          />
          <ProfileButton label="更新" @click="updateButton" />
          <ProfileButton label="削除" @click="" />
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
</style>
