$(function() {

	var owl = $('.owl-carousel.speakers-carusel');
	var owlSponsor = $('.owl-carousel.sponsor-carusel');
	var owlPartners = $('.owl-carousel.partners-carusel');

	owlPartners.owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	owlSponsor.owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

	owl.owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$('.speakers > .next').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$('.speakers > .prev').click(function() {
		owl.trigger('prev.owl.carousel');
	})

	$('.sponsors > .next').click(function() {
		owlSponsor.trigger('next.owl.carousel');
	})

	$('.sponsors > .prev').click(function() {
		owlSponsor.trigger('prev.owl.carousel');
	})

	$('.partners > .next').click(function() {
		owlPartners.trigger('next.owl.carousel');
	})

	$('.partners > .prev').click(function() {
		owlPartners.trigger('prev.owl.carousel');
	})


})

function initMap() {
		var option = {
			center: {lat: 49.85, lng: 24.0166666667},
			scrollwheel: false,
			zoom: 18,
			scaleControl: false,
			zoomControl: false,
			streetViewControl: false,
			styles:[
			{
				"featureType": "all",
				"stylers": [
				{
					"saturation": 0
				},
				{
					"hue": "#e7ecf0"
				}
				]
			},
			{
				"featureType": "road",
				"stylers": [
				{
					"saturation": -70
				}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "water",
				"stylers": [
				{
					"visibility": "simplified"
				},
				{
					"saturation": -60
				}
				]
			}
			]
		};

	var map = new google.maps.Map(document.getElementById('map'), option);
  }