//Вся идея тут состоит в том, чтобы с помощью rigger'a инклюдить в него все нужные нам js файлы в нужном нам порядке

let parallax = document.getElementById("intro");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";
});

$(function () {
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
    const modalRequest = $("#btnRequest");

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JLRgdGPINC40LTQtdGPINGC0YPRgiDRgdC+0YHRgtC+0LjRgiDQsiDRgtC+0LwsINGH0YLQvtCx0Ysg0YEg0L/QvtC80L7RidGM0Y4gcmlnZ2VyJ2Eg0LjQvdC60LvRjtC00LjRgtGMINCyINC90LXQs9C+INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8IGpzINGE0LDQudC70Ysg0LIg0L3Rg9C20L3QvtC8INC90LDQvCDQv9C+0YDRj9C00LrQtVxyXG5cclxubGV0IHBhcmFsbGF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyb1wiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBwYXJhbGxheC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gb2Zmc2V0ICogMC42ICsgXCJweFwiO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSGVhZGVyIGZpeGVkXHJcbiAgICBsZXQgaGVhZGVyID0gJChcIiNoZWFkZXJcIik7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGNoZWNrU2Nyb2xsKCk7XHJcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGwgcmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxQb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBjaGVja1Njcm9sbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFBvcyA+PSAxKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTbW9vdGggc2Nyb2xsXHJcbiAgICAkKFwiI25hdiwgI2ludHJvLCAjYWJvdXQsICNwcm9tb1wiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgYmxvY2tJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgbGV0IGJsb2NrT2Zmc2V0ID0gJChibG9ja0lkKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICQoXCJodG1sICwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGJsb2NrT2Zmc2V0IC0gMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJChcIiNuYXZfdG9nZ2xlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIjbmF2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudSBuYXYgdG9nZ2xlXHJcbiAgICAkKFwiI25hdl90b2dnbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKFwiI25hdl90b2dnbGVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNuYXZcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL01vZGFsPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG1vZGFsQ2FsbCA9ICQoXCJbZGF0YS1tb2RhbF1cIik7XHJcbiAgICBjb25zdCBtb2RhbENsb3NlID0gJChcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICBjb25zdCBtb2RhbFJlcXVlc3QgPSAkKFwiI2J0blJlcXVlc3RcIik7XHJcblxyXG4gICAgLy9wcmV2ZW50IGRpc3BsYWNlbWVudCBvZiBjb250ZW50IHdoZW4gb3BlbmluZyBtb2RhbCB3aW5kb3dzXHJcbiAgICAkKHdpbmRvdykub24oXCJyZXNpemUgbG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHksIC5oZWFkZXIsIC5uYXYgXCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6ICQod2luZG93KS53aWR0aCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gb3BlbiB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvbkNsb3NlXHJcbiAgICBtb2RhbENhbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsSWQgPSAkdGhpcy5kYXRhKFwibW9kYWxcIik7XHJcblxyXG4gICAgICAgICQobW9kYWxJZCkuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChtb2RhbElkKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLCBvcGFjaXR5OiBcIjFcIiB9KTtcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICB3b3Jrc1NsaWRlci5zbGljayhcInNldFBvc2l0aW9uXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBidXR0b25cclxuICAgIG1vZGFsQ2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsUGFyZW50ID0gJHRoaXMucGFyZW50cyhcIi5tb2RhbFwiKTtcclxuXHJcbiAgICAgICAgbW9kYWxQYXJlbnRcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgbW9kYWxQYXJlbnQucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBidXR0b25SZXF1ZXN0IGFuZCBzY3JvbGwgdG8gY29udGFjdCBmb3JtXHJcbiAgICBtb2RhbFJlcXVlc3Qub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsUGFyZW50ID0gJHRoaXMucGFyZW50cyhcIi5tb2RhbFwiKTtcclxuICAgICAgICBsZXQgYmxvY2tJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgbGV0IGJsb2NrT2Zmc2V0ID0gJChibG9ja0lkKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgIG1vZGFsUGFyZW50XHJcbiAgICAgICAgICAgIC5maW5kKFwiLm1vZGFsX19kaWFsb2dcIilcclxuICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgwLjcpXCIsIG9wYWNpdHk6IFwiMFwiIH0pO1xyXG4gICAgICAgIG1vZGFsUGFyZW50LnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCAsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGJsb2NrT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDgwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2Nsb3NlIHRoZSBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiB0aGUgYmFja2dyb3VuZFxyXG4gICAgJChcIi5tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgJHRoaXNcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5tb2RhbF9fZGlhbG9nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTbGlkZXIgaHR0cHM6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9cclxuICAgICQoXCIjcmV2aWV3c1NsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgY3NzRWFzZTogXCJsaW5lYXJcIixcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyohXHJcbiAgICAgKiBBT1MuanNcclxuICAgICAqIGh0dHBzOi8vbWljaGFsc25pay5naXRodWIuaW8vYW9zL1xyXG4gICAgICovXHJcbiAgICAvKiBBbmltYXRlIE9uIFNjcm9sbFxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICB2YXIgY2xBT1MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQU9TLmluaXQoe1xyXG4gICAgICAgICAgICBvZmZzZXQ6IDIwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDYwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tc2luZVwiLFxyXG4gICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgICAgICBkaXNhYmxlOiBcIm1vYmlsZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAoZnVuY3Rpb24gc3NJbml0KCkge1xyXG4gICAgICAgIGNsQU9TKCk7XHJcbiAgICB9KSgpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
