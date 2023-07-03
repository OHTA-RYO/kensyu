'use strict'

let shoeText = ''

//ディスプレイのデータを取得
const $display = document.querySelector('.display-textarea')

/** ボタンをクリック */
function clickKey (text) {
  if (typeof text === 'number' && shoeText.length < 9) {
    shoeText += String(text)
    $display.textContent = shoeText
  }

  if (text === 'AC') console.log(text) // ACの関数
  if (text === '÷') console.log(text) // ÷の関数
  if (text === '×') console.log(text) // ×の関数
  if (text === '-') console.log(text) // -の関数
  if (text === '+') console.log(text) // +の関数
  if (text === '=') console.log(text) // =の関数
}
