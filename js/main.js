//Animate Smooth Scroll//
/*if About button is clicked it will scroll on the page for 0.9 secs*/
$('#view-about').on('click', function() {
	const images = $('#about').position().top;

	$('html, body').animate({
			scrollTop: images
		},
		900
	);
});

/*if Home button is clicked it will scroll on the page for 0.9 secs*/
$('#home').on('click', function() {
	const images = $('#h-img').position().top;

	$('html, body').animate({
			scrollTop: images
		},
		900
	);
});