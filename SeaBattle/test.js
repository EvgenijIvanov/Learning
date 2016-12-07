'use strict';

var seabatle = {
	battleField: null,
	creatingField: function(n){
		this.battleField = new Array(n);
			for (var i = 0; i < n; i++){
			this.battleField[i] = new Array(n)
					for(var j = 0; j < n; j++){
					this.battleField[i][j] = {ship: false,
																		shoot: false,
																		missed: false,
																		kill: false,
																		wound: false,
																		margin: false}
					}
			}
	},
	putShip: function(x,y){
		(this.validationSize(x,y)) ? this.battleField[x][y].ship = true : console.log('Неверные координаты!');
		// for(var i = (x-1); i <= (x +1); i++ ){
		// 	for(var j = (j-1); j <= (x+1); j++){
		// 		this.battleField[i][j].margin = true;
		// 	}
		// }
	},
	validationSize: function(x,y){
		return (x > this.battleField.length -1 || y > this.battleField.length - 1) ? false : true //&& alert('Наше поле '+ this.battleField.length + 'на' + this.battleField.length + '! Введите координаты в нужных пределах');
	}
	validationShip: function(x,y){
		return (this.battleField[x][y].ship == true) ? false: true
	}
}	
seabatle.creatingField(3);
seabatle.putShip(4,1);
console.table(seabatle.battleField);

// var a = new Array(5);
// for (var i = 0; i < 5; i++){
// 		a[i] = new Array(5)
// 		for(var j = 0; j < 5; j++){
// 			a[i][j] = {ok: true}
// 		}
// }

// console.table(a);