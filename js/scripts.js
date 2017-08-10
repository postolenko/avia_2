$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // -----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getFooterPosition();

    getHeaderFixedPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ----------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    });

    $(document).scroll(function() {

        getHeaderFixedPosition();

    });


    $(function() {

        $(".show_datepiker").click(function() {

            attrDatapiker = $(this).attr("data-datepiker-btn");
            topCoor = $(this).offset().top + $(this).height();
            

            if(bodyWidth < 480) {

                leftCoor = ( bodyWidth - $("[data-datepiker = '"+ attrDatapiker +"']").outerWidth(true) ) / 2;

            } else {

                leftCoor = $(this).offset().left;

            }

            if( $("[data-datepiker = '"+ attrDatapiker +"']").is(":hidden") ) {

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeIn(300);
                $("[data-datepiker = '"+ attrDatapiker +"']").offset({left : leftCoor , top : topCoor});

            } else {

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeOut(300);

            }

        });

        $(".close-datepiker").click(function() {

            parentEl = $(this).closest(".date-picker");

            if( parentEl.is(":visible") ) {

                parentEl.fadeOut(400);

            }

        });

        $(this).keydown(function(eventObject){

            if ( eventObject.which == 27) {

                $(".date-picker").fadeOut(300);

            }

        });

        $(document).mouseup(function (e){

            hide_element = $('.date-picker');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".date-picker").fadeOut(300);
            }

        });

    });

    // -----------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_resp").is(":hidden") ) {

                $(".main-nav_resp").fadeIn(400);

            } else {

                $(".main-nav_resp").fadeOut(300);

            }

        });

        $(".close-resp-nav").click(function() {

            $(".main-nav_resp").fadeOut(300);

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".main-nav_resp").fadeOut(300);
 
            }

        });

    });

    // ----------------------------- 

    $(function() {

        var accordeonItemContent;
        var parentAccordeonItem;
        var accordeonTxt;

        $(".accordeon-item").each(function() {

            accordeonItemContent = $(this).find(".accordeon-item-txt");

            if( $(this).hasClass("active") ) {                

                accordeonItemContent.slideDown(300);

            } else {

                accordeonItemContent.slideUp(300);

            }            

        });

        $(".accordeon-item-title").click(function() {

            parentAccordeonItem = $(this).closest(".accordeon-item");

            accordeonTxt = parentAccordeonItem.find(".accordeon-item-txt");

            if( accordeonTxt.is(":hidden") ) {

                accordeonTxt.slideDown(400);

                parentAccordeonItem.addClass("active");

            } else {

                accordeonTxt.slideUp(400);

                parentAccordeonItem.removeClass("active");

            }

        });

    });

    // ----------------------------- 

    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

    function getHeaderFixedPosition() {

        if( bodyWidth > 768 ) {

            if( $(window).scrollTop() >= $(".header-site").height() ) {

                $(".header-site").addClass("fixed");

                $(".header-site").css({
                    "top" : -1 * $(".header-site").outerHeight(true) + "px"
                });

                setTimeout(function() {

                    $(".header-site").addClass("fixed-top");

                }, 300);

                $("body").css({
                    "padding-top" : $(".header-site").height() + "px"
                });

            } else {

                $(".header-site").removeClass("fixed");

                $(".header-site").css({
                    "top" : 0 + "px"
                });

                setTimeout(function() {
                    $(".header-site").removeClass("fixed-top");
                }, 300);

                $("body").css({
                    "padding-top" : 0 + "px"
                });

            }

        } else {

            $("body").css({
                "padding-top" : 0 + "px"
            });

        }

    }



});
