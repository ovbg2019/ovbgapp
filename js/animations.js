window.onload = function() {
	console.clear();
	//declare consts and set DOM reference
	// Get SVG document inside Object by ID
	// const SVG_MAP_OBJ = document.querySelector('#"svgMapObj').contentDocument;
	// const SVG_MAP = SVG_MAP_OBJ;

	const MAP_OBJ = document.getElementById('svgMapObj');
	// Get the SVG document inside the Object tag
	const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap');

	const SVG_MAP = MAP_SVG;

	//Original Paths //SVG Navigation Paths
	/* Penoy */
	const peonyToBridgePath = SVG_MAP.querySelector('#peony_to_bridge');
	const bridgeToPeonyPath = SVG_MAP.querySelector('#bridge_to_peony');

	//Buttons
	const DROP_DOWN = document.querySelector('.destination-select');
	const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list

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

	//on change event handler, selects the course list and updates the page to the selected course
	DROP_DOWN.addEventListener('click', () => {
		console.log(DROP_DOWN);

		index = DROP_DOWN_ITEM.selectedIndex;

		/*Determines which path was selected from the list and then uses the value of the same property to retrieve object from the array.*/
		// index = DROP_DOWN.selectedIndex;

		//call on the drawn method from the array
		pathList[index].draw();

		// move to next array element
		index++;

		//circle back to 0 i.e 1st element
		index = index % pathList.length;
	});
};
