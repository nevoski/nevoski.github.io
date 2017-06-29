$(document).ready(function(){
   
//                                | |  (_)
//       _ __   _____   _____  ___| | ___ 
//      | '_ \ / _ \ \ / / _ \/ __| |/ / |
//      | | | |  __/\ V / (_) \__ \   <| |
//      |_| |_|\___| \_/ \___/|___/_|\_\_|
    
    //SHOW SCROLL TO TOP BUTTON after scroll distance
    $(document).scroll(function() {
      var scrolled = $(this).scrollTop();
      if (scrolled > 400) {
          $(".top_button").addClass("top_button_appear");
      }else{
          $(".top_button").removeClass("top_button_appear");
      }
    });
    //scroll to top when TOP BUTTON is clicked
    $(".top_button").on('click',function (e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    //HEART PULSE
    $(".heart_pulse_card").click(function(){
        $(".ui_heart").toggleClass("ui_heart_addClass");
        $(".heart_lines").toggleClass("heart_lines_addClass");
    });
    
    //MOBILE TOGGLE BUTTON
    $(".toggle_button_card").click(function(){
        $(".mobile_toggle_button").toggleClass("button_background_class");
        $(".toggle_button_knob").toggleClass("button_toggle_class");
    });
    
    //CIRCLE EXIT MENU
    $(".circle_exit_menu").click(function(){
        $(".exit_circle").toggleClass("exit_circle_add_class");
        $(".bar1").toggleClass("bar1_addClass");
        $(".bar2").toggleClass("bar2_addClass");
        $(".bar3").toggleClass("bar3_addClass");
    });
    
    //SETTINGS SLIDERS
    $(".settings_sliders").click(function(){
        $(".vertical_slide").toggleClass("vertical_slide_addClass");
        $(".switch1, .switch3").toggleClass("switch1_3_addClass");
        $(".switch2").toggleClass("switch2_addClass");
    });
    
    //CARD STACK
    $(".stack_of_cards").click(function(){
        $(".card1").toggleClass("card1_addClass");
        $(".card2").toggleClass("card2_addClass");
        $(".card3").toggleClass("card3_addClass");
    });
    
    //PIN IT
    $(".pin_it").click(function(){
        $(".pin_container").toggleClass("pin_container_addClass");
        $(".pinhead").toggleClass("pinhead_addClass");
        $(".pin_bottom").toggleClass("pin_bottom_addClass");
        $(".pin_shadow").toggleClass("pin_shadow_addClass");
    });
    
    //UNLOCKED
    $(".unlocked_card").click(function(){
        $(".lock_head").toggleClass("lock_head_addClass");
        $(".lock_body").toggleClass("lock_body_addClass");
        $(".lockX").toggleClass("lockX_addClass");
        $(".lock_check").toggleClass("lock_check_addClass");
    });
    
    //RIBBON LOGO
    $(".ribbon_logo_card").click(function(){
        $(".ribbon_logo").toggleClass("ribbon_logo_addClass");
        $(".bottom_dash").toggleClass("bottom_dash_addClass");
    });
    
    //COLUMNS
    $(".columns_card").click(function(){
        $(".columns_axes").toggleClass("columns_axes_addClass");
        $(".column1").toggleClass("column1_addClass");
        $(".column2").toggleClass("column2_addClass");
        $(".column3").toggleClass("column3_addClass");
    });
    
    //LOADING DOTS
    $(".loading_card_dots").click(function(){
        $(".top_circle_div").toggleClass("top_circle_div_addClass");
        $(".top_circle").toggleClass("top_circle_addClass");
        $(".middle_circle_div").toggleClass("middle_circle_div_addClass");
        $(".middle_circle").toggleClass("middle_circle_addClass");
        $(".bottom_circle_div").toggleClass("bottom_circle_div_addClass");
        $(".bottom_circle").toggleClass("bottom_circle_addClass");
    });
    
    //SVG CIRCLES   
    $(".multiple_circles_card").click(function(){
        $(".svg_circle1").toggleClass("circle1_addClass");
        $(".svg_circle2").toggleClass("circle2_addClass");
        $(".svg_circle3").toggleClass("circle3_addClass");
        $(".svg_circle4").toggleClass("circle4_addClass");
    });
    
    //EXPLOADING SQUARE
    $(".exploading_square_card").click(function(){
        $(".mini_box").toggleClass("box_rotate_addClass");
        $(".box1").toggleClass("box1_addClass round_corners_addClass");
        $(".box2").toggleClass("box2_addClass round_corners_addClass");
        $(".box3").toggleClass("box3_addClass round_corners_addClass");
        $(".box4").toggleClass("box4_addClass round_corners_addClass");
        $(".box5").toggleClass("box5_addClass");
        $(".box6").toggleClass("box6_addClass round_corners_addClass");
        $(".box7").toggleClass("box7_addClass round_corners_addClass");
        $(".box8").toggleClass("box8_addClass round_corners_addClass");
        $(".box9").toggleClass("box9_addClass round_corners_addClass");
    });
    
    //*************MOBILE UI PROTOTYPE**************
    
    //phone appear
    $(".phone_container").addClass("phone_appear");
    $(".icon_container:first-child").addClass("icon_container_background");
    $(".icon_container").click(function(){
        $(".icon_container").not(this).removeClass("icon_container_background");
        $(this).addClass("icon_container_background"); 
    });
    
    //onboarding arrow animation
    $(".down_arrow").addClass("arrow_animation");
    
    //screen switching
    $(".icon_container:first-child").click(function(){
        $(".phone_screen:not(#home)").fadeOut("fast");
        $("#home").fadeIn("fast");
    });
    $(".icon_container:nth-child(2)").click(function(){
        $(".phone_screen:not(#cards)").fadeOut("fast");
        $("#cards").fadeIn("fast");
    });
    $(".icon_container:nth-child(3)").click(function(){
        $(".phone_screen:not(#profile)").fadeOut("fast");
        $("#profile").fadeIn("fast");
    });
    $(".icon_container:nth-child(4)").click(function(){
        $(".phone_screen:not(#settings)").fadeOut("fast");
        $("#settings").fadeIn("fast");
    });
    
});