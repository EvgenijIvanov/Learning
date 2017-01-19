'use strict';

var firstTaskButton = document.querySelector(".firstTaskButton");
	firstTaskButton.addEventListener('click', funHide);
		function funHide(e){
			e.target.nextElementSibling.style.display="none";
};

var secondTaskButton = document.querySelector(".secondTaskButton");
	secondTaskButton.addEventListener('click', secondFunHide);
		function secondFunHide(e){
			e.target.style.display="none";
};

var thirdTaskButton = document.querySelector(".listSweets");
var droplist = document.querySelector(".droplist");
var open = document.querySelector(".open");
var closs = document.querySelector(".closs");
	droplist.style.display="none";
	closs.style.display="none";
	thirdTaskButton = addEventListener('click', droplisting);
		function droplisting(e){
			if(e.target.children[2]) return false;
			if(droplist.style.display == ''){
				droplist.style.display = 'none';
				closs.style.display="none";
			} else if (droplist.style.display == 'none') {
				droplist.style.display = '';
				closs.style.display="";
				open.style.display="none";
			}
		};