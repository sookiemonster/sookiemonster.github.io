$(document).ready(function() {
    var nav = $('nav');
    var scrollY;
    $(window).scroll(function() {
        scrollY = $(document).scrollTop();
        if (!nav.hasClass('scrolled') && scrollY > 0) {
            nav.addClass('scrolled');
        } else if (scrollY <= 0) {
            nav.removeClass('scrolled');
        }
    }).scroll();
});