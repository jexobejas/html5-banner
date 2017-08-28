function Animation(car) {

	this.run = run;

	function run() {
		Velocity.RunSequence([
	        { e: document.getElementById('super-1'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('seat-2-1'), p: { translateX: '+=40',translateY: '-=5', width: '170px', opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('seat-2-2'), p: { translateX: '+=75',translateY: '-=10', width: '160px', opacity: 1 }, o: { duration: 300, sequenceQueue: false } },
	        { e: document.getElementById('seat-3-1'), p: { translateX: '-=40',translateY: '-=5', width: '170px', opacity: 1 }, o: { duration: 300, sequenceQueue: false } },
	        { e: document.getElementById('seat-3-2'), p: { translateX: '-=75',translateY: '-=10', width: '160px', opacity: 1 }, o: { duration: 300, sequenceQueue: false } },
	        { e: document.getElementById('super-1'), p: { translateX: '-=600' }, o: { delay: 300, duration: 300 } },
	        { e: document.getElementById('super-2'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('super-2'), p: { translateX: '-=600' }, o: { delay: 300, duration: 300 } },
	        { e: document.getElementById('seats'), p: { translateX: '-=600' }, o: { duration: 300, sequenceQueue: false } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('super-3'), p: { translateX: '-=600' }, o: { delay: 1000, duration: 300 } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=300' }, o: { duration: 300 } },
	        { e: document.getElementById('super-4'), p: { translateX: '-=600' }, o: { delay: 1000, duration: 300 } },
	        { e: document.getElementById('car'), p: { alpha: 0,
			translateY: '+=12',
			translateX: '+=35',
			scaleY: 8,scaleX: 8,
			transformOrigin: "right center", opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('super-5'), p: { opacity: 1 }, o: { duration: 300 } },
	        { e: document.getElementById('cta'), p: { opacity: 1 }, o: { duration: 300 } },
	    ]);
	}
}