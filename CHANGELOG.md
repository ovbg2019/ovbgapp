*** Updated on Wednesday, August 26, 2019 12:20 PM ***

CSS
    - Added the @font-face for the map fonts

HTML
    - Updated the <title> of the map
    - Added <meta> tags

SVG
    - Added a link to the stylesheet to link the fonts

-----------------------------------------------------------------------------------------------------------

*** Updated on Wednesday, August 21, 2019 4:25 PM ***
JS
    - Added all the entry points data in the array (including the path id, zoom points, and the location they lead to)
    - Updated the detection ID from the URL. If the id is greater than 5 (anything after the the memory garden), it will start the path navigation from the entry points
    - resetting the destination in the appropriate location
    - bug fixes in dropdown and adjusted animations
    - Increased delay for path animation and decreased for icon, so when path is animated the started icon is animated before the path starts.
    - added clear to destination variable upon tab selection
    - adds some new variables, enabled end to start icon animation
    - changes to dropdown timing values
    - shortened dropdown initial animation and re-adding bike path highlight animation

-----------------------------------------------------------------------------------------------------------
*** Updated on Wednesday, August 21, 2019 2:15 PM ***
JS
    -Increased delay for path animation and decreased for icon, so when path is animated the started icon is animated before the path starts.

-----------------------------------------------------------------------------------------------------------
*** Updated on Wednesday, August 21, 2019 1:45 PM ***
Branch - pathStartEndAnimation
JS
    -enabled start and end icon animation on path navigation/animation, using the same icon function.
    -removed the disabled timelinemax for icon animation.
    -moved SVG variables inside the functions they are being used.
    -Updated icon names in paths array, few icon path names were missing g, and the circle was being called by in now updated to called by the icon path like rest of the icon.
    -merged the removed animation function into one.

-----------------------------------------------------------------------------------------------------------
*** Updated on Monday, August 19, 2019 7:00 PM ***
Branch - AnimationArrayUpdate
JS
    -Switched Icon Animation timeline max "to" back to  “fromto”, because in iOS/Desktop Safari all the icon animations do not animate with or with repeat on. When switched back to "fromto" it animate in iOS/Desktop Safari.
    -Also hard code length value because in iOS/Desktop Safari all the icon animations were not animating.

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, August 19, 2019 4:30 PM ***
Branch - AnimationArrayUpdate
SVG
    -Updated SVG to the latest version, the last one did not have the icon in order and on click incorrect tabs were opening

JS
    -Removed parameters from PATH/Icon animation function and put them inside the function.
    -Added setTimeout function inside Icon Animation function.
    -Switched Icon Animation “fromto” to “to”, to clear the path and repeat if current location and destination are the same.
    -On tab click icon still animates only once.
    -As per group discussion added getTotalLength function to get lengths for all path for drawing, instead of hard coding it inside the array, also removed the length values from inside the array.
    -Added MapZoom and Close info panel function under Go, so if info Panel is open or minimized it will be closed once the go button is clicked and navigation is started

-----------------------------------------------------------------------------------------------------------

*** Updated on Sunday, August 18, 2019 11:00 PM ***
Branch - AnimationArrayUpdate
SVG
	-updated SVG to the latest version.
JS
	-Renamed, the PATH timeline max to TLM_PATH from TLM.
	-Updated TLM to TLM_PATH in all places.
	-Switched Path Animation “fromto” to “to”, to make the animation smooth and not blink out on before disappearing and repeating.
	- Added repeat and repeat delay into TLM_PATH now and not needed for TLM_ICON

	-Icon colour animates to parkFeature colour on the tab
	  click and when location and destination are the same.
	-Renamed DRAW() to PATH_ANIMATION() and also updated across the file
	-Corrected a few spelling errors.

	REMOVED:
	-onComplete from the path/icon function, no longer needed.
	-removed repeat from parkFeature array

-----------------------------------------------------------------------------------------------------------

Branch - onTabAnimation

*** Updated on Monday, August 19, 2019 4:38 PM ***
HTML
    - ADDED: Splash screen <main>
    - UPDATED: the map <main> id to 'app'

CSS
    - ADDED: Styles for the splash screen

JS
    - ADDED: Constants to access the splash screen and the app screen
    - ADDED: function to open and animate the splash screen
    - ADDED: variable to store the state of the app (initial launch/subsequent launch)
    - ADDED: mechanism to read the app state and load the splash screen or the app accordingly
    - UPDATED: sneakPeakDropDown function call moved. Only opens on the initial app load.


-----------------------------------------------------------------------------------------------------------


*** Updated on Thursday, August 15, 2019 2:50 PM ***
Branch - iconAnimation:
SVG
	-updated SVG to latest
JS
	-Updated Icon Animation, animating circle only.
    -Created separate fn “ICON_ANIMATION” icon animation.
    -Added if statement to Go so when starting and ending location are same,
     the icon Animation run, instead of path.
     -Created separate functions for removing Icon Animation and Path Animation

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, August 12, 2019 9:30 PM ***
JS
    - Added: Constant MAP_ICONS to access all the icons inside the map SVG. (its an array similar to TABS and follows the same order as the tabs, menus)
    - Added: Event handler to handle the click on the icons
    - UPDATED: Moved the code to draw the animation for the icon from the tab click handler to the openInfoPanel function as the icons are needed to be animated whenever the panel opens wether through a link, tab click or icon click.

-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, August 12, 2019 7:55 PM ***
JS
    -Removed REMOVE_CURRENT_ANIMATION(); from the function that closes the tab, so the icon animation does not stop after the tab is closed.


-----------------------------------------------------------------------------------------------------------

*** Updated on Monday, August 12, 2019 7:00 PM ***

Branch - Animation Duration
SVG
	-updated SVG to latest
JS
	-Changed Duration to 3 sec from 7 for Bike To Bridge and Bridge to Bike Paths

Branch - onTabAnimation
JS
    -Enabled repeat for icons animations (when from and to locations are same the icon for them animates).
	-Animated park feature icons when the tab is click (When bike tab is open, the bike icons animates).
    -Animation stops when the tab is closed.
    -Duration is set to 5 sec for icon animations, expect for Memory Garden.
    -Some icon name (pins) were changed in the latest svg, updated the name in JS.

-----------------------------------------------------------------------------------------------------------

*** Updated onThursday, August 9, 2019 2:16 AM ***

CSS
    - Minor UI tweaks

JS
    - ADDED: Code to force the app to full screen whenever user interacts with the visible elements (still buggy)

FILES
    - Replaced old images with new Hi-Res images

-----------------------------------------------------------------------------------------------------------

*** Updated on Thursday, August 7, 2019 2:56 AM ***

HTML
    - ADDED: the new image gallery section
    - ADDED: the new drop down elements
    - REMOVED: old dropdown menu
    - REMOVED: the old image gallery components
    - UPDATED: the <meta> tag to stop the scaling of the app
    - UPDATED: File locations/links updated

CSS
    - cleaned up CSS after adding the new dropdown
    - ADDED: new image gallery styles
    - ADDED: new dropdown styles
    - minor changes to existing styles
    - Fixed weird map overlap on the iPhone/iPad

JS
    - ADDED: New image gallery event handlers
    - ADDED: New dropdown menu with ability to select start and end point on the map
    - ADDED: the pinch and zoom for iPhone/iPad (added 'gesturestart', 'gesturechange', 'gestureend' event handlers)
    - UPDATED: the touch detection event handlers to stop them from working on iPhone/iPad
    - UPDATED: the zoom parameters for all the paths (now zooms the map to 100% and scrolls to the starting point for any path)
    - UPDATED: File locations/links updated (check arrays)

FILES
    - Park Images: created folder for each feature and added pictures
    - Tab Icons: moved to a folder
    - REMOVED: Unnecessary/old image files

-----------------------------------------------------------------------------------------------------------

*** Updated onThursday, August 1, 2019 11:25 PM ***


HTML
	-added missing alt tag = alt=”tempAlt”
	-Fixed comment out on on clicks inside img tags, ! 	was missing
	-
	REMOVED:
	-closing brackets from img tags
	-H4 About
	-viewBox="0 0 1920 1080 from Object

JS
	ADDED:
	- animation duration, svg path length and repeat
	   properties inside a 3d array, initially just
            the svg path was id inside an array (parkFeautre[].paths[]). Now, each path can have different animation duration, length and repeat value. If needed in future we can add width-size and colour as well.
	TempFixed:
	  -When start and from locations are the
	    same, icons circles of the location will animate once and clear after (i.e go back to their old state),  in case of Memory Garden there was no circle around it so the Memory Garden icon.

	DRAW()
	-added 2s delay
	-increased repayDelay to 1.3s from 1s.

 -Updated 3 (contentImg, expandedImg, thumbnail) lowers case constants to UPPERCASE (CONTENT_IMG, EXPANDED_IMG, THUMBNAIL)


	REMOVED
	 -Old disabled draw functions



-----------------------------------------------------------------------------------------------------------
*** Updated on Tuesday, July 31, 2019 3:20 PM ***

    SCRIPT.JS
        - added pinch and zoom functionality
        - added "touchstart", "touchmove", and "touchend" event handlers on the map to register the touch and pinch and control zoom

-----------------------------------------------------------------------------------------------------------


*** Updated on Tuesday, July 30, 2019 3:20 PM ***
    Removed
        -disabled comments from the previous changelog

    script.js
        -Fixed the order of paths inside parkFeature to match the order or LOCATIONS
        -Added function REMOVE_CURRENT_ANIMATION(); inside TABS[i] on click to remove the current/active path animation.
        -Created 3 new variables for SVG PATHS
        -Accessing to SVG path is now dynamic via paths array inside parkFeature
        -Corrected path names to match SVG name
        -Arranged the order of the path to match LOCATIONS.
        -Removed two old constants for the paths.
        -Duration and Length is hardcoded for now, on the next stage it will be pull from 3d array inside parkFeature>paths
    park_map.svg
        -Updated to latest svg

    index.html
        -spelling correction NECESSARY

-----------------------------------------------------------------------------------------------------------

*** Updated on Sunday, July 28, 2019 8:30 PM ***

    ovbgapp
        -Removed app.js , object.js and animation.js

    css
        Removed:
        -removed zoom.css no longer being used.

        Disabled
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
