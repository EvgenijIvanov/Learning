'use strict';
var timeVisible = document.createElement("p");
var yearVisible = document.createElement("p");
var monthVisible = document.createElement("p");
var div = document.createElement("div");

var now = new Date();
timeVisible.textContent = now;
div.appendChild(timeVisible);
document.body.appendChild(div);

var curentYear = now.getFullYear();
var curentMon = now.getMonth();
var curentDate = now.getDate();
var curentDay = now.getDay();

console.log("Год: ", curentYear, "Месяц: ", curentMon, "Дата: ", curentDate, "День: ", curentDay);

function calYear(index) {
    console.log(curentYear - index);
};

function calMonth(index) {
    console.log(now.getMonth() - index);
};