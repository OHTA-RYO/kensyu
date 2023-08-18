import { onMounted, ref } from "vue";
import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { InputData, defaultInputData } from "../Profile_types/types";

export const saveInputData = ref<InputData[]>([]);
// onMounted(() => {
//MainとProfileInfomation両方で使用できるように関数にする。

/**
 * //firestoreに保存されたデータがリアルタイムに表示される関数
 *
 */
export const dataSharing = () => {
  const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
    snapshot.docChanges().forEach((s) => {
      //firebaseに登録されているデータは常に表示されている。
      //saveInputDataに表示させたい。

      if (s.type === "added") {
        console.log("New users:", s.doc.data());
        // ...はオブジェクト,配列も合体するやつ。
        saveInputData.value.push({
          ...(s.doc.data() as InputData),
          ...{ id: s.doc.id },
        });
        let resule = saveInputData.value.sort((a, b) => {
          return a.day < b.day ? -1 : 1;
        });
      }
      //saveInputDataを編集　✅
      if (s.type === "modified") {
        console.log("Modified users:", s.doc.data());
        //
      }
      //saveInputDataを削除
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
  // });
};
