'use strict';

function Seabatle() {
	var batleFieldUser = document.querySelector('#batleFieldUser');
	var batleFieldComp = document.querySelector('#batleFieldComp');
	this.creatingField = function(n){
		var usertable = document.createElement('table');
		var tbody = document.createElement('tbody');
		this.battleField = new Array(n);
		for (var i = 0; i < n; i++){
			var tr = document.createElement('tr');
			this.battleField[i] = new Array(n)
				for(var j = 0; j < n; j++){
					var td = document.createElement('td');
					tr.appendChild(td);
	    			this.battleField[i][j] = { 		
						user: {
							ship: false,
							shoot: false,
							missed: false,
							kill: false,
							wound: false,
							margin: false,
							deck: 0
	    					},
	    				enemy: {
	    					ship: false,
							shoot: false,
							missed: false,
							kill: false,
							wound: false,
							margin: false,
							deck: 0
						}
					};
				};
			tbody.appendChild(tr);
		};
		usertable.appendChild(tbody);
		batleFieldUser.appendChild(usertable);
		var compTable = usertable.cloneNode(true)
		batleFieldComp.appendChild(compTable);
	};
	var self = this;
	var random = false;
	var target = "user";
	var countLenght = 0;
	var curentTime = Date();
	var messageError = "Error!!! Смотри в браузер капитан!"; //temp

	var shipLog = document.querySelector("#shipsLog");
	var loged = function(messagetext){
		var shipLogNode = document.createElement("p");
		var shiplogTime = document.createElement("span");
		var shipLogText = document.createTextNode(messagetext);
		shipLogNode.appendChild(shipLogText);
		shipLog.appendChild(shipLogNode);
	};
	var requestBuildingShip = function(){
		var x = dataBuildShip.x;
		var y = dataBuildShip.y;
		var shipLenght = dataBuildShip.shipLenght;
		var direction = dataBuildShip.direction;
		if (validationshipLenght(x,y,shipLenght,direction) && validationMargin(x,y,shipLenght,direction) 
			&& validationPortship()) {	
		 	buildingShip(x,y,shipLenght,direction);
		 	if (random == true && (port.ship1 + port.ship2 + port.ship3 + port.ship4) != 0) {
		 		automating();
		 	};
		} else if (random) {
			automating();
		} else{
			console.log(messageError);			
		}
	};
		var batleFieldUser = document.querySelector("#batleFieldUser");
			batleFieldUser.addEventListener("click", activedField);
		function activedField (e){
			if(e.target.nodeName == "TD"){
				if(!dataBuildShip.shipLenght) return loged("eroor03");	
    			target = "user";
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
		var port = {
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
			clearAll.addEventListener("click", function(e){
				if(e.target.nodeName != "BUTTON") return;
				activedClearAll();
			})
		var activedClearAll = function (){
				for (var i = 0; i < 10; i++) {
					for (var j = 0; j < 10; j++) {
						self.battleField[i][j][target].ship = false;
						self.battleField[i][j][target].margin = false;
						self.battleField[i][j][target].deck = false;
						port.ship4 = 1;
						port.ship3 = 2;
						port.ship2 = 3;
						port.ship1 = 4;
						if(target == "user") document.querySelector("#batleFieldUser table tbody").children[i].children[j].style.background = "";
						if(target == "enemy") document.querySelector("#batleFieldComp table tbody").children[i].children[j].style.background = "";
					};
				};
			};
		var errorTable = {
				eroor02: 'Слишком близко к другому Вашему кораблю! Выберите другое расположение!',
				eroor03: 'Выберите палубность корабля!',
				eroor04: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Х)',
				eroor05: 'Ваш корабль вылазит за край мира! Он упадет! Задайте другие координаты! (ось Y)',
				eroor07: 'Вы уже стреляли сюда!',
				eroor08: 'Вы установили максимум кораблей данной палубности!',
				  msg01: 'Корабль готов!', 
			};
		var manual = document.querySelector(".manual");
		var manualData = document.querySelector(".column");
			manualData.style.display = "none";
			manual.addEventListener("click", function(){
			random = false;
			activedClearAll();
			manualData.style.display = "block";	
			});
		var automatic = document.querySelector(".automatic");
			automatic.addEventListener("click", function(){
				target = "user";
				manualData.style.display = "none";
				activedClearAll();
				automating();
			})
		var automating = function (){
			random = true;
			dataBuildShip.x = numbersGeneration(0, 9);
			dataBuildShip.y = numbersGeneration(0, 9);
			dataBuildShip.shipLenght = numbersGeneration(1, 4);
			dataBuildShip.direction	= numbersGeneration(0, 1);
			requestBuildingShip();
			};
		var enemyBuild = function(){
			target = "enemy";
			activedClearAll();
			automating();
			return true;
		};
		var startBattle = document.querySelector(".startbattle");
			startBattle.addEventListener("click", function(){
				enemyBuild();
				batleFieldComp.addEventListener("click", shootout);
			});
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
					this.battleField[i][j][target].margin = true;
				}
			}
			countLenght --;
			this.battleField[x][y][target].ship = true;
			if(target == "user") document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "green";
			// if(master == "enemy") document.querySelector("#batleFieldComp table tbody").children[x].children[y].style.background = "blue";
			this.battleField[x][y][target].deck = shipLenght;
			if (countLenght <= 0) {
				loged(errorTable.msg01);
				return;
			} else if(direction == 1){
				buildingShip((x+1),y,shipLenght,direction);
			} else {
				buildingShip(x,(y+1),shipLenght,direction);
			}
		}.bind(this);
	 	var validationMargin = function  (x,y,shipLenght,direction){
		 	// debugger;
			if(direction == 1){
				if (this.battleField[x][y][target].margin == true || this.battleField[x+(shipLenght-1)][y][target].margin == true) {
				loged(errorTable.eroor02);
				return false;
				} else {
				return true;
			}
			}else if (direction == 0){
				if (this.battleField[x][y][target].margin == true || this.battleField[x][y+(shipLenght-1)][target].margin == true) {
				loged(errorTable.eroor02);
				return false;
			} else {
				return true;
			}
		}
	}.bind(this);
	 	var validationshipLenght = function (x,y,shipLenght,direction){
			// debugger;
			if(direction == 1){
				if((x+shipLenght) <= this.battleField.length) {
					countLenght = shipLenght;
					return true;
				} else {
					loged(errorTable.eroor04);
					return false;
				}
			} else if (direction == 0){
				if((y+shipLenght) <= this.battleField.length){
					countLenght = shipLenght;
					return true;
				}else {
					loged(errorTable.eroor05);
					return false;
						}
			} 
	}.bind(this);
	var validationFieldShoot = function(x,y){
			if (this.battleField[x][y][target].shoot == false){
				return true;
			} else{
				loged(errorTable.eroor07);
				return false;
			}
	}.bind(this);
	var validationPortship = function(){
		switch (dataBuildShip.shipLenght){
					case 1: port.ship1--;
					if(port.ship1 < 0){
						loged(errorTable.eroor08);
						port.ship1 = 0;
						return false
						} else return true;
					case 2: port.ship2--;
					if(port.ship2 < 0) {
						loged(errorTable.eroor08);
						port.ship2 = 0;
						return false
						} else return true;
					case 3: port.ship3--; 
					if(port.ship3 < 0){
						loged(errorTable.eroor08);
						port.ship3 = 0;
						return false
						} else return true;
					case 4: port.ship4--; 
					if(port.ship4 < 0){
						loged(errorTable.eroor08);
						port.ship4 = 0;
						return false
						} else return true;
				}
	};
	var shootout = function(e){
		if(e.target.nodeName != "TD") return false;
			var x = e.target.parentNode.rowIndex;
			var y = e.target.cellIndex;
			target = "enemy";
			if (validationFieldShoot(x,y)) killingShip(x,y);
			return;
	};
	var killingShip = function(x,y){
		// debugger;
		this.battleField[x][y][target].shoot = true;
		if (this.battleField[x][y][target].ship == true){
			this.battleField[x][y][target].ship = false;
			this.battleField[x][y][target].kill = true;
			if(this.battleField[x][y][target].deck == 1){
					if(target == "enemy"){
						validationSonar();
						document.querySelector("#batleFieldComp table tbody").children[x].children[y].style.background = "red";}
					if(target == "user"){
						if(shipWounded.woundedCount != 0) document.querySelector("#batleFieldUser table tbody").children[shipWounded.lastX].children[shipWounded.lastY].style.background = "red";
						document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "red";
						shipWounded.woundedCount = 0;
						shipWounded.deck = undefined;
						if(validationSonar())automatingShot();
					}

			} else {
				this.battleField[x][y][target].wound = true;
					// if(validationSonar() != true) return;
					if(target == "enemy") document.querySelector("#batleFieldComp table tbody").children[x].children[y].style.background = "yellow";
					if(target == "user"){
						if(shipWounded.woundedCount != 0) document.querySelector("#batleFieldUser table tbody").children[shipWounded.lastX].children[shipWounded.lastY].style.background = "red"; 
						document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "yellow";
						shipWounded.woundedCount = 1;	
						shipWounded.deck = this.battleField[x][y][target].deck - 1;
						shipWounded.lastX = x;
						shipWounded.lastY = y;
						coordinatesRebound();
					}
				}
			} else {
				this.battleField[x][y][target].missed = true;
				this.battleField[x][y][target].deck = 0;
				if(target == "enemy"){
						document.querySelector("#batleFieldComp table tbody").children[x].children[y].style.background = "grey";
					if(shipWounded.woundedCount > 0) {
						console.log("Юзверь промахнулся!");
						coordinatesRebound();
					}else{
						console.log("Юзверь промахнулся!");
						automatingShot();
					}
				} else if(target == "user") {
					document.querySelector("#batleFieldUser table tbody").children[x].children[y].style.background = "grey";
					console.log("Комп промахнулся!");
				}
			}	
	}.bind(this); 
	var automatingShot = function(){
		// debugger;
		target = "user";
		var x = numbersGeneration(0, 9);
		var y = numbersGeneration(0, 9);
		shipWounded.firstX =x;
		shipWounded.firstY =y;
		if (validationFieldShoot(x,y) && validationShotMargin (x,y)) {
			killingShip(x,y);
			return -1;
		} else {
			automatingShot();
		}
		return;
	};
	var validationShotMargin = function(x,y){
		for(var i = (x-1); i <= (x + 1); i++ ){					// циклы для "построения" вокруг корабля "рамки" толщиной 1 квадрат
			if(i < 0 || i > this.battleField.length - 1) continue;
			for(var j = (y-1); j <= (y+1); j++){
				if(j < 0 || j > this.battleField.length - 1) continue;
				if(this.battleField[i][j][target].kill == true){
					return false;
				} else return true;
			}
		}	
	}.bind(this);
	var shipWounded = {
		firstX: undefined,
		firstY: undefined,
		lastX: undefined,
		lastY: undefined,
		deck: undefined,
		woundedCount: 0,
		shootX: undefined,
		shootY: undefined
	}
	var coordinatesRebound = function(){
		// debugger;
		target = "user";
		var directionRebound = numbersGeneration(0,1);
		if(directionRebound == 1) {
			shipWounded.shootX = numbersGeneration(shipWounded.lastX-1, shipWounded.lastX+1)
			shipWounded.shootY = shipWounded.lastY;
		} else {
			shipWounded.shootY = numbersGeneration(shipWounded.lastY-1, shipWounded.lastY+1)
			shipWounded.shootX = shipWounded.lastX;
		};
		validationRebound();
		return -1;
	}
	var validationRebound = function(){
		// debugger;
		if(validationFieldRebound(shipWounded.shootX, shipWounded.shootY) && validationFieldShoot(shipWounded.shootX, shipWounded.shootY)){
			this.battleField[shipWounded.shootX][shipWounded.shootY][target].deck = shipWounded.deck;
			killingShip(shipWounded.shootX,shipWounded.shootY);
			return -1;
		} else if (totalDestruction()){
			this.battleField[shipWounded.shootX][shipWounded.shootY][target].deck = shipWounded.deck;
			killingShip(shipWounded.shootX,shipWounded.shootY);
			return -1;
		} else {
			coordinatesRebound();
		}
	}.bind(this);
	var validationFieldRebound = function(x,y){
		// debugger;
		if(x >= 0 && y >= 0 && x <= this.battleField.length-1 && y <= this.battleField.length-1 ){
			return true;
		} else {
			return false
		};
	}.bind(this);
	var totalDestruction = function(){
		// debugger;
		var deathReturn = 0;
		var doubleKill = 0;
		for(var i = (shipWounded.firstX-1); i <= (shipWounded.firstX + 1); i++ ){
			if(i < 0 || i > this.battleField.length - 1) continue;
			for(var j = (shipWounded.firstY-1); j <= (shipWounded.firstY+1); j++){
				if(j < 0 || j > this.battleField.length - 1) continue;
				if(i == shipWounded.firstX && j == shipWounded.firstY) continue;
				if(this.battleField[i][j][target].kill === true){
					deathReturn++
				}
				if(this.battleField[i][j][target].ship === true){
					shipWounded.shootX = i;
					shipWounded.shootY = j;
					doubleKill++;
				}
			}
		}
		if(deathReturn == 1 && doubleKill == 1){
			return true;
		} else {
			return false;
		}
	}.bind(this);
	var validationSonar = function(){
		var countAllShip = 0;
			for (var i = 0; i <= this.battleField.length - 1; i++) {
				for (var j = 0; j <= this.battleField.length - 1; j++) {
					if (this.battleField[i][j][target].ship == true){
						countAllShip++
						return true;
					}
				}
			}
		if(countAllShip <= 0 && target == "user"){
			console.log("Юзверь проиграл!");
			activedClearAll();
			return false;
		} else if(countAllShip <= 0 && target == "enemy"){
			console.log("Comp проиграл!");
			activedClearAll();
			return false;
		}
	}.bind(this);
}
var seabatle = new Seabatle();
seabatle.creatingField(10);
