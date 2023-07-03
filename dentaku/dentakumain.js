'use strict'

let showText = ''
let previosNum = null
let sign = null // ÷, ×, -, +

//ディスプレイのデータを取得
const $display = document.querySelector('.display-textarea')

/** ボタンをクリック */
function clickKey (text) {
  if (typeof text === 'number') {
    if (showText.length >= 9) return
    showText += String(text)
    $display.textContent = Number(showText).toLocaleString()
    return
  } else if (text === 'AC') {
    previosNum = null
    sign = null
    showText = ''
    $display.textContent = ''
  } else if (text === '+/-') {
    $display.textContent = Number(showText) * -1
    showText = String(Number(showText) * -1)
  } else if (text === '%') {
    $display.textContent = Number(showText) / 100
    showText = String(Number(showText) / 100)
  } else if (text === '.') {
    if (showText === '') showText = '0'
    showText += '.'
    $display.textContent = showText
  } else if (text === '=') {
    if (sign === null || previosNum === null || !showText) return
    const num = Number(showText)
    let calcNum = null
    if (sign === '+') calcNum = previosNum + num
    if (sign === '-') calcNum = previosNum - num
    if (sign === '×') calcNum = previosNum * num
    if (sign === '÷') calcNum = previosNum / num
    $display.textContent = calcNum.toLocaleString()
  } else {
    sign = text
    if (showText) {
      previosNum = Number(showText)
      showText = ''
      $display.textContent = ''
    }
  }
}
