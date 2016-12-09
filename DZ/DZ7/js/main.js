'use strict';

var mileageHerd = 0;

function createHorse(name){
	this.name = name;
	var mileage = 0;
	this.runing = function(mile){
		mileage = mileage+mile;
		mileageHerd = mileageHerd+mileage;
	};
	this.toRun = function(){
		console.log(mileage);
	};
	this.allRun = function(){
		console.log(mileageHerd);
	}
}

var firsthorse = new createHorse('Пушинка');
var secondhorse = new createHorse('Пуговка');
var thirdhorse = new createHorse('Хромая');
var fourthhorse = new createHorse('Горбунок');
var fifthhorse = new createHorse('Т-34');

console.log(mileageHerd);