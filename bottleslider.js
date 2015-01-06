/* BOTTLESLIDER - An Image Slider Plugin
 * File : bottleSlider.js
 * Author : Krishna Teja G S
 * Dated : 6th January 2015
 * Github page : http://github.com/packetcode;
 */

(function ( $ ) {

    //plugin function
    $.fn.bottleSlider = function( options ) {

    // plugin varaibles
    var settings = $.extend({
       // These are the defaults.
          timeout: 3000,
          fadetime: 300,
          responsive :true
    }, options );
 

    // global variables
    var selection = $(this);
    var interval;
    var timeout = settings.timeout/10; 


    $(window).resize(function(){
        var w = selection.width();
        var mw = parseInt(selection.css('max-width'),10);
        var mh = parseInt(selection.css('max-height'),10);
        var mp = w*(mh/mw);
        if(mw>w){
            var h = mp;
            selection.css('height',h+'px'); 

            var w = selection.width();
            var h = selection.height();
            var p = (h/2) - 25;

            // setting the position for the buttons
            $('.' + front).css("top",+p+"px");
            $('.' + back).css("top",+p+"px"); 
             console.log(h);
        }
        console.log(w+' '+mw);
        
    });

    // adding unique names for front and back naviagtion buttons
    var front = selection.attr('id') + '_front';
    var back = selection.attr('id') + '_back';

    var initialize = function(){
        // wrapping images with a images div
        selection.wrapInner("<div class='images'></div>");
        // adding the front and back navigation elements
        selection.prepend("<div class='front " + front + "'>&nbsp;</div><div class='back " + back + "'>&nbsp;</div>");
        // getting the div width and height
        var w = selection.width();
        var h = selection.height();
        var p = (h/2) - 25;

        // setting the position for the buttons
        $('.' + front).css("top",+p+"px");
        $('.' + back).css("top",+p+"px");

        // initalizing the first image to class 'top'
        selection.find('img:first').addClass('top');
    }

    var responsive = function(){

    }
    

    // function to start the auto animation
    var start = function () {
        interval = setInterval(forward, settings.timeout);
    }

    // function to stop the auto animation
    var stop = function () {
        clearInterval(interval);
    }

    //function to animate the images in forward direction
    var forward = function () {
        var curr = selection.find('.top');
        if(curr.closest('a').length)
        var next = curr.closest('a').next().find('img');
        else
        var next = curr.next();

        if (!next.length) {
            next = selection.find('img:first');
            next.addClass('top');

            curr.animate({
                opacity: 0.0
            }, settings.fadetime, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });

        } else {
            next.css({
                opacity: 0.0
            })
                .addClass('top')
                .animate({
                opacity: 1.0
            }, settings.fadetime, function () {
                curr.removeClass('top');
            });
        }
    }

    //function to animate the images in backward direction
    var backward = function () {
        var curr = selection.find('.top');
        if(curr.closest('a').length)
        var next = curr.closest('a').prev().find('img');
        else
        var next = curr.prev();    

        if (!next.length) {

            next = selection.find('img:last');
            next.css({
                opacity: 0.0
            }).addClass('top');
            next.animate({
                opacity: 1.0
            }, settings.fadetime, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });

        } else {
            next.addClass('top');
            curr.animate({
                opacity: 0.0
            }, settings.fadetime, function () {
                curr.removeClass('top');
                curr.css({
                    opacity: 1.0
                });
            });
        }
    }

    //capture the front click
    $(document).on('click', '.' + front, function () {
        stop();
        forward();
        start();
    });

    //capture the back click
    $(document).on('click', '.' + back, function () {
        stop();
        backward();
        start();
    });

    //initialize the application
    initialize();
    //start the animation 
    start();



    };

}( jQuery ));