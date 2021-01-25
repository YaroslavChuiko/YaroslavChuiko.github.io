"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(function () {
  // Mail
  $("#form").submit(function () {
    // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.name.value == "" || document.form.email.value == "") {
      valid = false;
      console.log(error);
      return valid;
    }

    $.ajax({
      type: "POST",
      url: "php/main.php",
      data: $(this).serialize()
    }).done(function () {
      // $("#modal_thanks").addClass("show");
      // setTimeout(function () {
      //     $("#modal_thanks")
      //         .find(".modal__dialog--thanks")
      //         .css({ transform: "scale(1)", opacity: "1" });
      // }, 100);
      // $("body").addClass("no-scroll");
      // $(this).find("input").val("");
      $("#form").trigger("reset");
    });
    return false;
  }); // Slider https://kenwheeler.github.io/slick/

  $("#introSlider").slick({
    infinite: true,
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: "linear",
    adaptiveHeight: false,
    centerMode: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
  /*!
   * AOS.js
   * https://michalsnik.github.io/aos/
   */

  /* Animate On Scroll
   * ------------------------------------------------------ */

  AOS.init({
    offset: 150,
    duration: 600,
    easing: "lianer",
    delay: 100,
    // once: true,
    disable: "mobile"
  }); // Preloader

  $(window).on("load", function () {
    // force page scroll position to top at page refresh
    $("html, body").animate({
      scrollTop: 0
    }, "normal"); // will first fade out the loading animation

    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(200).fadeOut("slow");
    });
  });
}); ////tabs

var tabsNavLinks = document.body.querySelectorAll("[data-tabs-target]");

var _iterator = _createForOfIteratorHelper(tabsNavLinks),
    _step;

try {
  var _loop = function _loop() {
    var link = _step.value;
    link.addEventListener("click", function (event) {
      event.preventDefault();
      tabsNavLinks.forEach(function (a) {
        a.classList.remove("active");
      });
      link.classList.add("active");
      var tabId = link.dataset.tabsTarget;
      document.body.querySelectorAll(".tabs__panel").forEach(function (e) {
        e.classList.remove("active");
      });
      document.body.querySelector("#".concat(tabId)).classList.add("active");
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } /////////////////////////
  // menu nav toggle

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var menuToggleBtn = document.body.querySelector("#nav_toggle");
menuToggleBtn.addEventListener("click", function (event) {
  event.preventDefault();
  menuToggleBtn.querySelector("#nav-toggle__btn").classList.toggle("active");
  document.body.querySelector("#nav").classList.toggle("active");
}); //////////////////////////
// Smooth scroll

var navLinks = document.querySelectorAll("#nav ul a");

var _iterator2 = _createForOfIteratorHelper(navLinks),
    _step2;

try {
  var _loop2 = function _loop2() {
    var link = _step2.value;
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var href = link.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
      document.body.querySelector("#nav-toggle__btn").classList.remove("active");
      document.body.querySelector("#nav").classList.remove("active");
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop2();
  } // for (const link of navLinks) {
  //     link.addEventListener("click", clickHandler);
  // }
  // function clickHandler(e) {
  //     e.preventDefault();
  //     const href = this.getAttribute("href");
  //     const offsetTop = document.querySelector(href).offsetTop;
  //     scroll({
  //       top: offsetTop,
  //       behavior: "smooth"
  //     });
  //   }
  ///scroll to top btn

} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var scrollPos = window.scrollY;
var scrollToTopBtn = document.body.querySelector("#scrollToTop");
window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  checkScroll(scrollPos, scrollToTopBtn);
});

function checkScroll(scrollPos, btn) {
  var showPoint = document.body.querySelector("#intro").scrollHeight;

  if (scrollPos > showPoint) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}

scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scroll({
    top: 0,
    behavior: "smooth"
  });
}); /////////////////////