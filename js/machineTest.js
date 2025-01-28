$(document).ready(function () {
  let scrollAmount = 400; // Amount to scroll
  let $scrollContainer = $(".dining-destination-list ul");

  $(".dining-btn-right").click(function () {
    let newScrollPosition = $scrollContainer.scrollLeft() + scrollAmount;
    $scrollContainer
      .stop()
      .animate({ scrollLeft: newScrollPosition }, 500, "swing");
  });

  $(".dining-btn-left").click(function () {
    let newScrollPosition = $scrollContainer.scrollLeft() - scrollAmount;
    $scrollContainer
      .stop()
      .animate({ scrollLeft: newScrollPosition }, 500, "swing");
  });
});
