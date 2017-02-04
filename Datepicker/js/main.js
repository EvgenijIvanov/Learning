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
(function () {
    console.log('now: ', now);
    console.log('curentYear', curentYear);
    console.log('countMonth', countMonth);
    console.log('curentMonth', curentMonth);
    console.dir(now);
    console.dir(curentYear);
    console.dir(countMonth);
    console.dir(curentMonth);
})();
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
    (index == 0) ? countMonth++ : countMonth--;
    if(countMonth >= 0 && countMonth <= 11){
        countMonth = countMonth;
        console.log('countMonth', countMonth);
    } else if(countMonth < 0){
        countMonth = 11;
        curentYear--;
    } else if(countMonth > 11){
        countMonth = 0;
        curentYear++;
    }
    curentMonth = months[countMonth];
    curentWrapperMonth.textContent = curentMonth;
    yearVisible.textContent = curentYear;
};
var wrapperDays = document.querySelector(".wrapperDays")
var daysTable = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');


function getDays () {
    var daysMonth = new Array(7);
    for (var i = 0; i < 7; i++){
        var tr = document.createElement('tr');
        daysMonth[i] = new Array(7);
        for(var j = 0; j < 7; j++){
            var th = document.createElement('th');
            var td = document.createElement('td');
            if(i == 0)tr.appendChild(th);
            if(i > 0) tr.appendChild(td);
        };
        tbody.appendChild(tr);
    };
    daysTable.appendChild(tbody);
    wrapperDays.appendChild(daysTable);
};
getDays();

