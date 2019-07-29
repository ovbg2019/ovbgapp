-----------------------------------------------------------------------------------------------------------

*** Updated on Sunday, July 28, 2019 8:30 PM ***

    ovbgapp
        - Removed app.js , object.js and animation.js

    css
        Removed:
        -removed zoom.css no longer being used.

        Disbaled
        -#svgMap {width: auto;height: 100%;} not being used, needs to removed in the    coming up versions.


    park_map.svg
        -updated the code from latest ai :park_map_v7 (fixed name).ai file
        -removed link(<?xml-stylesheet type="text/css" href="../css/zoom.css" ?>) to zoom.css


    script.js
        Added/Merged
         -Merged app.js with script.js
         -Moved Paths inside parkFeature objects
         -Animated another path from Peony - Peony to Bike.
         -The first path Peony to Bridge Path and the second path Peony to Bike, are
          being called from within the parkFeature object

        Disabled
         -const MAP_OBJ = document.getElementById('svgMapObj');
         -const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap');
        Replaced it with:
         -const MAP_SVG = document.querySelector('#svgMapObj').contentDocument;
            -I have been using above to access the path inside SVG, the ones I removed did not work, access to SVG for everything else is working as well, nothing broken.

        Arranged:
         -Put all the DOM reference together on top after LOCATIONS



-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, July 25, 2019 2:25AM ***
    SCRIPT.JS
        - Added the new animations to zoom in/out of the map during the different stages of the app (THE JARRING ANIMATIONS FIXED)
        - Added zoom values in the parkFeature objects
            - featureZoomPoints : zoom points to zoom on to park features
                -- [zoom_amount, scroll_from_top, scroll_from_left]
            - pathZoomPoints : set of 6 zoom points for each path starting at perticular location
                -- [zoom_amount, scroll_from_top, scroll_from_left]
        - Added zoom functions
            - featureZoomIn : Zooms in on to a park feature when a new tab is opened (grabs points from the objects)
            - pathZoomIn : Zooms in on to various pathways on the map whenever a destination is selected (grabs points from the objects)
            - mapZoomOut(mapHeight) : zooms the map out to specific height (please function definition to know about the height)
        - These functions called in openInfoPanel(), closeInfoPanel(), minimizeInfoPanel()

    INDEX.HTML
        - Added links to a TweenMax plugin to animate the scroll (for updated animations)

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, July 23, 2019 2:50AM ***
    SCRIPT.JS
        - Added the new zoom in/out animation
	    - The values for the zoom [zoom level, top scroll, left scroll] added in the objects

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, July 22, 2019 5:57PM ***
app.js
    -Fixed Animation/Scroll issue on Safari Desktop will be doing testing tomorrow on iOS
park_map.svg
    - updated the svg with river fixed

*** Updated on Monday, July 22, 2019 5:57PM ***
    OBJECT_SCRIPT.JS
        - Animated the scaling of the map to match with the expanded info panel
        - Now the map object scale between 58.5% to 100%

    INDEX.HTML
        - Added link to jQuery CDN (lol. Everything was working without it)

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, July 22, 2019 1:37PM ***

APP.JS - Peony to Bridge Animation
        - updated added CONST for PLACEHOLDER
SVG_MAP - Updated SVG, moved ccs to css/zoom.css
CSS also move style to folder css

-----------------------------------------------------------------------------------------------------------

*** Updated on Sunday, July 21, 2019 10:23PM ***
        FUNCTIONAL THE IMAGE GALLERY
INDEX.HTML
    - added 'expanded images', 'small images' divs

STYLE.CSS
    - modified contents and sizes for the image gallery

OBJECT_SCRIPT.JS
    - added 2 arrays (bigImages, smImages) inside parkFeature array
    - added closeImgGallery() function into resetTabAppearance() function
    - added image gallery script

-----------------------------------------------------------------------------------------------------------

*** Updated on Friday, July 20, 2019 2:50AM ***
OBJECT_SCRIPT.JS
    - Added TweenMax animations to load the information panel on/off

-----------------------------------------------------------------------------------------------------------

*** Updated on Friday, July 19, 2019 8:50PM ***
INDEX.HTML
    - Added tabindex to the tabs to make them accessible through the TAB key

STYLE.CSS
    - Updated with media queries for larger displays
    - Applied :focus effects to the tab to register the interaction through the TAB key

OBJECT_SCRIPT.JS
    - Replaced all the "addEventListener" methods with "onclick" assignment as it allows the better functionality with lesser code
    - Added the ability to open a tab with ENTER key (selected through TAB)

-----------------------------------------------------------------------------------------------------------

*** Updated on Friday, July 19, 2019 2:15AM ***
- Cleaned up the CSS
- Modified the colors in the JS with new colors for selected tab

-----------------------------------------------------------------------------------------------------------

*** Updated on Thursday, July 18, 2019 ***
- Added ChangeLog.md file

-----------------------------------------------------------------------------------------------------------

*** Updated on Wednesday, July 17,2019 by Sully***
INDEX.HTML
    - Assigned changes to the dropdown menu items

STYLE.CSS
    - Minor positioning changes
    - Minor ID changes

APP.JS
    - No Changes

OBJECT_SCRIPT.JS (IMPORTANT) (Will be merged with other JS file after. Please keep separate for now)
    - Created objects to store all the data for each park feature
    - Assigned EventListeners to all the tabs
    - Selecting a tab will change the colour scheme and add the content in each tab
        - Done through a function assignment in a loop to reduce redundancy of code
    - Added functionality to parse data through the URL
        - Use index.html?id=0 format to play around. id can be set to anything from 0 to 5, opening the tab 1 to 6 accordingly
        - In preparation to get the app ready for the QR demo.
        - Will open up a specific instance of the app based on the URL change
    - The dropdown menu items will change names based on the tab selected
        - This is in preparation to create a means to start animation for the paths

        -----------------------------------------------------------------------------------------------------------
