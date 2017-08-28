// *************************************************************
//   This class is part of the  Sizmek HTML5 DCO Advanced Block 
//   ALL RIGHTS RESERVED TO © 2014 Sizmek, Inc.
// *************************************************************
// *************************************************************

dco_Advanced_Block = function () {
	// Establish Script Details
	this.script = { name: 'dco_advanced_block.js', version: '1' };
	// Establish Reference to d method
	this.d;
	// Establish Reference to this
	var self = this;
	// Call Init Method
	adkit.onReady( function () { self.init(); } );
};

dco_Advanced_Block.prototype = {
	// Function That Creates Element Var
	d: function (id) { return document.getElementById(id); },
	
	// Initialize DCO Block
	init: function () {
		// Set Up Ad Tracking
		this.setUpAd();
		// Handle AdKit Data 
		this.updateDCO();    	
	},
	
	startAd: function () {
		// Set Up Ad Tracking
		this.setUpAd();
		// Handle AdKit Data 
		this.updateDCO();
	},
	
	updateDCO: function() {
		// // Create Image Tag    	
		// var img = document.createElement('img');
		// // Set Border to 0
		// img.setAttribute('border', '0');
		// // Set Source to Dynamic Content
		// img.setAttribute('src', adkit.getSVData("dco_image"));
		// //Add a class for animation
		// img.setAttribute('class', 'bigEntrance');
		// // Add Image to Page
		// this.d('dco_image').appendChild(img);
		// // Check config to see if title is hidden

		var startAnimate = new Animation();

		startAnimate.run();
	   
	},
	
	// Handle Ad Set Up
	setUpAd: function () {
		// Establish Reference to script
		var self = this;
		// Add listener to Ad for Clickthrough
		this.d("exit").addEventListener('click', function(e){ EB.clickthrough(); }, false);
	}
};

var new_DCO_Block = new dco_Advanced_Block ();

