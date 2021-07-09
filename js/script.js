var menu_toggled = false;

$(document).ready(function() {
  function openNav() {
    $("#nav-bg").css("clip-path", "circle(100%)");

    $("#nav-circle").addClass("active-button").removeClass("inactive-button");

    $(".button-bar").addClass("active-bar").removeClass("inactive-bar");
    $("#top-bar").css({
      "top" : "23px",
      "left" : "50%",
      "transform" : "translateX(-50%) rotate(45deg)"
    });
    $("#bottom-bar").css({
      "bottom" : "23px",
      "left" : "50%",
      "transform" : "translateX(-50%) rotate(-45deg)"
    });

    setTimeout(function() {
      $("#title").css("color", "rgb(var(--secondary))");
      $("#nav-page").css("display", "flex").hide().fadeIn();
    }, 100);

    menu_toggled = true;
  }

  function closeNav() {
    $("#nav-bg").css("clip-path", "circle(0% at calc(95% - 10px) 40px)");

    $("#nav-circle").removeClass("active-button").addClass("inactive-button");
    $(".button-bar").removeClass("active-bar").addClass("inactive-bar");
    $("#top-bar").css({
      "top" : "17px",
      "left" : "50%",
      "transform" : "translateX(-50%) rotate(0deg)"
    });
    $("#bottom-bar").css({
      "bottom" : "17px",
      "left" : "50%",
      "transform" : "translateX(-50%) rotate(0deg)"
    });

    $("#title").css("color", "");
    $("#nav-page").fadeOut(200);

    menu_toggled = false;
  }

  $("#nav-button").click(function() {
    if (menu_toggled) {
      closeNav();
    } else {
      openNav();
    }
  });
});
