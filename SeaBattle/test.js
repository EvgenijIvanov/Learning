'use strict';

var seabatle = {
	battleField: null,
	shipLenght: null,
	messageError:"0 error!",
	creatingField: function(n){
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
	requestBuildingShip : function(x,y,shipLenght,direction){   // direction - вектор направления: принимает значения '1' - вертикальный корабль, или "0" - горизонтальнный						
		// debugger;
		if (this.validationSize(x,y) && this.validationMargin(x,y) && this.validationshipLenght(x,y,shipLenght,direction)) {	
		 	this.buildingShip(x,y,direction);
		} else {
			console.log(this.messageError);
		}
	},
	buildingShip: function(x,y,direction){
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
	},
	validationSize: function(x,y){
		// debugger;
		if (x > this.battleField.length || y > this.battleField.length) {
			this.messageError = 'Координаты за пределами поля боя!';
			return false;
		} else {
			return true;
		}
	},
	validationMargin: function(x,y){
		// debugger;
		if (this.battleField[x][y].margin == true) {
			this.messageError = 'Слишком близко к другому кораблю! Задайте другие координаты!';
			return false;
		} else {
			return true;
		}
	},
	validationshipLenght: function(x,y,shipLenght,direction){
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
seabatle.creatingField(10);
seabatle.requestBuildingShip(3,3,4,1);
console.table(seabatle.battleField);

