// ДЗ
// 1. создать массив на 30 элементов, заполнить случайными числами,
// причем четные элементы заполнить числами больше нуля
// а нечетные - меньше нуля. (подсказка - % это остаток от деления)
// [-33, 55, -9, 48, -2, 1]
// 2. Этот массив пройти циклом и вывести каждый пятый элемент
'use strict';
function rand (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var mass = new Array();
var i;
for(i=0; i<30; i++){
    if (i%2 > 0){
        mass.push(rand(-50,-90))
    } else {
        mass.push(rand(50,90))
    }
}
console.log(mass);
for(i=0; i<mass.length; i=i+5){
    console.log(mass[i]);
}
alert ('Вариант второй');
var mass3 = new Array();
var j;
for(i=0; i<30; i=i+2){
    mass3[i] = rand(100,10);
    for(j=1; j<30; j=j+2){
        mass3[j] = rand(-100,-10)
    }
}
console.log(mass3);
for(i=0; i<mass3.length; i=i+5){
    console.log(mass3[i]);
}