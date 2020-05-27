//Вся идея тут состоит в том, чтобы с помощью rigger'a инклюдить в него все нужные нам js файлы в нужном нам порядке

$(function () {
    let width = $(window).width();
    if (width > 1000) {
        window.addEventListener("scroll", function () {
            let parallax = document.getElementById("intro");
            let offset = window.pageYOffset;
    
            parallax.style.backgroundPositionY = offset * 0.6 + "px";
        });
    }

    // Preloader
    // var clPreloader = function () {
    //     $("html").addClass("cl-preload");

    //     $WIN.on("load", function () {
    //         //force page scroll position to top at page refresh
    //         // $('html, body').animate({ scrollTop: 0 }, 'normal');

    //         // will first fade out the loading animation
    //         $("#loader").fadeOut("slow", function () {
    //             // will fade out the whole DIV that covers the website.
    //             $("#preloader").delay(300).fadeOut("slow");
    //         });

    //         // for hero content animations
    //         $("html").removeClass("cl-preload");
    //         $("html").addClass("cl-loaded");
    //     });
    // };
    // clPreloader();

    // Header fixed
    let header = $("#header");
    let scrollPos = $(window).scrollTop();

    checkScroll();
    $(window).on("scroll resize", function () {
        scrollPos = $(this).scrollTop();

        checkScroll();
    });

    function checkScroll() {
        if (scrollPos >= 1) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("#nav, #intro, #about, #promo").on("click", "a", function (event) {
        event.preventDefault();

        let blockId = $(this).attr("href");
        let blockOffset = $(blockId).offset().top;

        $("html , body").animate(
            {
                scrollTop: blockOffset - 0,
            },
            500
        );

        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
        $("body").removeClass("no-scroll");
    });

    // menu nav toggle
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });

    //Modal=======================
    const modalCall = $("[data-modal]");
    const modalClose = $(".modal__close");
    const modalRequest = $(".btnRequest");

    //prevent displacement of content when opening modal windows
    $(window).on("resize load", function () {
        $("body, .header, .nav ").css({
            "max-width": $(window).width(),
        });
    });

    // open the modal window when clicking on the buttonClose
    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId)
                .find(".modal__dialog")
                .css({ transform: "scale(1)", opacity: "1" });
        }, 100);

        worksSlider.slick("setPosition");
    });

    // close the modal window when clicking on the button
    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        modalParent.removeClass("show");
        setTimeout(function () {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    // close the modal window when clicking on the buttonRequest and scroll to contact form
    modalRequest.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        let blockId = $(this).attr("href");
        let blockOffset = $(blockId).offset().top;

        modalParent
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        modalParent.removeClass("show");

        setTimeout(function () {
            $("body").removeClass("no-scroll");
            $("html , body").animate(
                {
                    scrollTop: blockOffset,
                },
                800
            );
        }, 200);
    });

    //close the modal window when clicking on the background
    $(".modal").on("click", function (event) {
        let $this = $(this);
        $this
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        $this.removeClass("show");
        setTimeout(function () {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    // Slider https://kenwheeler.github.io/slick/
    $("#reviewsSlider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        cssEase: "linear",
        adaptiveHeight: false,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });

    /*!
     * AOS.js
     * https://michalsnik.github.io/aos/
     */
    /* Animate On Scroll
     * ------------------------------------------------------ */
    var clAOS = function () {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 300,
            once: true,
            disable: "mobile",
        });
    };

    (function ssInit() {
        clAOS();
    })();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JLRgdGPINC40LTQtdGPINGC0YPRgiDRgdC+0YHRgtC+0LjRgiDQsiDRgtC+0LwsINGH0YLQvtCx0Ysg0YEg0L/QvtC80L7RidGM0Y4gcmlnZ2VyJ2Eg0LjQvdC60LvRjtC00LjRgtGMINCyINC90LXQs9C+INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8IGpzINGE0LDQudC70Ysg0LIg0L3Rg9C20L3QvtC8INC90LDQvCDQv9C+0YDRj9C00LrQtVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGlmICh3aWR0aCA+IDEwMDApIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbGxheCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIik7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBcclxuICAgICAgICAgICAgcGFyYWxsYXguc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IG9mZnNldCAqIDAuNiArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVsb2FkZXJcclxuICAgIC8vIHZhciBjbFByZWxvYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcImNsLXByZWxvYWRcIik7XHJcblxyXG4gICAgLy8gICAgICRXSU4ub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgLy9mb3JjZSBwYWdlIHNjcm9sbCBwb3NpdGlvbiB0byB0b3AgYXQgcGFnZSByZWZyZXNoXHJcbiAgICAvLyAgICAgICAgIC8vICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdub3JtYWwnKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHdpbGwgZmlyc3QgZmFkZSBvdXQgdGhlIGxvYWRpbmcgYW5pbWF0aW9uXHJcbiAgICAvLyAgICAgICAgICQoXCIjbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHdpbGwgZmFkZSBvdXQgdGhlIHdob2xlIERJViB0aGF0IGNvdmVycyB0aGUgd2Vic2l0ZS5cclxuICAgIC8vICAgICAgICAgICAgICQoXCIjcHJlbG9hZGVyXCIpLmRlbGF5KDMwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gZm9yIGhlcm8gY29udGVudCBhbmltYXRpb25zXHJcbiAgICAvLyAgICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwiY2wtcHJlbG9hZFwiKTtcclxuICAgIC8vICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJjbC1sb2FkZWRcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gY2xQcmVsb2FkZXIoKTtcclxuXHJcbiAgICAvLyBIZWFkZXIgZml4ZWRcclxuICAgIGxldCBoZWFkZXIgPSAkKFwiI2hlYWRlclwiKTtcclxuICAgIGxldCBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY2hlY2tTY3JvbGwoKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbCByZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGNoZWNrU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDEpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNtb290aCBzY3JvbGxcclxuICAgICQoXCIjbmF2LCAjaW50cm8sICNhYm91dCwgI3Byb21vXCIpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBibG9ja0lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICBsZXQgYmxvY2tPZmZzZXQgPSAkKGJsb2NrSWQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgJChcImh0bWwgLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogYmxvY2tPZmZzZXQgLSAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiI25hdl90b2dnbGVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNuYXZcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51IG5hdiB0b2dnbGVcclxuICAgICQoXCIjbmF2X3RvZ2dsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoXCIjbmF2X3RvZ2dsZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI25hdlwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vTW9kYWw9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgbW9kYWxDYWxsID0gJChcIltkYXRhLW1vZGFsXVwiKTtcclxuICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSAkKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuICAgIGNvbnN0IG1vZGFsUmVxdWVzdCA9ICQoXCIuYnRuUmVxdWVzdFwiKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgZGlzcGxhY2VtZW50IG9mIGNvbnRlbnQgd2hlbiBvcGVuaW5nIG1vZGFsIHdpbmRvd3NcclxuICAgICQod2luZG93KS5vbihcInJlc2l6ZSBsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keSwgLmhlYWRlciwgLm5hdiBcIikuY3NzKHtcclxuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogJCh3aW5kb3cpLndpZHRoKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiB0aGUgYnV0dG9uQ2xvc2VcclxuICAgIG1vZGFsQ2FsbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxJZCA9ICR0aGlzLmRhdGEoXCJtb2RhbFwiKTtcclxuXHJcbiAgICAgICAgJChtb2RhbElkKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsSWQpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsIG9wYWNpdHk6IFwiMVwiIH0pO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIHdvcmtzU2xpZGVyLnNsaWNrKFwic2V0UG9zaXRpb25cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxyXG4gICAgbW9kYWxDbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxQYXJlbnQgPSAkdGhpcy5wYXJlbnRzKFwiLm1vZGFsXCIpO1xyXG5cclxuICAgICAgICBtb2RhbFBhcmVudFxyXG4gICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgIC5jc3MoeyB0cmFuc2Zvcm06IFwic2NhbGUoMC43KVwiLCBvcGFjaXR5OiBcIjBcIiB9KTtcclxuICAgICAgICBtb2RhbFBhcmVudC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvblJlcXVlc3QgYW5kIHNjcm9sbCB0byBjb250YWN0IGZvcm1cclxuICAgIG1vZGFsUmVxdWVzdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxQYXJlbnQgPSAkdGhpcy5wYXJlbnRzKFwiLm1vZGFsXCIpO1xyXG4gICAgICAgIGxldCBibG9ja0lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICBsZXQgYmxvY2tPZmZzZXQgPSAkKGJsb2NrSWQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgbW9kYWxQYXJlbnRcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgbW9kYWxQYXJlbnQucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICAgICAgICAgICQoXCJodG1sICwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogYmxvY2tPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgODAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAkKFwiLm1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAkdGhpc1xyXG4gICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgIC5jc3MoeyB0cmFuc2Zvcm06IFwic2NhbGUoMC43KVwiLCBvcGFjaXR5OiBcIjBcIiB9KTtcclxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm1vZGFsX19kaWFsb2dcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNsaWRlciBodHRwczovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL1xyXG4gICAgJChcIiNyZXZpZXdzU2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgc3BlZWQ6IDQwMCxcclxuICAgICAgICBjc3NFYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiFcclxuICAgICAqIEFPUy5qc1xyXG4gICAgICogaHR0cHM6Ly9taWNoYWxzbmlrLmdpdGh1Yi5pby9hb3MvXHJcbiAgICAgKi9cclxuICAgIC8qIEFuaW1hdGUgT24gU2Nyb2xsXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIHZhciBjbEFPUyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgICAgIG9mZnNldDogMjAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pbi1zaW5lXCIsXHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgICAgICAgIGRpc2FibGU6IFwibW9iaWxlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIChmdW5jdGlvbiBzc0luaXQoKSB7XHJcbiAgICAgICAgY2xBT1MoKTtcclxuICAgIH0pKCk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
