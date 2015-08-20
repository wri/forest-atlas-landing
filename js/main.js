/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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

function langtoggle(l){
	if (l == 'en' ){
		local_lang = lang.en
	}
	else if (l == 'fr') {
		local_lang = lang.fr
	}	
	for(var key in local_lang) {
		document.getElementById(key).innerHTML = local_lang[key]
		//alert(local_lang[key])
	}
}
    window.addEventListener("DOMContentLoaded", function() {
        langtoggle('en');
    }, false);

SocialShareKit.init();
