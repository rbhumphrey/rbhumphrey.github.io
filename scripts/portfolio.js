// Scroll to content
$(function() {
    $(".heading").on("click", ".fa-sign-out", function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top }, 1000);
    });
});