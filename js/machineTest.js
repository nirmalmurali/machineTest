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

  function eventListScroll() {
    let $scrollContainer = $(".event-list-wrapper ul");
    let isDragging = false;
    let startX, scrollLeft;

    // Mouse Events
    $scrollContainer.on("mousedown", function (e) {
      isDragging = true;
      startX = e.pageX - $scrollContainer.offset().left;
      scrollLeft = $scrollContainer.scrollLeft();
      $scrollContainer.css("cursor", "grabbing"); // Change cursor
    });

    $(document).on("mousemove", function (e) {
      if (!isDragging) return;
      e.preventDefault(); // Prevent selection
      let x = e.pageX - $scrollContainer.offset().left;
      let walk = (startX - x) * 1.5; // Adjust scroll speed
      $scrollContainer.scrollLeft(scrollLeft + walk);
    });

    $(document).on("mouseup", function () {
      isDragging = false;
      $scrollContainer.css("cursor", "grab");
    });

    $(document).on("mouseleave", function () {
      isDragging = false;
    });

    // Touch Events
    $scrollContainer.on("touchstart", function (e) {
      isDragging = true;
      startX = e.touches[0].pageX - $scrollContainer.offset().left;
      scrollLeft = $scrollContainer.scrollLeft();
    });

    $scrollContainer.on("touchmove", function (e) {
      if (!isDragging) return;
      e.preventDefault(); // Prevent vertical scroll
      let x = e.touches[0].pageX - $scrollContainer.offset().left;
      let walk = (startX - x) * 2;
      $scrollContainer.scrollLeft(scrollLeft + walk);
    });

    $scrollContainer.on("touchend", function () {
      isDragging = false;
    });
  }

  eventListScroll();
});
