var common = {
	init: function() {
		common.main();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header').toggleClass('open');
		});
		
		$(".field").on("keyup change", function(e) {
			$(this).val() != '' ? $(this).addClass('val') : $(this).removeClass('val');
		});

		// var bLazy = new Blazy({});


	},
};

(function() {
	common.init();
}());
