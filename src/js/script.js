	
const menuToggle = () => {
  $('.menuToggle').click(function() {
    if(!$('.menuToggle').hasClass('close')){
      $('.menuToggle').addClass('close');
      $('.menu').removeClass('hideMenu').addClass('showMenu animated fadeIn');
    } else{
      	$('.menuToggle').removeClass('close');
      	$('.menu').removeClass('showMenu').addClass('hideMenu')
  		}
  });
}

$(function() {
	menuToggle();
  $('.logo').midnight();
});