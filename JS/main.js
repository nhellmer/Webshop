window.onload = function() {
    var maintl = new TimelineMax();

    var banner = document.querySelectorAll(".stage");
        ice = document.querySelectorAll(".ice");
        first = document.querySelector(".first-txt");
        second = document.querySelector(".second-txt");
        sale = document.querySelector(".sale");
        circle = document.querySelector(".circle")
        sale_btn = document.querySelectorAll(".sale-cnt")
        backtotop= document.querySelector(".backtotop");
        watch = document.querySelector(".watch");
        necklace = document.querySelector(".necklace");
        ring = document.querySelector(".ring");
        earring = document.querySelector(".earring");
        heart = document.querySelector(".heart"); //funktioniert nicht wenn ich querySelectorAll verwende + lässt sich nur 1 mal ein & ausschalten
        shopping_cart = document.querySelectorAll(".shopping-cart"); //gleiche wie bei heart



   
    //Banner kommt von links  
    maintl.add("frame0")
    .from(banner, 2, { autoAlpha:1, x: -1500, ease:Power3.easeOut}, "frame0")
    
    //Eiswürfe drehen sich
    .add("frame1")
    var tl = new TimelineMax({ repeat: -1 }, "frame1+=2")
    .to(".ice", 1, { rotation: 180 })
    .to(".ice", 1, { rotation: 0 })

    //Herz wird bei 1 Klick rot und etw. vergrößert, bei 2 Klick wieder schwarz und kleiner
    heart.addEventListener("click", function(_e) {
        TweenMax.to(heart ,1, {transformOrigin: "50% 50%", scale:1.1, fill: "#DA231E", ease:Power1.easeInOut});
 
    heart.addEventListener("click", function(_e) {
        TweenMax.to(heart ,1, {transformOrigin: "50% 50%", scale:1, fill: "black",  ease:Power1.easeInOut});
        });
    });

    //Shopping Cart dreht sich bei Klick
    shopping_cart.addEventListener("click", function(_e) {
    _e.preventDefault();
    console.log(_e.target);
    TweenMax.to(shopping_cart ,2, {transformOrigin: "50% 50%", rotation: 360,  ease:Power1.easeIn});
    });

    //Sale Button
    sale.addEventListener("mouseover", function(_e) {
        TweenMax.to(circle ,1, {transformOrigin: "0 50%", scale:10,x:50,  ease:Power1.easeInOut});
    });
    sale.addEventListener("mouseout", function(_e) {
        TweenMax.to(circle ,1, {transformOrigin: "0 50%", scale:1,x:0,  ease:Power1.easeInOut});
    });
    


/*
    // Back to top Button

    backtotop.onclick = function() {
        TweenMax.to(window, 1, {scrollTo:{y:".top", offsetY:150}});
      }

    window.addEventListener("scroll", function(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.querySelector(".backtotop").style.display = "block";
          } else {
            document.querySelector(".backtotop").style.display = "none";
          }
    });


*/
};



