// window.onload = function() {
	console.clear();
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

	// Set this via QR or nav button
	// *** Hard coded for testing purposes ***
	let currentLocation = 'peony';

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
			currentLocation = 'bridge';
		} else if (value === 3) {
			currentLocation = 'water feature';
		}
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
	pathList[1] = {
		draw: () => {
			removeCurrentAnimation();
			TLM.fromTo(
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

	const DRAW = (pathList, index) => {
		return pathList[index].draw();
	};

	// Create event listener on drop down menu
	DROP_DOWN.addEventListener('click', function() {
		// Loop through the elements in the drop down and add event listeners to them
		console.log('clicked');

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
					if (item.value === 1) {
						DRAW(pathList, 0);
						console.log(item.value);

						// destination is set to Bridge
					} else if (item.value === 2) {
						DRAW(pathList, 1);
					}
					// } else if (currentLocation === 'waterfall') {
					// 	// If current location is Waterfall Garden
					// 	// destination is set to Peony Garden
					// 	if (item.value === 1) {
					// 		DRAW(pathList, 2);n
					// 	}
				}
			});
		});
	});
// };
