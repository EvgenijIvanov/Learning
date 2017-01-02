'use strict';
function Horse(name){
	this.name = name
	this.fatigue = 0;
	this.continuousRunning = 10;
	this.runing = function(mile){
		if(mile < this.continuousRunning && (mile+this.fatigue) <= this.continuousRunning) {
			this.fatigue = (mile+this.fatigue == this.continuousRunning) ? 0 : mile+this.fatigue;
			return console.log(this.name + " пробежала " + (mile) + " миль! Прибежала на место!");
		}
			var counter = 0;
			var containerfatigue = this.fatigue; 
			var fatigue = mile%this.continuousRunning;
			var halts = (mile - fatigue)/this.continuousRunning;
			this.fatigue = (fatigue+containerfatigue)%this.continuousRunning;
			if((containerfatigue + fatigue) > this.continuousRunning) {
				halts++
				} else if (fatigue == 0 && this.fatigue == 0) {
					halts--
				}
					setTimeout(function run(){
						counter++;
						console.log(this.name + " пробежала " + ((counter*this.continuousRunning) - containerfatigue) + " миль! И отдыхает в тени дуба");
	 					if(counter < halts && containerfatigue+fatigue !== this.continuousRunning){
	 						setTimeout(run.bind(this), 3000)
	 					} else {
	 						setTimeout(function() {
	 							console.log(this.name + " пробежала " + (mile) + " миль! Прибежала на место!");
	 						}.bind(this), 3000)
	 					} 
					}.bind(this), 3000);
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
 