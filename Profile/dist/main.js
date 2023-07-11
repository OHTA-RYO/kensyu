"use strict";
{
    const name = document.querySelector('.name');
    const rightSaves = document.querySelectorAll('.right-save');
    const save = document.getElementById('save');
    const right = document.getElementById('right');
    let n = 1;
    save === null || save === void 0 ? void 0 : save.addEventListener('click', () => {
        const pRight = document.createElement('p');
        pRight.id = 'appendp' + n;
        pRight.innerText = '名前';
        n++;
        right === null || right === void 0 ? void 0 : right.appendChild(pRight);
    });
    save === null || save === void 0 ? void 0 : save.addEventListener('click', () => {
        const iRight = document.createElement('input');
        iRight.id = 'appendi' + n;
        iRight.innerText = '';
        n++;
        right === null || right === void 0 ? void 0 : right.appendChild(iRight);
    });
    rightSaves.forEach((open) => {
        name === null || name === void 0 ? void 0 : name.addEventListener('click', () => {
            open.classList.toggle('right-save');
        });
    });
}
