$(function () {
	//toggling hamburger icon for small devices
	$('.toggle').click(function () {
		$('#nav-icon').toggleClass('open');
	});
	//our members slick trigger
	$('.our-members-slick').slick({
		 arrows: false,
		dots: true
	});
	$('.blog-slick').slick({
		 arrows: true,
		dots: false
	});

}) //document ready
