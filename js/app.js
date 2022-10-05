var common = {
	init: function() {
		common.main();
		common.owl();
		common.marquee();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header').toggleClass('open');
		});
		
		$('.field').on('keyup change', function(e) {
			$(this).val() != '' ? $(this).addClass('val') : $(this).removeClass('val');
		});

		$(function() {
			$('.form-submit').click(function() {
				$(this).closest('form').addClass('validate');
			});
		});

		$('.anchor').click(function(e) {
			e.preventDefault();
			var aid = $(this).attr('href');
			$('html,body').animate({scrollTop: $(aid).offset().top},'500');
		});

		let bLazy = new Blazy({});

		const date = '2022-02-24T00:00:00.000Z'
		let currentDate = Date.parse(new Date());
		let days = (currentDate - Date.parse(date))/86400000;
		document.querySelector('.timer').textContent = Math.round(days);

		$(".phone").mask("+380(99)999-99-99");
	},
	owl: function() {
		$('.about-slider').owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			dots: true,
		});
		$('.desctructions-slider').owlCarousel({
			loop: false,
			margin: 0,
			autoWidth: true,
			autoHeight: true,
			items: 3,
			dots: true,
			responsive:{
					0:{
						items:3,
						center: true
					},
					993:{
						items:3,
					},
					1000:{
						items:3,
					}
			}
		});
	},
	marquee: function() {
		function handleMarquee(){
			const marquee = document.querySelectorAll('.marquee');
			let speed = 1;
			
			marquee.forEach(function(el){
				const container = el.querySelector('.marquee-inner');
				const content = el.querySelector('.marquee-inner > *');
				const elWidth = content.offsetWidth;

				for(let i = 1; i < 6; i++) {
					container.appendChild(content.cloneNode(true));
				}
				
				let progress = 1;
				function loop(){
					progress = progress-speed;

					if (progress <= elWidth*-5) {progress=0;}

					container.style.transform = 'translateX(' + progress + 'px)';

					window.requestAnimationFrame(loop);
				}

				loop();
			});
			
		};
		
		handleMarquee();
	},
};

(function() {
	common.init();
}());
