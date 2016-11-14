//1) Пройти  массив по периметру ПРОТИВ часовой стрелки.
//2) Пройти треугольник (2 строны + ГЛАВНАЯ диагональ) по периметру 
//по часовой стрелки от точки 0-0.
//3) Пройти треугольник (2 строны + ПОБОЧНАЯ диагональ) по периметру 
// ПРОТИВ часовой стрелки от точки 9-9.

//Создаем массив
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var mass = new Array()
var MASS_SIZE = 10
	for (var i = 0; i < MASS_SIZE; i++) {
		mass.push(new Array());
		for (var j = 0; j < MASS_SIZE; j++) {
			mass[i].push(rand(50, 90));
		}
	}
console.table(mass);
//1) Пройти  массив по периметру ПРОТИВ часовой стрелки.
var border = {
	top: mass[0].slice().reverse(),
	right: [],
	bottom: mass[mass.length - 1].slice(),
	left: []
};
for (var i = 1; i < mass.length - 1; i++) {
	border.left.push(mass[i][0]);
	border.right.push(mass[i][mass[i].length - 1]);
}
border.right.reverse();

var perimeter = border.left.concat(border.bottom, border.right, border.top);
console.log(perimeter);

//2) Пройти треугольник (2 строны + ГЛАВНАЯ диагональ) по периметру 
//по часовой стрелки от точки 0-0.

var border = {
	top: mass[0].slice(),
	right: [],
	mainDiagon: []
};
for (var i = 1; i < mass.length - 1; i++) {
		border.right.push(mass[i][mass[i].length - 1]);
}
for (var i = 1; i <= mass.length - 1; i++) {
		border.mainDiagon.push(mass[i][j=i]);
}
border.mainDiagon.reverse();
var firstTriangle = border.top.concat(border.right, border.mainDiagon);
console.log(firstTriangle);
//3) Пройти треугольник (2 строны + ПОБОЧНАЯ диагональ) по периметру 
// ПРОТИВ часовой стрелки от точки 9-9.
var border = {
	bottom: mass[mass.length - 1].slice().reverse(),
	right: [],
	sideDiagon: []
};
for (var i = 0; i < mass.length - 1; i++) {
	border.right.push(mass[i][mass[i].length - 1]);
}
for (var i = mass.length - 2; i > 0; i--) {
	for (var j = mass.length - 2; j > 0; j--) {
		if ((i+j) == mass.length - 1) {
			border.sideDiagon.push(mass[i][j]);
		}
	}
}
var secondTriangle = border.bottom.concat(border.sideDiagon, border.right);
console.log(secondTriangle);