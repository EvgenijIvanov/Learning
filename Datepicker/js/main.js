'use strict';
var timeVisible = document.createElement("p");
var yearVisible = document.createElement("span");
var curentWrapperYear = document.querySelector(".wrapperYear");
var monthVisible = document.createElement("span");
var allwrapper = document.querySelector(".datepickerWrapper");
var curentWrapperMonth = document.querySelector(".curentMonth");
var nextButtonMonth = document.querySelector(".next");
var previousButtonMonth = document.querySelector(".previous");

var now = new Date();
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четвег", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var curentYear = now.getFullYear();
var countMonth = now.getMonth();
var curentMonth = months[countMonth];
var CURENT_MONTH_INDEX = 0;
curentWrapperMonth.textContent = curentMonth;
yearVisible.textContent = curentYear;
curentWrapperYear.appendChild(yearVisible);


nextButtonMonth.addEventListener("click", function () {
    monthNextPrevioius(0);
});
previousButtonMonth.addEventListener("click", function () {
    monthNextPrevioius(1);
});

function monthNextPrevioius(index) {
    // debugger;
    CURENT_MONTH_INDEX = (index == 0) ? CURENT_MONTH_INDEX+1 : CURENT_MONTH_INDEX-1;
    countMonth = countMonth+CURENT_MONTH_INDEX;
    if(countMonth >= 0 && countMonth <= 11){
        countMonth = countMonth;
    } else if(countMonth < 0){
        countMonth = 12 + CURENT_MONTH_INDEX;
        if(countMonth == 0) CURENT_MONTH_INDEX = 0;
        if(countMonth == 11) {
            yearNextPrevioius(index);
            // curentYear = (curentYear == now.getFullYear()) ? now.getFullYear() - 1 : curentYear - 1;
        }
    } else if(countMonth > 11){
        countMonth = 0
        CURENT_MONTH_INDEX = 0;
        yearNextPrevioius(index);
        // curentYear = (curentYear == now.getFullYear()) ? now.getFullYear() + 1 : curentYear + 1;
    }
    curentMonth = months[now.getMonth()+countMonth];
    countMonth = now.getMonth()
    curentWrapperMonth.textContent = curentMonth;
    yearVisible.textContent = curentYear;
};

function yearNextPrevioius(index){
    var countYear = (index == 0) ? -1 : 1;
    curentYear = (curentYear == now.getFullYear()) ? now.getFullYear() - countYear : curentYear - countYear;
}