// (function ($) {
//   "use strict";
//   // Auto-scroll
//   $('#myCarousel').carousel({
//     interval: 5000
//   });

//   // Control buttons
//   $('.next').click(function () {
//     $('.carousel').carousel('next');
//     return false;
//   });
//   $('.prev').click(function () {
//     $('.carousel').carousel('prev');
//     return false;
//   });

//   // On carousel scroll
//   $("#myCarousel").on("slide.bs.carousel", function (e) {
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 3;
//     var totalItems = $(".carousel-item").length;
//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//       var it = itemsPerSlide -
//           (totalItems - idx);
//       for (var i = 0; i < it; i++) {
//         // append slides to end 
//         if (e.direction == "left") {
//           $(
//             ".carousel-item").eq(i).appendTo(".carousel-inner");
//         } else {
//           $(".carousel-item").eq(0).appendTo(".carousel-inner");
//         }
//       }
//     }
//   });
// })
// (jQuery);


/// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}