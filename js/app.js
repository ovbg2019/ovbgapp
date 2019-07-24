// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {
	//declare consts and set DOM reference

	// Get SVG document inside Object by ID
	const SVG_PATH_MAP = document.querySelector('#svgMapObj').contentDocument;
	//SVG Navigation Paths
	/* Penoy */
	const peonyToBridgePath = SVG_PATH_MAP.querySelector('#peony_to_bridge');
	const bridgeToPeonyPath = SVG_PATH_MAP.querySelector('#bridge_to_peony');
	const PLACE_HOLDER = document.querySelector('#placeholder');
	// Constants for the dropdown
	const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
	const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
	const MAP_OBJ = document.getElementById('svgMapObj'); // Target object element holding SVG of map
	const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap'); // Get the SVG document inside the Object tag

	// Set this via QR or nav button
	// *** Hard coded for testing purposes ***
	let currentLocation = 'peony';

	let startPosition = '';

	// List of items in the drop down (order matters)
	const LOCATIONS = [
		'Select Destination',
		'Peony Garden',
		'Waterfall Garden',
		'Bridge',
		'DayLily Collection',
		'Bike Path',
		'Memory Garden',
	];

	const setLocation = function(value) {
		if (value === 1) {
			currentLocation = 'peony';
		} else if (value === 2) {
			currentLocation = 'waterfall';
		} else if (value === 3) {
			currentLocation = 'bridge';
		} else if (value === 4) {
			currentLocation = 'daylily';
		} else if (value === 5) {
			currentLocation = 'bike';
		} else if (value === 6) {
			currentLocation = 'memory';
		}
	};

	// Animate zoom/ position of location
	const animatedZoom = function(classes) {
		// Reset Class List
		MAP_SVG.removeAttribute('class');
		// Add classes to SVG
		MAP_SVG.classList.add(classes);
	};

	//New TimeLine Max const for GSAP
	const TLM = new TimelineMax({});
	//Clears Current/Active Animation
	const removeCurrentAnimation = function() {
		TLM.progress(0).clear();
	};

	//declare variable index
	let index;

	/* decare new array - pathList which will contain objects of path*/

	let pathList = new Array();

	pathList[0] = {
		draw: () => {
			removeCurrentAnimation();
			TLM.fromTo(
				MAP_SVG,
				1,
				{
					x: '-55%',
					y: '3%',
					scaleX: 1.3,
					scaleY: 1.3,
				},
				{
					scaleX: 1.3,
					scaleY: 1.3,
					//ease: ExpoScaleEase.config(0.1, 1, Circ.easeIn),
					ease:Expo.easeIn,
				}
			);
				TLM.fromTo(
					peonyToBridgePath,
					5,
					{
						strokeWidth: 20,
						strokeDasharray: 807,
						strokeDashoffset: 807,
					},
					{
						stroke: '#679DF6',
						strokeWidth: 20,
						strokeDasharray: 807,
						strokeDashoffset: 0,
						repeat: -1,
						ease: Sine.easeInOut,
						repeatDelay: 1,
					}
				);
		},
	};

	const DRAW = (pathList, index) => {
		return pathList[index].draw();
	};

	// if anywhere in the map is clicked the dropdown will close
	MAP_SVG.addEventListener('click', function(e) {
		DROP_DOWN_ITEM.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			item.classList.toggle('hidden');
			// Upon clicking an item in the list set the displayed text to the selected location name
			document.getElementById('placeholder').textContent = `Select Destination`;
		});
	});

	// Create evenbt listener on drop down menu
	DROP_DOWN.addEventListener('click', function() {
		// Loop through the elements in the drop down and add event listeners to them
		DROP_DOWN_ITEM.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			item.classList.toggle('hidden');

			// Add the event listener to the item
			item.addEventListener('click', function() {
				// Upon clicking an item in the list set the displayed text to the selected location name
				PLACE_HOLDER.textContent = `Go to: ${LOCATIONS[item.value]}`;

				// If current location is Peony Garden
				if (currentLocation === 'peony') {
					// destination is set to Waterfall Garden
					if (item.value === 2) {
						animatedZoom('moveTo-peony-waterfall');
						// destination is set to Bridge
					} else if (item.value === 3) { 						
						//animatedZoom('moveTo-bridge-peony');
						DRAW(pathList, 0);
						// destination is set to DayLily Collection
					} else if (item.value === 4) {
						animatedZoom('moveTo-peony-daylily');
						// destination is set to Bike Path
					} else if (item.value === 5) {
						animatedZoom('moveTo-peony-bike');
						// destination is set to Memory Garden
					} else if (item.value === 6) {
						animatedZoom('moveTo-memory-peony');
					}
				} else if (currentLocation === 'waterfall') {
					// If current location is Waterfall Garden
					// destination is set to Peony Garden
					if (item.value === 1) {
						animatedZoom('moveTo-peony-waterfall');
						// destination is set to Bridge
					} else if (item.value === 3) {
						animatedZoom('moveTo-bridge-waterfall');
						// destination is set to DayLily Collection
					} else if (item.value === 4) {
						animatedZoom('moveTo-daylily-waterfall');
						// destination is set to Bike Path
					} else if (item.value === 5) {
						animatedZoom('moveTo-waterfall-bike');
						// destination is set to Memory Garden
					} else if (item.value === 6) {
						animatedZoom('moveTo-memory-waterfall');
					}
				} else if (currentLocation === 'bridge') {
					// If current location is Bridge
					// destination is set to Peony Garden
					if (item.value === 1) {
						animatedZoom('moveTo-bridge-peony');
						// destination is set to Waterfall Garden
					} else if (item.value === 2) {
						animatedZoom('moveTo-bridge-waterfall');
						// destination is set to DayLily Collection
					} else if (item.value === 4) {
						animatedZoom('moveTo-daylily-bridge');
						// destination is set to Bike Path
					} else if (item.value === 5) {
						animatedZoom('moveTo-bridge-bike');
						// destination is set to Memory Garden
					} else if (item.value === 6) {
						animatedZoom('moveTo-memory-bridge');
					}
				} else if (currentLocation === 'daylily') {
					// If current location is DayLily Collection
					// destination is set to Peony Garden
					if (item.value === 1) {
						animatedZoom('moveTo-peony-daylily');
						// destination is set to Waterfall Garden
					} else if (item.value === 2) {
						animatedZoom('moveTo-daylily-waterfall');
						// destination is set to Bridge
					} else if (item.value === 3) {
						animatedZoom('moveTo-daylily-bridge');
						// destination is set to Bike Path
					} else if (item.value === 5) {
						animatedZoom('moveTo-bike-daylily');
						// destination is set to Memory Garden
					} else if (item.value === 6) {
						animatedZoom('moveTo-memory-daylily');
					}
				} else if (currentLocation === 'bike') {
					// If current location is Bike Path
					// destination is set to Peony Garden
					if (item.value === 1) {
						animatedZoom('moveTo-peony-bike');
						// destination is set to Waterfall Garden
					} else if (item.value === 2) {
						animatedZoom('moveTo-waterfall-bike');
						// destination is set to Bridge
					} else if (item.value === 3) {
						animatedZoom('moveTo-bridge-bike');
						// destination is set to DayLily Collection
					} else if (item.value === 4) {
						animatedZoom('moveTo-bike-daylily');
						// destination is set to Memory Garden
					} else if (item.value === 6) {
						animatedZoom('moveTo-memory-bike');
					}
				} else if (currentLocation === 'memory') {
					// If current location is Memory Garden
					// destination is set to Peony Garden
					if (item.value === 1) {
						animatedZoom('moveTo-memory-peony');
						// destination is set to Waterfall Garden
					} else if (item.value === 2) {
						animatedZoom('moveTo-memory-waterfall');
						// destination is set to Bridge
					} else if (item.value === 3) {
						animatedZoom('moveTo-memory-bridge');
						// destination is set to DayLily Collection
					} else if (item.value === 4) {
						animatedZoom('moveTo-memory-daylily');
						// destination is set to Bike Path
					} else if (item.value === 5) {
						animatedZoom('moveTo-memory-bike');
					}
				}
			});
		});
	});
};
