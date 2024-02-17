
$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('show');
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("is_active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("is_active");
    }
});