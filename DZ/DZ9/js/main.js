'use strict';

var test = document.querySelector('.test');

var table = document.createElement('table');
for(var i=0; i<=10; i++){
	var tr = document.createElement('tr');
	for(var j=0; j<=10; j++){
		var td = document.createElement('td');
		td.style.border="1px solid";
		tr.appendChild(td);
		if((i%2 != 0) && (j%2 == 0)){
			td.style.background='black';
		} else if ((i%2 == 0) && (j%2 != 0)){
			td.style.background='black';
		}
	}
	table.appendChild(tr);
};
test.appendChild(table);