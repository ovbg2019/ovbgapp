*** Updated on Friday, July 19, 2019 8:850PM ***
OBJECT_SCRIPT.JS
    - Added TweenMax animations to load the information panel on/off

-----------------------------------------------------------------------------------------------------------

*** Updated on Friday, July 19, 2019 8:850PM ***
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