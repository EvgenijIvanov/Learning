'use strict';

function Horse(name){
	this.name = name
	this.fatigue = 0;
	var containerName = this.name;
	var continuousRunning = 10;
	this.runing = function(mile){
		if(mile < continuousRunning && (mile+this.fatigue) < continuousRunning) {
			this.fatigue = mile+this.fatigue;
			return console.log(containerName + " пробежала " + (mile) + " миль! Прибежала на место!");
			}
		var counter = 0;
		var containerfatigue = this.fatigue; 
		var fatigue = mile%continuousRunning;
		this.fatigue = (fatigue+containerfatigue)%continuousRunning;
		var halts = (mile - mile%continuousRunning)/continuousRunning;
		if((containerfatigue + fatigue) > continuousRunning || (this.fatigue !== 0 && fatigue == 0)) halts++
					setTimeout(function run(){
							counter++;
							console.log(containerName + " пробежала " + ((counter*continuousRunning) - containerfatigue) + " миль! И отдыхает в тени дуба");
	 						if(counter < halts && containerfatigue+fatigue !== continuousRunning){
	 							setTimeout(run, 3000)
	 						} else if(fatigue !== 0){
	 							setTimeout(function() {console.log(containerName + " пробежала " + (mile) + " миль! Прибежала на место!");}, 3000)
	 						} else {
	 							console.log(containerName + " прибежала на место!");
	 						}
					}, 3000);
	};
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