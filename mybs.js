$(window).scroll(function(){
	$('nav').toggleClass('scrolled',
		$(this).scrollTop() > 50
	); //scrolled new class
});

function show() {
	confirm('Booking Successful!');
}