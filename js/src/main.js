'use strict';

var App = (function(){
	App.toggleMenu().init();
});

App.toggleMenu = (function(){

	var init = function() {

		var toggleMenu = document.querySelectorAll('.js-toggle-menu')[0];
		toggleMenu.addEventListener("click", function(event){
			event.preventDefault();
			toggle(toggleMenu);
		}, false);
	}

	function toggle(elem) {
		
		var navigation = document.querySelectorAll('.nav__list-primary')[0];

		if (navigation.className.indexOf('hidden-phone') > -1) {
			navigation.className = navigation.className.replace('hidden-phone', '');
		} else {
			navigation.className = navigation.className + ' hidden-phone';
		}

	}

	return {
		init:init
	}
	
});

App();
