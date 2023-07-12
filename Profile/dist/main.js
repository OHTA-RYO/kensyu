"use strict";
{
    keisan();
    function keisan() {
        const names = document.querySelectorAll(".name");
        const rightSaves = document.querySelectorAll(".right-save");
        const right = document.getElementById("right");
        const title = document.querySelectorAll("p");
        const saveText = document.querySelector("input");
        let n = 1;
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
        const profileText = [
            ["中島慶樹", "1997年7月7日", "178cm", "73kg", "080-1234-5678"],
            ["山田次郎", "1945年6月8日", "186cm", "35kg", "090-1234-5678"],
            ["山田三郎", "1956年5月9日", "156cm", "65kg", "070-1234-5678"],
            ["山田四郎", "1967年4月10日", "176cm", "85kg", "060-1234-5678"],
            ["山田五郎", "1978年3月11日", "196cm", "95kg", "050-1234-5678"],
        ];
        const save = document.getElementById("save");
        const profileArea0 = document.querySelector(".profile-area");
        const np = document.createElement("p");
        save === null || save === void 0 ? void 0 : save.addEventListener("click", () => {
            for (let i = 0; i < textareaP.length; i++) {
                const np = document.createElement("p");
                np.textContent = textareaP[i];
                profileArea0 === null || profileArea0 === void 0 ? void 0 : profileArea0.appendChild(np);
            }
        });
        const profileArea = document.querySelectorAll(".profile-area");
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
}
