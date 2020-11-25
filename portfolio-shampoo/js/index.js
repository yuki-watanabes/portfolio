$(function() {

    $(document).ready(
        function(){
            var position = ($(".suggestion").offset().top)/2;
            var top = $(window).scrollTop();
            if(top >= position){
                $(".pagetop__btn").fadeIn();
            }else{
                $(".pagetop__btn").fadeOut();
            }
        }
    );

    $(".product__img").on('inview', function() {
        $(".product__img-intro1").fadeIn(1000);
        $(".product__img-intro2").fadeIn(1000);
    });

    $(".header__nav-list li").hover(
        function(){
            $(this).css('text-decoration', 'underline' );

        },
        function(){
            $(this).css('text-decoration', 'none'); 
        }
    );

    $(".header__nav-list a").click(
        function(){
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - $(".header > .container").height();
            $("html, body").animate({scrollTop:position}, 500, "swing");
            return false;
        }
    )

    $(window).scroll(function(e) {
        var position = ($(".suggestion").offset().top)/2;
        var top = $(window).scrollTop();
        if(top >= position){
            $(".pagetop__btn").fadeIn();
        }else{
            $(".pagetop__btn").fadeOut();
        }
    });

    $(".pagetop__btn").hover(
        function(){
            $(this).addClass('hover-pagetop__btn');

        },
        function(){
            $(this).removeClass('hover-pagetop__btn');
        }
    );

    $(".pagetop__btn").click(
        function(){
            $("html,body").animate({scrollTop:0},"500");
        }
    );
});