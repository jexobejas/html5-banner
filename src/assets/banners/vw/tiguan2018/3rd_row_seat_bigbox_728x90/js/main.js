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
	        { e: document.getElementById('super-2'), p: { translateX: '+=400' }, o: { duration: 300, easing: "easeOutSine" } },
	        { e: document.getElementById('seat-2-1'), p: { translateX: '+=28', width: '90px', opacity: 1 }, o: { duration: 500 } },
	        { e: document.getElementById('seat-2-2'), p: { translateX: '+=55', width: '80px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('seat-3-1'), p: { translateX: '-=17', width: '90px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('seat-3-2'), p: { translateX: '-=35', width: '80px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('super-2'), p: { translateX: '-=600' }, o: { delay: 700, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('seats'), p: { translateX: '-=600' }, o: { duration: 900, sequenceQueue: false, easing: "easeInSine" } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { duration: 600, easing: "easeOutSine" } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { duration: 600, easing: "easeOutSine" } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 600, easing: "easeInSine" } },
	        { e: document.getElementById('last-texts'), p: { opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('carImg'), p: { alpha: 0,
			translateY: '+=74',
			translateX: '+=104',
			scaleY: 7,scaleX: 7,
			transformOrigin: "right center", opacity: 1 }, o: { duration: 800, easing: "easeInOutBack" } },
	        { e: document.getElementById('cta'), p: { opacity: 1 }, o: { duration: 300 } },
	    ]);
	}
}