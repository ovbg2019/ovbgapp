// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {
	// Constants for the dropdown
	const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
	const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list

	// Set this via QR or nav button
	// *** Hard coded peony for testing purposes ***
	let currentLocation = 'bike';

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

	// Animate zoom/ position of location
	const animatedZoom = function(classes) {
		// Target object element holding SVG of map
		const MAP_OBJ = document.getElementById('svgMapObj');
		// Get the SVG document inside the Object tag
		const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap');
		// Reset Class List
		MAP_SVG.removeAttribute('class');
		// Add classes to SVG
		MAP_SVG.classList.add(classes);
	};

	//Animate Paths
	const tlm = new TimelineMax({});

	const removeCurrentAnimation = function() {
		tlm.progress(0).clear();
	};
	//declare variable index
	let index;

	/* decare new array - pathList which will contain objects of path*/
	let pathList = new Array();

	//first object with array index 0
	pathList[0] = {
		draw: () => {
			removeCurrentAnimation();
		},
	};
	pathList[1] = {
		draw: () => {
			removeCurrentAnimation();
			tlm.fromTo(
				peonyToBridgePath,
				5,
				{
					strokeWidth: 10,
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
					// ease: Circ.easeOut,
					// ease: Circ.easeIn,
					repeatDelay: 1,
				}
			);
		},
	};
	pathList[2] = {
		draw: () => {
			removeCurrentAnimation();
			tlm.fromTo(
				bridgeToPeonyPath,
				5,
				{
					strokeWidth: 10,
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
					// ease: Circ.easeOut,
					// ease: Circ.easeIn,
					repeatDelay: 1,
				}
			);
		},
	};

	//End of Path Animation

	// Create evenbt listener on drop down menu
	DROP_DOWN.addEventListener('click', function() {
		//
		// index = DROP_DOWN.selectedIndex;

		// /*Determines which path was selected from the list and then uses the value of the same property to retrieve object from the array.*/
		// // index = DROP_DOWN.selectedIndex;

		// //call on the drawn method from the array
		// pathList[index].draw();

		// // move to next array element
		// index++;

		// //circle back to 0 i.e 1st element
		// index = index % pathList.length;

		// Loop through the elements in the drop down and add event listeners to them

		DROP_DOWN_ITEM.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			item.classList.toggle('hidden');

			// Add the event listener to the item
			item.addEventListener('click', function() {
				// Upon clicking an item in the list set the displayed text to the selected location name
				document.getElementById('placeholder').textContent = `Go to: ${LOCATIONS[item.value]}`;

				// If current location is Peony Garden
				if (currentLocation === 'peony') {
					// destination is set to Waterfall Garden
					if (item.value === 2) {
						animatedZoom('moveTo-peony-waterfall');

						// destination is set to Bridge
					} else if (item.value === 3) {
						animatedZoom('moveTo-bridge-peony');
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
						animatedZoom('moveTo-peony-bike');
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
