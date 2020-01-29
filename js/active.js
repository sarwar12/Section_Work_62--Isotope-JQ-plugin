(function($){
// init Isotope
var $grid = $('.project-list').isotope({
 // options
});
// filter items on button click
$('.project-filter').on( 'click', 'li', function() {
//Active Class start
	$(".project-filter li").removeClass("active");
	$(this).addClass("active");
//Active Class stop
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
	
}(jQuery));

