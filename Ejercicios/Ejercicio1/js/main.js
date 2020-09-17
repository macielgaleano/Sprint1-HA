$(document).ready(function () {
  if ($(window).width() < 900) {
    console.log("si");
  }

  $(window).scroll(function () {
    console.log("funca");
    var menu = $("#menu");
    if (menu.offset().top > 56 && $(window).width() > 963) {
      menu.addClass("bg-inverse");
    } else {
      menu.removeClass("bg-inverse");
    }

    if ($(window).width() < 963) {
      menu.addClass("bg-dark");
      menu.addClass("nav-margin");
    } else {
      menu.removeClass("nav-margin");
    }
  });
  $(document).ready(function () {});

  console.log($(window).width());

  var img = $("img.slideUp");

  // img.hover(function (e) {
  //   img
  //     .animate({ marginTop: "200px", position: "relative" }, 300)
  //     .animate({ marginTop: "0px" }, 300);
  // });
  //   $(window).load(function () {
  //     $("#slide-up").slideUp();
  //   });
});
