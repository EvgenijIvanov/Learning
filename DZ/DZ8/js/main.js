'use strict';

function Horse(name){
	this.name = name
	this.fatigue = 0;
	var containerName = this.name;
	var continuousRunning = 10;
	this.runing = function(mile){
		// debugger;
		var counter = 0;
		var oldfatigue = this.fatigue; 
		var fatigue = mile%continuousRunning;
		var halts = (mile - mile%continuousRunning)/continuousRunning;
					setTimeout(function run(){
							counter++;
							console.log(containerName + " пробежала " + ((counter*continuousRunning) - oldfatigue) + " миль! И отдыхает в тени дуба");
	 						if(counter < halts && oldfatigue+fatigue !== continuousRunning){
	 							setTimeout(run, 3000)
	 						} else if(fatigue !== 0){
	 							console.log(containerName + " пробежала последнии " + (fatigue+oldfatigue) + " миль! И закусывает сеном");
	 							fatigue = fatigue+oldfatigue;
	 						} else {
	 							console.log(containerName + " прибежала на место!");
	 						}
					}, 3000);
			this.fatigue = fatigue;		
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