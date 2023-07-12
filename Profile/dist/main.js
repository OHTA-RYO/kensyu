"use strict";
{
    const name = document.querySelector(".name");
    const rightSaves = document.querySelectorAll(".right-save");
    const save = document.getElementById("save");
    const right = document.getElementById("right");
    const title = document.querySelector("p");
    const saveText = document.querySelector("input");
    let n = 1;
    save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
        const pRight = document.createElement("p");
        pRight.id = "appendp" + n;
        if (pRight !== null && title !== null) {
            pRight.textContent = title.textContent;
            n++;
            right === null || right === void 0 ? void 0 : right.appendChild(pRight);
        }
    });
    save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
        const iRight = document.createElement("input");
        iRight.id = "appendi" + n;
        if (saveText !== null) {
            iRight.textContent = saveText.textContent;
            n++;
            right === null || right === void 0 ? void 0 : right.appendChild(iRight);
        }
    });
    rightSaves.forEach((rightSave) => {
        name === null || name === void 0 ? void 0 : name.addEventListener("click", (e) => {
            rightSave = e.target;
            rightSave.classList.toggle("right-save");
        });
    });
}
