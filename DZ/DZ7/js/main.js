'use strict';

function CreateHorse(name){
	this.name = name;
	var mileage = 0;
	this.runing = function(mile){
		// debugger;
		mileage = mileage+mile;
		this.constructor.prototype.mileageHerd = this.constructor.prototype.mileageHerd+mileage;
	};
	this.toRun = function(){
		console.log(mileage);
	};
	this.allRun = function(){
		console.log(this.constructor.prototype.mileageHerd);
	}
}
CreateHorse.prototype.mileageHerd = 0;

var firsthorse = new CreateHorse('Пушинка');
var secondhorse = new CreateHorse('Пуговка');
var thirdhorse = new CreateHorse('Хромая');
var fourthhorse = new CreateHorse('Горбунок');
var fifthhorse = new CreateHorse('Т-34');
firsthorse.runing(56);
secondhorse.runing(45);
thirdhorse.runing(77);
fifthhorse.runing(120);

// console.log(mileageHerd);