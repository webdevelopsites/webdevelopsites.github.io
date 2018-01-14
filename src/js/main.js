$(document).ready(function() {
	$('.popup-btn').on('click',function(event) {
		$('.popup').fadeIn('slow/400/fast', function() {
		});

		$('.popup-close').click(function(event) {	
			$('.popup').fadeOut('slow/400/fast', function() {
			});

		});
	});


	$('.input-1').click(function(event) {


		$('.form-hr-1').fadeToggle('slow/500/fast', function() {
			
		});('slow/400/fast', function() {
			
		});
	});

    $('.input-2').click(function(event) {


    	$('.form-hr-2').fadeToggle('slow/400/fast', function() {
    		
    	});('slow/400/fast', function() {
    		
    	});
    });
});