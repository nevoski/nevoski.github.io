$(document).ready(function(){
    
//                                | |  (_)
//       _ __   _____   _____  ___| | ___ 
//      | '_ \ / _ \ \ / / _ \/ __| |/ / |
//      | | | |  __/\ V / (_) \__ \   <| |
//      |_| |_|\___| \_/ \___/|___/_|\_\_|  
    
    //BROWSER DETECT
    function browser_detect(){
        //browser check trick on Stack Overflow: http://bit.ly/28Jw6Nu
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        
        if (isIE == true || isEdge == true){
            $(".overlay").show();
            //show/hide stuff if IE/Edge
            $(".hide_if_ie").css("display", "none");
            $(".ie_content").show();
            //ux icons margin-top bug fix for IE/Edge
            $(".ux_icons").css("marginTop", "100px");
        }
    }
    browser_detect();
    
    //EXIT NOTIFICATION
    $(".notification_button").click(function(){
        $(".overlay").fadeOut(300);
    });
    
    
    //SMOOTH SCROLLING TO ANCHORS
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    //ADD HEADER ANIMATION CLASSES AFTER PAGE LOAD
    
    $(".nevoski_logo, .heart_icon, .layout_icon, .code_icon").addClass("logo_fill");
    
    $(".headshot_div, .intro_text, .icon_title").addClass("fade_in_up");
    $(".social_icons, .contact_button, .resume_button").addClass("fade_in");
    
    //ICON HOVER & CLICK
    $(".icon_container").hover(function(){
        $(this).find(".bottom_border").addClass("bottom_border_addClass");
        }, function(){
            $(this).find(".bottom_border").removeClass("bottom_border_addClass");
    });
    
    //EXAMPLE CARD HOVER
    $(".example").hover(function(){
        $(this).find(".example_card_bottom").addClass("card_bottom_hover");
        }, function(){
            $(this).find(".example_card_bottom").removeClass("card_bottom_hover");
    });
    
    //SHOW SCROLL TO TOP BUTTON after scroll distance
    $(document).scroll(function() {
      var scrolled = $(this).scrollTop();
      if (scrolled > 500) {
          $(".top_button").addClass("top_button_appear");
      }else{
          $(".top_button").removeClass("top_button_appear");
      }
    });
    
});