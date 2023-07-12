"use strict";
{
    const name = document.querySelector('.name');
    const rightSaves = document.querySelector('.right-save');
    const save = document.getElementById('save');
    const right = document.getElementById('right');
    const title = document.getElementsByClassName('p');
    let n = 1;
    save === null || save === void 0 ? void 0 : save.addEventListener('click', () => {
        const pRight = document.createElement('p');
        pRight.id = 'appendp' + n;
        pRight.innerText = title.textContent;
        n++;
        right === null || right === void 0 ? void 0 : right.appendChild(pRight);
    });
    save === null || save === void 0 ? void 0 : save.addEventListener('click', () => {
        const iRight = document.createElement('input');
        iRight.id = 'appendi' + n;
        iRight.innerText = iRight.textContent;
        n++;
        right === null || right === void 0 ? void 0 : right.appendChild(iRight);
    });
    if (rightSaves !== null) {
        rightSaves.forEach((rightSave) => {
            name === null || name === void 0 ? void 0 : name.addEventListener('click', () => {
                rightSave.classList.toggle('right-save');
            });
        });
    }
}
