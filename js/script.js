var menu_toggled = false;

$(document).ready(function() {
  function moveReflections() {
    $(".reflect-clip-1").css("margin-top",
      $("#silhouette").offset().top + 20 + "px");
  }

  function openNav() {

    $("#silhouette").css({
      "top" : "80vh",
      "width" : "100vw",
      "max-width" : "100vw",
      "transition" : "top .2s",
    });

    $("#moon").css({
      "transition" : "0.25s",
      "clip-path" : "circle(100%)",
      // "animation-play-state" : "paused",
    });

    $("#nav-circle").addClass("active-button").removeClass("inactive-button");

    $(".button-bar").addClass("active-bar").removeClass("inactive-bar");

    $(".wave-container").fadeOut().css({
      "top" : "100vh",
    });

    setTimeout(function() {
      $(document.body).css("background-color", "var(--tertiary)");
      $("#title").css("color", "var(--primary)");
      $("#nav-page").css("display", "flex").hide().fadeIn();
    }, 100);

    menu_toggled = true;
  }

  function closeNav() {

    $("#moon").css({
      "clip-path" : "circle(min(250px, 30vw))",
      // "animation-play-state" : "running",
    });

    $("#nav-circle").removeClass("active-button").addClass("inactive-button");

    $(".button-bar").removeClass("active-bar").addClass("inactive-bar");

    $(".wave-container").css("top", "0").fadeIn();


    setTimeout(function() {
      $(document.body).css("background-color", "var(--primary)");
      $("#title").css("color", "var(--tertiary)");
      $("#nav-page").fadeOut(200);

      $("#silhouette").css({
        "top" : "51vh",
        "width" : "700px",
        "max-width" : "80vw",
        "transition" : ".25s",
      });
    }, 100);

    menu_toggled = false;
  }

  moveReflections();

  $(window).resize(function() {
    moveReflections();
  });

  $("#nav-button").click(function() {
    if (menu_toggled) {
      closeNav();
    } else {
      openNav();
    }
  });
});
