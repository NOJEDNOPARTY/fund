var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header').toggleClass('open');
		})
		
		// var bLazy = new Blazy({});


	},
	owl: function(){
		
	},
};

(function() {
	common.init();
}());
