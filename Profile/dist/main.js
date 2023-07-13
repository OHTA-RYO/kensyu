"use strict";
var _a;
{
    const names = document.querySelectorAll(".name");
    const title = document.querySelectorAll("p");
    const saveText = ((_a = document.querySelector("input")) === null || _a === void 0 ? void 0 : _a.value) || null;
    const profileArea = document.querySelectorAll(".profile-area");
    const textareaP = [
        "名前",
        "生年月日",
        "年齢",
        "身長",
        "体重",
        "電話番号",
        "メールアドレス",
        "備考",
    ];
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
    const labels = [
        {
            name: "名前",
            birthday: "生年月日",
            age: "年齢",
            height: "身長",
            weight: "体重",
            tel: "電話番号",
            mail: "メールアドレス",
            remarks: "備考",
        },
    ];
    const save = document.getElementById("save");
    const profileArea0 = document.querySelector(".profile-area");
    const sp = document.createElement("p");
    save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
        for (let i = 0; i < textareaP.length; i++) {
            sp.textContent = textareaP[i];
            profileArea0 === null || profileArea0 === void 0 ? void 0 : profileArea0.appendChild(sp);
        }
    });
    for (let i = 0; i < profiles.length; i++) {
        const newDiv = document.createElement("div");
        profileArea0 === null || profileArea0 === void 0 ? void 0 : profileArea0.appendChild(newDiv);
        Object.keys(profiles[i]).forEach((key) => {
            const input = document.createElement("input");
            input.setAttribute("value", profiles[i][key]);
            for (let j = 0; j < labels.length; j++) {
                Object.keys(labels[j]).forEach((key) => {
                    const label = document.createElement("p");
                    label.textContent = labels[j][key];
                    newDiv.appendChild(label);
                    newDiv.appendChild(input);
                    label.classList.add('right-save2');
                    input.classList.add('right-save2');
                    newDiv.classList.add('profile-area');
                });
            }
        });
    }
    ;
    profileArea.forEach((profileEl) => {
        profileEl.addEventListener("click", (e) => {
            console.log(profileEl);
            const profile = profileEl.querySelector(".right-save2");
            console.log(names);
            console.log(profile);
            profile === null || profile === void 0 ? void 0 : profile.classList.toggle("right-save");
        });
    });
}
