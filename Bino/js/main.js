"use strict";$(function(){$(document).ready(function(){$("#form").submit(function(){return""==document.form.name.value||""==document.form.phone.value?(valid=!1,console.log(error),valid):($.ajax({type:"POST",url:"php/main.php",data:$(this).serialize()}).done(function(){$("#modal_thanks").addClass("show"),setTimeout(function(){$("#modal_thanks").find(".modal__dialog--thanks").css({transform:"scale(1)",opacity:"1"})},100),$("body").addClass("no-scroll"),$(this).find("input").val(""),$("#form").trigger("reset")}),!1)})}),$(function(o){o('[name="phone"]').mask("+38(999) 999-99-99")}),svg4everybody({}),1e3<$(window).width()&&$(window).on("scroll",function(){$("#intro").css("background-position-y",.6*$(window).scrollTop()+"px")}),$(window).on("load",function(){$("html, body").animate({scrollTop:0},"normal"),$("#loader").fadeOut("slow",function(){$("#preloader").delay(300).fadeOut("slow")})});var o=$("#header"),e=$(window).scrollTop();function s(){1<=e?o.addClass("fixed"):o.removeClass("fixed")}s(),$(window).on("scroll resize",function(){e=$(this).scrollTop(),s()}),$("#nav, #intro, #about, #promo").on("click","a",function(o){o.preventDefault();var e=$(this).attr("href"),s=$(e).offset().top;$("html , body").animate({scrollTop:+s},500),$("#nav_toggle").removeClass("active"),$("#nav").removeClass("active"),$("body").removeClass("no-scroll")}),$("#nav_toggle").on("click",function(o){o.preventDefault(),$("#nav_toggle").toggleClass("active"),$("#nav").toggleClass("active"),$("body").toggleClass("no-scroll")});var a=$("[data-modal]"),n=$(".modal__close"),t=$(".btnRequest");$(window).on("resize load",function(){$("body, .header, .nav ").css({"max-width":$(window).width()})}),a.on("click",function(o){o.preventDefault();var e=$(this).data("modal");$(e).addClass("show"),$("body").addClass("no-scroll"),setTimeout(function(){$(e).find(".modal__dialog").css({transform:"scale(1)",opacity:"1"})},100),worksSlider.slick("setPosition")}),n.on("click",function(o){o.preventDefault();var e=$(this).parents(".modal");e.find(".modal__dialog").css({transform:"scale(0.7)",opacity:"0"}),e.removeClass("show"),setTimeout(function(){$("body").removeClass("no-scroll")},200)}),t.on("click",function(o){o.preventDefault();var e=$(this).parents(".modal"),s=$(this).attr("href"),a=$(s).offset().top;e.find(".modal__dialog").css({transform:"scale(0.7)",opacity:"0"}),e.removeClass("show"),setTimeout(function(){$("body").removeClass("no-scroll"),$("html , body").animate({scrollTop:a},800)},200)}),$(".modal").on("click",function(o){var e=$(this);e.find(".modal__dialog").css({transform:"scale(0.7)",opacity:"0"}),e.removeClass("show"),setTimeout(function(){$("body").removeClass("no-scroll")},200)}),$(".modal__dialog").on("click",function(o){o.stopPropagation()}),$("#reviewsSlider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,speed:400,cssEase:"linear",adaptiveHeight:!1,centerMode:!0,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1400,settings:{slidesToShow:1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}}]}),AOS.init({offset:200,duration:600,easing:"ease-in-sine",delay:300,disable:"mobile"})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiOyQoZnVuY3Rpb24oKXskKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyQoXCIjZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKXtyZXR1cm5cIlwiPT1kb2N1bWVudC5mb3JtLm5hbWUudmFsdWV8fFwiXCI9PWRvY3VtZW50LmZvcm0ucGhvbmUudmFsdWU/KHZhbGlkPSExLGNvbnNvbGUubG9nKGVycm9yKSx2YWxpZCk6KCQuYWpheCh7dHlwZTpcIlBPU1RcIix1cmw6XCJwaHAvbWFpbi5waHBcIixkYXRhOiQodGhpcykuc2VyaWFsaXplKCl9KS5kb25lKGZ1bmN0aW9uKCl7JChcIiNtb2RhbF90aGFua3NcIikuYWRkQ2xhc3MoXCJzaG93XCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXskKFwiI21vZGFsX3RoYW5rc1wiKS5maW5kKFwiLm1vZGFsX19kaWFsb2ctLXRoYW5rc1wiKS5jc3Moe3RyYW5zZm9ybTpcInNjYWxlKDEpXCIsb3BhY2l0eTpcIjFcIn0pfSwxMDApLCQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsXCIpLCQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKSwkKFwiI2Zvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpfSksITEpfSl9KSwkKGZ1bmN0aW9uKG8pe28oJ1tuYW1lPVwicGhvbmVcIl0nKS5tYXNrKFwiKzM4KDk5OSkgOTk5LTk5LTk5XCIpfSksc3ZnNGV2ZXJ5Ym9keSh7fSksMWUzPCQod2luZG93KS53aWR0aCgpJiYkKHdpbmRvdykub24oXCJzY3JvbGxcIixmdW5jdGlvbigpeyQoXCIjaW50cm9cIikuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvbi15XCIsLjYqJCh3aW5kb3cpLnNjcm9sbFRvcCgpK1wicHhcIil9KSwkKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXskKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sXCJub3JtYWxcIiksJChcIiNsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIixmdW5jdGlvbigpeyQoXCIjcHJlbG9hZGVyXCIpLmRlbGF5KDMwMCkuZmFkZU91dChcInNsb3dcIil9KX0pO3ZhciBvPSQoXCIjaGVhZGVyXCIpLGU9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO2Z1bmN0aW9uIHMoKXsxPD1lP28uYWRkQ2xhc3MoXCJmaXhlZFwiKTpvLnJlbW92ZUNsYXNzKFwiZml4ZWRcIil9cygpLCQod2luZG93KS5vbihcInNjcm9sbCByZXNpemVcIixmdW5jdGlvbigpe2U9JCh0aGlzKS5zY3JvbGxUb3AoKSxzKCl9KSwkKFwiI25hdiwgI2ludHJvLCAjYWJvdXQsICNwcm9tb1wiKS5vbihcImNsaWNrXCIsXCJhXCIsZnVuY3Rpb24obyl7by5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPSQodGhpcykuYXR0cihcImhyZWZcIikscz0kKGUpLm9mZnNldCgpLnRvcDskKFwiaHRtbCAsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOitzfSw1MDApLCQoXCIjbmF2X3RvZ2dsZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSwkKFwiI25hdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSwkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKX0pLCQoXCIjbmF2X3RvZ2dsZVwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24obyl7by5wcmV2ZW50RGVmYXVsdCgpLCQoXCIjbmF2X3RvZ2dsZVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSwkKFwiI25hdlwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKSwkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm5vLXNjcm9sbFwiKX0pO3ZhciBhPSQoXCJbZGF0YS1tb2RhbF1cIiksbj0kKFwiLm1vZGFsX19jbG9zZVwiKSx0PSQoXCIuYnRuUmVxdWVzdFwiKTskKHdpbmRvdykub24oXCJyZXNpemUgbG9hZFwiLGZ1bmN0aW9uKCl7JChcImJvZHksIC5oZWFkZXIsIC5uYXYgXCIpLmNzcyh7XCJtYXgtd2lkdGhcIjokKHdpbmRvdykud2lkdGgoKX0pfSksYS5vbihcImNsaWNrXCIsZnVuY3Rpb24obyl7by5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPSQodGhpcykuZGF0YShcIm1vZGFsXCIpOyQoZSkuYWRkQ2xhc3MoXCJzaG93XCIpLCQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXskKGUpLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKS5jc3Moe3RyYW5zZm9ybTpcInNjYWxlKDEpXCIsb3BhY2l0eTpcIjFcIn0pfSwxMDApLHdvcmtzU2xpZGVyLnNsaWNrKFwic2V0UG9zaXRpb25cIil9KSxuLm9uKFwiY2xpY2tcIixmdW5jdGlvbihvKXtvLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9JCh0aGlzKS5wYXJlbnRzKFwiLm1vZGFsXCIpO2UuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoMC43KVwiLG9wYWNpdHk6XCIwXCJ9KSxlLnJlbW92ZUNsYXNzKFwic2hvd1wiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIil9LDIwMCl9KSx0Lm9uKFwiY2xpY2tcIixmdW5jdGlvbihvKXtvLnByZXZlbnREZWZhdWx0KCk7dmFyIGU9JCh0aGlzKS5wYXJlbnRzKFwiLm1vZGFsXCIpLHM9JCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxhPSQocykub2Zmc2V0KCkudG9wO2UuZmluZChcIi5tb2RhbF9fZGlhbG9nXCIpLmNzcyh7dHJhbnNmb3JtOlwic2NhbGUoMC43KVwiLG9wYWNpdHk6XCIwXCJ9KSxlLnJlbW92ZUNsYXNzKFwic2hvd1wiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIiksJChcImh0bWwgLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDphfSw4MDApfSwyMDApfSksJChcIi5tb2RhbFwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24obyl7dmFyIGU9JCh0aGlzKTtlLmZpbmQoXCIubW9kYWxfX2RpYWxvZ1wiKS5jc3Moe3RyYW5zZm9ybTpcInNjYWxlKDAuNylcIixvcGFjaXR5OlwiMFwifSksZS5yZW1vdmVDbGFzcyhcInNob3dcIiksc2V0VGltZW91dChmdW5jdGlvbigpeyQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpfSwyMDApfSksJChcIi5tb2RhbF9fZGlhbG9nXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihvKXtvLnN0b3BQcm9wYWdhdGlvbigpfSksJChcIiNyZXZpZXdzU2xpZGVyXCIpLnNsaWNrKHtpbmZpbml0ZTohMCxzbGlkZXNUb1Nob3c6MixzbGlkZXNUb1Njcm9sbDoxLHNwZWVkOjQwMCxjc3NFYXNlOlwibGluZWFyXCIsYWRhcHRpdmVIZWlnaHQ6ITEsY2VudGVyTW9kZTohMCxhcnJvd3M6ITEsZG90czohMCxhdXRvcGxheTohMCxhdXRvcGxheVNwZWVkOjVlMyxyZXNwb25zaXZlOlt7YnJlYWtwb2ludDoxNDAwLHNldHRpbmdzOntzbGlkZXNUb1Nob3c6MX19LHticmVha3BvaW50Ojc2NyxzZXR0aW5nczp7c2xpZGVzVG9TaG93OjEsY2VudGVyTW9kZTohMX19XX0pLEFPUy5pbml0KHtvZmZzZXQ6MjAwLGR1cmF0aW9uOjYwMCxlYXNpbmc6XCJlYXNlLWluLXNpbmVcIixkZWxheTozMDAsZGlzYWJsZTpcIm1vYmlsZVwifSl9KTsiXSwiZmlsZSI6Im1haW4uanMifQ==