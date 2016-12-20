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
														margin: false,
														deck: 0}
					}
			}																		      // shipLenght - палубность корабля от 1 до 4
	},																				     // x,y - начальные координаты для строительства корабля, 
	this.requestBuildingShip = function(x,y,shipLenght,direction){   // direction - вектор направления: принимает значения '1' - вертикальный корабль, или "0" - горизонтальнный						
		// debugger;
		if (validationSize(x,y) && validationMargin(x,y,shipLenght,direction) && validationshipLenght(x,y,shipLenght,direction)) {	
		 	buildingShip(x,y,shipLenght,direction);
		} else {
			console.log(this.messageError);
		}
	},
	this.shootToShip = function(x,y){
			if (validationSize(x,y) && validationFieldShoot(x,y)){
					this.battleField[x][y].shoot = true;
					console.log('Бабах мазафака!')
					console.table(this.battleField);
			} else{
				console.log(this.messageError);
			}
	}
		var buildingShip = function (x,y,shipLenght,direction){
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
				this.battleField[x][y].deck = shipLenght;
				if (this.shipLenght <= 0) {
							 console.table(this.battleField);
					return console.log('Корабль готов!');
				} else if(direction == 1){
								buildingShip((x+1),y,shipLenght,direction);
					} else {
								buildingShip(x,(y+1),shipLenght,direction);
					}
	}.bind(this);
		var validationSize = function  (x,y){
		// debugger;
		if (x > this.battleField.length || y > this.battleField.length) {
			this.messageError = 'Координаты за пределами поля боя!';
			return false;
		} else {
			return true;
		}
	}.bind(this);
	 	var validationMargin = function  (x,y,shipLenght,direction){
		 // debugger;
			if(direction == 1){
				if (this.battleField[x][y].margin == true || this.battleField[x+shipLenght-1][y].margin == true) {
				this.messageError = 'Слишком близко к другому Вашему кораблю! Задайте другие координаты!';
				return false;
			} else {
				return true;
			}
			}else{
				if (this.battleField[x][y].margin == true || this.battleField[x][y+shipLenght-1].margin == true) {
				this.messageError = 'Слишком близко к другому Вашему кораблю! Задайте другие координаты!';
				return false;
			} else {
				return true;
			}
		}
	}.bind(this);
	 	var validationshipLenght = function (x,y,shipLenght,direction){
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
	}.bind(this);
	var validationFieldShoot = function(x,y){
			if (this.battleField[x][y].shoot !== true){
				return true;
			} else{
				this.messageError = 'Вы уже стреляли сюда!';
				return false;
			}
	}.bind(this);
	var sonar = function(){

	}.bind(this)
}	
var seabatle = new Seabatle();
seabatle.creatingField(10);
// console.table(seabatle.battleField);
seabatle.requestBuildingShip(3,3,4,1);
