'use strict';

var seabatle = {
	battleField: null,
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
			}
	},
	putShip: function(x,y,n){
		(this.validationSize(x,y) && this.validationMargin(x,y)) ? this.putMargin(x,y,n) : console.log('Неверные данные!');
	},
	putMargin: function(x,y,n){
		debugger;
		if (n <= 0) return (return n);
			for(var i = (x-1); i <= (x + 1); i++ ){
					if(i < 0 || i > this.battleField.length - 1) continue;
						for(var j = (y-1); j <= (y+1); j++){
							if(j < 0 || j > this.battleField.length - 1) continue;
									this.battleField[i][j].margin = true;
									this.battleField[x][y].ship = true;
								}
						seabatle.putMargin((x+1),y,(n - 1))
				}
	},
	validationSize: function(x,y){
		return (x > this.battleField.length -1 || y > this.battleField.length - 1) ? false : true //&& alert('Наше поле '+ this.battleField.length + 'на' + this.battleField.length + '! Введите координаты в нужных пределах');
	},
	validationMargin: function(x,y){
		return (this.battleField[x][y].margin == true) ? false: true
	}
}	
seabatle.creatingField(4);
seabatle.putShip(1,1,2);
console.table(seabatle.battleField);

// var a = new Array(5);
// for (var i = 0; i < 5; i++){
// 		a[i] = new Array(5)
// 		for(var j = 0; j < 5; j++){
// 			a[i][j] = {ok: true}
// 		}
// }

// console.table(a);