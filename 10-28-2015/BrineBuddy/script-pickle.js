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

//sweetalert

$('.pickle-recipe-image').click(function(event) {
	event.preventDefault();

	var	pickleTitle = $(event.currentTarget).find('.hide').data('title');
	var	pickleImage = $(event.currentTarget).find('.hide').data('img');
	var	pickleText = $(event.currentTarget).find('.hide').html();


	console.log($(event.currentTarget).find('.hide').data('title'));
	console.log($(event.currentTarget).find('.hide').data('img'));
	console.log($(event.currentTarget).find('.hide').html());
	sweetAlert({ 
		title: pickleTitle,   
		text: pickleText, 
		imageUrl: pickleImage
	});
});

//slick slider

  $('.main_featured-content-child').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3  

	});

   $('.pickle-news-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3  

	});

