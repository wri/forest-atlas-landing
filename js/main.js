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

function iconHover() {
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
		if (window.location.hash == "#l=en") {
			this.src="img/coming-soon-icon.svg";
		}
		else {
			this.src="img/a-venir-icon.svg"
		}
	}, false);
	image_3.addEventListener("mouseout", function(){
		this.src="img/analyze-icon.svg";}, false);
	image_4.addEventListener("mouseover", function(){
		if (window.location.hash == "#l=en") {
			this.src="img/coming-soon-icon.svg";
		}
		else {
			this.src="img/a-venir-icon.svg"
		}
	}, false);
	image_4.addEventListener("mouseout", function(){
		this.src="img/tutorial-icon.svg";}, false);
	};   
};

// Set language and update URL hash
function langtoggle(l){

	if (l == 'en' ){
		local_lang = lang.en,
		local_link = link.en
		window.location.hash = "#l=en";
	}

	else if (l == 'fr') {
		local_lang = lang.fr,
		local_link = link.fr
		window.location.hash = "#l=fr";
	}	

	for(var key in local_lang) {
		document.getElementById(key).innerHTML = local_lang[key];
	}
	for(var key in local_link) {
		document.getElementById(key).href = local_link[key];
	}
}


//Check URL hash; set appropriate page language. Defaults to English
function loadLanguage() {

	var hash = window.location.hash;
	if (hash == '' || hash == '#l=en') {
		langtoggle('en')
	}
	else if (hash == '#l=fr') {
		langtoggle('fr')
	}
}

function generateFlag() {

	var flagContainer = document.getElementById('flag');

	var newLink = document.createElement('a');
	var newImg = document.createElement('img');

	newLink.href = flag["href"];
	newImg.setAttribute('src',flag["src"]);
	newImg.className += " img-responsive";

	newLink.appendChild(newImg);
	flagContainer.appendChild(newLink);
}

function generatePartnerLogos() {

	var logoContainer = document.getElementById('PartnerLogos');

	for(var key in partners) 
	{
		var partner = partners[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-6" + " col-md-4" + " col-lg-3";
		newLink.href = partner["href"];
		newImg.className += " img-responsive";
		newImg.setAttribute('src',partner["src"]);
		newImg.setAttribute('alt',partner["alt"]);

		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		logoContainer.appendChild(newDiv);
	}
}

function generateSponsorLogos() {

	var sponsorLogoContainer = document.getElementById('SponsorLogos');

	for(var key in sponsors) 
	{
		var sponsor = sponsors[key];
		var newDiv = document.createElement('div');
		var newLink = document.createElement('a');
		var newImg = document.createElement('img');
		newDiv.setAttribute('id',key);
		newDiv.className += "col-xs-4" + " col-lg-2" + " supporter";
		newLink.href = sponsor["href"];
		newLink.target = "_blank";
		newImg.className += " img-responsive";

		newImg.setAttribute('src',sponsor["src"]);
		newImg.setAttribute('alt',sponsor["alt"]);
		
		newLink.appendChild(newImg);
		newDiv.appendChild(newLink);
		sponsorLogoContainer.appendChild(newDiv);

		// newImg.addEventListener("mouseover", function(){
		// 	this.setAttribute('src', sponsor["srcActive"])}, false);

		// newImg.addEventListener("mouseout", function(){
		// 	this.setAttribute('src', sponsor["src"])}, false);
}
};

window.addEventListener("DOMContentLoaded", function() {
	loadLanguage();
	generateFlag();
	iconHover();
	generatePartnerLogos();
	generateSponsorLogos();
}, false);

SocialShareKit.init();