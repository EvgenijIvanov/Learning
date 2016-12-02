//Crazy code//xor
var lightBulb = {
	switch1: null,
	switch2: null,
	switchNot: null,
	gate1: null,
	gate2: null,
	gateFin: null,
	result:  null,
	metod: function shiningLight (){
		this.result = (this.gateFin == "xor") ? 
					  (this.gate1 == "and" && this.gate2 == "not" || this.gate2 == "and" && this.gate1 == "not") ? (this.And() == this.Not()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "or" || this.gate2 == "and" && this.gate1 == "or") ? (this.And() == this.Or()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "xor" || this.gate2 == "and" && this.gate1 == "xor") ? (this.And() == this.Xor()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "and" || this.gate2 == "and" && this.gate1 == "and") ? (this.And() == this.And()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "or" || this.gate2 == "not" && this.gate1 == "or") ? (this.Not() == this.Or()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "xor" || this.gate2 == "not" && this.gate1 == "xor") ? (this.Not() == this.Xor()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "not" || this.gate2 == "not" && this.gate1 == "not") ? (this.Not() == this.Not()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "or" && this.gate2 == "xor" || this.gate2 == "or" && this.gate1 == "xor") ? (this.Or() == this.Xor()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "or" && this.gate2 == "or" || this.gate2 == "or" && this.gate1 == "or") ? (this.Or() == this.Or()) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "xor" && this.gate2 == "xor" || this.gate2 == "xor" && this.gate1 == "xor") ? (this.Xor() == this.Xor()) ? "Лампа не горит!":"Лампа горит!" 
					: "Проверьте введенные данные!"
		: (this.gateFin == "and") ? 		
					  (this.gate1 == "and" && this.gate2 == "not" || this.gate2 == "and" && this.gate1 == "not") ? (this.And() == 0 || this.Not() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "or" || this.gate2 == "and" && this.gate1 == "or") ? (this.And() == 0 || this.Or() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "xor" || this.gate2 == "and" && this.gate1 == "xor") ? (this.And() == 0 || this.Xor() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "and" && this.gate2 == "and" || this.gate2 == "and" && this.gate1 == "and") ? (this.And() == 0 || this.And() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "or" || this.gate2 == "not" && this.gate1 == "or") ? (this.Not() == 0 || this.Or() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "xor" || this.gate2 == "not" && this.gate1 == "xor") ? (this.Not() == 0 || this.Xor() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "not" && this.gate2 == "not" || this.gate2 == "not" && this.gate1 == "not") ? (this.Not() == 0 || this.Not() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "or" && this.gate2 == "xor" || this.gate2 == "or" && this.gate1 == "xor") ? (this.Or() == 0 || this.Xor() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "or" && this.gate2 == "or" || this.gate2 == "or" && this.gate1 == "or") ? (this.Or() == 0 || this.Or() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: (this.gate1 == "xor" && this.gate2 == "xor" || this.gate2 == "xor" && this.gate1 == "xor") ? (this.Xor() == 0 || this.Xor() == 0) ? "Лампа не горит!":"Лампа горит!" 
					: "Проверьте введенные данные!"	 
		: (this.gateFin == "or") ?									  
						(this.gate1 == "and" && this.gate2 == "not" || this.gate2 == "and" && this.gate1 == "not") ? (this.And() == 1 || this.Not() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "and" && this.gate2 == "or" || this.gate2 == "and" && this.gate1 == "or") ? (this.And() == 1 || this.Or() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "and" && this.gate2 == "xor" || this.gate2 == "and" && this.gate1 == "xor") ? (this.And() == 1 || this.Xor() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "and" && this.gate2 == "and" || this.gate2 == "and" && this.gate1 == "and") ? (this.And() == 1 || this.And() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "not" && this.gate2 == "or" || this.gate2 == "not" && this.gate1 == "or") ? (this.Not() == 1 || this.Or() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "not" && this.gate2 == "xor" || this.gate2 == "not" && this.gate1 == "xor") ? (this.Not() == 1 || this.Xor() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "not" && this.gate2 == "not" || this.gate2 == "not" && this.gate1 == "not") ? (this.Not() == 1 || this.Not() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "or" && this.gate2 == "xor" || this.gate2 == "or" && this.gate1 == "xor") ? (this.Or() == 1 || this.Xor() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "or" && this.gate2 == "or" || this.gate2 == "or" && this.gate1 == "or") ? (this.Or() == 1 || this.Or() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: (this.gate1 == "xor" && this.gate2 == "xor" || this.gate2 == "xor" && this.gate1 == "xor") ? (this.Xor() == 1 || this.Xor() == 1) ? "Лампа горит!":"Лампа не горит!" 
					: "Проверьте введенные данные!"
		:  (this.gateFin == "not") ?	"Оператор NOT не можеть быть перед лампой! Задайте другие значения!": "Проверьте введенные данные!"
	},
	And: function gateAnd() {
		return (this.switch1 == 0 || this.switch2 == 0) ? 0 : 1
	},
	Not: function gateNOT () {
		return (this.switchNot == 0) ? 1 : 0
	},
	Xor: function gateXor(){
		return (this.switch1 == this.switch2) ? 0 : 1
	},
	Or: function gateOr () {
		return (this.switch1 == 1 || this.switch2 == 1) ? 1 : 0
	}
};
function enteringData() {
	lightBulb.gateFin = prompt("Введите значение для оператора перед лампой! допустимые значения: and , or , xor !", "");
	lightBulb.gate1 = prompt("Введите значение для 1-го оператора 2-го уровня! допустимые значения: and , or , xor , not !", "");
	lightBulb.gate2 = prompt("Введите значение для 2-го оператора 2-го уровня! допустимые значения: and , or , xor , not !", "");
	lightBulb.switch1 = prompt("Введите 1-ое значение для Switch'а! Допустимые знчения: 0 или 1 ", "");
	lightBulb.switch2 = prompt("Введите 2-ое значение для Switch'а! Допустимые знчения: 0 или 1 ", "");
	lightBulb.switchNot = prompt("Введите значение для Switch'а оператора NOT! Допустимые значения: 0 или 1 ","");
	// lightBulb.switch1 = prompt("Введите значение для ", "");
}
enteringData();
lightBulb.metod();
alert(lightBulb.result);
console.log(lightBulb);
