$(document).ready(function () {


    $('#button').on("click", function (event) {
        
        event.preventDefault();
       console.log("test");
    
        $('html,body').animate({
                scrollTop: $(".container").offset().top},
                'slow');

        });
    })