/*
    main.js
*/

$(function () {
    console.log("jquery ready!");


    $('.cn-Card--carousel').slick({
        lazyLoad: 'ondemand',
        // autoplay: 'true',
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: false,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left fa-2x"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right fa-2x"></i></button>',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Add scrollspy to <body>
    $('body').scrollspy();

    // Add smooth scrolling on all links inside the navbar
    $(".js-scroll-trigger").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                // $(hash).addClass("hl-Section--active");
            });
        } // End if
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    ScrollOut();
    var rellax = new Rellax('.rellax');

    // for landing-parallax-1
    // var rellaxCenter = new Rellax('.rellax-center', {
    //     center: true
    // });

    // slick slider sub-domain
    $('.c-Slider.c-Slider--cr-subdomain > .c-Slider-main').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        // appendArrows: $('.c-Slider.c-Slider--sbe > .c-Slider-controls'),
        // prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left fa-2x"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right fa-2x"></i></button>',
        appendDots: $('.c-Slider-dots')
    });

});

// c - Slider - item slick - slide slick - current slick - active