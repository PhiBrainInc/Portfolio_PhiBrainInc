//LOADER//
$(window).on("load", function(){
    $(".loader .inner").fadeOut(800, function(){
        $(".loader").fadeOut(1000);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})
//FIN LOADER//


$(document).ready(function(){
    //ANIMATION TITRE//
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Technology and digital solutions agency specialising in web and mobile development.","Agence de technologies et de solutions numériques spécialisée dans le développement web et mobile."],
        typeSpeed: 30
        ,
        loop: true,
        startDelay: 1000,
        showCursor: true
    });
//FIN ANIMATION TITRE//

//ANIMATION COMPETENCES ET STATS//
    $('.owl-carousel').owlCarousel({
        margin:20, 
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        
        
        responsive:{
            0:{
                items:1,
                nav:false
            },
            480:{
                items:2,
                nav: false
            },
            720:{
                items:3,
                nav:false
            },
            930:{
                items:4,
                nav:false
            }
        }
    });


    
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

	$(window).scroll(function() {

		

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })

            countUpFinished = true;
        }




	});

    //FIN ANIMATION COMPETENCES ET STATS//

   
    // ANIMATION PORTFOLIO//

    Fancybox.bind("[data-fancybox]", {
        
      });
    

   

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector ,
            animationOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;


    }) 

    //FIN ANIMATION PORTFOLIO//

    //ANIMATION NAVIGATION//
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navba').addClass("sticky");
        }else{
            $('.navba').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.bouton').addClass("show");
        }else{
            $('.bouton').removeClass("show");
        }
    });

    $('.navba .menu li a').click(function(){
    
        $('html').css("scrollBehavior", "smooth");
    });

    $('.bar-menu').click(function(){
        $('.navba .menu').toggleClass("active");
        $('.bar-menu i').toggleClass("active");
    });

    $('.bouton').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
   
//FIN ANIMATION NAVIGATION//
});

         