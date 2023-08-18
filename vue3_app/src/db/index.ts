import { db } from "../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";

import { InputData } from "../Profile_types/types";

export const saveInputData = ref<InputData[]>([]);

export const startConnect = () => {
  onSnapshot(collection(db, "users"), (snapshot) => {
    snapshot.docChanges().forEach((s) => {
      if (s.type === "added") {
        // 保存したときに重複する場合があるので記載
        //sameは配列内のいずれかの要素が条件に合致する場合にtrueを返す
        //saveInputDataのidとfirebaseのidが一致していたらreturnで何もしない。
        if (saveInputData.value.some((d) => d.id === s.doc.id)) return;
        //saveInputDataにドキュメントデータを追加
        saveInputData.value.push({
          ...(s.doc.data() as InputData),
          //これは型定義? ...は合体。 それともidにドキュメントのidを入れてる?どっち?✅
          ...{ id: s.doc.id },
        });
      }
      //saveInputDataを修正
      if (s.type === "modified") {
        //mapでsaveInputDataを新しい配列にする。
        saveInputData.value.map((d, id) => {
          //idがドキュメントidと一致している時
          if (d.id === s.doc.id) {
            //saveInputDataのid番目(↑で一致したid)に再度格納
            saveInputData.value[id] = {
              ...(s.doc.data() as InputData),
              ...{ id: s.doc.id },
            };
          }
        });
      }
      //saveInputDataを削除
      if (s.type === "removed") {
        //saveInputDataにidがドキュメントのidと一致しないデータをfileterで削除。これは予めfirebeseでデータを消しているから
        //idが一致しないやつを削除しているのか？✅
        saveInputData.value = saveInputData.value.filter(
          (d, id) => d.id !== s.doc.id
        );
      }
    });
  });
};
