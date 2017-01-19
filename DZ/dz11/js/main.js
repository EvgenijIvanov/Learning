'use strict';
var fragment = document.createDocumentFragment();
var wrapper = document.querySelector("#wrapper");
function bilding(){
	var table = document.createElement('table');
		for (var i = 0; i < 10; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 10; j++) {
				var td = document.createElement('td');
				td.style.background = rundomed();
				td.textContent = numbersGeneration(0, 99);
				td.style.color = rundomed();
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
	fragment.appendChild(table);
	wrapper.appendChild(fragment);
	magicPosition(wrapper);
};
bilding();
function magicPosition(elem){
	elem.style.position = "absolute";
	elem.style.top = (elem.parentElement.scrollHeight)/2 - (elem.clientHeight/2) + "px";
	elem.style.right = (elem.parentElement.scrollWidth/2) - (elem.clientWidth/2) + "px";
}
function numbersGeneration (min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
};
function rundomed (){
    var red=numbersGeneration(0,255);
    var green=numbersGeneration(0,255);
    var blue=numbersGeneration(0,255);
    var toColor="#" + red.toString(16) + green.toString(16) + blue.toString(16);
    return toColor;
};
var el = document.querySelectorAll("#wrapper table tr td")
var magic = document.querySelector('.magic');
	magic.addEventListener('click', function() {
		el.forEach(function(item, i, el){
			var time = (numbersGeneration(5, 8))*1000;
			var fps = (numbersGeneration(1, 6))*10;
			showMustGoOn(time, fps, item);
		});
    });

function showMustGoOn (time, fps, el){
	var step = time/fps;
	var opacity = 1;
	var timer = setInterval(function(){
		opacity = opacity-(opacity/step);
		el.style.opacity = opacity;
	});
	if (step == 0){
		clearInterval(timer);
		td.style.display = 'none';
	}
}