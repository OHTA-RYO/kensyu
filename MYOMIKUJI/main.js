"use strict";
const jsonObject = [
    {
        name: "中島",
        time: "2023-08-02 8:45",
    },
    {
        name: "⾜⽴",
        time: "2023-08-02 8:55",
    },
    {
        name: "⼤⽥",
        time: "2023-08-02 8:59",
    },
    {
        name: "⼩川",
        time: "2023-08-02 9:10",
    },
    {
        name: "⾜⽴",
        time: "2023-08-02 12:00",
    },
    {
        name: "⾜⽴",
        time: "2023-08-02 18:00",
    },
    {
        name: "⼤⽥",
        time: "2023-08-02 18:05",
    },
    {
        name: "⼩川",
        time: "2023-08-02 18:13",
    },
    {
        name: "中島",
        time: "2023-08-02 18:25",
    },
];
const test = (n) => {
    const filN = jsonObject.filter((f) => f.name === n);
    console.log(filN);
    filN.forEach((a) => {
        a.time;
        console.log(a.time);
        console.log(n);
    });
};
test("中島");
test("⼤⽥");
