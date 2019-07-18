// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {

  // Constants for the dropdown
  const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
  const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
  
  // This will also be updated by the QR code scan
  let currentLocation = '';
  
  // List of items in the drop down (order matters)
  const LOCATIONS = [
    'Select Destination',
    'Gazebo',
    'Waterfall Garden',
    'Bridge',
    'DayLily Collection',
    'Bike Path',
    'Memory Garden'
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
        document.getElementById('placeholder').textContent = `Go to: ${LOCATIONS[item.value]}`;
        // Update the current location
        currentLocation = LOCATIONS[item.value];
        console.log(currentLocation);
  
        // decide which item in the drop down was clicked and assign viewbox data to svg

        // Trasition to scale and transioton with aniamtions purposes

        // To-DO Check for current location and value selected from dropdown
        if (item.value === 1) {
          // animatedZoom('moveTo-gazebo');
          animatedZoom('moveTo-memory-daylily');
        } else if(item.value === 2) {
          animatedZoom('moveTo-waterfeature');
        } else if (item.value === 3) {
          animatedZoom('moveTo-bridge');
        } else if (item.value === 4) {
          animatedZoom('moveTo-daylily');
        } else if (item.value === 5) {
          animatedZoom('moveTo-bikepath');         
        }

      });

    });

  });
  

  }
  
  