$(window).on("scroll", function() {

  function myFunction(x) {
    if (x.matches) { // If media query matches
      console.log("Hi");
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".logo img").attr("src", "images/logo_black.png");
        $(".icon a").css("color", "black");
        $(".nav_mu a").css("color", "black");
        $(".overlay").css("background", "White");
        $("#closebtn").css("color", "black");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
        $(".logo img").attr("src", "images/logo_white_text.png");
        $(".icon a").css("color", "black");
        $(".nav_mu a").css("color", "White");
        $(".overlay").css("background", "black");
        $("#closebtn").css("color", "white");

      }
    } else {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".logo img").attr("src", "images/logo_black.png");
        $(".icon a").css("color", "black");
        $(".nav_mu a").css("color", "black");
        // $(".overlay").css("background", "White");
        // $("#closebtn").css("color", "black");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active");
        $(".logo img").attr("src", "images/logo_white_text.png");
        $(".icon a").css("color", "black");
        $(".nav_mu a").css("color", "black");
        // $(".overlay").css("background", "black");
        // $("#closebtn").css("color", "white");

      }
    }
  }

  var x = window.matchMedia("(max-width: 500px)")

  myFunction(x) // Call listener function at run time

  x.addListener(myFunction) // Attach listener function on state changes



});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}




// Smooth scroll


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
