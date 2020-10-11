$(function () {
  $(document).ready(() => {
    $(".scroll").on("click", () => {
      $("html, body").animate(
        {
          scrollTop: $(".tier_one").offset().top,
        },
        1000
      );
    });
    $(".mb-view ion-icon, .sidenav .close_").click(function () {
      $(".sidenav").toggleClass("show");
    });
    $(".controls .next").click(function () {
      $(".tier_two .scroll-wrap").animate({ scrollLeft: "+=460" }, 1000);
    });
    $(".controls .prev").click(function () {
      $(".tier_two .scroll-wrap").animate({ scrollLeft: "-=460" }, 1000);
    });
  });
});
