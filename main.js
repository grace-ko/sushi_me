$('document').ready(function() {

    $("#nav-toggle").click(function() {
        this.classList.toggle("active");
        $('.menu').toggleClass('close');

    });
    $('.mobile-menu').click(function() {
        $("#nav-toggle").toggleClass("active");
        $('.menu').toggleClass('close');

    });

});
