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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0JLRgdGPINC40LTQtdGPINGC0YPRgiDRgdC+0YHRgtC+0LjRgiDQsiDRgtC+0LwsINGH0YLQvtCx0Ysg0YEg0L/QvtC80L7RidGM0Y4gcmlnZ2VyJ2Eg0LjQvdC60LvRjtC00LjRgtGMINCyINC90LXQs9C+INCy0YHQtSDQvdGD0LbQvdGL0LUg0L3QsNC8IGpzINGE0LDQudC70Ysg0LIg0L3Rg9C20L3QvtC8INC90LDQvCDQv9C+0YDRj9C00LrQtVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGlmICh3aWR0aCA+IDEwMDApIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbGxheCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9cIik7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBcclxuICAgICAgICAgICAgcGFyYWxsYXguc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IG9mZnNldCAqIDAuNiArIFwicHhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vINCe0YLQv9GA0LDQstC60LAg0LfQsNGP0LLQutC4XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQv9GD0YHRgtC+0YLRgyDQt9Cw0L/QvtC70L3QtdC90L3Ri9GFINC/0L7Qu9C10LkuINCQ0YLRgNC40LHRg9GCIGh0bWw1IOKAlCByZXF1aXJlZCDQvdC1INC/0L7QtNGF0L7QtNC40YIgKNC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyBTYWZhcmkpXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5mb3JtLm5hbWUudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5mb3JtLnBob25lLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInBocC9tYWluLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21vZGFsX3RoYW5rc1wiKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI21vZGFsX3RoYW5rc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nLS10aGFua3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7IHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLCBvcGFjaXR5OiBcIjFcIiB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QvtC/0LDQvyDCq9GB0L/QsNGB0LjQsdC+wrtcclxuICAgIC8vICQoXCIuanMtY2xvc2UtdGhhbmsteW91XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAvLyDQv9C+INC60LvQuNC60YMg0L3QsCDQutGA0LXRgdGC0LjQulxyXG4gICAgLy8gICAgICQoXCIuanMtb3ZlcmxheS10aGFuay15b3VcIikuZmFkZU91dCgpO1xyXG4gICAgLy8gfSk7XHJcbiAgICBcclxuICAgIC8vICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICAvLyDQv9C+INC60LvQuNC60YMg0LLQvdC1INC/0L7Qv9Cw0L/QsFxyXG4gICAgLy8gICAgIHZhciBwb3B1cCA9ICQoXCIucG9wdXBcIik7XHJcbiAgICAvLyAgICAgaWYgKGUudGFyZ2V0ICE9IHBvcHVwWzBdICYmIHBvcHVwLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICQoXCIuanMtb3ZlcmxheS10aGFuay15b3VcIikuZmFkZU91dCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAvLyDQnNCw0YHQutCwINCy0LLQvtC00LAg0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAgKNC/0LvQsNCz0LjQvSBtYXNrZWRpbnB1dClcclxuICAgICQoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICAkKCdbbmFtZT1cInBob25lXCJdJykubWFzayhcIiszOCg5OTkpIDk5OS05OS05OVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZWxvYWRlclxyXG4gICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yY2UgcGFnZSBzY3JvbGwgcG9zaXRpb24gdG8gdG9wIGF0IHBhZ2UgcmVmcmVzaFxyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJub3JtYWxcIik7XHJcblxyXG4gICAgICAgIC8vIHdpbGwgZmlyc3QgZmFkZSBvdXQgdGhlIGxvYWRpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgJChcIiNsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyB3aWxsIGZhZGUgb3V0IHRoZSB3aG9sZSBESVYgdGhhdCBjb3ZlcnMgdGhlIHdlYnNpdGUuXHJcbiAgICAgICAgICAgICQoXCIjcHJlbG9hZGVyXCIpLmRlbGF5KDMwMCkuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIZWFkZXIgZml4ZWRcclxuICAgIGxldCBoZWFkZXIgPSAkKFwiI2hlYWRlclwiKTtcclxuICAgIGxldCBzY3JvbGxQb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY2hlY2tTY3JvbGwoKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbCByZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGNoZWNrU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDEpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNtb290aCBzY3JvbGxcclxuICAgICQoXCIjbmF2LCAjaW50cm8sICNhYm91dCwgI3Byb21vXCIpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBibG9ja0lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICBsZXQgYmxvY2tPZmZzZXQgPSAkKGJsb2NrSWQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgJChcImh0bWwgLCBib2R5XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogYmxvY2tPZmZzZXQgLSAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkKFwiI25hdl90b2dnbGVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNuYXZcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtZW51IG5hdiB0b2dnbGVcclxuICAgICQoXCIjbmF2X3RvZ2dsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoXCIjbmF2X3RvZ2dsZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI25hdlwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vTW9kYWw9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgbW9kYWxDYWxsID0gJChcIltkYXRhLW1vZGFsXVwiKTtcclxuICAgIGNvbnN0IG1vZGFsQ2xvc2UgPSAkKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuICAgIGNvbnN0IG1vZGFsUmVxdWVzdCA9ICQoXCIuYnRuUmVxdWVzdFwiKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgZGlzcGxhY2VtZW50IG9mIGNvbnRlbnQgd2hlbiBvcGVuaW5nIG1vZGFsIHdpbmRvd3NcclxuICAgICQod2luZG93KS5vbihcInJlc2l6ZSBsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keSwgLmhlYWRlciwgLm5hdiBcIikuY3NzKHtcclxuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogJCh3aW5kb3cpLndpZHRoKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBvcGVuIHRoZSBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiB0aGUgYnV0dG9uQ2xvc2VcclxuICAgIG1vZGFsQ2FsbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxJZCA9ICR0aGlzLmRhdGEoXCJtb2RhbFwiKTtcclxuXHJcbiAgICAgICAgJChtb2RhbElkKS5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsSWQpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDEpXCIsIG9wYWNpdHk6IFwiMVwiIH0pO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIHdvcmtzU2xpZGVyLnNsaWNrKFwic2V0UG9zaXRpb25cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxyXG4gICAgbW9kYWxDbG9zZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxQYXJlbnQgPSAkdGhpcy5wYXJlbnRzKFwiLm1vZGFsXCIpO1xyXG5cclxuICAgICAgICBtb2RhbFBhcmVudFxyXG4gICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgIC5jc3MoeyB0cmFuc2Zvcm06IFwic2NhbGUoMC43KVwiLCBvcGFjaXR5OiBcIjBcIiB9KTtcclxuICAgICAgICBtb2RhbFBhcmVudC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gdGhlIGJ1dHRvblJlcXVlc3QgYW5kIHNjcm9sbCB0byBjb250YWN0IGZvcm1cclxuICAgIG1vZGFsUmVxdWVzdC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgbW9kYWxQYXJlbnQgPSAkdGhpcy5wYXJlbnRzKFwiLm1vZGFsXCIpO1xyXG4gICAgICAgIGxldCBibG9ja0lkID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICBsZXQgYmxvY2tPZmZzZXQgPSAkKGJsb2NrSWQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgbW9kYWxQYXJlbnRcclxuICAgICAgICAgICAgLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgICAuY3NzKHsgdHJhbnNmb3JtOiBcInNjYWxlKDAuNylcIiwgb3BhY2l0eTogXCIwXCIgfSk7XHJcbiAgICAgICAgbW9kYWxQYXJlbnQucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIik7XHJcbiAgICAgICAgICAgICQoXCJodG1sICwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogYmxvY2tPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgODAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2xvc2UgdGhlIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAkKFwiLm1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAkdGhpc1xyXG4gICAgICAgICAgICAuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpXHJcbiAgICAgICAgICAgIC5jc3MoeyB0cmFuc2Zvcm06IFwic2NhbGUoMC43KVwiLCBvcGFjaXR5OiBcIjBcIiB9KTtcclxuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm1vZGFsX19kaWFsb2dcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNsaWRlciBodHRwczovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL1xyXG4gICAgJChcIiNyZXZpZXdzU2xpZGVyXCIpLnNsaWNrKHtcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgc3BlZWQ6IDQwMCxcclxuICAgICAgICBjc3NFYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiFcclxuICAgICAqIEFPUy5qc1xyXG4gICAgICogaHR0cHM6Ly9taWNoYWxzbmlrLmdpdGh1Yi5pby9hb3MvXHJcbiAgICAgKi9cclxuICAgIC8qIEFuaW1hdGUgT24gU2Nyb2xsXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgICBvZmZzZXQ6IDIwMCxcclxuICAgICAgICBkdXJhdGlvbjogNjAwLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlLWluLXNpbmVcIixcclxuICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgIC8vIG9uY2U6IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZTogXCJtb2JpbGVcIixcclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
