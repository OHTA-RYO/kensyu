"use strict";
{
    const names = document.querySelectorAll(".name");
    console.log("テスト");
    let isedit = false;
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
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/[^\x01-\x7E]/)) {
                    tmpobject.name = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
                    console.log(tmpobject.name);
                }
                else {
                    return confirm("名前は日本語で入力して下さい。");
                }
            }
            if (key === "birthday") {
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/^[0-9]{4}年\d{1,2}月\d{1,2}日$/)) {
                    tmpobject.birthday = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
                }
                else {
                    return confirm("生年月日は西暦で入力下さい。");
                }
            }
            if (key === "age") {
                tmpobject.age = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
            }
            if (key === "height") {
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/^[0-9]+$/)) {
                    tmpobject.height = (saveText === null || saveText === void 0 ? void 0 : saveText.value) + "cm" || "";
                }
                else {
                    return confirm("身長は数字のみ入力下さい。");
                }
            }
            if (key === "weight") {
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/^[0-9]+$/)) {
                    tmpobject.weight = (saveText === null || saveText === void 0 ? void 0 : saveText.value) + "kg" || "";
                }
                else {
                    return confirm("体重は数字のみ入力下さい。");
                }
            }
            if (key === "tel") {
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/\d{2,4}-\d{2,4}-\d{4}/)) {
                    tmpobject.tel = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
                }
                else {
                    return confirm("電話番号を確認");
                }
            }
            if (key === "mail") {
                if (saveText === null || saveText === void 0 ? void 0 : saveText.value.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
                    tmpobject.mail = (saveText === null || saveText === void 0 ? void 0 : saveText.value) || "";
                }
                else {
                    return confirm("メールアドレスに誤りがあります。");
                }
            }
            if (key === "remarks") {
                const saveTextarea = document.querySelector(`textarea.${key}_num`);
                tmpobject.remarks = (saveTextarea === null || saveTextarea === void 0 ? void 0 : saveTextarea.value) || "";
            }
            if (saveText !== null)
                saveText.value = "";
        });
        const saveK = window.confirm("エラーを解消しましたか？");
        if (saveK) {
            profiles.push(tmpobject);
            console.log(profiles);
            sessionStorage.setItem("profiles", JSON.stringify(profiles));
            const newDiv = addElement(tmpobject, profiles.length - 1);
            addEvent(newDiv);
        }
        else {
            return;
        }
    });
    const saveData = JSON.parse(sessionStorage.getItem("profiles") || "[]");
    if (saveData.length) {
        profiles = saveData;
        console.log(profiles);
    }
    const deleteB = document.getElementById("delete");
    deleteB === null || deleteB === void 0 ? void 0 : deleteB.addEventListener("click", () => {
        const deleteC = window.confirm("削除しますか？");
        if (!deleteC)
            return;
        const profileEl = document.querySelectorAll(".profile-area");
        const openElement = [];
        for (const n of profileEl) {
            const targetEl = n.querySelector(".right-save2");
            if (!(targetEl === null || targetEl === void 0 ? void 0 : targetEl.classList.contains("right-save"))) {
                openElement.push(n);
            }
        }
        for (const deleEl of openElement) {
            deleEl.remove();
        }
        profiles.pop();
        sessionStorage.setItem("profiles", JSON.stringify(profiles));
        sessionStorage.getItem("profiles") || "[]";
        if (saveData.length) {
            profiles = saveData;
            console.log(profiles);
        }
    });
    const edit = document.getElementById("edit");
    edit === null || edit === void 0 ? void 0 : edit.addEventListener("click", () => {
        isedit = true;
        const profileEl = document.querySelectorAll(".profile-area");
        const openElement = [];
        for (const n of profileEl) {
            const targetEl = n.querySelector(".right-save2");
            if (!(targetEl === null || targetEl === void 0 ? void 0 : targetEl.classList.contains("right-save"))) {
                openElement.push(n);
            }
        }
        for (const editEl of openElement) {
            const inputs = editEl.querySelectorAll("input");
            const textareas = editEl.querySelectorAll("textarea");
            inputs.forEach((input) => {
                input.removeAttribute("readonly");
            });
            textareas.forEach((textarea) => {
                textarea === null || textarea === void 0 ? void 0 : textarea.removeAttribute("readonly");
            });
        }
    });
    const update = document.getElementById("update");
    update === null || update === void 0 ? void 0 : update.addEventListener("click", () => {
        isedit = false;
        const inputs = document.querySelectorAll("input");
        const textareas = document.querySelectorAll("textarea");
        inputs.forEach((input) => {
            input.setAttribute("readonly", "true");
        });
        textareas.forEach((textarea) => {
            textarea === null || textarea === void 0 ? void 0 : textarea.setAttribute("readonly", "true");
        });
    });
    const addElement = (o, index) => {
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
                newDiv.id = `profile-area${index}`;
            });
        }
        return newDiv;
    };
    for (let i = 0; i < profiles.length; i++) {
        addElement(profiles[i], i);
    }
    const addEvent = (el) => {
        el.addEventListener("click", (e) => {
            if (isedit)
                return;
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
