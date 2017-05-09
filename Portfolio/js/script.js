
$(window).on('load', function(){

	// HIDES ALL CONTENT UNTIL CLICKED
	$('#about-body , #nypp , .nypp-body , #beergoblin , .beergoblin-body , #yoga , .yoga-body , #wubba , .wubbaduckies-body , #blp , .blp-body').hide();

	// HOVER EFFECT ON BUTTONS
	$('.clickme , .clickme2').mouseenter(function() {
		$(this).addClass('newButton');
	});
	$('.clickme , .clickme2').mouseleave(function() {
		$(this).removeClass('newButton' , 'slow');
	});

	//  ON CLICK SHOWS ABOUT SECTION AND HIDES EVERYTHING ELSE
	$('.clickme').on('click', function() {
		$('.clickme2 , #about-body').slideDown();
		$('#header , #nypp , #beergoblin , #yoga , #wubba , #blp').slideUp('slow');
		$(this).fadeOut('slow');
	});

	// ON CLICK SHOWS PROJECT HEADERS AND HIDES EVERYTHING ELSE
	$('.clickme2').on('click', function() {
		$('.clickme , #nypp , #beergoblin , #yoga , #wubba , #blp').slideDown();
		$('#header , #about-body , .nypp , .beergoblin-body , .yoga-body , .wubbaduckies-body , .blp-body').slideUp('slow');
		$(this).fadeOut('slow');
	});

	// SHOWS PROJECT BODY ON CLICK
	$('#nypp-header').on('click', function() {
		$('.nypp-body').toggle('slow');
	});

	$('#beergoblin-header').on('click', function() {
		$('.beergoblin-body').toggle('slow');
	});

	$('#yoga-header').on('click', function() {
		$('.yoga-body').toggle('slow');
	});

	$('#wubbaduckies-header').on('click', function() {
		$('.wubbaduckies-body').toggle('slow');
	});

	$('#blp-header').on('click', function() {
		$('.blp-body').toggle('slow');
	});

	// HOVER EFFECT ON PROJECT HEADERS
	$('#nypp-header , #beergoblin-header , #yoga-header , #wubbaduckies-header , #blp-header').mouseenter(function() {
		$(this).fadeTo('slow', 0.6);
	});
	$('#nypp-header , #beergoblin-header , #yoga-header , #wubbaduckies-header , #blp-header').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
});