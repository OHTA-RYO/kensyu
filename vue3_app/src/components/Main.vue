<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";

import { ref, reactive, watch, computed } from "vue";
import { InputData, defaultInputData } from "../types";

const inputData = ref<InputData>(defaultInputData());

// const arr = [...Array(10)].map((_,i) => i + 1 )
// console.log(arr);

// let a = arr.length

// function arrRandom(){
// while (a){
// let j = Math.floor(Math.random() * a);
// let t = arr[--a];
// arr[a] = arr[j]
// arr[j] = t;
// console.log(arr[a]);
// }
// }
// arrRandom()

const saveInputData = ref<InputData[]>([
  {
    id: 0,
    name: "中島　慶樹",
    birthday: "1997年7月7日",
    age: "",
    height: "178cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: 1,
    name: "山田　次郎",
    birthday: "1945年6月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: 2,
    name: "山田　三郎",
    birthday: "2000年1月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: 3,
    name: "山田　四郎",
    birthday: "1999年3月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: 4,
    name: "山田　吾郎",
    birthday: "1978年9月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
]);

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

const saveButton = () => {
  saveInputData.value.push(inputData.value);
  saveInputData.value = saveInputData.value.map((d, index) => {
    return {
      ...d,
      ...{
        id: index,
      },
    };
  });
  console.log(inputData);
  console.log(saveInputData.value);
  inputData.value = defaultInputData();
};

const deleteButton = () => {
  // saveInputData.value =
  if (editIndex.value === null) return;
  const editName = saveInputData.value[editIndex.value].name;
  if (!confirm(`${editName}削除しますか？`)) return;
  saveInputData.value = saveInputData.value.filter(
    (t, index) => index !== editIndex.value
  );
  saveInputData.value = saveInputData.value.map((d, index) => {
    return {
      ...d,
      ...{
        id: index,
      },
    };
  });
  editIndex.value = null;
};

const isToggle = ref<boolean>(false);
const editIndex = ref<number | null>(null);
const openIndex = ref<number | null>(null);
const searchIndex = ref<number | null>(null);

const setIndex = (id: number) => {
  console.log(isToggle.value, id);
  if (isToggle.value) return;
  editIndex.value = id;

  if (id === openIndex.value) {
    openIndex.value = null;
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

const searchText = ref<string>("");

watch(searchText, () => {
  console.log(searchText.value);
});

const searchName = computed(() => {
  saveInputData.value = saveInputData.value.map((d, index) => {
    return {
      ...d,
      ...{
        id: index,
      },
    };
  });
  console.log(saveInputData.value.length);
  return saveInputData.value.filter((d) => d.name.includes(searchText.value));
});

//フィルターをかけた状態で削除すると削除対象がズレる。
//index番号を
const searchTextSave = ref<string>("");

const searchButton = () => {
  editIndex.value = null;
  // console.log(saveInputData.value[setIndex.length])
  searchText.value = searchTextSave.value;
};

// シンプルに
// 年齢 = 今年 - 生まれた年
// です。

// そして、もし今年の誕生日がまだ来ていなかったら
// 年齢 = 年齢 - 1
// です。
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
      <ProfileButton @click="saveButton" label="保存" id="save-button" />
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
          :isReadonly="!(s.id === openIndex && isToggle)"
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
          <ProfileButton label="削除" @click="deleteButton()" />
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
