//slideToggle

$('.main_recipes_cta-1').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(500);
	$('.main_recipes_cta-1').hide();
	$('.main_recipes_cta-see-less').show();
});

$('.main_recipes_cta-see-less').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(500);
	$('.main_recipes_cta-see-less').hide();
	$('.main_recipes_cta-1').show();
});

//form

$('.cd-form .cd-email').keyup(function(event){	
	var emailInput = $(this),
		insertedEmail = emailInput.val(),
		atPosition = insertedEmail.indexOf("@");
    	dotPosition = insertedEmail.lastIndexOf(".");
    //check if user has inserted a "@" and a dot
    if (atPosition< 1 || dotPosition<atPosition+2 ) {
    	//if he hasn't..
    	//hide the submit button
    	$('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    } else {
    	//if he has..
    	//show the submit button
    	$('.cd-form').addClass('is-active');
    }
});