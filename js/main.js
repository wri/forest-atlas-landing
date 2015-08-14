/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



// Disable hover events on touch/mobile devices
 document.addEventListener("DOMContentLoaded", init, false);

 function init() {
 	var image_1 = document.getElementById("map-icon");
 	var image_2 = document.getElementById("download-icon");
 	var image_3 = document.getElementById("analyze-icon");
 	var image_4 = document.getElementById("tutorial-icon");

 	if (!("ontouchstart" in document.documentElement) && 
 		! (navigator.maxTouchPoints > 0) &&
 		! (navigator.msMaxTouchPoints > 0) ){

	image_1.addEventListener("mouseover", function(){
 		this.src="img/map-icon-active.svg";}, false);

 	image_1.addEventListener("mouseout", function(){
 		this.src="img/map-icon.svg";}, false);

 	image_2.addEventListener("mouseover", function(){
 		this.src="img/download-icon-active.svg";}, false);

 	image_2.addEventListener("mouseout", function(){
 		this.src="img/download-icon.svg";}, false);

 	image_3.addEventListener("mouseover", function(){
 		this.src="img/coming-soon-icon.svg";}, false);

 	image_3.addEventListener("mouseout", function(){
 		this.src="img/analyze-icon.svg";}, false);

 	image_4.addEventListener("mouseover", function(){
 		this.src="img/coming-soon-icon.svg";}, false);

 	image_2.addEventListener("mouseout", function(){
 		this.src="img/tutorial-icon.svg";}, false);
 };   
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});

// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });

// // jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// Load social share buttons
SocialShareKit.init();


