# Asana

A simple yoga asana sequence guide. For a quick start, use the app [online](http://risto-stevcev.github.io/asana).

Usage:

1. Clone this repository.
2. Add your sequence (JSON file) in the `sequence/` folder.  
   View the examples in that folder as a guideline. The `src` base url is the `yoga-poses/` directory, and the `duration` is in minutes. Use dashes as separators (ie. spaces) in the filename, like: `my-yoga-routine.json`.
3. Add the name of your sequence file under the `#sequences` list in the main `index.html` page as a new `<li>` tag. The name is case insensitive and the script will replace spaces as dashes, so `<li>My Yoga Routine</li>` becomes `my-yoga-routine.json` for the script.
4. Start or refresh the app and click on your routine from the list of sequences on the left to load it.

Add more folders or images in the `yoga-poses/` for new asanas or exercises. This app could be used for non yoga exercises as well.
