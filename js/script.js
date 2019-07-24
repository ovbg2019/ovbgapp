// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function () {

  /* VARIABLE DECLARATIONS */

  // declaring an array of object to to store the values 
  let parkFeature = [{
      name: 'Bike Trail',
      colour: '#B15222',
      icon: 'images/bike_path_icon.svg',
      about: '<p>This is a 7 km paved multi-use recreational trail that stretches from Lakeview Park to the Oshawa Valley Botanical Garden. Surrounded by lush vegetation the recreational trail meanders along the Oshawa Creek.</p><p> Along the recreational trail there are connections to other recreational trails including the Michael Starr Trail, Harmony Creek Trail, and other attractions including Oshawa Valley Botanical Garden and downtown Oshawa.</p> <p> Portions of the recreational trail travel close to the creek and has steep slopes, sharp turns and unprotected edges. Caution should be used when accessing and maneuvering the recreational trail.</p>',
      galleryImages: ['images/temp_pic1.jpg', 'images/temp_pic1.jpg', 'images/temp_pic1.jpg', 'images/temp_pic1.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['bike_to_peony', 'bike_to_waterfall', 'bike_to_bridge', 'bike_to_daylily', 'bike_to_memory'],
      featureZoomPoints: ['180%', 0.2, 1],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
    {
      name: 'Peony Garden',
      colour: '#B04A7F',
      icon: 'images/peony_icon.svg',
      about: '<p>The Peony Garden is located within the Oshawa Valley Botanical Garden. In 2001, the Canadian Peony Society donated 100 plants from the Wally Gilbert Collection to the project. This contribution led to the official launch of the Oshawa Valley Botanical Garden.</p> <p>Further donations from peony breeders and suppliers across North America have led to the entire collection flourishing into the largest contemporary collection of peonies in North America. With more than 300 varieties in cultivation, the collection is truly impressive!</p> <p>The succession of blooms begins in late May and continues through to the last week of June. The Annual Peony Festival coincides with the climax of the bloom cycle in June.</p>',
      galleryImages: ['images/temp_pic2.jpg', 'images/temp_pic2.jpg', 'images/temp_pic2.jpg', 'images/temp_pic2.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['peony_to_bike', 'peony_to_waterfall', 'peony_to_bridge', 'peony_to_daylily', 'peony_to_memory'],
      featureZoomPoints: ['180%', 0.4, 0.95],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
    {
      name: 'Waterfall Garden',
      colour: '#327687',
      icon: 'images/water_feature_icon.svg',
      about: '<p>The Rockery Garden is located within Kinsman Valley Park of the Oshawa Valley Botanical Garden. It is just north of the Peony Garden and features a waterfall.</p> <p>The garden and its surroundings provides the perfect opportunity to enjoy nature and is a beautiful backdrop for any occasion.',
      galleryImages: ['images/temp_pic3.jpg', 'images/temp_pic3.jpg', 'images/temp_pic3.jpg', 'images/temp_pic3.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['waterfall_to_peony', 'waterfall_to_bike', 'waterfall_to_bridge', 'waterfall_to_daylily', 'waterfall_to_memory'],
      featureZoomPoints: ['170%', 0.35, 0.4],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
    {
      name: 'Rotary Bridge',
      colour: '#806B53',
      icon: 'images/bridge_icon.svg',
      about: '<p>Rotary Bridge was dedicated by the Rotary Club Oshawa-Parkwood and opened in celebration of the 100th anniversary of Rotary International in 2006.</p> <p>It is located over The Oshawa Creek in The Oshawa Valley Botanical Gardens and it will serve to remind the citizens of Oshawa of the tremendous acts of service that both Rotary Clubs have performed for so many years.</p>',
      galleryImages: ['images/temp_pic4.jpg', 'images/temp_pic4.jpg', 'images/temp_pic4.jpg', 'images/temp_pic4.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['bridge_to_peony', 'bridge_to_waterfall', 'bridge_to_bike', 'bridge_to_daylily', 'bridge_to_memory'],
      featureZoomPoints: ['200%', 0.145, 1.4],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
    {
      name: 'Daylily Collection',
      colour: '#7D6287',
      icon: 'images/daylily_icon.svg',
      about: '<p>The one of a kind collection of locally hybridized daylilies addition to the already beautiful gardens was made possible by the generous donation from Henry Lorrain and the late Douglas Lycett, founders of We’re in the Hayfield Now.</p> <p>The City would like to thank the volunteers including the Oshawa Garden Club, Brooklin Horticulture Society and individual volunteers who dedicated their time to dig, transport, store and replant the daylilies to make this collection a reality.</p> <p>The 265 daylily collection was established in 2017 and can be found on the east side of the Oshawa Creek directly across from the Peony Garden with access to the Kolodzie Oshawa Creek Bike Path.</p>',
      galleryImages: ['images/temp_pic5.jpg', 'images/temp_pic5.jpg', 'images/temp_pic5.jpg', 'images/temp_pic5.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['daylily_to_peony', 'daylily_to_waterfall', 'daylily_to_beidge', 'daylily_to_bike', 'daylily_to_memory'],
      featureZoomPoints: ['220%', 0, 1.33],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
    {
      name: 'Memory Garden',
      colour: '#4571A2',
      icon: 'images/memory_garden_icon.svg',
      about: '<p>The Memory Garden is comprised of several gardens and includes tree lined walkways and a central gathering area which provides a formal gathering space and opportunities for passive recreation. The Memory Garden provides an opportunity where residents can honour and remember loved ones through the Commemorative Tree and Bench program.</p> <p>Visitors to the Oshawa Valley Botanical Gardens can now enjoy a new shade structure thanks to donations from the Rotary Club of Oshawa and the Rotary Club of Oshawa-Parkwood.</p> <p>The shade structure is classically designed and features an antique bronze Rotary emblem in the center of the floor, perfect for quiet contemplation, as a centrepiece for photographs or as a formal wedding ceremony.</p>',
      galleryImages: ['images/temp_pic6.jpg', 'images/temp_pic6.jpg', 'images/temp_pic6.jpg', 'images/temp_pic6.jpg'],
      bigImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      smImages: ['images/temp_pic1.jpg', 'images/temp_pic2.jpg', 'images/temp_pic3.jpg', 'images/temp_pic4.jpg'],
      paths: ['memory_to_peony', 'memory_to_waterfall', 'memory_to_bridge', 'memory_to_daylily', 'memory_to_bike'],
      featureZoomPoints: ['170%', 0, 0.06],
      pathZoomPoints: [
        ['180%', 0.4, 0.95],
        ['180%', 0.30, 1.05],
        ['120%', 0.1, 0.40],
        ['140%', 0.1, 0.87],
        ['120%', 0.01, 0.60],
        ['100%', 0, 0.33]
      ]
    },
  ];


  // List of items in the drop down (order matters)
  // CAUTION: ORDER CHANGE
  // PLEASE MAKE CHANGES ACCORDINGLY IF NECESSASARY
  const LOCATIONS = [
    'Select Destination',
    'Peony Garden',
    'Bike Path',
    'Waterfall Garden',
    'Bridge',
    'Daylily Collection',
    'Memory Garden'
  ];

  // Constants for the dropdown
  const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
  const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
  const MAP_OBJ = document.getElementById('svgMapObj'); // Target object element holding SVG of map
  const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap'); // Get the SVG document inside the Object tag

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
  const BIG_IMAGES = document.querySelectorAll('.bigImage');
  const SMALL_IMAGES = document.querySelectorAll('.smImage');
  const contentImg = document.getElementById('contentImageBox');
  const expandedImg = document.getElementById('expandedImg');
  const thumbnail = document.getElementById('thumbnail');

  // variable to store the active colour to be set to the tabs
  let activeColour = "";

  // variable to identify which tab to open 
  let id = 0;

  // variable to store and read the state of the infoPanel (0: closed, 1: open)
  let infoPanelState = 0;

  // This block of code will parse the data from the URL of the page and determine which tab to open when the app initially opens

  // parsing the id from the URL of the webpage
  let params = new URLSearchParams(location.search);
  let parsed = params.get('id');

  // storing the parsed id in the id variable
  id = parseInt(parsed);

  // Set this via QR or nav button
  // *** Hard coded for testing purposes ***
  let currentLocation = '';

  // set start position based on tab click
  let startPosition = parseInt(parsed);
  // set destination position based on dropdown selection
  let destination = '';



  /* FUNCTION DEFINITIONS */



  /* FUNCTIONS FOR THE ANIMATING THE MAP USING CLASSES, SET THE START POINT AND DROP DOWN MENU */

  // Animate zoom/ position of location
  const animatedZoom = function (classes) {
    // Reset Class List
    MAP_SVG.removeAttribute('class');
    // Add classes to SVG
    MAP_SVG.classList.add(classes);
  }

  const setPath = function (start, end) {
    // Bike Path
    if (start === 0) {
      if (end === 'peony') {
        animatedZoom('moveTo-peony-bike');
      } else if (end === 'waterfall') {
        animatedZoom('moveTo-peony-waterfall');
      } else if (end === 'bridge') {
        animatedZoom('moveTo-bridge-peony');
      } else if (end === 'daylily') {
        animatedZoom('moveTo-peony-daylily');
      } else if (end === 'bike') {
        // 
      } else if (end === 'memory') {
        animatedZoom('moveTo-memory-peony');
      }
    }

    // Waterfall Garden
    if (start === 1) {
      if (end === 'peony') {
        animatedZoom('moveTo-peony-waterfall');
      } else if (end === 'waterfall') {
        // 
      } else if (end === 'bridge') {
        animatedZoom('moveTo-bridge-waterfall');
      } else if (end === 'daylily') {
        animatedZoom('moveTo-daylily-waterfall');
      } else if (end === 'bike') {
        animatedZoom('moveTo-waterfall-bike');
      } else if (end === 'memory') {
        animatedZoom('moveTo-memory-waterfall');
      }
    }

    // Bridge
    if (start === 2) {
      if (end === 'peony') {
        animatedZoom('moveTo-bridge-peony');
      } else if (end === 'waterfall') {
        animatedZoom('moveTo-bridge-waterfall');
      } else if (end === 'bridge') {
        // 
      } else if (end === 'daylily') {
        animatedZoom('moveTo-daylily-bridge');
      } else if (end === 'bike') {
        animatedZoom('moveTo-bridge-bike');
      } else if (end === 'memory') {
        animatedZoom('moveTo-memory-bridge');
      }
    }

    // Daylily
    if (start === 3) {
      if (end === 'peony') {
        animatedZoom('moveTo-peony-daylily');
      } else if (end === 'waterfall') {
        animatedZoom('moveTo-daylily-waterfall');
      } else if (end === 'bridge') {
        animatedZoom('moveTo-daylily-bridge');
      } else if (end === 'daylily') {
        // 
      } else if (end === 'bike') {
        animatedZoom('moveTo-bike-daylily');
      } else if (end === 'memory') {
        animatedZoom('moveTo-memory-daylily');
      }
    }

    // Bike
    if (start === 4) {
      if (end === 'peony') {
        animatedZoom('moveTo-peony-bike');
      } else if (end === 'waterfall') {
        animatedZoom('moveTo-waterfall-bike');
      } else if (end === 'bridge') {
        animatedZoom('moveTo-bridge-bike');
      } else if (end === 'daylily') {
        animatedZoom('moveTo-bike-daylily');
      } else if (end === 'bike') {
        // 
      } else if (end === 'memory') {
        animatedZoom('moveTo-memory-bike');
      }
    }

    // Memory Garden
    if (start === 5) {
      if (end === 'peony') {
        animatedZoom('moveTo-memory-peony');
      } else if (end === 'waterfall') {
        animatedZoom('moveTo-memory-waterfall');
      } else if (end === 'bridge') {
        animatedZoom('moveTo-memory-bridge');
      } else if (end === 'daylily') {
        animatedZoom('moveTo-memory-daylily');
      } else if (end === 'bike') {
        animatedZoom('moveTo-memory-bike');
      } else if (end === 'memory') {
        // 
      }
    }
  }


  // Set start value upon click of tab
  TABS.forEach(tab => {
    tab.addEventListener('click', function () {
      // setStart(tab.id);
      // decidePath(startPosition, destination, null, null);
    })
  });


  // if anywhere in the map is clicked the dropdown will close
  MAP_SVG.addEventListener('click', function (e) {
    DROP_DOWN_ITEM.forEach(item => {
      // toggle the hidden class on each item in the list (unhiding them)
      if (item.value !== 0) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
      // Reset dropdown text value to select destination
      document.getElementById('placeholder').textContent = `Select Destination`;
    });
  });


  // Create event listener on drop down menu
  DROP_DOWN.addEventListener('click', function () {
    // Loop through the elements in the drop down and add event listeners to them
    DROP_DOWN_ITEM.forEach(item => {
      // toggle the hidden class on each item in the list (unhiding them)
      item.classList.toggle('hidden');

      // Add the event listener to the item
      item.addEventListener('click', function () {
        // will set destination location based item in dropdown being selected
        // setPath(startPosition, item.value);
        if (item.value !== 0) {
          pathZoomIn((item.value - 1));
        }
        // Upon clicking an item in the list set the displayed text to the selected location name
        document.getElementById('placeholder').textContent = `Go to: ${LOCATIONS[item.value]}`;
      });
    });
  });



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

  // seting event listener on each tab using a loop (to reduce redundant code)
  // will allow the user to click each tab and based on the tab selected, it will populate the content
  for (let i in TABS) {
    // applying a function to onclick event of each tab
    TABS[i].onclick = function () {
      // setting the id and the content based on the id
      id = i;
      // closing the info panel before changing content
      closeInfoPanel();
      // using the setTimeout to delay and sync the loading of content with the animation
      // setting the content in the info panel
      setTimeout(setContent, 350);
      // opening the panel with new content
      openInfoPanel();
    };
  }

  TITLE_BAR.onclick = function () {
    minimizeInfoPanel();
  }

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
    // reset image gallery
    closeImgGallery();
  }

  // function to set all the content inside the info panel
  function setContent() {
    resetTabAppearance();
    activeColour = parkFeature[id].colour;
    TABS[id].style.backgroundColor = activeColour;
    TITLE_BAR.style.backgroundColor = activeColour;
    TITLE.textContent = parkFeature[id].name;
    TITLE_BAR_ICON.src = parkFeature[id].icon;
    for (let j in GALLERY_IMAGES)
      GALLERY_IMAGES[j].src = parkFeature[id].galleryImages[j];
    ABOUT_TEXT.innerHTML = parkFeature[id].about;
  }

  // this function animates the infoPanel and its contents when it opens up
  function openInfoPanel() {
    // animating the panel while opening
    if (infoPanelState < 2) {
      if (infoPanelState === 0) {
        TweenMax.fromTo("#infoPanel", 1, {
          bottom: '-100vh',
        }, {
          delay: 0.5,
          bottom: '7vh',
          ease: Expo.easeOut
        });
      } else if (infoPanelState === 1) {
        TweenMax.fromTo("#infoPanel", 1, {
          bottom: INFO_PANEL.style.bottom,
        }, {
          delay: 0,
          bottom: '7vh',
          ease: Expo.easeOut
        });
      }

      // scaling the map to compensate for the opening of the info panel
      // if condition to only make it work on mobile
      if (window.innerWidth < 769) {
        TweenMax.to("section", 2, {
          delay: 0.5,
          height: '53.5%',
          onComplete: function () {
            // zooming in on the perticular park feature
            featureZoomIn();
          }
        });
      }
      // setting state of the info panel to OPEN
      infoPanelState = 2;
    }
  }

  // this function animates the infoPanel and its contents when it closes
  function closeInfoPanel() {
    // animating the info panel while closing
    if (infoPanelState > 0) {
      TweenMax.fromTo("#infoPanel", 0.75, {
        bottom: INFO_PANEL.style.bottom,
      }, {
        bottom: '-100vh',
        ease: Circ.easeInOut,
        onComplete: function() {
          resetTabAppearance();
        }
      });

      // scaling the map back to full height
      // if condition to only make it work on mobile
      if (window.innerWidth < 769) {
        TweenMax.to("section", 2, {
          height: '92%',
          onComplete: function () {
            // zooming out to the full map
            mapZoomOut();
          }
        });
      }
      // setting state of the info panel to CLOSED
      infoPanelState = 0;

      // resetting the tab appereance
      // setTimeout(resetTabAppearance, 350);
    }
  }

  function minimizeInfoPanel() {
    // animating the info panel while closing
    if (infoPanelState === 2) {
      TweenMax.fromTo("#infoPanel", 0.75, {
        bottom: INFO_PANEL.style.bottom,
      }, {
        bottom: '-24vh',
        ease: Circ.easeOut
      });
      TweenMax.to("#titleBar", 0.75, {
        backgroundColor: '#383838'
      });

      // scaling the map back to full height
      // if condition to only make it work on mobile
      if (window.innerWidth < 769) {
        TweenMax.to("section", 1, {
          height: '85%',
          onComplete: function () {
            // zooming out to the full map
            mapZoomOut();
          }
        });
      }
      // setting state of the info panel to CLOSED
      infoPanelState = 1;

      // resetting the tab appereance
      setTimeout(resetTabAppearance, 350);
    } else if (infoPanelState === 1) {
      setContent();
      openInfoPanel();
    }
  }

  let leftScroll = '';
  let topScroll = '';
  let zoomLevel = '';
  // ZOOM IN: PARK FEATURES
  // this function takes the zoom level and scroll values to scroll and zoom the map to the visible area
  function featureZoomIn() {
    // variable to store the value to scroll from left
    leftScroll = (parkFeature[id].featureZoomPoints[2] * window.innerHeight) + 'px';

    // variable to store the value to scroll from the top
    topScroll = (parkFeature[id].featureZoomPoints[1] * window.innerHeight) + 'px';

    // variable to store the zoom level
    zoomLevel = parkFeature[id].featureZoomPoints[0];

    // animating the zoom
    TweenMax.to('#svgMapObj', 1, {
      height: zoomLevel,
      ease: Sine.easeOut,
      onComplete: function() {
         // animating the scroll
    $('section').animate({
      scrollLeft: leftScroll,
      scrollTop: topScroll
    }, 1000, "easeInOutSine");
      }
    });
  }

  // ZOOM IN: NAVIGATION PATHS
  // this function takes the zoom level and scroll values to scroll and zoom the map to the visible area
  function pathZoomIn(end) {
    // variable to store the value to scroll from left
    leftScroll = (parkFeature[id].pathZoomPoints[end][2] * window.innerHeight) + 'px';

    // variable to store the value to scroll from the top
    topScroll = (parkFeature[id].pathZoomPoints[end][1] * window.innerHeight) + 'px';

    // variable to store the zoom level
    zoomLevel = parkFeature[id].pathZoomPoints[end][0];

    console.log('Left Scroll: ' + leftScroll + '\nTop Scroll: ' + topScroll + '\nZoom: ' + zoomLevel);

    // animating the zoom
    TweenMax.to('#svgMapObj', 1, {
      height: zoomLevel,
      ease: Sine.easeOut,
      onComplete: function () {
        // animating the scroll
        $('section').animate({
          scrollLeft: leftScroll,
          scrollTop: topScroll
        }, 1000, "easeInOutSine");
      }
    });
  }

  // this function animates the map back to fit the full screen 
  function mapZoomOut() {
    TweenMax.to('#svgMapObj', 1, {
      delay: 0.5,
      height: '100%',
      ease: Sine.easeOut
    });
  }


  /* EXPANDING THE IMAGE GALLERY */

  // function expand the image gallery
  function openModal() {
    contentImg.style.display = "none";

    for (let i in BIG_IMAGES) {
      BIG_IMAGES[i].src = parkFeature[id].bigImages[i];
    }
    for (let i in SMALL_IMAGES) {
      SMALL_IMAGES[i].src = parkFeature[id].bigImages[i];
    }

    expandedImg.style.display = "block";
    thumbnail.style.display = "block";

    // animate the image content once expanded
    TweenMax.from("#modalContent", 1, {
      opacity: 0
    });
  };
  contentImg.addEventListener('click', openModal);

  //set the slide index to loop through thumbnail
  let slideIndex = 1;
  showSlides(slideIndex);

  // fuction identify the current image - n is the number of current image slide
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // function show the image slide
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('bigImage');
    let thumbnails = document.getElementsByClassName('smImage');
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = 'block';
    // load the current image from the thumbnail
    thumbnails[slideIndex - 1].className += " active";

  }

  // function to reset image gallery
  function closeImgGallery() {
    expandedImg.style.display = "none";
    thumbnail.style.display = "none";
    contentImg.style.display = "flex";
  }

  // END IMAGE GALLERY SCRIPT ----------  
  // }

}