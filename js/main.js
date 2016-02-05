function iconHover() {
	var image1 = document.getElementById("map-icon");
	var image2 = document.getElementById("download-icon");
	var image3 = document.getElementById("analyze-icon");
	var image4 = document.getElementById("tutorial-icon");

	var link1 = document.getElementById("mapLink");
	var link2 = document.getElementById("downloadLink");
	var link3 = document.getElementById("analyzeLink");
	var link4 = document.getElementById("tutorialLink");

	if (!("ontouchstart" in document.documentElement) && 
		! (navigator.maxTouchPoints > 0) &&
		! (navigator.msMaxTouchPoints > 0) ){

	link1.addEventListener("mouseover", function(){
		image1.src="img/map-icon-active.svg";}, false);
	link1.addEventListener("mouseout", function(){
		image1.src="img/map-icon.svg";}, false);
	link2.addEventListener("mouseover", function(){
		image2.src="img/download-icon-active.svg";}, false);
	link2.addEventListener("mouseout", function(){
		image2.src="img/download-icon.svg";}, false);

	link3.addEventListener("mouseover", function(){
		if (window.location.hash == "#l=en") {
			image3.src="img/coming-soon-icon.svg";
		}
		else {
			image3.src="img/a-venir-icon.svg"
		}
	}, false);
	link3.addEventListener("mouseout", function(){
		image3.src="img/analyze-icon.svg";}, false);
	link4.addEventListener("mouseover", function(){
		if (window.location.hash == "#l=en") {
			image4.src="img/coming-soon-icon.svg";
		}
		else {
			image4.src="img/a-venir-icon.svg"
		}
	}, false);
	link4.addEventListener("mouseout", function(){
		image4.src="img/tutorial-icon.svg";}, false);
	};   
};

//Set language and update URL hash
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

	var domain = window.location.origin.split(".")[1];
	var hash = window.location.hash;

	if (hash == '#l=en' || (hash == '' && domain == 'forest-atlas')) {
		langtoggle('en')
	}
	else {
		langtoggle('en')
	}
}

//Generate flag link/image from country JS file
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

//Generate background image from country JS file
function generateBcgImg() {
document.getElementById('intro').style.background = bcgImage["src"];
}

//Generate partner logos from country JS file
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

//Generate sponsor logos from country JS file
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

		//Trigger hover events
		newImg.addEventListener("mouseover", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', sponsors[divSource]["srcActive"])}, false);

		newImg.addEventListener("mouseout", function(){
			var divSource = $(this).closest('div').attr('id');
			this.setAttribute('src', sponsors[divSource]["src"])}, false);;
}
};

window.addEventListener("DOMContentLoaded", function() {
	loadLanguage();
	generateFlag();
	generateBcgImg();
	iconHover();
	generatePartnerLogos();
	generateSponsorLogos();
}, false);

SocialShareKit.init();