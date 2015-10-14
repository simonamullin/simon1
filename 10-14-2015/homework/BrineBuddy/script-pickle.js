//slideToggle

$('.main_recipes_cta-1').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(750);
	$('.main_recipes_cta-1').hide();
	$('.main_recipes_cta-see-less').show();
});

$('.main_recipes_cta-see-less').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(750);
	$('.main_recipes_cta-see-less').hide();
	$('.main_recipes_cta-1').show();
});

//scroll to links

	$('.scroll-to-link').on('click', scrollToLink);

	function scrollToLink(event) {
		event.preventDefault();
	//attribute href of the link we just clicked
		var targetName = $(event.currentTarget).attr('href');
	//position further down the page
		var offset = $(targetName).offset().top;
	//scroll page
		$('html, body').animate({scrollTop: offset}, 1000);

	}

$('.pickle-recipe-image').click(function(event) {
event.preventDefault();
});

$('.pickle-recipe-image').click(function(event) {
event.preventDefault();
sweetAlert({ title: "How to Make the Spicy Sweet Pickle",   text: "Text", imageUrl: "./images/pickled-vegetables.jpg" });
});

$('.brine-buddy-logo').click(function(event) {
event.preventDefault();
sweetAlert({ title: "Welcome to BrineBuddy.com!",   text: "Let's Get Picklin'", imageUrl: "./images/oldpickle.gif" });
});