const navLinks = document.querySelectorAll(".btn-scroll");
let i = 1;
for (const link of navLinks) {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(i++);
        const href = link.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });

        // document.body
        //     .querySelector("#nav-toggle__btn")
        //     .classList.remove("active");

        // if (
		// 	document.querySelector("body").classList.contains("offcanvas-menu")
        // ) {
		// 	document.querySelector(".arrow-collapse").classList.remove("active");
        //     document.querySelector("body").classList.remove("offcanvas-menu");
        // }
        // document.querySelector("body").classList.remove("offcanvas-menu");
    });
}
AOS.init({
    duration: 800,
    easing: "slide",
    once: false,
});

jQuery(document).ready(function ($) {
    "use strict";
///////////mail
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
                // $("#modal_thanks").addClass("show");
                // setTimeout(function () {
                //     $("#modal_thanks")
                //         .find(".modal__dialog--thanks")
                //         .css({ transform: "scale(1)", opacity: "1" });
                // }, 100);
                // $("body").addClass("no-scroll");
                $(this).find("input").val("");
                $("#form").trigger("reset");
            });
            return false;
        });
    });

    var siteMenuClone = function () {
        $(".js-clone-nav").each(function () {
            var $this = $(this);
            $this
                .clone()
                .attr("class", "site-nav-wrap")
                .appendTo(".site-mobile-menu-body");
        });

        setTimeout(function () {
            var counter = 0;
            $(".site-mobile-menu .has-children").each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find(".arrow-collapse").attr({
                    "data-toggle": "collapse",
                    "data-target": "#collapseItem" + counter,
                });

                $this.find("> ul").attr({
                    class: "collapse",
                    id: "collapseItem" + counter,
                });

                counter++;
            });
        }, 1000);

        $("body").on("click", ".arrow-collapse", function (e) {
            var $this = $(this);
            if ($this.closest("li").find(".collapse").hasClass("show")) {
                $this.removeClass("active");
            } else {
                $this.addClass("active");
            }
            e.preventDefault();
        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($("body").hasClass("offcanvas-menu")) {
                    $("body").removeClass("offcanvas-menu");
                }
            }
        });

        $("body").on("click", ".js-menu-toggle", function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($("body").hasClass("offcanvas-menu")) {
                $("body").removeClass("offcanvas-menu");
                $this.removeClass("active");
            } else {
                $("body").addClass("offcanvas-menu");
                $this.addClass("active");
            }
        });

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("offcanvas-menu")) {
                    $("body").removeClass("offcanvas-menu");
                }
            }
        });
    };
    siteMenuClone();

    var sitePlusMinus = function () {
        $(".js-btn-minus").on("click", function (e) {
            e.preventDefault();
            if (
                $(this).closest(".input-group").find(".form-control").val() != 0
            ) {
                $(this)
                    .closest(".input-group")
                    .find(".form-control")
                    .val(
                        parseInt(
                            $(this)
                                .closest(".input-group")
                                .find(".form-control")
                                .val()
                        ) - 1
                    );
            } else {
                $(this)
                    .closest(".input-group")
                    .find(".form-control")
                    .val(parseInt(0));
            }
        });
        $(".js-btn-plus").on("click", function (e) {
            e.preventDefault();
            $(this)
                .closest(".input-group")
                .find(".form-control")
                .val(
                    parseInt(
                        $(this)
                            .closest(".input-group")
                            .find(".form-control")
                            .val()
                    ) + 1
                );
        });
    };
    // sitePlusMinus();

    var siteSliderRange = function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
        });
        $("#amount").val(
            "$" +
                $("#slider-range").slider("values", 0) +
                " - $" +
                $("#slider-range").slider("values", 1)
        );
    };
    // siteSliderRange();

    var siteCarousel = function () {
        if ($(".nonloop-block-13").length > 0) {
            $(".nonloop-block-13").owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 20,
                smartSpeed: 1000,
                autoplay: true,
                nav: true,
                responsive: {
                    600: {
                        margin: 20,
                        nav: true,
                        items: 2,
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        nav: true,
                        items: 3,
                    },
                },
            });
            $(".custom-next").click(function (e) {
                e.preventDefault();
                $(".nonloop-block-13").trigger("next.owl.carousel");
            });
            $(".custom-prev").click(function (e) {
                e.preventDefault();
                $(".nonloop-block-13").trigger("prev.owl.carousel");
            });
        }

        $(".slide-one-item").owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            smartSpeed: 1500,
            autoplay: true,
            pauseOnHover: false,
            dots: true,
            nav: true,
            navText: [
                '<span class="icon-keyboard_arrow_left">',
                '<span class="icon-keyboard_arrow_right">',
            ],
        });

        if ($(".owl-all").length > 0) {
            $(".owl-all").owlCarousel({
                center: false,
                items: 1,
                loop: false,
                stagePadding: 0,
                margin: 0,
                autoplay: false,
                nav: false,
                dots: true,
                touchDrag: true,
                mouseDrag: true,
                smartSpeed: 1000,
                navText: [
                    '<span class="icon-arrow_back">',
                    '<span class="icon-arrow_forward">',
                ],
                responsive: {
                    768: {
                        margin: 30,
                        nav: false,
                        responsiveRefreshRate: 10,
                        items: 1,
                    },
                    992: {
                        margin: 30,
                        stagePadding: 0,
                        nav: false,
                        responsiveRefreshRate: 10,
                        touchDrag: false,
                        mouseDrag: false,
                        items: 3,
                    },
                    1200: {
                        margin: 30,
                        stagePadding: 0,
                        nav: false,
                        responsiveRefreshRate: 10,
                        touchDrag: false,
                        mouseDrag: false,
                        items: 3,
                    },
                },
            });
        }
    };
    siteCarousel();

    var siteCountDown = function () {
        $("#date-countdown").countdown("2020/10/10", function (event) {
            var $this = $(this).html(
                event.strftime(
                    "" +
                        '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
                        '<span class="countdown-block"><span class="label">%d</span> days </span>' +
                        '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
                        '<span class="countdown-block"><span class="label">%M</span> min </span>' +
                        '<span class="countdown-block"><span class="label">%S</span> sec</span>'
                )
            );
        });
    };
    // siteCountDown();

    var siteDatePicker = function () {
        if ($(".datepicker").length > 0) {
            $(".datepicker").datepicker();
        }
    };
    siteDatePicker();

    var siteSticky = function () {
        $(".js-sticky-header").sticky({ topSpacing: 0 });
    };
    siteSticky();

    // navigation
    var OnePageNavigation = function () {
        var navToggler = $(".site-menu-toggle");

        $("body").on(
            "click",
            ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']",
            function (e) {
                e.preventDefault();

                var hash = this.hash;

                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top - 50,
                    },
                    600,
                    "easeInOutExpo",
                    function () {
                        // window.location.hash = hash;
                    }
                );
            }
        );
    };
    OnePageNavigation();

    var siteScroll = function () {
        $(window).scroll(function () {
            var st = $(this).scrollTop();

            if (st > 100) {
                $(".js-sticky-header").addClass("shrink");
            } else {
                $(".js-sticky-header").removeClass("shrink");
            }
        });
    };
    siteScroll();

    // Stellar
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
    });

    var counter = function () {
        $("#about-section").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("ftco-animated")
                ) {
                    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
                        ","
                    );
                    $(".number > span").each(function () {
                        var $this = $(this),
                            num = $this.data("number");
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step,
                            },
                            7000
                        );
                    });
                }
            },
            { offset: "95%" }
        );
    };
    counter();

    var siteIstotope = function () {
        /* activate jquery isotope */
        var $container = $("#posts").isotope({
            itemSelector: ".item",
            isFitWidth: true,
        });

        $(window).resize(function () {
            $container.isotope({
                columnWidth: ".col-sm-3",
            });
        });

        $container.isotope({ filter: "*" });

        // filter items on button click
        $("#filters").on("click", "button", function (e) {
            e.preventDefault();
            var filterValue = $(this).attr("data-filter");
            $container.isotope({ filter: filterValue });
            $("#filters button").removeClass("active");
            $(this).addClass("active");
        });
    };

    siteIstotope();
});
