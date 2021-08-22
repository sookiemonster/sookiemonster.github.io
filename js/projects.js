$(document).ready(function() {
    // $(".card").each(function(index) {
    //     $(this).css("animation", 
    //         "slide-from-left 1s " + (0.15 * index) + "s ease forwards"
    //     );
    // });
    // $(".project-link ").each(function(index) {
    //     $(this).css("animation", 
    //         "slide-from-right 1s " + (0.15 * index) + "s ease forwards"
    //     );
    // });

    $(".project-item").each(function(index) {
        $(this).children(".card").css("animation", 
            "slide-from-left 0.75s " + (0.15 * index) + "s ease forwards"
        );

        var description = $(this).children(".project-description");
        description.children(".project-link").css("animation", 
            "slide-from-right 0.75s " + (0.15 * index) + "s ease forwards"
        );
        description.children("p").css("animation", 
            "fade-in 1s " + ((0.15 * index) + .3) + "s ease forwards"
        );
    });
});