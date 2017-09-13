function checkInit() {
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
		// This code checks whether the EB object is initialized, if the object is initialized, it launches the function "onInit", otherwise "EB_INITIALIZED" event. 
	} else {
		onInit();
	}   

	function onInit() {
		document.getElementById("exit").addEventListener('click', function(e){ EB.clickthrough(); }, false);
	} 
	
	var animation = new Animation();

	animation.run();
}

window.addEventListener('load', checkInit);

function Animation(car) {

	this.run = run;

	function run() {
		Velocity.RunSequence([
	        { e: document.getElementById('super-1'), p: { translateX: '+=400' }, o: { duration: 600, delay: 500, easing: "easeOutSine" } },
	      	{ e: document.getElementById('super-1'), p: { translateX: '-=400' }, o: { delay: 900, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('super-2'), p: { translateX: '+=400' }, o: { duration: 600, easing: "easeOutSine" } },
	        { e: document.getElementById('suitcase-2-1'), p: { translateX: '+=17', width: '50px', opacity: 1 }, o: { duration: 500 } },
	        { e: document.getElementById('suitcase-2-2'), p: { translateX: '+=31', width: '45px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('suitcase-3-1'), p: { translateX: '-=11', width: '50px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('suitcase-3-2'), p: { translateX: '-=21', width: '45px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	       	{ e: document.getElementById('super-2'), p: { translateX: '-=600' }, o: { delay: 700, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('suitcases'), p: { translateX: '-=600' }, o: { duration: 900, sequenceQueue: false, easing: "easeInSine" } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { duration: 600, easing: "easeOutSine" } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { duration: 600, easing: "easeOutSine" } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('last-texts'), p: { opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('carImg'), p: { alpha: 0,
			translateY: '+=74',
			translateX: '+=119',
			scaleY: 2.5,scaleX: 2.5,
			transformOrigin: "right center", opacity: 1 }, o: { duration: 700, easing: "easeOutBack" } },
	        { e: document.getElementById('cta'), p: { opacity: 1 }, o: { duration: 300 } },
	    ]);
	}
}