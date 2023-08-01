import { db } from "../firebass";
import { collection, onSnapshot } from "firebase/firestore";
import { ref } from "vue";

import { InputData } from "../types";

export const saveInputData = ref<InputData[]>([]);

export const startConnect = () => {
  onSnapshot(collection(db, "users"), (snapshot) => {
    snapshot.docChanges().forEach((s) => {
      if (s.type === "added") {
        // 保存したときに重複する場合があるので記載
        if (saveInputData.value.some((d) => d.id === s.doc.id)) return;
        saveInputData.value.push({
          ...(s.doc.data() as InputData),
          ...{ id: s.doc.id },
        });
      }
      //saveInputDataを修正
      if (s.type === "modified") {
        saveInputData.value.map((d, id) => {
          if (d.id === s.doc.id) {
            saveInputData.value[id] = {
              ...(s.doc.data() as InputData),
              ...{ id: s.doc.id },
            };
          }
        });
      }
      //saveInputDataを削除
      if (s.type === "removed") {
        saveInputData.value = saveInputData.value.filter(
          (d, id) => d.id !== s.doc.id
        );
      }
    });
  });
};
