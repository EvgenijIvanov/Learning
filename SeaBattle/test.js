'use strict';

function Seabatle() {
	this.messageError ="Error!!! Смотри в браузер капитан!", //temp
	this.creatingField = function(n){
		var visibleField = document.querySelector("#batleFieldUser table tbody");
		this.battleField = new Array(n);
			for (var i = 0; i < n; i++){
			this.battleField[i] = new Array(n)
					for(var j = 0; j < n; j++){
					this.battleField[i][j] = { 			ship: false,
														shoot: false,
														missed: false,
														kill: false,
														wound: false,
														margin: false,
														deck: 0};
						visibleField.children[i].children[j].setAttribute("class","field");
					};
			};
																			      // shipLenght - палубность корабля от 1 до 4
	},
	this.tempFunction = function(){
		var field = document.querySelectorAll(".field");
			console.log(field);
			// field.addEventListener("click", activedField);
		function activedField (e){
    			console.log('test!');
			};
		// obj.style.border="1px solid red";
		// this.dataBuildShip.x = obj.parentNode.rowIndex;
		// this.dataBuildShip.y = obj.cellIndex;
		// console.log(this.dataBuildShip);
		// console.dir(obj);
	},
	this.dataBuildShip = {
		x: null,
		y: null,
		shipLenght: null,
		direction: null
	},																				     // x,y - начальные координаты для строительства корабля, 
	this.requestBuildingShip = function(x,y,shipLenght,direction){   // direction - вектор направления: принимает значения '1' - вертикальный корабль, или "0" - горизонтальнный						
		// debugger;
		
		if (validationSize(x,y) && validationshipLenght(x,y,shipLenght,direction) && validationMargin(x,y,shipLenght,direction)) {	
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
			};
		var switchDeck = document.querySelector(".switchDeck");
			switchDeck.addEventListener("click", function (e) {
    		console.log(e.type);
			});
		var errorTable = {
				eroor01: 'Координаты за пределами поля боя!',
				eroor02: 'Слишком близко к другому Вашему кораблю! Задайте другие координаты!',
				eroor04: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Х)',
				eroor05: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Y)',
				eroor06: 'Задайте другую палубность! Не более 4 палуб!',
				eroor07: 'Вы уже стреляли сюда!',
				  msg01: 'Корабль готов!', 
			};
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
				document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "red";
				this.battleField[x][y].deck = shipLenght;
				if (this.shipLenght <= 0) {
							 // console.table(this.battleField);
					return document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.msg01;
				} else if(direction == 1){
								buildingShip((x+1),y,shipLenght,direction);
					} else {
								buildingShip(x,(y+1),shipLenght,direction);
					}
	}.bind(this);
		var validationSize = function  (x,y){
		// debugger;
		if (x > this.battleField.length || y > this.battleField.length) {
			document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor01;
			return false;
		} else {
			return true;
		}
	}.bind(this);
	 	var validationMargin = function  (x,y,shipLenght,direction){
		 	// debugger;
			if(direction == 1){
				if (this.battleField[x][y].margin == true || this.battleField[x+(shipLenght-1)][y].margin == true) {
				document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor02;
				return false;
			} else {
				return true;
			}
			}else if (direction == 0){
				if (this.battleField[x][y].margin == true || this.battleField[x][y+(shipLenght-1)].margin == true) {
				document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor02;
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
					document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor04;
					return false;
				}
			} else if (direction == 0){
				if((y+shipLenght) <= this.battleField.length){
					this.shipLenght = shipLenght;
					return true;
				}else {
					document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor05;
					return false;
						}
			} 
		} else {
			document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor06;
			return false;
		}
	}.bind(this);
	var validationFieldShoot = function(x,y){
			if (this.battleField[x][y].shoot !== true){
				return true;
			} else{
				document.querySelectorAll("#shipsLog p")[1].textContent = errorTable.eroor07;
				return false;
			}
	}.bind(this);
	var sonar = function(){

	}.bind(this)
}	
//var seabatle = new Seabatle();
//seabatle.creatingField(10);
// seabatle.requestBuildingShip(3,3,4,1);
