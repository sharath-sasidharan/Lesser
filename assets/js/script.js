$(document).ready(function(){
    $(window).scroll(function(){
  
    
    if(this.scrollY > 500){
        $('.scroll-up').addClass("show")
    }else{
        $('.scroll-up').removeClass("show")
    }
    
    
    });
    
    
    
    
    //SLIDE UP SCRIPT
    $('.scroll-up').click(function(){
     $('html').animate({scrollTop: 0})
    });
    


    //MENU BUTTON SCRIPT
    
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
    })
    }); 




   // services carousel script

   $(".services").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
    
    
    });