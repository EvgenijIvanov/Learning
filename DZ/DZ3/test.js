'use strict';
//Для массива 10 на 10 получить результирующий ПЛОСКИЙ 
//(одномерный) массив, состоящий из элементов, лежащих 
//на гранях двумерного массива.
function rand(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
}
var mass = new Array();
var border = new Array();
var i;
var j;
var MASS_SIZE =10;
for (i = 0; i < MASS_SIZE; i++){				//Создаем масив MASS_SIZE на MASS_SIZE
		mass.push(new Array);
			for(j = 0; j < MASS_SIZE; j++ ){
				mass[i].push(rand(10, 100));
			}
}
console.table(mass);
for (i = 0 ; i < MASS_SIZE; i++) {		//Пушим верхнюю грань масива MASS в масив BORDER
		border.push(mass[0][i]);
}
for(i = 1; i < (MASS_SIZE-1); i++){		//Пушим правую грань масива MASS в масив BORDER
		border.push(mass[i][MASS_SIZE-1]);
}
for (i = (MASS_SIZE-1); i >= 0 ;  i--) {	//Пушим нижнюю грань масива MASS в масив BORDER
		border.push(mass[MASS_SIZE-1][i]);
}
for(i = (MASS_SIZE-2); i > 0 ; i--){	//Пушим левую грань масива MASS в масив BORDER
		border.push(mass[i][0]);
}
console.log('Border = ', border);
