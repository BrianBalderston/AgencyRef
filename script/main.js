// JavaScript Document

(function() {
	"use strict";
	///console.log('fired');
	
	
	var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theSubhead = document.querySelector('.main-copy h2'),
		theSeasonText = document.querySelector('.main-copy p'),
		appliedClass;
	
	
	function changeElements() 
	{
		////debugger;
		
		theSubhead.classList.remove(appliedClass);
		theHeading.classList.remove(appliedClass);
		//change the color
		theSubhead.classList.add(this.id);
		theHeading.classList.add(this.id);
		
		appliedClass = this.id;
		
		///take the id of the clicked element, 
		//use it to retrieve the correct content and then replace the content on the page.
		theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text; ////dynamicContent is in contentObject.js
		
	}
	
	[].forEach.call(theImages, function(image) {
		image.addEventListener('click', changeElements, false);
	});
	
	
	// load the content when the page loads
	theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
		theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');
	

})();