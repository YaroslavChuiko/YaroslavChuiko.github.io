$(function() {
    let header = $("#header");
    const worksSlider = $("[data-slider='slick']");

    //prevent displacement of content when opening modal windows
    $(window).on("resize load", function() {
        $("body, .header, .nav ").css({
            "max-width": $(window).width()
        });
    });

    // Header fixed
    let scrollPos = $(window).scrollTop();

    checkScroll();
    $(window).on("scroll resize", function() {
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
    $("#nav, #footerNav").on("click", "a", function(event) {
        event.preventDefault();

        let blockId = $(this).attr("href");
        let blockOffset = $(blockId).offset().top;

        $("html , body").animate(
            {
                scrollTop: blockOffset - 73
            },
            500
        );

        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
        $("body").removeClass("no-scroll");
    });

    // menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });

    //Filter of work=======================
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data("filter");

        if (cat == "all") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data("cat");

                if (workCat != cat) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });

    //Modal=======================
    const modalCall = $("[data-modal]");
    const modalClose = $(".modal__close");

    // opening the modal window by clicking on the button
    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function() {
            $(modalId)
                .find(".modal__dialog")
                .css({ transform: "scale(1)", opacity: "1" });
        }, 100);

        worksSlider.slick("setPosition");
    });

    // closing the modal window by clicking on the button
    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        modalParent.removeClass("show");
        setTimeout(function() {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    // closing modal window by clicking on the background
    $(".modal").on("click", function(event) {
        let $this = $(this);
        $this
            .find(".modal__dialog")
            .css({ transform: "scale(0.7)", opacity: "0" });
        $this.removeClass("show");
        setTimeout(function() {
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    // Slider https://kenwheeler.github.io/slick/
    $("#reviewsSlider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        cssEase: "linear",
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000
    });

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        cssEase: "linear",
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000
    });

    //slick buttons
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this)
            .parents(".modal")
            .find("[data-slider='slick']");

        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this)
            .parents(".modal")
            .find("[data-slider='slick']");

        currentSlider.slick("slickNext");
    });
});
