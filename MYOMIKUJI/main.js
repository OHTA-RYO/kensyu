"use strict";
const button = document.querySelector("button");
const input = document.querySelector("input");
const radios = document.querySelectorAll(".radio");
const addEv = (event) => {
    const value = event.currentTarget.value;
    console.log(`${value}が選択されました。`);
};
const addBt = (bt) => {
    bt.value = input.value;
    console.log(bt.value);
};
for (let radio of radios) {
    radio.addEventListener("input", addEv);
}
button.addEventListener("click", addBt);
input.addEventListener("input", addEv);
