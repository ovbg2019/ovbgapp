// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function () {
	/* VARIABLE DECLARATIONS */

	/**********LIST OF DOM REFERENCES *********/
	// Access SVG inside Object by using Object ID and .contentDocument
	const MAP_SVG = document.querySelector('#svgMapObj').contentDocument;

	// NEW DROPDOWN
	const TOP_BAR = document.getElementById('destination-menu'); // Initial top bar menu
	const PATH_FINDER = document.querySelector('.pathfinder'); // secondary path finder menu to display when top bar is clicked
	const DROP_DOWN_START = document.querySelector('.path-start-select'); // Select the drop down
	const DROP_DOWN_ITEM_START = document.querySelectorAll('.path-start-select li'); // Create array of li items in drop down list
	const DROP_DOWN_END = document.querySelector('.path-end-select'); // Select the drop down
	const DROP_DOWN_ITEM_END = document.querySelectorAll('.path-end-select li'); // Create array of li items in drop down list
	const GO_BTN = document.querySelector('.go-btn'); // go button inside the path finder menu
	const END_POINT = document.querySelector('.endPoint');

	// Constants to access the tabs
	const TABS = document.querySelectorAll('.tab');

	// Info panel elements
	const INFO_PANEL = document.querySelector('#infoPanel');
	const TITLE_BAR = document.querySelector('#titleBar');
	const TITLE = document.querySelector('#title');
	const CLOSE_BUTTON = document.querySelector('#closeButton');
	const TITLE_BAR_ICON = document.querySelector('#titleBarIcon');
	const GALLERY_IMAGES = document.querySelectorAll('.galleryImage');
	const ABOUT_TEXT = document.querySelector('#about');
	const DESTINATIONS = document.querySelectorAll('.menuItem');

	// Image Gallery elements
	const BIG_IMAGES = document.querySelector('#bigImage');
	const CONTENT_IMG = document.querySelector('#contentImageBox');
	const EXPANDED_IMG = document.querySelector('#expandedImg');
	const MODAL_CONTENT = document.querySelector('#modalContent');
	const CLOSE_GALLERY = document.querySelector('#closeGallery');
	const PREV = document.querySelector('#prev');
	const NEXT = document.querySelector('#next');

	//placeholder
	const PLACE_HOLDER = document.querySelector('#placeholder');

	//New TimeLine Max const for GSAP
	const TLM = new TimelineMax({});
	//Clears Current/Active Animation
	const REMOVE_CURRENT_ANIMATION = function () {
		TLM.progress(0).clear();
  };
  
  const BACKGROUND_COLORS = [
    '#B15222',
    '#B04A7F',
    '#327687',
    '#806B53',
    '#7D6287',
    '#4571A2'
  ]

	//SVG PATH VARIABLES
	let pathToDraw = '';
	let duration = 0;
	let length = 0;
	let repeat = 0;


	// variable to store the active colour to be set to the tabs
	let activeColour = '';

	// variable to identify which tab to open
	let id = 0;

	// variable to store and read the state of the infoPanel (0: closed, 1: minimized, 2: open)
	let infoPanelState = 0;

	// This block of code will parse the data from the URL of the page and determine which tab to open when the app initially opens

	// parsing the id from the URL of the webpage
	let params = new URLSearchParams(location.search);
	let parsed = params.get('id');

	// storing the parsed id in the id variable
	id = parseInt(parsed);

	// Set this via QR or nav button
	// *** Hard coded for testing purposes ***
	// currently defaults to 0 if ID is not set
	let currentLocation = id ? id : 0;

  // drop down elements for styling background upon click events
	let placeholderStart = document.querySelector('.placeholder-start');
  let placeholderEnd = document.querySelector('.placeholder-end');
  // drop down state management
  let startDropDownState = false;
  let endDropDownState = false;
  let selectedItem = currentLocation;


	// set destination position based on dropdown selection, initially based on id
	let destination = '';

	// variables to store the zoom parameters
	let leftScroll = '';
	let topScroll = '';
	let zoomLevel = '';

	// variables for the pinch zoom
	let MAP_SVG_OBJ = document.querySelector('#svgMapObj');
	MAP_SVG_OBJ.style.height = '100%';
	let evCache = new Array();
  let prevDiff = -1;


	// declaring an array of object to to store the values
	let parkFeature = [{
			//0
			name: 'Bike Trail',
			colour: '#B15222',
			icon: 'images/icons/bike_path_icon.svg',
			about: '<p>This is a 7 km paved multi-use recreational trail that stretches from Lakeview Park to the Oshawa Valley Botanical Garden. Surrounded by lush vegetation the recreational trail meanders along the Oshawa Creek.</p><p> Along the recreational trail there are connections to other recreational trails including the Michael Starr Trail, Harmony Creek Trail, and other attractions including Oshawa Valley Botanical Garden and downtown Oshawa.</p> <p> Portions of the recreational trail travel close to the creek and has steep slopes, sharp turns and unprotected edges. Caution should be used when accessing and maneuvering the recreational trail.</p>',
			galleryImages: [
				'images/bike_path/image1.jpg',
				'images/bike_path/image2.jpg',
				'images/bike_path/image3.jpg',
				'images/bike_path/image4.jpg',
			],
			paths: [
				['pin', 10, 500, 0],
				['bike_path_to_peony', 5, 608, -1],
				['bike_path_to_waterfall_garden', 5, 915, -1],
				['bike_path_to_bridge', 7, 199, -1],
				['bike_path_to_daylily', 8, 630, -1],
				['bike_path_to_memory_garden', 8, 1829, -1],
			],
			featureZoomPoints: ['180%', 0.2, 1],
			pathZoomPoints: [
				['100%', 0.4, 0.95],
				['100%', 0.3, 1.05],
				['100%', 0.1, 0.9],
				['100%', 0.1, 1.05],
				['100%', 0.01, 1],
				['100%', 0, 1],
			],
		},
		{ //1
			name: 'Peony Garden',
			colour: '#B04A7F',
			icon: 'images/icons/peony_icon.svg',
			about: '<p>The Peony Garden is located within the Oshawa Valley Botanical Garden. In 2001, the Canadian Peony Society donated 100 plants from the Wally Gilbert Collection to the project. This contribution led to the official launch of the Oshawa Valley Botanical Garden.</p> <p>Further donations from peony breeders and suppliers across North America have led to the entire collection flourishing into the largest contemporary collection of peonies in North America. With more than 300 varieties in cultivation, the collection is truly impressive!</p> <p>The succession of blooms begins in late May and continues through to the last week of June. The Annual Peony Festival coincides with the climax of the bloom cycle in June.</p>',
			galleryImages: [
				'images/peony/image1.jpg',
				'images/peony/image2.jpg',
				'images/peony/image3.jpg',
				'images/peony/image4.jpg',
			],
			/* DRAWING PATHS*/
			paths: [
				['peony_to_bike_path', 5, 608, -1],
				['pin-5', 3, 300, 0],
				['peony_to_waterfall_garden', 5, 866, -1],
				['peony_to_bridge', 5, 807, -1],
				['peony_to_daylily', 8, 1272, -1],
				['peony_to_memory_garden', 12, 2472, -1],
			],
			featureZoomPoints: ['180%', 0.4, 0.95],
			pathZoomPoints: [
				['100%', 0.4, 0.95],
				['100%', 0.3, 1.05],
				['100%', 0.1, 0.7],
				['100%', 0.1, 1],
				['100%', 0.01, 1],
				['100%', 0, 1],
			]
		}, { //2
			name: 'Waterfall Garden',
			colour: '#327687',
			icon: 'images/icons/water_feature_icon.svg',
			about: '<p>The Rockery Garden is located within Kinsman Valley Park of the Oshawa Valley Botanical Garden. It is just north of the Peony Garden and features a waterfall.</p> <p>The garden and its surroundings provides the perfect opportunity to enjoy nature and is a beautiful backdrop for any occasion.',
			galleryImages: [
				'images/waterfall_garden/image1.jpg',
				'images/waterfall_garden/image2.jpg',
				'images/waterfall_garden/image3.jpg',
				'images/waterfall_garden/image4.jpg',
			],
			paths: [
				['waterfall_garden_to_bike_path', 5, 915, -1],
				['waterfall_garden_to_peony', 5, 866, -1],
				['pin-3', 3, 300, 0],
				['waterfall_garden_to_bridge', 7, 1118, -1],
				['waterfall_garden_to_daylily', 7, 1580, -1],
				['waterfall_garden_to_memory_garden', 10, 2779, -1],
			],
			featureZoomPoints: ['170%', 0.35, 0.4],
			pathZoomPoints: [
				['100%', 0.4, 0.55],
				['100%', 0.3, 0.65],
				['100%', 0.1, 0.4],
				['100%', 0.1, 0.6],
				['100%', 0.01, 0.6],
				['100%', 0, 0.55],
			],
		}, { //3
			name: 'Rotary Bridge',
			colour: '#806B53',
			icon: 'images/icons/bridge_icon.svg',
			about: '<p>Rotary Bridge was dedicated by the Rotary Club Oshawa-Parkwood and opened in celebration of the 100th anniversary of Rotary International in 2006.</p> <p>It is located over The Oshawa Creek in The Oshawa Valley Botanical Gardens and it will serve to remind the citizens of Oshawa of the tremendous acts of service that both Rotary Clubs have performed for so many years.</p>',
			galleryImages: [
				'images/bridge/image1.jpg',
				'images/bridge/image2.jpg',
				'images/bridge/image3.jpg',
				'images/bridge/image4.jpg',
			],
			paths: [
				['bridge_to_bike_path', 7, 199, -1],
				['bridge_to_peony', 5, 807, -1],
				['bridge_to_waterfall_garden', 7, 1118, -1],
				['pin-4', 3, 300, 0],
				['bridge_to_daylily', 5, 615, -1],
				['bridge_to_memory_garden', 8, 1814, -1],
			],
			featureZoomPoints: ['200%', 0.145, 1.4],
			pathZoomPoints: [
				['100%', 0.4, 1.3],
				['100%', 0.3, 1.3],
				['100%', 0.1, 1.3],
				['100%', 0.1, 1.3],
				['100%', 0.01, 1.3],
				['100%', 0, 1.3],
			],
		}, {
			//4
			name: 'Daylily Collection',
			colour: '#7D6287',
			icon: 'images/icons/daylily_icon.svg',
			about: '<p>The one of a kind collection of locally hybridized daylilies addition to the already beautiful gardens was made possible by the generous donation from Henry Lorrain and the late Douglas Lycett, founders of We’re in the Hayfield Now.</p> <p>The City would like to thank the volunteers including the Oshawa Garden Club, Brooklin Horticulture Society and individual volunteers who dedicated their time to dig, transport, store and replant the daylilies to make this collection a reality.</p> <p>The 265 daylily collection was established in 2017 and can be found on the east side of the Oshawa Creek directly across from the Peony Garden with access to the Kolodzie Oshawa Creek Bike Path.</p>',
			galleryImages: [
				'images/daylily/image1.jpg',
				'images/daylily/image2.jpg',
				'images/daylily/image3.jpg',
				'images/daylily/image4.jpg',
			],
			paths: [
				['daylily_to_bike_path', 8, 630, -1],
				['daylily_to_peony', 8, 1272, -1],
				['daylily_to_waterfall_garden', 7, 1580, -1],
				['daylily_to_bridge', 5, 615, -1],
				['pin-2', 3, 300, -1],
				['daylily_to_memory_garden', 6, 1214, -1],

			],
			featureZoomPoints: ['220%', 0, 1.33],
			pathZoomPoints: [
				['100%', 0.4, 1],
				['100%', 0.3, 1],
				['100%', 0.1, 1],
				['100%', 0.1, 1],
				['100%', 0.01, 0.6],
				['100%', 0, 0.83],
			],
		}, { //5
			name: 'Memory Garden',
			colour: '#4571A2',
			icon: 'images/icons/memory_garden_icon.svg',
			about: '<p>The Memory Garden is comprised of several gardens and includes tree lined walkways and a central gathering area which provides a formal gathering space and opportunities for passive recreation. The Memory Garden provides an opportunity where residents can honour and remember loved ones through the Commemorative Tree and Bench program.</p> <p>Visitors to the Oshawa Valley Botanical Gardens can now enjoy a new shade structure thanks to donations from the Rotary Club of Oshawa and the Rotary Club of Oshawa-Parkwood.</p> <p>The shade structure is classically designed and features an antique bronze Rotary emblem in the center of the floor, perfect for quiet contemplation, as a centrepiece for photographs or as a formal wedding ceremony.</p>',
			galleryImages: [
				'images/memory_garden/image1.jpg',
				'images/memory_garden/image2.jpg',
				'images/memory_garden/image3.jpg',
				'images/memory_garden/image4.jpg',
			],
			paths: [
				['memory_garden_to_bike_path', 8, 1829, -1],
				['memory_garden_to_peony', 10, 2472, -1],
				['memory_garden_to_waterfall_garden', 12, 2779, -1],
				['memory_garden_to_bridge', 8, 1814, -1],
				['memory_garden_to_daylily', 6, 1214, -1],
				['memory_gazebo_icon', 15, 500, 0],
			],
			featureZoomPoints: ['170%', 0, 0.06],
			pathZoomPoints: [
				['100%', 0.4, 0.2],
				['100%', 0.3, 0.2],
				['100%', 0.1, 0.2],
				['100%', 0.1, 0.2],
				['100%', 0.01, 0.2],
				['100%', 0, 0.33],
			],
		},
	];


	/* FUNCTION DEFINITIONS */

	// MAIN DRAW Function
	const DRAW = (path, duration, length, repeat) => {
		REMOVE_CURRENT_ANIMATION();
		const STROKE_WIDTH = 15;
		TLM.fromTo(
			path,
			duration, {
				strokeWidth: STROKE_WIDTH,
				strokeDasharray: length,
				strokeDashoffset: length,
			}, {
				delay: 2,
				stroke: '#679DF6',
				strokeWidth: STROKE_WIDTH,
				strokeDasharray: length,
				strokeDashoffset: 0,
				repeat: repeat,
				ease: Sine.easeInOut,
				repeatDelay: 1.3,
				onComplete: () => {
					if (repeat === 0) {
						REMOVE_CURRENT_ANIMATION();
					}
				}
			}
		);
	};


	/* FUNCTIONS FOR THE ANIMATING THE MAP USING CLASSES, SET THE START POINT AND DROP DOWN MENU */

	// NEW DROP DOWN CODE ********* START

  // Dropdown opens on page load// or at end of splash animation, then closes again

  function sneakPeakDropDown() {
    PATH_FINDER.classList.remove('hidden');
    TweenMax
    .from(PATH_FINDER, 1, {
      delay: 0.5,
      opacity: 0,
      top: 10,
      onComplete:  function() {
        TweenMax
        .to(PATH_FINDER, 0.8, {
          delay: 3,
          opacity: 0,
          top: 0,
          onComplete:  function() {
            PATH_FINDER.classList.add('hidden');
            PATH_FINDER.style.opacity = 1;
            PATH_FINDER.style.top = "9vh";
          }
        });
      }  
    });
  }

  sneakPeakDropDown();


	// if anywhere in the map is clicked the dropdown will close
	MAP_SVG.addEventListener('click', function (e) {
		//reset the place holder text to where to?
		PLACE_HOLDER.textContent = "Where to?";

		DROP_DOWN_ITEM_START.forEach((item, i) => {
			// toggle the hidden class on each item in the list (unhiding them)
			if (i !== 0) {
				item.classList.add('hidden');
			} else {
				item.classList.remove('hidden');
			}
			PATH_FINDER.classList.add('hidden'); // hide pathfinder dropdown
			// hide endpoint menu while starting point is being selected
			END_POINT.classList.remove('hidden');

			// Update to and from values to prevent errors when drop downs are left open upon outside click on map	
			placeholderStart.textContent = parkFeature[id].name;
			// Reset destination display text 
			placeholderEnd.textContent = 'Where to?'

		});

		DROP_DOWN_ITEM_END.forEach((item, i) => {
			// toggle the hidden class on each item in the list (unhiding them)
			if (i !== 0) {
				item.classList.add('hidden');
			} else {
				item.classList.remove('hidden');
			}
			// Reset dropdown text value to select destination
			END_POINT.classList.remove('hidden');
		});

	});

	TOP_BAR.addEventListener('click', function () {
		// change the text on place holder
		PLACE_HOLDER.textContent = "Select Destination";

		PATH_FINDER.classList.toggle('hidden');
    placeholderStart.textContent = parkFeature[currentLocation].name;
    
		// To accomidate the dropdowns removing redundent locations
		if (destination) {
			placeholderEnd.textContent = parkFeature[destination].name;
		}
	});


	// Create event listener on drop down menu
	DROP_DOWN_START.addEventListener('click', function () {
      // Hide the endpoint select
      END_POINT.classList.toggle('hidden');
      // DROP_DOWN_START.style.backgroundColor = "#f7f2db";

      // Loop through the elements in the drop down and add event listeners to them
      // i represents index of item in array
      DROP_DOWN_ITEM_START.forEach((item, i) => {

        // toggle the hidden class on each item in the list (unhiding them)
        // hide destination from starting list
        item.classList.toggle('hidden');
        // Add the event listener to the item
        item.addEventListener('click', function () {
          startDropDownState = !startDropDownState;
          selectedItem = i - 1;
        // will set destination location based item in dropdown being selected
				if (i !== 0) {
          currentLocation = i - 1;
        }

        // Upon clicking an item in the list set the displayed text to the selected location name
        if(startDropDownState) {
          DROP_DOWN_START.style.backgroundColor = BACKGROUND_COLORS[currentLocation];
          placeholderStart.style.backgroundColor = BACKGROUND_COLORS[currentLocation];
          placeholderStart.style.color = "#f7f2db";
        } else {
          DROP_DOWN_START.style.backgroundColor = "#f7f2db";

        }
        placeholderStart.textContent = parkFeature[currentLocation].name;
			});
    });
    startDropDownState = false;
    
	});

	// Create event listener on drop down menu
	DROP_DOWN_END.addEventListener('click', function () {
		// Loop through the elements in the drop down and add event listeners to them
		DROP_DOWN_ITEM_END.forEach((item, i) => {
			// toggle the hidden class on each item in the list (unhiding them)
			// hide destination if it has been selected as start position
			item.classList.toggle('hidden');
			// Add the event listener to the item
			item.addEventListener('click', function () {
        endDropDownState = !endDropDownState;
				// will set destination location based item in drop down being selected
				if (i !== 0) {
					destination = i - 1;
        }
        
        // Upon clicking an item in the list set the displayed text to the selected location name
        if(endDropDownState) {
          DROP_DOWN_END.style.backgroundColor = BACKGROUND_COLORS[destination];
          placeholderEnd.style.backgroundColor = BACKGROUND_COLORS[destination];
          placeholderEnd.style.color = "#f7f2db";
        } else {
          DROP_DOWN_END.style.backgroundColor = "#f7f2db";
        }
        placeholderEnd.textContent = parkFeature[destination].name;
			});
    });
    endDropDownState = false;
	});

	// Handle Go button event, will execute zoom function upon click
	GO_BTN.addEventListener('click', function () {
		// Call zoom function based on current destination selection
		if (destination) {
			console.log('Loc: ' + currentLocation + ' ' + parkFeature[currentLocation].name);
			console.log('Dest: ' + destination + ' ' + parkFeature[destination].name);
			pathZoomIn(currentLocation, destination);

			pathToDraw = MAP_SVG.querySelector('#' + parkFeature[currentLocation].paths[destination][0]);
			duration = parkFeature[currentLocation].paths[destination][1];
			length = parkFeature[currentLocation].paths[destination][2];
			repeat = parkFeature[currentLocation].paths[destination][3];

			//Draws the path, duration and length is hard coded
			DRAW(pathToDraw, duration, length, repeat);

			// Hide with the path finder menu
			PATH_FINDER.classList.add('hidden');
		}
	});

	// NEW DROP DOWN CODE ********* END
	// ************************************************************************************************

	/* OPENING AND CLOSING THE INFORMATION PANEL AND POPULATING IT WITH THE CONTENT */

	// opening the info panel and populating it with content based on the id and tab determined from the URL
	if (!isNaN(id)) {
		setContent();
		openInfoPanel();
	} else {
		id = 0;
	}

	// a user can use TAB key to bring focus to different tabs
	// this loop changes the id based on the tab that is being focused
	for (let i in TABS) {
		TABS[i].onfocus = function () {
			id = i;
		};
	}

	// this function opens the info panel when ENTER key is pressed
	document.body.onkeyup = function (e) {
		if (e.keyCode === 13) {
			// closing the info panel before changing content
			closeInfoPanel();
			// using the setTimeout to delay and sync the loading of content with the animation
			// setting the content in the info panel
			setTimeout(setContent, 350);
			// opening the panel with new content
			setTimeout(openInfoPanel, 500);
		}
	};

	// setting event listener on each tab using a loop (to reduce redundant code)
	// will allow the user to click each tab and based on the tab selected, it will populate the content
	for (let i in TABS) {
		// applying a function to onclick event of each tab
		TABS[i].onclick = function () {
			REMOVE_CURRENT_ANIMATION();
			// setting the id and the content based on the id
			id = i;
			//update current location value based on tab clicked
			currentLocation = parseInt(i);
			// closing the info panel before changing content
			closeInfoPanel();
			// using the setTimeout to delay and sync the loading of content with the animation
			// setting the content in the info panel
			setTimeout(setContent, 350);
			// opening the panel with new content
			openInfoPanel();
			//update starting point text to respresent new starting location
      placeholderStart.textContent = parkFeature[currentLocation].name;
      placeholderStart.style.backgroundColor = BACKGROUND_COLORS[currentLocation];  
      DROP_DOWN_START.style.backgroundColor = BACKGROUND_COLORS[currentLocation];
			// hide the path finder menu
			PATH_FINDER.classList.add('hidden');
		};
	}

	TITLE_BAR.onclick = function () {
		minimizeInfoPanel();
	};

	// closing the tab on close button click
	CLOSE_BUTTON.onclick = function () {
		closeInfoPanel();
	};

	// Functions to reset the appearance of the tabs
	function resetTabAppearance() {
		for (let i = 0; i < 6; i++) {
			TABS[i].style.backgroundColor = '';
			TITLE_BAR.style.backgroundColor = '#383838';
		}

		//reset info to the top - the info will scroll to the top once click to other tab
		document.getElementById('contentBox').scrollTop = 0;
	}

	// function to set all the content inside the info panel
	function setContent() {
		resetTabAppearance();
		activeColour = parkFeature[id].colour;
		TABS[id].style.backgroundColor = activeColour;
		TITLE_BAR.style.backgroundColor = activeColour;
		TITLE.textContent = parkFeature[id].name;
		TITLE_BAR_ICON.src = parkFeature[id].icon;
		for (let j in GALLERY_IMAGES) GALLERY_IMAGES[j].src = parkFeature[id].galleryImages[j];
		ABOUT_TEXT.innerHTML = parkFeature[id].about;
	}

	// this function animates the infoPanel and its contents when it opens up
	function openInfoPanel() {
		// animating the panel while opening
		if (infoPanelState < 2) {
			if (infoPanelState === 0) {
				TweenMax.fromTo(
					'#infoPanel',
					0.75, {
						bottom: '-100vh',
					}, {
						delay: 0.5,
						bottom: '7vh',
						ease: Sine.easeOut,
					}
				);
			} else if (infoPanelState === 1) {
				TweenMax.fromTo(
					'#infoPanel',
					0.75, {
						bottom: INFO_PANEL.style.bottom,
					}, {
						bottom: '7vh',
						ease: Sine.easeOut,
					}
				);
			}

			// scaling the map to compensate for the opening of the info panel
			// if condition to only make it work on mobile
			if (window.innerWidth < 769) {
				featureZoomIn();
			}
			// setting state of the info panel to OPEN
			infoPanelState = 2;
		}
	}

	// this function animates the infoPanel and its contents when it closes
	function closeInfoPanel() {
		// animating the info panel while closing
		if (infoPanelState > 0) {
			TweenMax.fromTo(
				'#infoPanel',
				1, {
					bottom: INFO_PANEL.style.bottom,
				}, {
					bottom: '-100vh',
					onComplete: function () {
						resetTabAppearance();
						// scaling the map back to full height
						// if condition to only make it work on mobile
						if (window.innerWidth < 769) {
							// zooming out to the full map
							console.log(destination);
							if (destination) {
								mapZoomOut(92);
								pathZoomIn(currentLocation, destination);
							}
							else
								mapZoomOut(92);
						}
					},
				}
			);

			// setting state of the info panel to CLOSED
			infoPanelState = 0;
		}
	}

	function minimizeInfoPanel() {
		// animating the info panel while closing
		if (infoPanelState === 2) {
			TweenMax.fromTo(
				'#infoPanel',
				0.75, {
					bottom: INFO_PANEL.style.bottom,
				}, {
					bottom: '-24vh',
					ease: Sine.easeOut,
					onComplete: function () {
						resetTabAppearance();
						// scaling the map back to full height
						// if condition to only make it work on mobile
						if (window.innerWidth < 769) {
							// zooming out to the full map
							if (destination) {
								mapZoomOut(85);
								pathZoomIn(currentLocation, destination);
							}
							else
								mapZoomOut(85);
						}
					},
				}
			);
			TweenMax.to('#titleBar', 0.75, {
				backgroundColor: '#383838',
			});

			// setting state of the info panel to MINIMIZED
			infoPanelState = 1;
		} else if (infoPanelState === 1) {
			setContent();
			openInfoPanel();
		}
	}

	// ZOOM IN: PARK FEATURES
	// this function takes the zoom level and scroll values to scroll and zoom the map to the visible area
	function featureZoomIn() {
		// variable to store the value to scroll from left
		leftScroll = parkFeature[id].featureZoomPoints[2] * window.innerHeight;

		// variable to store the value to scroll from the top
		topScroll = parkFeature[id].featureZoomPoints[1] * window.innerHeight;

		// variable to store the zoom level
		zoomLevel = parkFeature[id].featureZoomPoints[0];

		// animating the zoom
		TweenMax.to('#svgMapObj', 2.5, {
			delay: 0.5,
			height: zoomLevel,
			// ease: Sine.easeOut,
		});

		// animating the scroll
		TweenMax.to('#mapBox', 2.5, {
			delay: 0.5,
			height: '53.5vh',
			scrollTo: {
				y: topScroll,
				x: leftScroll,
			},
			// ease: Sine.easeOut
		});
	}

	// ZOOM IN: NAVIGATION PATHS
	// this function takes the zoom level and scroll values to scroll and zoom the map to the visible area
	// ** added a start argument as parkfeature was not being updated dynamically before
	function pathZoomIn(start, end) {
		// variable to store the value to scroll from left
		leftScroll = parkFeature[start].pathZoomPoints[end][2] * window.innerHeight;

		// variable to store the value to scroll from the top
		topScroll = parkFeature[start].pathZoomPoints[end][1] * window.innerHeight;

		// variable to store the zoom level
		zoomLevel = parkFeature[start].pathZoomPoints[end][0];

		// console.log('Left Scroll: ' + leftScroll + '\nTop Scroll: ' + topScroll + '\nZoom: ' + zoomLevel);

		// animating the zoom
		TweenMax.to('#svgMapObj', 1.75, {
			height: zoomLevel,
			ease: Sine.easeOut,
		});

		// animating the scroll
		TweenMax.to('#mapBox', 1.75, {
			scrollTo: {
				y: topScroll,
				x: leftScroll,
			},
			ease: Sine.easeOut,
		});
	}

	// this function animates the map back to fit the full screen
	function mapZoomOut(mapHeight) {
		// zooming out to the full map
		// value passed is the visible height of the map
		// TAKE FOOTER INTO ACCOUNT WHILE SETTING
		TweenMax.to('#svgMapObj', 1.5, {
			height: '100%',
		});

		TweenMax.to('#mapBox', 1.25, {
			height: mapHeight + 'vh',
		});
	}


	/* PINCH AND ZOOM */

	// function to register touch when it starts
	MAP_SVG.addEventListener('touchstart', function (e) {
		// pushes the event in the array
		evCache.push(e);
		// console.log('start');
		// gets the existing height of the map
		height = parseInt(MAP_SVG_OBJ.style.height.replace('%', ''));
	});

	// function to register the end when the user stops the interaction
	MAP_SVG.addEventListener('touchend', function (e) {
		// console.log('end');

		// reset the difference variable to prepare for the next pinch
		if (evCache.length < 2)
			prevDiff = -1;
		// reset the event cache for the next pinch
		for (let i = 0; i < evCache.length; i++) {
			evCache = [];
		}
	});

	// function to register the pinch and then implement the zoom
	MAP_SVG.addEventListener('touchmove', function (e) {
		// console.log('height: ' + height);
		// console.log('move');

		// inserting the event in the event cache array
		for (let i = 0; i < evCache.length; i++) {
			if (e.pointerId == evCache[i].pointerId) {
				evCache[i] = e;
				break;
			}
		}

		// to be executed when two touches are detected simultaneously
		if (evCache.length == 2) {
			console.log(e);
			// get the distance between two touches
			let curDiffX = 0;
			let curDiffY = 0;

			var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
			if (!(isSafari)) {
				curDiffX = Math.abs(evCache[0].touches[0].clientX - evCache[0].touches[1].clientX);
				curDiffY = Math.abs(evCache[0].touches[0].clientY - evCache[0].touches[1].clientY);
			}

			let curDiff = Math.hypot(curDiffX, curDiffY);

			if (prevDiff > 0) {
				// to be executed only when the distance is increasing and only if the map height is less than 298%
				if (curDiff > prevDiff && height < 298) {
					// console.log('Zoom IN');
					height = height + curDiff * 0.025;
				}

				// to be executed only when the distance is decreasing and only if the map height is more than 102%
				if (curDiff < prevDiff && height >= 105) {
					// console.log('Zoom OUT');
					height = height - curDiff * 0.02;
				}
			}

			// animate the zoom
			TweenMax.to('#svgMapObj', 0.4, {
				height: height + '%',
				ease: Sine.easeOut
			});

			// set prevDiff to currDiff to check the increase/decrease in pinch
			prevDiff = curDiff;
		}
	}, {
		passive: false
	});

	/* PINCH AND ZOOM -- FOR iDevices */

	// function to register touch when it starts
	MAP_SVG.addEventListener('gesturestart', function (e) {
		// pushes the event in the array
		evCache.push(e);
		// console.log('ipad start');
		// gets the existing height of the map
		height = parseInt(MAP_SVG_OBJ.style.height.replace('%', ''));
	});

	// function to register the end when the user stops the interaction
	MAP_SVG.addEventListener('gestureend', function (e) {
		// console.log('ipad end');

		// reset the difference variable to prepare for the next pinch
		if (evCache.length < 2)
			prevDiff = -1;
		// reset the event cache for the next pinch
		for (let i = 0; i < evCache.length; i++) {
			evCache = [];
		}
	});

	// function to register the pinch and then implement the zoom
	MAP_SVG.addEventListener('gesturechange', function (e) {
		// console.log('height: ' + height);
		// console.log('ipad change');
		// console.log(e);
		e.preventDefault();
		// console.log('before: ' + height);

		if (height >= 90 && height <= 300) {
			let scale = parseFloat(e.scale);
			console.log(scale);
			height = 100 * scale;
			if (height < 100)
				height = 100;
			else if (height > 300)
				height = 300;
			console.log(height);

			TweenMax.to('#svgMapObj', 0.2, {
				height: height + '%',
				ease: Sine.easeOut
			});
		}
	}, {
		passive: false
	});


	/* EXPANDING THE IMAGE GALLERY */

	//set the slide Index (global image counter)
	let slideIndex = 0;

	// function open the image gallery in full size
	function openModal(index) {
		slideIndex = index;
		MODAL_CONTENT.style.display = "flex";
		EXPANDED_IMG.style.display = "flex";
		CLOSE_GALLERY.style.display = "flex";

		BIG_IMAGES.src = parkFeature[id].galleryImages[index];

		//animate the image gallery
		TweenMax.from('#expandedImg', 0.5, {
			opacity: 0,
			ease: Sine.easeOut
		});

	};

	//identify which image selected by setting i on gallery images
	for (let i in GALLERY_IMAGES) {
		//set the image selected
		if (!isNaN(i)) {
			GALLERY_IMAGES[i].onclick = function () {
				//pick the number of image
				openModal(parseInt(i));
			};
		}

	}
	//event handler to next image
	NEXT.onclick = function () {
		slideIndex++;
		slideIndex = slideIndex % GALLERY_IMAGES.length;
		openModal(slideIndex);
	}
	//event handler to previous image
	PREV.onclick = function () {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = GALLERY_IMAGES.length - 1;
		}
		openModal(slideIndex);
	}

	//event handler close images window
	function closeImgGallery() {
		MODAL_CONTENT.style.display = "none";
		EXPANDED_IMG.style.display = "none";
		CLOSE_GALLERY.style.display = "none";
	}

	CLOSE_GALLERY.addEventListener('click', function () {
		closeImgGallery();
	});

	// END IMAGE GALLERY SCRIPT ----------
};