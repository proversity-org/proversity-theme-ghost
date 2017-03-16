/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };

})(jQuery);

$(document).ready(function () {
    var currentURL = $(location). attr("href");

    if (currentURL.indexOf("page") >= 0 || currentURL.indexOf("archive") >= 0) {
            $("html, body").animate({ scrollTop: $(".overlay").prop("scrollHeight") }, 1000);

            $('.extra-pagination').waypoint(function() {

            var screenResolution = $(document).width();

            if (screenResolution > 736) {

                $(".navbar-inverse").animate({
                    backgroundColor : "#323538",
                    "min-height" : "70px"
                }, 100);

                $(".navbar-nav").animate({
                    margin : "0"
                }, 100);

                $(".brand").animate({
                    width : "75px"
                }, 100);

                $(".navbar-brand").animate({
                    "padding" : "10px 15px 15px 15px"
                }, 100);

            }

        }, {
            offset: '200'
        });
    }


    /* Menu animation */

    $('.feature-post-title').waypoint(function() {

        var screenResolution = $(document).width();

        if (screenResolution > 736) {

            $(".navbar-inverse").animate({
                backgroundColor : "#323538",
                "min-height" : "70px"
            }, 100);

            $(".navbar-nav").animate({
                margin : "0"
            }, 100);

            $(".brand").animate({
                width : "75px"
            }, 100);

            $(".navbar-brand").animate({
                "padding" : "10px 15px 15px 15px"
            }, 100);

        }

    }, {
        offset: '200'
    });

    $('#postHeader').waypoint(function() {

        var screenResolution = $(document).width();

        if (screenResolution > 736) {

            $(".navbar-inverse").animate({
                backgroundColor : "#323538",
                "min-height" : "70px"
            }, 100);

            $(".navbar-nav").animate({
                margin : "0"
            }, 100);

            $(".brand").animate({
                width : "75px"
            }, 100);

            $(".navbar-brand").animate({
                "padding" : "10px 15px 15px 15px"
            }, 100);

        }

    }, {
        offset: '200'
    });

    $('body').waypoint(function() {

        var screenResolution = $(document).width();

        if (screenResolution > 736) {

            $(".navbar-inverse").animate({
                backgroundColor : "transparent",
                "min-height" : "100px"
            }, 100);

            $(".navbar-nav").animate({
                margin : "14px 0 0 0"
            }, 100);

            $(".brand").animate({
                width : "126px"
            }, 100);

            $(".navbar-brand").animate({
                "padding" : "15px"
            }, 100);

        }

    }, {
        offset: '-1'
    });
});


/* Scroll down indicator function */

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.scroll-down').animate({
            'opacity' : '0'
        }, 500);
    }
});
