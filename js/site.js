$('#slider-main').slick({
    autoplay: true,
    arrows: false,
    dots: true,
});

$('#slide-item').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});

$('.slide-item-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});

$('#slider-partner').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});

jQuery(document).ready(function($) {
    $('.btn-minus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });
    $('.btn-plus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('.block-quality').find('.form-control');
        var value = parseInt($input.val());
        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });
});

$(document).ready(function($) {
    $(".btn-more").click(function(e) {
        e.preventDefault();
        $(this).closest('.box-description').find('.block-description-wrapper').toggleClass("active");
        $(this).toggleClass("active");
        if ($(".btn-more").hasClass("active")) {
            $(this).text("Bớt Đi")
        } else {
            $(this).text("Xem Thêm")
        };
    });
});

$(document).ready(function() {
    $(".read-more").click(function() {
        var elem = $(".read-more").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $(".read-more").text("Bớt Đi");
            $(".service-info").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $(".read-more").text("Xem Thêm");
            $(".service-info").slideUp();
        }
    });
});

// $(".show-more a").on("click", function() {
//     var $this = $(this);
//     var $content = $this.parent().prev("div.content");
//     var linkText = $this.text().toUpperCase();

//     if (linkText === "SHOW MORE") {
//         linkText = "Show less";
//         $content.switchClass("hideContent", "showContent", 400);
//     } else {
//         linkText = "Show more";
//         $content.switchClass("showContent", "hideContent", 400);
//     };

//     $this.text(linkText);
// });


$(document).ready(function() {
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            $("#toggle").text("Read Less");
            $("#text").slideDown();
        } else {
            $("#toggle").text("Read More");
            $("#text").slideUp();
        }
    });
});

$(document).ready(function() {
    $('.block-widget-title > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.block-widget-title li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if (checkElement.is('ul') && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if (checkElement.is('ul') && (!checkElement.is(':visible'))) {
            $('.block-widget-title ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });

    $('.block-widget-title ul li').each(function() {
        if ($(this).find('.sub-v-menu').hasClass('sub-v-menu')) {
            $(this).addClass('has-sub');
        }
    });
});

$(window).on('load', function() {
    $('.preloader').addClass('complete');
    $('body').addClass('afterpreload');
    $('body,html').animate({ scrollTop: 0 }, 100);
});

$('document').ready(function() {
    var header = $(".box-header");
    $(window)['resize'](function() {
        if ($(window)['width']() < 991) {
            $('body').scroll(function() {
                var scroll = $('body').scrollTop();
                if (scroll >= 200) {
                    header.addClass("show-header");
                } else {
                    header.removeClass("show-header");
                }
            });
        }
    });
});