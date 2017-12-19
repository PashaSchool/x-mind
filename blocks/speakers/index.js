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