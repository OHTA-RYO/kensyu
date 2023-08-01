<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import ProfileButton from './ProfileButton.vue'
import ProfileSarch from './ProfileSarch.vue'

import { ref, watch, computed, onMounted } from 'vue'
import { InputData, defaultInputData } from '../types'
import { startConnect, saveInputData } from '../db'
import { db } from '../firebass'
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'

const inputData = ref<InputData>(defaultInputData())
const isToggle = ref(false)
const editID = ref('') // documentのid
const openID = ref('')
const searchTextSave = ref('')
const searchText = ref('')

onMounted(() => {
  startConnect()
})

/**
 * 保存
 */
const saveDocument = async () => {
  try {
    await addDoc(collection(db, 'users'), inputData.value)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
  inputData.value = defaultInputData()
}

/**
 * 更新
 */
const updateDocument = async () => {
  const findData = saveInputData.value.find(d => d.id === editID.value)
  if (!findData) return

  const docRef = doc(db, 'users', editID.value)
  // await setDoc(docRef, findData, { merge: true })
  await updateDoc(docRef, findData)

  isToggle.value = !isToggle.value
  alert('データを更新しました。')
}

/**
 * 削除
 */
const deleteDocument = async () => {
  if (editID.value === null) return

  const targetData = saveInputData.value.find(d => d.id === editID.value)
  if (!targetData) return

  if (!confirm(`${targetData.name}削除しますか？`)) return
  //saveInputDataにfilterをかけて選択中のデータを削除

  await deleteDoc(doc(db, 'users', editID.value))

  editID.value = ''
}

/**
 * 切り替え
 */
const setIndex = (id: string) => {
  if (isToggle.value) return
  editID.value = id
  if (id === openID.value) {
    openID.value = ''
  } else {
    openID.value = id
  }
}

/**
 * 編集開始
 */
const editButton = () => {
  if (openID.value === null) return
  isToggle.value = !isToggle.value
}

/**
 * saveInputDataの名前検索で対象を抽出する関数。
 */
const searchName = computed(() =>
  saveInputData.value.filter(d => d.name.includes(searchText.value))
)

/**
 * 検索ボタン
 */
const searchButton = () => {
  editID.value = ''
  searchText.value = searchTextSave.value
}

watch(
  inputData,
  () => {
    const today = new Date()
    if (inputData.value.birthday) {
      console.log(inputData.value.birthday.split('年'))
      console.log(inputData.value.birthday.split('月'))
      console.log(inputData.value.birthday.split('月'))
      const yearB = inputData.value.birthday.split('年')[0]
      const monthB = inputData.value.birthday.split('月')[0].split('年')[1]
      const dayB = inputData.value.birthday.split('日')[0].split('月')[1]
      console.log(yearB, monthB, dayB)
      const birthday = new Date(Number(yearB), Number(monthB) - 1, Number(dayB))
      const todayYearA = today.getFullYear()
      const todayMonthA = today.getMonth() + 1
      const todayDayA = today.getDate()

      console.log(todayYearA)
      console.log(todayMonthA)
      console.log(todayDayA)

      console.log(birthday)
      let birthdayMontB0 = (birthday.getMonth() + 1).toString().padStart(2, '0')
      let birthdayDayB0 = birthday.getDate().toString().padStart(2, '0')
      console.log(birthdayMontB0)
      console.log(birthdayDayB0)

      let todayMontA0 = todayMonthA.toString().padStart(2, '0')
      let todayDayA0 = todayDayA.toString().padStart(2, '0')
      console.log(todayMontA0)
      console.log(todayDayA0)

      let age = today.getFullYear() - birthday.getFullYear()

      if (
        Number(`${todayMontA0}${todayDayA0}`) <
        Number(`${birthdayMontB0}${birthdayDayB0}`)
      ) {
        age -= 1
        console.log(age)
        console.log(birthday)

        console.log(todayMontA0 + todayDayA0)
        console.log(birthdayMontB0 + birthdayDayB0)
      }
      inputData.value.age = age.toString()
    }
  },
  { deep: true }
)
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

      <ProfileButton label="保存" @click="saveDocument" />
    </div>

    <div>
      <div class="sub-container">
        <ProfileSarch lablel="名前検索" v-model="searchTextSave" />
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

      <div class="right-container">
        <div
          @click="setIndex(s.id)"
          v-for="(s, index) in searchName"
          :key="s.id"
        >
          <ProfileCard
            v-model="searchName[index]"
            :isToggle="s.id === openID"
            :isReadonly="!(s.id === openID && isToggle)"
          />
        </div>
        //元々saveInputDataじゃなくて、sachNameやった。コメントアウトできない。
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
  padding-left: 32px;
  display: flex;
  flex-direction: column;
}

.sub-container {
  width: 100%;
  margin-left: 32px;
  padding: 10px;
  border: 1px solid #676767;
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
