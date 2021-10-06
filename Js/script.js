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
});
//FIN LOADER//

//ANIMATION TITRE//
$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["The Solution."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false 
    });
//FIN ANIMATION TITRE//

//ANIMATION COMPETENCES ET STATS//
    $('.owl-carousel').owlCarousel({
        loop:true,
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            720:{
                items:3
            },
            930:{
                items:4
            }
        }
    });


    var skillsTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
			

		}

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


    const nav = $("#navigation");
    
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");

        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
    

   

});

         //FIN ANIMATION NAVIGATION//