'use strict';

var App = (function(){
	App.toggleMenu().init();
});

App.toggleMenu = (function(){

	var init = function() {

		var navigation = document.querySelectorAll('.nav__list-primary')[0],
			toggleMenu = document.querySelectorAll('.js-toggle-menu')[0],
			body = document.body;

		toggleMenu.addEventListener("click", function(event){
			event.preventDefault();
			toggle(navigation);
		}, false);

		body.addEventListener("click", function(event){
			if (event.target !== toggleMenu) {
				hide(navigation);				
			}
		}, false);
	}

	function toggle(navigation) {
		

		if (navigation.className.indexOf('hidden-phone') > -1) {
			show(navigation);
		} else {
			hide(navigation);
		}

	}

	function show(navigation) {
		navigation.className = navigation.className.replace('hidden-phone', '');
	}

	function hide(navigation) {
		navigation.className = navigation.className + ' hidden-phone';
	}

	return {
		init:init
	}
	
});

App();

window.onload = function() {
	smoothScroll.init();
};
