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
    // Отправка заявки
    $(document).ready(function () {
        $("#form").submit(function () {
            // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
            if (document.form.name.value == "" || document.form.phone.value == "") {
                valid = false;
                console.log(error);
                return valid;
            }
            $.ajax({
                type: "POST",
                url: "php/main.php",
                data: $(this).serialize(),
            }).done(function () {
                $("#modal_thanks").addClass("show");
                setTimeout(function () {
                    $("#modal_thanks")
                        .find(".modal__dialog--thanks")
                        .css({ transform: "scale(1)", opacity: "1" });
                }, 100);
                $("body").addClass("no-scroll");
                $(this).find("input").val("");
                $("#form").trigger("reset");
            });
            return false;
        });
    });
    
    // Закрыть попап «спасибо»
    // $(".js-close-thank-you").click(function () {
    //     // по клику на крестик
    //     $(".js-overlay-thank-you").fadeOut();
    // });
    
    // $(document).mouseup(function (e) {
    //     // по клику вне попапа
    //     var popup = $(".popup");
    //     if (e.target != popup[0] && popup.has(e.target).length === 0) {
    //         $(".js-overlay-thank-you").fadeOut();
    //     }
    // });
    
    // Маска ввода номера телефона (плагин maskedinput)
    $(function ($) {
        $('[name="phone"]').mask("+38(999) 999-99-99");
    });

    svg4everybody();

    // Preloader
    $(window).on("load", function () {
        // force page scroll position to top at page refresh
        $("html, body").animate({ scrollTop: 0 }, "normal");

        // will first fade out the loading animation
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });
    });

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
    AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 300,
        // once: true,
        disable: "mobile",
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JLRgdGPINC40LTQtdGPINGC0YPRgiDRgdC+0YHRgtC+0LjRgiDQsiDRgtC+0LwsINGH0YLQvtCx0Ysg0YEg0L/QvtC80L7RidGM0Y4gcmlnZ2VyJ2Eg0LjQvdC60LvRjtC00LjRgtGMINCyINC90LXQs9C+INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8IGpzINGE0LDQudC70Ysg0LIg0L3Rg9C20L3QvtC8INC90LDQvCDQv9C+0YDRj9C00LrQtVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGlmICh3aWR0aCA+IDEwMDApIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbGxheCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIik7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBcclxuICAgICAgICAgICAgcGFyYWxsYXguc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IG9mZnNldCAqIDAuNiArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vINCe0YLQv9GA0LDQstC60LAg0LfQsNGP0LLQutC4XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQv9GD0YHRgtC+0YLRgyDQt9Cw0L/QvtC70L3QtdC90L3Ri9GFINC/0L7Qu9C10LkuINCQ0YLRgNC40LHRg9GCIGh0bWw1IOKAlCByZXF1aXJlZCDQvdC1INC/0L7QtNGF0L7QtNC40YIgKNC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyBTYWZhcmkpXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5mb3JtLm5hbWUudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5mb3JtLnBob25lLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInBocC9tYWluLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21vZGFsX3RoYW5rc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX3RoYW5rc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nLS10aGFua3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLCBvcGFjaXR5OiBcIjFcIiB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QvtC/0LDQvyDCq9GB0L/QsNGB0LjQsdC+wrtcclxuICAgIC8vICQoXCIuanMtY2xvc2UtdGhhbmsteW91XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAvLyDQv9C+INC60LvQuNC60YMg0L3QsCDQutGA0LXRgdGC0LjQulxyXG4gICAgLy8gICAgICQoXCIuanMtb3ZlcmxheS10aGFuay15b3VcIikuZmFkZU91dCgpO1xyXG4gICAgLy8gfSk7XHJcbiAgICBcclxuICAgIC8vICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAvLyDQv9C+INC60LvQuNC60YMg0LLQvdC1INC/0L7Qv9Cw0L/QsFxyXG4gICAgLy8gICAgIHZhciBwb3B1cCA9ICQoXCIucG9wdXBcIik7XHJcbiAgICAvLyAgICAgaWYgKGUudGFyZ2V0ICE9IHBvcHVwWzBdICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICQoXCIuanMtb3ZlcmxheS10aGFuay15b3VcIikuZmFkZU91dCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAvLyDQnNCw0YHQutCwINCy0LLQvtC00LAg0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAgKNC/0LvQsNCz0LjQvSBtYXNrZWRpbnB1dClcclxuICAgICQoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICAkKCdbbmFtZT1cInBob25lXCJdJykubWFzayhcIiszOCg5OTkpIDk5OS05OS05OVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN2ZzRldmVyeWJvZHkoKTtcclxuXHJcbiAgICAvLyBQcmVsb2FkZXJcclxuICAgICQod2luZG93KS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvcmNlIHBhZ2Ugc2Nyb2xsIHBvc2l0aW9uIHRvIHRvcCBhdCBwYWdlIHJlZnJlc2hcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwibm9ybWFsXCIpO1xyXG5cclxuICAgICAgICAvLyB3aWxsIGZpcnN0IGZhZGUgb3V0IHRoZSBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICQoXCIjbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gd2lsbCBmYWRlIG91dCB0aGUgd2hvbGUgRElWIHRoYXQgY292ZXJzIHRoZSB3ZWJzaXRlLlxyXG4gICAgICAgICAgICAkKFwiI3ByZWxvYWRlclwiKS5kZWxheSgzMDApLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGVhZGVyIGZpeGVkXHJcbiAgICBsZXQgaGVhZGVyID0gJChcIiNoZWFkZXJcIik7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGNoZWNrU2Nyb2xsKCk7XHJcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGwgcmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxQb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBjaGVja1Njcm9sbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFBvcyA+PSAxKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcyhcImZpeGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTbW9vdGggc2Nyb2xsXHJcbiAgICAkKFwiI25hdiwgI2ludHJvLCAjYWJvdXQsICNwcm9tb1wiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgYmxvY2tJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgbGV0IGJsb2NrT2Zmc2V0ID0gJChibG9ja0lkKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICQoXCJodG1sICwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGJsb2NrT2Zmc2V0IC0gMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJChcIiNuYXZfdG9nZ2xlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIjbmF2XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWVudSBuYXYgdG9nZ2xlXHJcbiAgICAkKFwiI25hdl90b2dnbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKFwiI25hdl90b2dnbGVcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNuYXZcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL01vZGFsPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG1vZGFsQ2FsbCA9ICQoXCJbZGF0YS1tb2RhbF1cIik7XHJcbiAgICBjb25zdCBtb2RhbENsb3NlID0gJChcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICBjb25zdCBtb2RhbFJlcXVlc3QgPSAkKFwiLmJ0blJlcXVlc3RcIik7XHJcblxyXG4gICAgLy9wcmV2ZW50IGRpc3BsYWNlbWVudCBvZiBjb250ZW50IHdoZW4gb3BlbmluZyBtb2RhbCB3aW5kb3dzXHJcbiAgICAkKHdpbmRvdykub24oXCJyZXNpemUgbG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHksIC5oZWFkZXIsIC5uYXYgXCIpLmNzcyh7XHJcbiAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6ICQod2luZG93KS53aWR0aCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gb3BlbiB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvbkNsb3NlXHJcbiAgICBtb2RhbENhbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsSWQgPSAkdGhpcy5kYXRhKFwibW9kYWxcIik7XHJcblxyXG4gICAgICAgICQobW9kYWxJZCkuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChtb2RhbElkKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLCBvcGFjaXR5OiBcIjFcIiB9KTtcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICB3b3Jrc1NsaWRlci5zbGljayhcInNldFBvc2l0aW9uXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBidXR0b25cclxuICAgIG1vZGFsQ2xvc2Uub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsUGFyZW50ID0gJHRoaXMucGFyZW50cyhcIi5tb2RhbFwiKTtcclxuXHJcbiAgICAgICAgbW9kYWxQYXJlbnRcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgbW9kYWxQYXJlbnQucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBidXR0b25SZXF1ZXN0IGFuZCBzY3JvbGwgdG8gY29udGFjdCBmb3JtXHJcbiAgICBtb2RhbFJlcXVlc3Qub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0IG1vZGFsUGFyZW50ID0gJHRoaXMucGFyZW50cyhcIi5tb2RhbFwiKTtcclxuICAgICAgICBsZXQgYmxvY2tJZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgbGV0IGJsb2NrT2Zmc2V0ID0gJChibG9ja0lkKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgIG1vZGFsUGFyZW50XHJcbiAgICAgICAgICAgIC5maW5kKFwiLm1vZGFsX19kaWFsb2dcIilcclxuICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgwLjcpXCIsIG9wYWNpdHk6IFwiMFwiIH0pO1xyXG4gICAgICAgIG1vZGFsUGFyZW50LnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAkKFwiaHRtbCAsIGJvZHlcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGJsb2NrT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDgwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2Nsb3NlIHRoZSBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiB0aGUgYmFja2dyb3VuZFxyXG4gICAgJChcIi5tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgJHRoaXNcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5tb2RhbF9fZGlhbG9nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTbGlkZXIgaHR0cHM6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9cclxuICAgICQoXCIjcmV2aWV3c1NsaWRlclwiKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgY3NzRWFzZTogXCJsaW5lYXJcIixcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyohXHJcbiAgICAgKiBBT1MuanNcclxuICAgICAqIGh0dHBzOi8vbWljaGFsc25pay5naXRodWIuaW8vYW9zL1xyXG4gICAgICovXHJcbiAgICAvKiBBbmltYXRlIE9uIFNjcm9sbFxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgICBBT1MuaW5pdCh7XHJcbiAgICAgICAgb2Zmc2V0OiAyMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDYwMCxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZS1pbi1zaW5lXCIsXHJcbiAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAvLyBvbmNlOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGU6IFwibW9iaWxlXCIsXHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
