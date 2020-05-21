![hippop popup mus](https://user-images.githubusercontent.com/6570507/82346918-e5146d80-99ab-11ea-9ae8-6af85d03ea0d.gif)

# GUI for generating the HTML for custom CARTO Builder Popups ([live site](https://ruralinnovation.github.io/carto-popup-generator/) at https://bit.ly/carto-popups)

 Specify field types and the CARTO fields/labels to use, and out pops the HTML to paste in CARTO Builder! 🍞 [Here's the tutorial.](https://ruralinnovation.slack.com/archives/CGN8U4Q9X/p1586397247064100) though the website itself is the instructions.
 
 # Dev notes
 
 ### TODO: 
 - [ ] Let users save their popup, so they can come back to it later to edit it (local storage is probably fine)
 - [ ] Let users drag to re-order (deleting/creating is the only option now)
 
 ### Approaching the app.
 
Pretty run-of-the-mill Create React App. (I did go muddy `App.js` up a bit in order to use `react-scrollama` wrappers to drigger the animated Hippo as you scroll to new sections 💖)

Key notes:
- **Overal flow**: We hold state in `fieldInputValues` in `App.js`, a giant JS array with objects for each current field. When the user clicks the button to copy the HTML, we then use that to generate HTML strings and then auto inject that into the users clipboard.
- Default popup UI data is from the popup we built for FM in `popup-generation/constants.js`. This was most recently used for FM popups.
- Basically just used template literals to generate the HTML string, which you'll see steels a lot from existing CARTO classes to pull their css, but also applies inline CSS to the HTML elements direclty. Being limmited by pasting in HTML, all additional CSS must be inline on each element.
- CARTO Builder injects values using {{👨🏻}} templating. This is how we embed `fieldName` into the popup to get replaced when used in BUilder. // There's also a way to hack this to getting some JS like behaviour: eg because we knew values were between 0 and 100 for one of our fields, I used that to set the % width on a progress bar element (see version history) to generate popups for the New Lab COVID-19 tracker.


# TLDR All you need: `yarn install`, `yarn start`, `yarn deploy` (for gh-pages)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
