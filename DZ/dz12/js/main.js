'use strict';
var wrapper = document.querySelector("#wrapper");
var table = document.createElement("table");
var magic = document.querySelector('.magic');
	magic.addEventListener('click', function() {
		test();
    });
function test () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'user.json', true);
	xhr.send();
	xhr.onreadystatechange = function () {
			if (xhr.readyState==4 && xhr.status==200){
				var temp = JSON.parse(xhr.responseText);
				build(temp);
		}
	}
}
function build(temp){
	temp.forEach(function(item, i, temp) {
		var tr = document.createElement("tr");
		for(var key in item){
			var td = document.createElement("td");
			td.textContent = item[key];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	});
	wrapper.appendChild(table);
};



