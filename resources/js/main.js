// $(document).ready(function(){
//   $('.carousel').slick({
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     fade: true,
//     cssEase: 'linear',
//     arrows: false,
//     draggable: false,
//     pauseOnFocus: true,
//     pauseOnHover: false
//   });
// });


$(document).ready(function() {
  $("#fire").hover(function() {
    $(".logo-img").fadeOut(100),
    $(".logo-img").attr("src", "./resources/images/e-planig-fire.png");
  });
});
