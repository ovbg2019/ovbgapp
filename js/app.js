// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {

  const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
  const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
  
  
  let currentLocation = '';
  // store new view params set by drop down selection
  let newView = '';
  
  // List of items in the drop down (order matters)
  const LOCATIONS = [
    'Select Destination',
    'Gazebo',
    'Waterfall Garden',
    'Bridge',
    'DayLily Collection',
    'Bike Path'
  ];

  // zooming function
  const zoomIn = function(viewBox) {
    // Target object element holding SVG of map
    const MAP_OBJ = document.getElementById('svgMapObj');
    // Get the SVG document inside the Object tag
    const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap');
    // Set the new viewbox params to the svg 
    MAP_SVG.setAttribute('viewBox', viewBox);
  }
  
  // Create evenbt listener on drop down menu
  DROP_DOWN.addEventListener('click', function() {
    // Loop through the elements in the drop down and add event listeners to them
    DROP_DOWN_ITEM.forEach(item => {
      // toggle the hidden class on each item in the list (unhiding them)
      item.classList.toggle('hidden');
      // Add the event listener to the item
      item.addEventListener('click', function() {
        // Upon clicking an item in the list set the displayed text to the selected location name
        document.getElementById('placeholder').textContent = LOCATIONS[item.value];
        // Update the current location
        currentLocation = LOCATIONS[item.value];
        console.log(currentLocation);
  
        // decide which item in the drop down was clicked and assign viewbox data to svg
        if (item.value === 1) {
          newView = `${1170} ${300} ${700} ${765}`;
        } else if(item.value === 2) {
          newView = `${783} ${100} ${700} ${990}`;
        } else if (item.value === 3) {
          newView = `${1300} ${150} ${644} ${806}`;
        } else if (item.value === 4) {
          newView = `${1320} ${56} ${512} ${848}`;
        } else if (item.value === 5) {
          newView = `${1170} ${300} ${700} ${765}`;          
        }
  
        // call Zoom function and update viewbox
        zoomIn(newView);

      });

    });

  });
  

  }
  
  