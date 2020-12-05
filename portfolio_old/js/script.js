$(function() {

    $(document).ready(
        function(){
            var position = ($(".work").offset().top)/2;
            var top = $(window).scrollTop();
            if(top >= position){
                $(".pagetop__btn").fadeIn();
            }else{
                $(".pagetop__btn").fadeOut();
            }
        }
    );

    $(".nav__link").click(
        function(){
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, 500, "swing");
            return false;
        }
    )

    // $(".work-details__list").slick({dots:false});


    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-single',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });



    // $('.slider-single').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // arrows: true,
    //     // fade: false,
    //     adaptiveHeight: true,
    //     infinite: false,
    //     useTransform: true,
    //     speed: 400,
    //     cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'

    // });

    // $('.slider-nav')
    //     .on('init', function(event, slick) {
    //         $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    //     })
    //     .slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         dots: true,
    //         focusOnSelect: false,
    //         infinite: false,
    //         responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 5,
    //                 slidesToScroll: 5,
    //             }
    //         }, {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 4,
    //             }
    //         }, {
    //             breakpoint: 420,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //         }
    //         }]
    //     });

    // $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    //     $('.slider-nav').slick('slickGoTo', currentSlide);
    //     var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    //     $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    //     $(currrentNavSlideElem).addClass('is-active');
    // });
   
    // $('.slider-nav').on('click', '.slick-slide', function(event) {
    //     event.preventDefault();
    //     var goToSingleSlide = $(this).data('slick-index');
   
    //     $('.slider-single').slick('slickGoTo', goToSingleSlide);
    // });
    
    $(window).scroll(function(e) {
        var position = ($(".work").offset().top)/2;
        var top = $(window).scrollTop();
        if(top >= position){
            $(".pagetop__btn").fadeIn();
        }else{
            $(".pagetop__btn").fadeOut();
        }
    });

    $(".pagetop__btn").click(
        function(){
            $("html,body").animate({scrollTop:0},"500");
        }
    );
});