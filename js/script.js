$(document).ready(function() {
  function moveReflections() {
    $(".reflect-clip-1").css("margin-top",
      $("#silhouette").offset().top + 20 + "px");
  }

  moveReflections();

  $(window).resize(function() {
    moveReflections();
  });
});
