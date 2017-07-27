//mobile menu toggle 
const menuToggle = () => {
  $('.menuToggle').click(() =>  {
    if(!$('.menuToggle').hasClass('close')){
      $('.menuToggle').addClass('close');
      $('.menu').removeClass('hideMenu').addClass('showMenu animated fadeIn');
      $('.mobileMenu').css('visibility', 'visible');
    } else{
      	$('.menuToggle').removeClass('close');
      	$('.menu').removeClass('showMenu').addClass('hideMenu')
      	$('.mobileMenu').css('visibility', 'hidden');
  		}
  });
  $('.menuLink').click(() => {
		$('.mobileMenu').css('visibility', 'hidden');
		$('.menuToggle').removeClass('close');
  });
  $('.mobileMenu').click(() => {
		$('.mobileMenu').css('visibility', 'hidden');
		$('.menuToggle').removeClass('close');
  });

}
// smooth scroll
const smooth = () => {
  $('a[href*="#"]:not([href="#"])').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
  });
}
//sticky nav
const sticky = () => {
	var stickyNavTop = $('.nav').offset().top;
	var stickyNav = () => {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > stickyNavTop) { 
	    $('.nav').addClass('sticky');
	} else {
	    $('.nav').removeClass('sticky'); 
	}
	}
	$(window).scroll( () => {
  		stickyNav();
	});
};
//doc ready
$(function() {
	menuToggle();
  	$('.logo').midnight();
  	smooth();
	new WOW().init();
	sticky();
});