// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function () {

	//Clearing Console
	console.clear()

	/* VARIABLE DECLARATIONS */

	/**********LIST OF DOM REFERENCES *********/
	// Accessing the splash screen and the app screens
	const APP_SCREEN = document.querySelector('#app');
	const SPLASH_SCREEN = document.querySelector('#splash');

	// delay variable to set delay for animations after splash screen opens
	let splashDelay = 0;

	// Access SVG inside Object by using Object ID and .contentDocument
	const MAP_SVG = document.querySelector('#svgMapObj').contentDocument;

	//To Total Path Length
	// console.log(`peonyToBridgePathLength: ${MAP_SVG.querySelector('#peony_to_bridge').getTotalLength()}`);

	// Accessing all the icons inside the SVG map
	const MAP_ICONS = MAP_SVG.querySelectorAll('#bike_path_icon, #peony_icon, #water_feature_icon, #bridge_icon, #daylily_icon, #memory_gazebo_icon');

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

	//GSAP TimeLine Max const for Path Animation
	const TLM_PATH = new TimelineMax({
		repeat: -1,
		repeatDelay: .5
	});

	//GSAP TimeLine Max const for Icon Animation
	const TLM_ICON = new TimelineMax({});

	//Clears Current/Active Path Animation
	const REMOVE_CURRENT_ANIMATION_PATH = function () {
		TLM_PATH.progress(0).clear();
	};

	//Clears Current/Active Icon Animation
	const REMOVE_CURRENT_ANIMATION_ICON = function () {
		TLM_ICON.progress(0).clear();
	};


	//SVG PATH VARIABLES
	let pathToDraw = '';
	let duration = 0;
	let length = 0;
	let strokeColor = '';

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
	let dropdownState = false;

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
			about: '<p>This is a 7 km paved multi-use recreational trail that stretches from Lakeview Park to the Oshawa Valley Botanical Gardens. Surrounded by lush vegetation the recreational trail meanders along the Oshawa Creek.</p><p> Along the recreational trail there are connections to other recreational trails including the Michael Starr Trail, Harmony Creek Trail, and other attractions including Oshawa Valley Botanical Gardens and downtown Oshawa.</p> <p> Portions of the recreational trail travel close to the creek and has steep slopes, sharp turns and unprotected edges. Caution should be used when accessing and maneuvering the recreational trail.</p>',
			galleryImages: [
				'images/bike_path/image1.jpg',
				'images/bike_path/image2.jpg',
				'images/bike_path/image3.jpg',
				'images/bike_path/image4.jpg',
			],
			paths: [
				['pin circle', 5],
				['bike_path_to_peony', 4],
				['bike_path_to_waterfall_garden', 5],
				['bike_path_to_bridge', 3],
				['bike_path_to_daylily', 8],
				['bike_path_to_memory_garden', 8],
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
			about: '<p>The Peony Garden is located within the Oshawa Valley Botanical Gardens. In 2001, the Canadian Peony Society donated 100 plants from the Wally Gilbert Collection to the project. This contribution led to the official launch of the Oshawa Valley Botanical Gardens.</p> <p>Further donations from peony breeders and suppliers across North America have led to an impressive collection with over 300 varieties. In 2014 the garden was renamed in honour of two major contributors - Michael and Judi Denny.</p> <p>The succession of blooms begins in late May and continues through to the last week of June. The Annual Peony Festival coincides with the climax of the bloom cycle in June.</p> <p>The central gazebo was created for the 75th anniversary of the Oshawa Garden Club and is the work of metal artist James Pronk.</p>',
			galleryImages: [
				'images/peony/image1.jpg',
				'images/peony/image2.jpg',
				'images/peony/image3.jpg',
				'images/peony/image4.jpg',
			],
			/* SVG PATHS */
			paths: [
				['peony_to_bike_path', 5],
				['peony_icon g circle', 5],
				['peony_to_waterfall_garden', 5],
				['peony_to_bridge', 5],
				['peony_to_daylily', 8],
				['peony_to_memory_garden', 12],
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
			about: '<p>The Rockery Garden is located within Kinsmen Valleyview Park of the Oshawa Valley Botanical Gardens. It is just north of the Peony Garden and features a waterfall donated by Ron & Marilyn Bilsky.</p> <p>The garden and its surroundings provides the perfect opportunity to enjoy nature and is a beautiful backdrop for any occasion.',
			galleryImages: [
				'images/waterfall_garden/image1.jpg',
				'images/waterfall_garden/image2.jpg',
				'images/waterfall_garden/image3.jpg',
				'images/waterfall_garden/image4.jpg',
			],
			/* SVG PATHS */
			paths: [
				['waterfall_garden_to_bike_path', 5],
				['waterfall_garden_to_peony', 5],
				['water_feature_icon g circle', 5],
				['waterfall_garden_to_bridge', 7],
				['waterfall_garden_to_daylily', 7],
				['waterfall_garden_to_memory_garden', 10],
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
			about: '<p>Rotary Bridge was dedicated by the Rotary Club Oshawa-Parkwood and opened in celebration of the 100th anniversary of Rotary International in 2006.</p> <p>It is located over The Oshawa Creek in The Oshawa Valley Botanical Gardens and it will serve to remind the citizens of Oshawa of the tremendous acts of service that both Rotary Clubs have performed for so many years.</p> <p>The metal work on the bridge was created by James Pronk, the artist responsible for the Peony Garden gazebo.</p>',
			galleryImages: [
				'images/bridge/image1.jpg',
				'images/bridge/image2.jpg',
				'images/bridge/image3.jpg',
				'images/bridge/image4.jpg',
			],
			/* SVG PATHS */
			paths: [
				['bridge_to_bike_path', 3],
				['bridge_to_peony', 5],
				['bridge_to_waterfall_garden', 7],
				['bridge_icon circle', 5],
				['bridge_to_daylily', 5],
				['bridge_to_memory_garden', 8],
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
			/* SVG PATHS */
			paths: [
				['daylily_to_bike_path', 8],
				['daylily_to_peony', 8],
				['daylily_to_waterfall_garden', 7],
				['daylily_to_bridge', 5],
				['daylily_icon circle', 5],
				['daylily_to_memory_garden', 6],

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
			/* SVG PATHS */
			paths: [
				['memory_garden_to_bike_path', 8],
				['memory_garden_to_peony', 10],
				['memory_garden_to_waterfall_garden', 12],
				['memory_garden_to_bridge', 8],
				['memory_garden_to_daylily', 6],
				['memory_gazebo_icon circle', 5],
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

	// STORING THE DATA ON LOCAL STORAGE OPEN THE SPLASH ONLY ONCE

	// variable to store the state of the load
	var initialLoad = localStorage['initialLoad'] || 1;

	// setting the state to first load for TESTING ONLY.... REMOVE IN FINAL VERSION
	// initialLoad = 1;

	// setting the load state to 0 (not first load) for future app loads
	localStorage['initialLoad'] = '0';

	// open splash screen when apps loads for the first time
	if (initialLoad === 1) {
		// showing the splash screen
		showSplashScreen();
		console.log('First time loading');

		// setting the delay for the subsequent animations (opening the dropdown, opening the tab, zoom etc)
		splashDelay = 2500;

		// Dropdown opens on page load// or at end of splash animation, then closes again
		if (window.innerWidth < 769) {
			setTimeout(sneakPeakDropDown, splashDelay);
		}
	} else {
		console.log('App has been launched before. Clear cache to load the splash again.');

		// load the app screen if the splash is not loading
		TweenMax.to('#app', 0.2, {
			opacity: 1,
		});
	}

	/* FUNCTION DEFINITIONS */

	// ANIMATING THE SPLASH SCREEN

	function showSplashScreen() {
		//hide the app screen

		TweenMax.to("#splash", 0.25, {
			opacity: 1
		});

		TweenMax.from("#splashLogo", 0.5, {
			scale: 0,
			ease: Sine.easeOut,
			onComplete: function () {
				TweenMax.fromTo("#welcomeText p", 0.5, {
					opacity: 0,
					y: "-5vh"

				}, {
					opacity: 1,
					y: "0vh",
					onComplete: function () {
						TweenMax.to("#welcomeText p", 0.5, {
							delay: 0.75,
							opacity: 0,
							onComplete: function () {
								TweenMax.to("#splashLogo", 0.25, {
									scale: 0,
									ease: Sine.easeIn,
									onComplete: function () {
										TweenMax.to("#splash", 0.25, {
											opacity: 0
										});
										TweenMax.to('#app', 0.5, {
											delay: 0.25,
											opacity: 1,
											onComplete: function () {
												SPLASH_SCREEN.style.display = 'none';
											}
										});
									}
								});
							}
						})
					}
				});
			}
		});
	}

	// MAIN DRAW Function
	/* FUNCTION DEFINITIONS */
	// Path Animation Function
	const PATH_ANIMATION = () => {
		REMOVE_CURRENT_ANIMATION_PATH();
		REMOVE_CURRENT_ANIMATION_ICON();

		//retrieves the path name,duration, length and repeat info from paths array inside the parkFeature array.
		path = MAP_SVG.querySelector('#' + parkFeature[currentLocation].paths[destination][0]);
		duration = parkFeature[currentLocation].paths[destination][1];
		length = Math.ceil(path.getTotalLength());
		// length = parkFeature[currentLocation].paths[destination][2];
		let delayCount = 2
		//setting the path values, before animating the path
		TLM_PATH.set(path, {
				strokeDashoffset: length,
				strokeDasharray: length,
				strokeWidth: 15,
				stroke: '#679DF6'
			})
			//animates the path
			.to(path, duration, {
				delay: delayCount,
				strokeDashoffset: 0,
				ease: Sine.easeInOut
			})
			//clears the path before repeat
			.to(path, duration, {
				delay: delayCount,
				strokeDashoffset: -length
			})
	};

	// Icon Animation Function
	const ICON_ANIMATION = () => {
		REMOVE_CURRENT_ANIMATION_ICON();
		REMOVE_CURRENT_ANIMATION_PATH();
		//retrieves the path name,duration, length and repeat info from paths array inside the parkFeature array.
		path = MAP_SVG.querySelector('#' + parkFeature[currentLocation].paths[currentLocation][0]);
		// duration = parkFeature[currentLocation].paths[currentLocation][1];
		duration = 2;
		// length = parkFeature[currentLocation].paths[currentLocation][2];
		// length = Math.ceil(path.getTotalLength());
		length = 350;
		strokeColor = parkFeature[currentLocation].colour;

		// setTimeout(function () {
		// 	TLM_ICON.set(path, {
		// 			strokeDashoffset: length,
		// 			strokeDasharray: length,
		// 			strokeWidth: 10,
		// 			stroke: strokeColor
		// 		})
		// 		.to(path, duration, {
		// 			delay: 0.25,
		// 			strokeDashoffset: 0,
		// 			ease: Power4.easeInOut
		// 		});
		// 	if (currentLocation === destination) {

		// 		//clears the path before repeat
		// 		TLM_ICON.to(path, duration, {
		// 				strokeDashoffset: -length,
		// 				ease: Power4.easeInOut
		// 			}).repeat(-1)
		// 			.progress(0);
		// 	}
		// }, 2000);
		// setTimeout(function () {

		// 	TLM_ICON.progress(0).set(path, {
		// 			strokeDashoffset: length,
		// 			strokeDasharray: length,
		// 			strokeWidth: 10,
		// 			stroke: strokeColor
		// 		})
		// 		.to(path, duration, {
		// 			delay: 0.25,
		// 			strokeDashoffset: 0,
		// 			ease: Power4.easeInOut
		// 		})
		// 		.repeat(0);

		// 	if (currentLocation === destination) {

		// 		//clears the path before repeat
		// 		TLM_ICON.to(path, duration, {
		// 				strokeDashoffset: -length,
		// 				ease: Power4.easeInOut
		// 			}).repeat(-1)
		// 			.progress(0);
		// 	}
		// }, 2000);

		let STROKE_WIDTH = 10;
		TLM_ICON.fromTo(
			path,
			duration, {
				strokeWidth: STROKE_WIDTH,
				strokeDasharray: length,
				strokeDashoffset: length

			}, {
				delay: 3,
				stroke: strokeColor,
				strokeWidth: STROKE_WIDTH,
				strokeDasharray: length,
				strokeDashoffset: 0,
				// repeat: -1
			});
	};

	// if anywhere in the map is clicked the dropdown will close
	MAP_SVG.addEventListener('click', function (e) {
		// openFullScreen();
		closeDropDown();
		//reset the place holder text to where to?
		PLACE_HOLDER.textContent = "Where to?";

		DROP_DOWN_ITEM_START.forEach((item, i) => {
			// toggle the hidden class on each item in the list (reveling them)
			if (i !== 0) {
				item.classList.add('hidden');
			} else {
				item.classList.remove('hidden');
			}
			// PATH_FINDER.classList.add('hidden'); // hide pathfinder dropdown
			// hide endpoint menu while starting point is being selected
			END_POINT.classList.remove('hidden');

		});

		DROP_DOWN_ITEM_END.forEach((item, i) => {
			// toggle the hidden class on each item in the list (reveling them)
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
		// openFullScreen();
		// change the text on place holder
		PLACE_HOLDER.textContent = "Select Destination";

		if (dropdownState) {
			closeDropDown();
		} else {
			openDropDown();
    }

    placeholderStart.textContent = parkFeature[currentLocation].name;
    placeholderStart.style.backgroundColor = parkFeature[currentLocation].colour;
    placeholderStart.style.color = "#f7f2db";

		if (!destination) {
      placeholderEnd.textContent = 'Where to?';
      placeholderEnd.style.backgroundColor = "#f7f2db"; 
      placeholderEnd.style.color = "#383838"; 
    }
	});


	// Create event listener on drop down menu
	DROP_DOWN_START.addEventListener('click', function () {
      // Hide the endpoint select
      END_POINT.classList.toggle('hidden');

      // Loop through the elements in the drop down and add event listeners to them
      // i represents index of item in array
      DROP_DOWN_ITEM_START.forEach((item, i) => {

        if(i - 1 === currentLocation) {
          item.style.backgroundColor = parkFeature[currentLocation].colour;
          item.style.color = '#f7f2db';
          placeholderStart.style.backgroundColor = parkFeature[currentLocation].colour;
          placeholderStart.style.color = "#f7f2db";

        } else {
          item.style.backgroundColor = "#FAF7E9";
          item.style.color = '#383838';
        }

        // toggle the hidden class on each item in the list (unhiding them)
        // hide destination from starting list
        item.classList.toggle('hidden');
        // Add the event listener to the item
        item.addEventListener('click', function () {
          startDropDownState = !startDropDownState;
        // will set destination location based item in dropdown being selected
				if (i !== 0) {
					currentLocation = i - 1;
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

      if(i - 1 === destination) {
        item.style.backgroundColor = parkFeature[destination].colour;
        item.style.color = '#f7f2db';
        placeholderEnd.style.backgroundColor = parkFeature[destination].colour;
        placeholderEnd.style.color = "#f7f2db";

			} else {
				item.style.backgroundColor = "#FAF7E9";
				item.style.color = '#383838';
			}

			// toggle the hidden class on each item in the list (reveling them)
			// hide destination if it has been selected as start position
			item.classList.toggle('hidden');
			// Add the event listener to the item
			item.addEventListener('click', function () {
				endDropDownState = !endDropDownState;
				// will set destination location based item in drop down being selected
				if (i !== 0) {
					destination = i - 1;
				}

        if(!destination) {
          placeholderEnd.textContent = 'Where to?';
          placeholderEnd.style.backgroundColor = "#f7f2db"; 
        }
        
        // placeholderEnd.textContent = parkFeature[destination].name;
			});
		});
		endDropDownState = false;
	});

	// Handle Go button event, will execute zoom function upon click
	GO_BTN.addEventListener('click', function () {
		// Call zoom function based on current destination selection
		if (!destination) {
			destination = 0;
		}
		console.log('Loc: ' + currentLocation + ' ' + parkFeature[currentLocation].name);
		console.log('Dest: ' + destination + ' ' + parkFeature[destination].name);
		pathZoomIn(currentLocation, destination);

    // Colour the bike path or reset it to normal depending on currentLocation and destination
    if(destination === 0 || currentLocation === 0) {
      colorBikePath();
    } else {
      resetBikePath();
    }


		if (currentLocation === destination) {
      console.log('Inside go button icon ifelse');
      console.log(currentLocation);
      console.log(destination);
			// Animates theIcon
			ICON_ANIMATION();
		} else {
			//Animates the path
			PATH_ANIMATION();
		}
		// Hide with the path finder menu
		closeDropDown();

		//Zooms outs
		mapZoomOut(92);

		//CloseInfoPanel or minimized
		closeInfoPanel();
		PLACE_HOLDER.textContent = "Navigating...";
	});

	/* OPENING AND CLOSING THE INFORMATION PANEL AND POPULATING IT WITH THE CONTENT */

	// opening the info panel and populating it with content based on the id and tab determined from the URL
	if (!isNaN(id)) {
		setContent();
		setTimeout(openInfoPanel, splashDelay);
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
			// openFullScreen();
			REMOVE_CURRENT_ANIMATION_PATH();
			REMOVE_CURRENT_ANIMATION_ICON();
			// setting the id and the content based on the id
			id = i;
			//update current location value based on tab clicked
      currentLocation = parseInt(i);
      // reset destination to prevent animation bug
      destination = '';
			// closing the info panel before changing content
			closeInfoPanel();
			// using the setTimeout to delay and sync the loading of content with the animation
			// setting the content in the info panel
			setTimeout(setContent, 350);
			// opening the panel with new content
			openInfoPanel();
			//update starting point text to respresent new starting location
      placeholderStart.textContent = parkFeature[currentLocation].name;
      placeholderStart.style.backgroundColor = parkFeature[currentLocation].colour;
      placeholderStart.style.color = "#f7f2db";
			// hide the path finder menu
			PATH_FINDER.classList.add('hidden');
		}
	};

	// setting event listeners on each of the icons on the map
	// selects the icons from the map using their IDs
	// goes through a loop to open the specific tab
	for (let i in MAP_ICONS) {
		MAP_ICONS[i].onclick = function () {
			closeInfoPanel();
			id = i;
			currentLocation = parseInt(i);
			setContent();
			openInfoPanel();
		};
	}
	// minimizing/maximizing the infoPanel on clicking the title bar
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
	};

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

			//Animates the Icon
			ICON_ANIMATION();
		}
	}

	// this function animates the infoPanel and its contents when it closes
	function closeInfoPanel() {
		// openFullScreen();
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
							} else
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
		// openFullScreen();
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
							} else
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
		TweenMax.fromTo('#expandedImg', 0.5, {
			opacity: 0
		}, {
			opacity: 1
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
  
  // animation for dropdown on pageload
  function sneakPeakDropDown() {
    PATH_FINDER.classList.remove('hidden');
    TweenMax
    .from(PATH_FINDER, 0.6, {
      delay: 0.3,
      opacity: 0,
      top: 15,
      onComplete:  function() {
        TweenMax
        .to(PATH_FINDER, 0.8, {
          delay: 1.2,
          opacity: 0,
          top: 15,
          onComplete:  function() {
            PATH_FINDER.classList.add('hidden');
            PATH_FINDER.style.opacity = 1;
            PATH_FINDER.style.top = "10vh";
          }
        });
      }  
    });
  }
// dropdown animation to open
function openDropDown() {
  PATH_FINDER.classList.remove('hidden');
  TweenMax
  .from(PATH_FINDER, 0.8, {
    delay: 0.2,
    opacity: 0,
    top: 15,
    onComplete:  function() {
      PATH_FINDER.style.opacity = 1;
      PATH_FINDER.style.top = "10vh";
      dropdownState = true;
    }  
  });
}
// dropdown animation to close
function closeDropDown() {
  TweenMax
  .to(PATH_FINDER, 0.8, {
    delay: 0.2,
    opacity: 0,
    top: 15,
    height: 10 +'vh',
    overflow: "hidden",
    onComplete:  function() {
      PATH_FINDER.style.opacity = 1;
      PATH_FINDER.style.top = "10vh";
      PATH_FINDER.style.height = '15vh';
      PATH_FINDER.style.overflow = "unset";
      dropdownState = false;
      PATH_FINDER.classList.add('hidden');
    }  
  });
}

function colorBikePath() {
  TweenMax.to(MAP_SVG.getElementById('bike_path_animate'), 2, {
    stroke: '#efaa5f'
  });
}

function resetBikePath() {
  TweenMax.to(MAP_SVG.getElementById('bike_path_animate'), 2, {
    stroke: '#f7f2db',
  });
}

	function openFullScreen() {
		// const PAGE = document.documentElement;
		// if (!fullScreen) {
		// 	if (PAGE.requestFullscreen) {
		// 		PAGE.requestFullscreen();
		// 	} else if (PAGE.mozRequestFullScreen) {
		// 		/* Firefox */
		// 		PAGE.mozRequestFullScreen();
		// 	} else if (PAGE.webkitRequestFullscreen) {
		// 		/* Chrome, Safari and Opera */
		// 		PAGE.webkitRequestFullscreen();
		// 	} else if (PAGE.msRequestFullscreen) {
		// 		/* IE/Edge */
		// 		PAGE.msRequestFullscreen();
		// 	}
		// }
	}

	// END IMAGE GALLERY SCRIPT ----------
};