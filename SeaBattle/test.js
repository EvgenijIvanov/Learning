'use strict';

function Seabatle() {
	this.creatingField = function(n){
		this.battleField = new Array(n);
		for (var i = 0; i < n; i++){
			this.battleField[i] = new Array(n)
				for(var j = 0; j < n; j++){
	    			this.battleField[i][j] = { 		ship: false,
													shoot: false,
													missed: false,
													kill: false,
													wound: false,
													margin: false,
													deck: 0};
					};
			};
	};
	var self = this;
	var random = true;
	var messageError = "Error!!! Смотри в браузер капитан!"; //temp
	var shipLog = document.querySelectorAll("#shipsLog p")[1];
	var requestBuildingShip = function(){
		var x = dataBuildShip.x;
		var y = dataBuildShip.y;
		var shipLenght = dataBuildShip.shipLenght;
		var direction = dataBuildShip.direction;
		if (validationSize(x,y) && validationshipLenght(x,y,shipLenght,direction) && validationMargin(x,y,shipLenght,direction) 
			&& validationFlotship()) {	
		 	buildingShip(x,y,shipLenght,direction);
		 	if (random && (flot.ship1 + flot.ship2 + flot.ship3 + flot.ship4) != 0) {
		 		testing();
		 	};
		} else if (random) {
			testing();
		} else{
			console.log(messageError);			
		}
	};
	var shootToShip = function(x,y){
			if (validationSize(x,y) && validationFieldShoot(x,y)){
								console.log('Бабах мазафака!')
					console.table(this.battleField);
			} else{
				console.log(messageError);
			}
			}.bind(this);
		var batleFieldUser = document.querySelector("#batleFieldUser");
			batleFieldUser.addEventListener("click", activedField);
		function activedField (e){
			if(e.target.nodeName == "TD"){
				var random = false;
				if(!dataBuildShip.shipLenght) return shipLog.textContent = errorTable.eroor03;	
    			dataBuildShip.x = e.target.parentNode.rowIndex;
				dataBuildShip.y = e.target.cellIndex;
				requestBuildingShip();
    			};
			};
		var dataBuildShip = {
				x: null,
				y: null,
				shipLenght: null,
				direction: 1
			};
		var flot = {
				ship4: 1,
				ship3: 2,
				ship2: 3,
				ship1: 4
			};
		var switchDeck = document.querySelector(".paluba");
			switchDeck.addEventListener("click", activedShipPort) 
			function activedShipPort(e){
				if(e.target.selectedIndex != 0){
				dataBuildShip.shipLenght = e.target.selectedIndex;
				}
			};
		var direction = document.querySelector(".direction");
			direction.addEventListener("click", activedDirection) 
			function activedDirection(e){
				if(e.target.nodeName != "INPUT") return;
				if(e.target.checked){
					dataBuildShip.direction = 0;
					e.target.nextElementSibling.innerText = "Горизонтальный";
				} else if(!e.target.checked){
					dataBuildShip.direction = 1;
					e.target.nextElementSibling.innerText = "Вертикальный";
				};
			};
		var clearAll = document.querySelector(".clear-all");
			clearAll.addEventListener("click", activedClearAll)
			function activedClearAll(e){
				// debugger;
				if(e.target.nodeName != "BUTTON") return;
				for (var i = 0; i < 10; i++) {
					for (var j = 0; j < 10; j++) {
						self.battleField[i][j].ship = false;
						self.battleField[i][j].margin = false;
						self.battleField[i][j].desk = false;
						flot.ship4 = 1;
						flot.ship3 = 2;
						flot.ship2 = 3;
						flot.ship1 = 4;
						document.querySelector("#batleFieldUser table tbody").children[i].children[j].style.background = "";
					};
				};
			};
		var errorTable = {
				eroor01: 'Координаты за пределами поля боя!',
				eroor02: 'Слишком близко к другому Вашему кораблю! Задайте другие координаты!',
				eroor03: 'Выберите палубность корабля!',
				eroor04: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Х)',
				eroor05: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Y)',
				eroor06: 'Задайте другую палубность! Не более 4 палуб!',
				eroor07: 'Вы уже стреляли сюда!',
				eroor08: 'Вы установили максимум кораблей данной палубности!',
				  msg01: 'Корабль готов!', 
			};
		var test = document.querySelector(".test");
			test.addEventListener("click", function(){testing();})
		var testing = function (){
				dataBuildShip.x = numbersGeneration(0, 9);
				dataBuildShip.y = numbersGeneration(0, 9);
				dataBuildShip.shipLenght = numbersGeneration(1, 4);
				dataBuildShip.direction	= numbersGeneration(0, 1);
				requestBuildingShip();
			};
		var numbersGeneration = function (min, max) {
    			var rand = min + Math.random() * (max + 1 - min);
    			rand = Math.floor(rand);
    			return rand;
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
				document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "green";
				this.battleField[x][y].deck = shipLenght;
				if (this.shipLenght <= 0) {
							 // console.table(this.battleField);
					return shipLog.textContent = errorTable.msg01;
				} else if(direction == 1){
								buildingShip((x+1),y,shipLenght,direction);
					} else {
								buildingShip(x,(y+1),shipLenght,direction);
					}
	}.bind(this);
		var validationSize = function  (x,y){
		// debugger;
		if (x > this.battleField.length || y > this.battleField.length) {
			shipLog.textContent = errorTable.eroor01;
			return false;
		} else {
			return true;
		}
	}.bind(this);
	 	var validationMargin = function  (x,y,shipLenght,direction){
		 	// debugger;
			if(direction == 1){
				if (this.battleField[x][y].margin == true || this.battleField[x+(shipLenght-1)][y].margin == true) {
				shipLog.textContent = errorTable.eroor02;
				return false;
			} else {
				return true;
			}
			}else if (direction == 0){
				if (this.battleField[x][y].margin == true || this.battleField[x][y+(shipLenght-1)].margin == true) {
				shipLog.textContent = errorTable.eroor02;
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
					shipLog.textContent = errorTable.eroor04;
					return false;
				}
			} else if (direction == 0){
				if((y+shipLenght) <= this.battleField.length){
					this.shipLenght = shipLenght;
					return true;
				}else {
					shipLog.textContent = errorTable.eroor05;
					return false;
						}
			} 
		} else {
			shipLog.textContent = errorTable.eroor06;
			return false;
		}
	}.bind(this);
	var validationFieldShoot = function(x,y){
			if (this.battleField[x][y].shoot !== true){
				return true;
			} else{
				shipLog.textContent = errorTable.eroor07;
				return false;
			}
	}.bind(this);
	var validationFlotship = function(){
		switch (dataBuildShip.shipLenght){
					case 1: flot.ship1--;
					if(flot.ship1 < 0){
						shipLog.textContent = errorTable.eroor08;
						flot.ship1 = 0;
						return false
						} else return true;
					case 2: flot.ship2--;
					if(flot.ship2 < 0) {
						shipLog.textContent = errorTable.eroor08;
						flot.ship2 = 0;
						return false
						} else return true;
					case 3: flot.ship3--; 
					if(flot.ship3 < 0){
						shipLog.textContent = errorTable.eroor08;
						flot.ship3 = 0;
						return false
						} else return true;
					case 4: flot.ship4--; 
					if(flot.ship4 < 0){
						shipLog.textContent = errorTable.eroor08;
						flot.ship4 = 0;
						return false
						} else return true;
				}
	}.bind(this)
}	
var seabatle = new Seabatle();
seabatle.creatingField(10);
// seabatle.requestBuildingShip(3,3,4,1);
