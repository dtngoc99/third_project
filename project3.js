$(function () {
    $('header .header-bottom .logo .menu').click(function (e) {
        e.preventDefault();
        $('header .header-top .chooseMenu').css('display', 'block');
    });
    $('header .header-top .chooseMenu .btn-close').click(function (e) {
        e.preventDefault();
        $('header .header-top .chooseMenu').css('display', 'none');
    });
    if ($('html').width() > 782) {
        $('header .header-top .posi-fixed .content .logo a span').text('Back');
        var element = $('header .header-top .posi-fixed .content .menu a span');
        $(element[0]).text('Download');
        $(element[1]).text('Buy Now');
    }
    $(window).scroll(function () {
        var currentPos = $(document).scrollTop();
        if (currentPos > 555) {
            $('.scroll').fadeIn();//.fadeIn() , .show();
            //$('header .header-top .posi-fixed').addClass('fixed');
        }
        else {
            $('.scroll').fadeOut();//.fadeOut() , .hide();
            //$('header .header-top .posi-fixed').removeClass('fixed');
        }
    });
    $('.scroll').click(function (e) {
        e.preventDefault();
        //$(window).scrollTop(0);
        $('html').animate({
            scrollTop: 0,
        },
            2000,
            "easeInOutBack"
        )
    });
    $(".owl-carousel").owlCarousel({
        items: 3,
        //margin: 10,
        loop: true,
        nav: true,
        navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        mouseDrag: false,
    });
});