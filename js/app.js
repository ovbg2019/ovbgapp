// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {

  // Constants for the dropdown
  const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
  const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
  const MAP_OBJ = document.getElementById('svgMapObj');  // Target object element holding SVG of map
  const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap'); // Get the SVG document inside the Object tag

  const TABS = document.querySelectorAll('.tab');

  // parsing the id from the URL of the webpage
  let params = new URLSearchParams(location.search);
  let parsed = params.get('id');

  console.log(parsed);

  // Set this via QR or nav button
  // *** Hard coded for testing purposes ***
  let currentLocation = parsed;

  // set start position based on tab click
  let startPosition = '';
  // set destination position based on dropdown selection
  let destination  = '';
  
  // List of items in the drop down (order matters)
  const LOCATIONS = [
    'Select Destination',
    'Peony Garden',
    'Waterfall Garden',
    'Bridge',
    'DayLily Collection',
    'Bike Path',
    'Memory Garden'
  ];

  // Set start location
  const setStart = function(id) {
    if (id === 'tab2Peony') {
      startPosition = 'peony';
    } else if (id === 'tab3WaterFeature') {
      startPosition = 'waterfall';
    } else if (id === 'tab4Bridge') {
      startPosition = 'bridge';
    } else if (id === 'tab5Daylily') {
      startPosition = 'daylily';
    } else if (id === 'tab1BikeTrail') {
      startPosition = 'bike';
    } else if (id === 'tab6MemoryGarden') {
      startPosition = 'memory';
    }
    console.log('Start: ' + startPosition);
  }

  // set end location
  const setDestination = function(value) {
    if (value === 1) {
      destination = 'peony';
    } else if (value === 2) {
      destination = 'waterfall';
    } else if (value === 3) {
      destination = 'bridge';
    } else if (value === 4) {
      destination = 'daylily';
    } else if (value === 5) {
      destination = 'bike';
    } else if (value === 6) {
      destination = 'memory';
    }
    console.log('End: ' + destination);
  }

  // Animate zoom/ position of location
  const animatedZoom = function(classes) {
    // Reset Class List
    MAP_SVG.removeAttribute('class');
    // Add classes to SVG
    MAP_SVG.classList.add(classes);
  }

  const decidePath = function(currentLocation, startPosition, item, destination) {

    // If current location is Peony Garden
    if(currentLocation === 'peony' || startPosition === 'peony') {
      // destination is set to Waterfall Garden
      if (item.value === 2 || destination === 'waterfall') {
        animatedZoom('moveTo-peony-waterfall');
      // destination is set to Bridge
      } else if (item.value === 3 || destination === 'bridge') {
        animatedZoom('moveTo-bridge-peony');
      // destination is set to DayLily Collection
      } else if (item.value === 4 || destination === 'daylily') {
        animatedZoom('moveTo-peony-daylily');
      // destination is set to Bike Path
      } else if (item.value === 5 || destination === 'bike') {
        animatedZoom('moveTo-peony-bike');
      // destination is set to Memory Garden
      } else if (item.value === 6 || destination === 'memory') {
        animatedZoom('moveTo-memory-peony');
      }
    } 
    // If current location is Waterfall Garden
    else if(currentLocation === 'waterfall' || startPosition === 'waterfall') {
      // destination is set to Peony Garden
      if (item.value === 1 || destination === 'peony') {
        animatedZoom('moveTo-peony-waterfall');
      // destination is set to Bridge
      } else if (item.value === 3 || destination === 'bridge') {
        animatedZoom('moveTo-bridge-waterfall');
      // destination is set to DayLily Collection
      } else if (item.value === 4 || destination === 'daylily') {
        animatedZoom('moveTo-daylily-waterfall');
      // destination is set to Bike Path
      } else if (item.value === 5 || destination === 'bike') {
        animatedZoom('moveTo-waterfall-bike');
      // destination is set to Memory Garden
      } else if (item.value === 6 || destination === 'memory') {
        animatedZoom('moveTo-memory-waterfall');
      }
    }
    // If current location is Bridge
    else if(currentLocation === 'bridge' || startPosition === 'bridge') {
      // destination is set to Peony Garden
      if (item.value === 1 || destination === 'peony') {
        animatedZoom('moveTo-bridge-peony');
      // destination is set to Waterfall Garden
      } else if (item.value === 2 || destination === 'waterfall') {
        animatedZoom('moveTo-bridge-waterfall');
      // destination is set to DayLily Collection
      } else if (item.value === 4 || destination === 'daylily') {
        animatedZoom('moveTo-daylily-bridge');
      // destination is set to Bike Path
      } else if (item.value === 5 || destination === 'bike') {
        animatedZoom('moveTo-bridge-bike');
      // destination is set to Memory Garden
      } else if (item.value === 6 || destination === 'memory') {
        animatedZoom('moveTo-memory-bridge');
      }
    }
    // If current location is DayLily Collection
    else if(currentLocation === 'daylily' || startPosition === 'daylily') {
      // destination is set to Peony Garden
      if (item.value === 1 || destination === 'peony') {
        animatedZoom('moveTo-peony-daylily');
      // destination is set to Waterfall Garden
      } else if (item.value === 2 || destination === 'waterfall') {
        animatedZoom('moveTo-daylily-waterfall');
      // destination is set to Bridge
      } else if (item.value === 3 || destination === 'bridge') {
        animatedZoom('moveTo-daylily-bridge');
      // destination is set to Bike Path
      } else if (item.value === 5 || destination === 'bike') {
        animatedZoom('moveTo-bike-daylily');
      // destination is set to Memory Garden
      } else if (item.value === 6 || destination === 'memory') {
        animatedZoom('moveTo-memory-daylily');
      }
    }
    // If current location is Bike Path
    else if(currentLocation === 'bike' || startPosition === 'bike') {
      // destination is set to Peony Garden
      if (item.value === 1 || destination === 'peony') {
        animatedZoom('moveTo-peony-bike');
      // destination is set to Waterfall Garden
      } else if (item.value === 2 || destination === 'waterfall') {
        animatedZoom('moveTo-waterfall-bike');
      // destination is set to Bridge
      } else if (item.value === 3 || destination === 'bridge') {
        animatedZoom('moveTo-bridge-bike');
      // destination is set to DayLily Collection
      } else if (item.value === 4 || destination === 'daylily') {
        animatedZoom('moveTo-bike-daylily');
      // destination is set to Memory Garden
      } else if (item.value === 6 || destination === 'memory') {
        animatedZoom('moveTo-memory-bike');
      }
    }
    // If current location is Memory Garden
    else if(currentLocation === 'memory' || startPosition === 'memory') {
      // destination is set to Peony Garden
      if (item.value === 1 || destination === 'peony') {
        animatedZoom('moveTo-memory-peony');
      // destination is set to Waterfall Garden
      } else if (item.value === 2 || destination === 'waterfall') {
        animatedZoom('moveTo-memory-waterfall');
      // destination is set to Bridge
      } else if (item.value === 3 || destination === 'bridge') {
        animatedZoom('moveTo-memory-bridge');
      // destination is set to DayLily Collection
      } else if (item.value === 4 || destination === 'daylily') {
        animatedZoom('moveTo-memory-daylily');
      // destination is set to Bike Path
      } else if (item.value === 5 || destination === 'bike') {
        animatedZoom('moveTo-memory-bike');
      }
    }
  }


  // Set start value upon click of tab
  TABS.forEach(tab => {
    tab.addEventListener('click', function() {
      setStart(tab.id);

      decidePath(null, startPosition, null, destination);

    })
  });


  // if anywhere in the map is clicked the dropdown will close
  MAP_SVG.addEventListener('click', function(e) {
    DROP_DOWN_ITEM.forEach(item => {
      // toggle the hidden class on each item in the list (unhiding them)
      if(item.value !== 0) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
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
        // will set destination location based item in dropdown being selected
        setDestination(item.value);
        // Upon clicking an item in the list set the displayed text to the selected location name
        document.getElementById('placeholder').textContent = `Go to: ${LOCATIONS[item.value]}`;

        decidePath(currentLocation, startPosition, item, destination);

      });

    });

  });

  }