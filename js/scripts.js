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

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

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

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeIn(400);
                $("[data-datepiker = '"+ attrDatapiker +"']").offset({left : leftCoor , top : topCoor});

            } else {

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeOut(300);

            }

        });

        $(".close-datepiker").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("date-picker")) {

                    break;

                }

            }

            if( parentEl.is(":visible") ) {

                parentEl.fadeOut(400);

            }

        });

        $(this).keydown(function(eventObject){

            if ( eventObject.which == 27) {

                $(".date-picker").fadeOut(300);

            }

        });

    });

    // ----------------------------- 

    $(function() {

        $(".accordeon-item-txt").each(function() {

            $(this).slideUp(300);

        });

        $(".accordeon-item-title").click(function() {

            var parentAccordeonItem = $(this).closest(".accordeon-item");

            var accordeonTxt = parentAccordeonItem.find(".accordeon-item-txt");

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



});
