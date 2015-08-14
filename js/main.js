/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


 document.addEventListener("DOMContentLoaded", init, false);

    function init() {

        var image_1 = document.getElementById("image_1_nav");
        var image_2 = document.getElementById("image_2_nav"); //.. etc... 

        if (!("ontouchstart" in document.documentElement) && 
            ! (navigator.maxTouchPoints > 0) &&
            ! (navigator.msMaxTouchPoints > 0) ){
            image_1.addEventListener("mouseover", function(){
               this.src="image_1_red.png";}, false);

            image_1.addEventListener("mouseout", function(){
               this.src="image_1.png";}, false);             // .. etc... 
        }   
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

SocialShareKit.init();


