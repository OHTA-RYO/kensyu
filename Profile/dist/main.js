"use strict";
{
    const name = document.querySelector('.name');
    const rightSaves = document.querySelectorAll('.right-save');
    const n = rightSaves.length;
    rightSaves.forEach(() => {
        name === null || name === void 0 ? void 0 : name.addEventListener('click', () => {
            var _a;
            (_a = rightSaves[0]) === null || _a === void 0 ? void 0 : _a.classList.toggle('right-save');
            console.log('right-save');
        });
    });
}
