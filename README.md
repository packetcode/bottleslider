Bottle Slider
============

A minimalistic responsive jquery frontpage image slider plugin with fade effect

Check out the <a href="http://packetcode.com/apps/bottleslider/">LIVE DEMO</a>
<hr>

Installation
------------
Include the jquery.js,bottleslider.js and bottleslider.css in the head tags of the webpage
`````html
<link href="path/to/bottleslider.css" rel="stylesheet">
<script src="path/to/jquery.js"> </script>
<script src="path/to/bottleslider.js"></script>
`````
Minimal Setup
-------------
Include the following code in the head tags
`````javascript
// select the element of image container
$(function (){
    $(#image_container).bottleSlider();
 });
`````

Customized Setup
-----------------
you can set the options for the plugin as shown below

`````javascript
$(function () {
    $(#image_container).bottleSlider({
        timeout: 2000, 		//time in milli seconds after which the image has to change
        fadetime: 200 	    //time in milli seconds, this is the fade animation time laps
    });
});
`````

----------------------------------------------------------------
A <a href="http://www.packetcode.com">packetcode</a> production - Developed by : Krishna Teja 
