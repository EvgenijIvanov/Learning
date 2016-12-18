'use strict';

function Seabatle() {
	this.messageError ="0 error!",
	this.creatingField = function(n){
		this.battleField = new Array(n);
			for (var i = 0; i < n; i++){
			this.battleField[i] = new Array(n)
					for(var j = 0; j < n; j++){
					this.battleField[i][j] = { ship: false,
														shoot: false,
														missed: false,
														kill: false,
														wound: false,
														margin: false}
					}
			}																		// shipLenght - палубность корабля от 1 до 4
	},																				// x,y - начальные координаты для строительства корабля, 
	this.requestBuildingShip = function(x,y,shipLenght,direction){   // direction - вектор направления: принимает значения '1' - вертикальный корабль, или "0" - горизонтальнный						
		// debugger;
		if (validationSize(x,y) && validationMargin(x,y) && validationshipLenght(x,y,shipLenght,direction)) {	
		 	buildingShip(x,y,direction);
		} else {
			console.log(this.messageError);
		}
	}
		function buildingShip(x,y,direction){
			// debugger;
			for(var i = (x-1); i <= (x + 1); i++ ){					// циклы для "построения" вокруг корабля "рамки" толщиной 1 квадрат
					if(i < 0 || i > this.battleField.length - 1) continue;
						for(var j = (y-1); j <= (y+1); j++){
							if(j < 0 || j > this.battleField.length - 1) continue;
									this.battleField[i][j].margin = true;
								}
				}
				this.shipLenght --;
				this.battleField[x][y].ship = true;
				if (this.shipLenght <= 0) {
					return console.log('Корабль готов!');
				} else if(direction == 1){
					this.buildingShip((x+1),y,direction);
				} else {
					this.buildingShip(x,(y+1),direction);
				}
	}
		function validationSize (x,y){
		debugger;
		if (x > this.battleField.length || y > this.battleField.length) {
			this.messageError = 'Координаты за пределами поля боя!';
			return false;
		} else {
			return true;
		}
	}
	 	function validationMargin (x,y){
		// debugger;
		if (this.battleField[x][y].margin == true) {
			this.messageError = 'Слишком близко к другому кораблю! Задайте другие координаты!';
			return false;
		} else {
			return true;
		}
	}
	 	function validationshipLenght (x,y,shipLenght,direction){
			// debugger;
		if(shipLenght >= 1 && shipLenght <= 4){
			if(direction == 1){
				if((x+shipLenght) <= this.battleField.length) {
					this.shipLenght = shipLenght;
					return true;
				} else {
					this.messageError = 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Х)';
					return false;
				}
			} else if (direction == 0){
				if((y+shipLenght) <= this.battleField.length){
					this.shipLenght = shipLenght;
					return true;
				}else {
					this.messageError = 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Y)';
					return false;
						}
			} 
		} else {
			this.messageError = 'Задайте другую палубность! Не более 4 палуб!';
			return false;
		}
	}
}	
var seabatle = new Seabatle();
seabatle.creatingField(10);
console.table(seabatle.battleField);
seabatle.requestBuildingShip(3,3,4,1);


