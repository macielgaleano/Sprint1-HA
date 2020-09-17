$(".nav-link").on("click", function () {
  $(".fa-arrow-right", this).css("transform", "rotate(90deg)");
});

$(".dropdown").on("hidden.bs.dropdown", function () {
  $(".fa-arrow-right").css("transform", "rotate:0deg");
});
