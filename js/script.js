var menu_toggled = false;

$(document).ready(function() {
  function moveReflections() {
    $(".reflect-clip-1").css("margin-top",
      $("#silhouette").offset().top + 20 + "px");
  }

  function openNav() {

    $("#silhouette").css({
      "top" : "80vh",
      "transition" : "top .2s ease-out",
    });

    $("#moon").css({
      "transition" : "0.25s",
      "clip-path" : "circle(100%)",
    });

    $("#nav-circle").addClass("active-button").removeClass("inactive-button");

    $(".button-bar").addClass("active-bar").removeClass("inactive-bar");
    $("#top-bar").css({
      "top" : "27%",
      "left" : "61%",
      "transform-origin" : "top left",
      "transform" : "translate(-50%, -50%) rotate(45deg)"
    });
    $("#bottom-bar").css({
      "bottom" : "27%",
      "left" : "61%",
      "transform-origin" : "bottom left",
      "transform" : "translate(-50%, -50%) rotate(-45deg)"
    });

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
      "animation-play-state" : "running",
    });

    $("#nav-circle").removeClass("active-button").addClass("inactive-button");

    $(".button-bar").removeClass("active-bar").addClass("inactive-bar");
    $("#top-bar").css({
      "top" : "35%",
      "left" : "50%",
      "transform" : "translate(-50%, -50%) rotate(0deg)"
    });
    $("#bottom-bar").css({
      "bottom" : "35%",
      "left" : "50%",
      "transform" : "translate(-50%, -50%) rotate(0deg)"
    });

    $(".wave-container").css("top", "0").fadeIn();

    $("#silhouette").css({
      "top" : "51vh",
      "transition" : ".25s",
    });

    setTimeout(function() {
      $(document.body).css("background-color", "var(--bg)");
      $("#title").css("color", "var(--tertiary)");
      $("#nav-page").fadeOut(200);
    }, 100);

    setTimeout(function() {
      $("#silhouette").css({
        "transition" : "0s",
      });
    }, 250);

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
