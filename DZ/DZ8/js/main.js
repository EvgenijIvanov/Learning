'use strict';

function Horse(name){
	this.name = name;
	const continuousRunning = 10;
	var mileage = 0;
	this.fatigue = 0;
	this.runing = function(mile){
		this.fatigue = mile%continuousRunning;
		var temp = (mile - mile%continuousRunning)/continuousRunning;
					setTimeout(function(mile, temp){
						var z = mile - 10;
						temp--;
						console.log("Лошадка пробежала " + (z*10) + " миль! Она устала!")
					}.bind(this), 3000*i);
	};
	this.toRun = function(){
		console.log(mileage);
	};
	this.allRun = function(){
		console.log(this.constructor.prototype.mileageHerd);
	}
}


var firsthorse = new Horse('Пушинка');
var secondhorse = new Horse('Пуговка');
var thirdhorse = new Horse('Хромая');
var fourthhorse = new Horse('Овца');
var fifthhorse = new Horse('Т-34');

// firsthorse.runing(35);
// secondhorse.runing(22);
// thirdhorse.runing(110);
// fourthhorse.runing(88);