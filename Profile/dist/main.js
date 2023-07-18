"use strict";
{
    const names = document.querySelectorAll(".name");
    let profiles = [
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
    const right = document.getElementById("right");
    const textarea = document.querySelector("textarea");
    save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
        const tmpobject = {
            name: "",
            birthday: "",
            age: "",
            height: "",
            weight: "",
            tel: "",
            mail: "",
            remarks: "",
        };
        const array = Object.keys(labels);
        array.forEach((key) => {
            const saveText = document.querySelector(`input.${key}_num`);
            if (key === "name") {
                tmpobject.name = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "birthday") {
                tmpobject.birthday = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "age") {
                tmpobject.age = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "height") {
                tmpobject.height = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "weight") {
                tmpobject.weight = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "tel") {
                tmpobject.tel = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "mail") {
                tmpobject.mail = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "remarks") {
                const saveTextarea = document.querySelector(`textarea.${key}_num`);
                tmpobject.remarks = (saveTextarea === null || saveTextarea === void 0 ? void 0 : saveTextarea.value) || "";
            }
            if (saveText !== null)
                saveText.value = "";
        });
        profiles.push(tmpobject);
        console.log(profiles);
        sessionStorage.setItem("profiles", JSON.stringify(profiles));
        const newDiv = addElement(tmpobject);
        addEvent(newDiv);
    });
    const saveData = JSON.parse(sessionStorage.getItem("profiles") || "[]");
    if (saveData.length) {
        profiles = saveData;
        console.log(profiles);
    }
    const deleteB = document.getElementById("delete");
    deleteB === null || deleteB === void 0 ? void 0 : deleteB.addEventListener("click", () => {
        const deleteC = window.confirm("削除しますか？");
        if (deleteC) {
            sessionStorage.removeItem("profiles");
            profiles.pop();
            sessionStorage.setItem("profiles", JSON.stringify(profiles));
            sessionStorage.getItem("profiles") || "[]";
            if (saveData.length) {
                profiles = saveData;
                console.log(profiles);
            }
            if (right !== null && profileArea0 !== null) {
                right.removeChild(profileArea0);
                console.log(profiles);
            }
        }
        else {
            return;
        }
    });
    console.log(right);
    console.log(profileArea0);
    const addElement = (o) => {
        const newDiv = document.createElement("div");
        const newDiv2 = document.createElement("div");
        if (right !== null) {
            right.appendChild(newDiv);
            const array = Object.keys(o);
            array.forEach((key) => {
                const input = document.createElement("input");
                const textarea = document.createElement("textarea");
                const label = document.createElement("p");
                label.textContent = labels[key];
                newDiv.appendChild(newDiv2);
                if (key === "remarks") {
                    textarea.value = o[key];
                    textarea.readOnly = true;
                }
                else {
                    input.setAttribute("value", o[key]);
                    input.setAttribute("readonly", o[key]);
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
        return newDiv;
    };
    for (let i = 0; i < profiles.length; i++) {
        addElement(profiles[i]);
    }
    const addEvent = (el) => {
        el.addEventListener("click", (e) => {
            console.log(el);
            const profile = el.querySelector(".right-save2");
            console.log(names);
            console.log(profile);
            profile === null || profile === void 0 ? void 0 : profile.classList.toggle("right-save");
            console.log(e);
        });
    };
    const profileArea = document.querySelectorAll(".profile-area");
    profileArea.forEach((profileEl) => {
        addEvent(profileEl);
    });
}
