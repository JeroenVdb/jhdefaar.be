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

App.maps = function(){

	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(50.874300, 4.005431),
		scrollwheel: false
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);


	var image = 'img/marker.png';
	var myLatLng = new google.maps.LatLng(50.874300, 4.005431);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});


};

App();

window.onload = function() {
	smoothScroll.init({
		callbackBefore: function ( toggle, anchor ) {
			App.toggleMenu().hide();
		}
	});

	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?api=AIzaSyDVyXYHV7GJSofxZyB27VvyG7VmUVrd9gE&sensor=false&callback=App.maps';
	document.body.appendChild(script);
};

function initialize() {

}
