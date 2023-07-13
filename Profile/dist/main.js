"use strict";
{
    const names = document.querySelectorAll(".name");
    const profiles = [
        {
            name: "中島慶樹",
            birthday: "1997年7月7日",
            age: "",
            height: "178cm",
            weight: "73kg",
            tel: "080-1234-5678",
            mail: "nakashima-k@codelic.co",
            remarks: "筋トレが趣味です",
        },
        {
            name: "山田次郎",
            birthday: "1945年6月8日",
            age: "",
            height: "188cm",
            weight: "73kg",
            tel: "080-1234-5678",
            mail: "nakashima-k@codelic.co",
            remarks: "筋トレが趣味です",
        },
        {
            name: "山田三郎",
            birthday: "2000年1月8日",
            age: "",
            height: "188cm",
            weight: "73kg",
            tel: "080-1234-5678",
            mail: "nakashima-k@codelic.co",
            remarks: "筋トレが趣味です",
        },
        {
            name: "山田四郎",
            birthday: "1999年3月8日",
            age: "",
            height: "188cm",
            weight: "73kg",
            tel: "080-1234-5678",
            mail: "nakashima-k@codelic.co",
            remarks: "筋トレが趣味です",
        },
        {
            name: "山田吾郎",
            birthday: "1978年9月8日",
            age: "",
            height: "188cm",
            weight: "73kg",
            tel: "080-1234-5678",
            mail: "nakashima-k@codelic.co",
            remarks: "筋トレが趣味です",
        },
    ];
    const labels = {
        name: "名前",
        birthday: "生年月日",
        age: "年齢",
        height: "身長",
        weight: "体重",
        tel: "電話番号",
        mail: "メールアドレス",
        remarks: "備考",
    };
    const profileArea0 = document.querySelector(".profile-area");
    const save = document.getElementById("save");
    const title = document.querySelectorAll("p");
    const right = document.getElementById("right");
    const saveText = document.querySelectorAll("input");
    save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
        for (let i = 0; i < labels.length; i++) {
            const array = Object.keys(labels[i]);
            array.forEach((key) => {
                const newP = document.createElement("p");
                newP.textContent = labels[key];
                if (saveText !== null) {
                    console.log(saveText.value);
                    const newInput = document.createElement("input");
                    if (saveText !== null) {
                        newInput.setAttribute("value", saveText.value);
                        right === null || right === void 0 ? void 0 : right.appendChild(newP);
                        right === null || right === void 0 ? void 0 : right.appendChild(newInput);
                        console.log(newInput.innerText);
                        console.log(newP.innerText);
                    }
                }
            });
        }
        console.log(saveText);
    });
    for (let i = 0; i < profiles.length; i++) {
        const newDiv = document.createElement("div");
        const newDiv2 = document.createElement("div");
        if (right !== null) {
            right.appendChild(newDiv);
            const array = Object.keys(profiles[i]);
            array.forEach((key) => {
                const input = document.createElement("input");
                const textarea = document.createElement("textarea");
                const label = document.createElement("p");
                label.textContent = labels[key];
                newDiv.appendChild(newDiv2);
                if (key === "remarks") {
                    textarea.value = profiles[i][key];
                    textarea.readOnly = true;
                }
                else {
                    input.setAttribute("value", profiles[i][key]);
                    input.setAttribute("readonly", profiles[i][key]);
                }
                if (key === "name") {
                    newDiv.appendChild(label);
                    newDiv.appendChild(input);
                }
                else if (key === "remarks") {
                    newDiv2.appendChild(label);
                    newDiv2.appendChild(textarea);
                }
                else {
                    newDiv2.appendChild(label);
                    newDiv2.appendChild(input);
                }
                newDiv2.classList.add("right-save", "right-save2");
                newDiv.classList.add("profile-area");
            });
        }
    }
    const profileArea = document.querySelectorAll(".profile-area");
    profileArea.forEach((profileEl) => {
        profileEl.addEventListener("click", (e) => {
            console.log(profileEl);
            const profile = profileEl.querySelector(".right-save2");
            console.log(names);
            console.log(profile);
            profile === null || profile === void 0 ? void 0 : profile.classList.toggle("right-save");
            console.log(e);
        });
    });
}
