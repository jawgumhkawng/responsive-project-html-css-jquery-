
$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('show');
    });
});
