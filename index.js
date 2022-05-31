
$(document).ready(function () {
    $(".hamburger").click(function(){
          $(".toggleClass, .icon, .nav-btn").toggle(300);
    });
});
$("document").ready(function() {
    $(".icon").click(function(){
        window.open("index.html");
});
});
$("document").ready(function() {
    $(".nav-btn").click(function(){
        window.open("contact.html");
});
});
$("document").ready(function() {
    $(".mem").click(function(){
        window.open("ratecard.html");
});
});
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
