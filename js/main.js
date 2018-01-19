$(function () {
	
	//toggling hamburger icon for small devices
	$('.toggle').click(function () {
		$('#nav-icon').toggleClass('open');
	});
	
	
	
	//our members slick trigger
	$('.our-members-slick').slick({
		arrows: false,
		dots: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
    		},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5
				}
    		}
  		]
	}); //end of our members slick
	
	//blog slick trigger
	$('.blog-slick').slick({
		arrows: true,
		dots: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    		},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3
				}
    		},
			
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
    		}
  		]
	});

}) //document ready
