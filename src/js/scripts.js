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
  });
});
