'use strict';

var App = (function(){

	if (typeof(window.addEventListener) !== 'undefined') {
		App.toggleMenu().init();
	}

});

App.toggleMenu = (function(){

	var navigation = document.querySelectorAll('.nav__list-primary')[0],
		toggleMenu = document.querySelectorAll('.js-toggle-menu')[0],
		body = document.querySelectorAll('.content')[0];

	var init = function() {

		toggleMenu.addEventListener("click", function(event){
			event.preventDefault();
			toggle();
		}, false);

		body.addEventListener("click", function(event){
			hide();
		}, false);

		body.addEventListener("touchstart", function(event){
			hide();
		}, false);

	}

	function toggle() {

		if (navigation.className.indexOf('visible-desktop') > -1) {
			show();
		} else {
			hide();
		}

	}

	function show() {
		navigation.className = navigation.className.replace('visible-desktop', '');

		if (toggleMenu.className.indexOf('is-active') === -1) {
			toggleMenu.className = toggleMenu.className + ' is-active';
		}
	}

	function hide() {
		if (navigation.className.indexOf('visible-desktop') === -1) {
			navigation.className = navigation.className + ' visible-desktop';
		}

		toggleMenu.className = toggleMenu.className.replace('is-active', '');
	}

	return {
		init:init,
		hide:hide
	}

});

App();

window.onload = function() {
	smoothScroll.init({
		callbackBefore: function ( toggle, anchor ) {
			App.toggleMenu().hide();
		}
	});
};
