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
	        { e: document.getElementById('super-1'), p: { translateX: '-=300' }, o: { duration: 300, delay: 500} },
	        { e: document.getElementById('super-1'), p: { translateX: '-=600' }, o: { delay: 900, duration: 300 } },
	        { e: document.getElementById('super-2'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('suitcase-2-1'), p: { translateX: '+=30', width: '110px', opacity: 1 }, o: { duration: 500 } },
	        { e: document.getElementById('suitcase-2-2'), p: { translateX: '+=55', width: '100px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('suitcase-3-1'), p: { translateX: '-=30', width: '110px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('suitcase-3-2'), p: { translateX: '-=55', width: '100px', opacity: 1 }, o: { duration: 500, sequenceQueue: false } },
	        { e: document.getElementById('super-2'), p: { translateX: '-=600' }, o: { delay: 700, duration: 300 } },
	        { e: document.getElementById('suitcases'), p: { translateX: '-=600' }, o: { duration: 1000, sequenceQueue: false } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 300 } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { delay: 1200, duration: 300 } },
	        { e: document.getElementById('car'), p: { alpha: 0,
				translateY: '+=12',
				translateX: '+=35',
				scaleY: 8,scaleX: 8,
				transformOrigin: "right center", opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('super-5'), p: { opacity: 1 }, o: { duration: 300, delay: 300 } },
	        //{ e: document.getElementById('super-6'), p: { opacity: 1 }, o: { duration: 1500 } },
	        { e: document.getElementById('cta'), p: { opacity: 1 }, o: { duration: 300 } },
	    ]);
	}
}