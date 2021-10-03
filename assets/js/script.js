// Tooltips on Bootstrap v5.1
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Navbar toggleclass via scroll in a certain position of the website{afterCarousel} 
// (ripped function Source: stackoverflow.com)
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 700);
    });
  });
// let navbar = document.getElementById('navbar-bg-color');

// window.onscroll = function(){
//     if(!navbar.hasClass('bg-info')){
//         navbar.addClass('bg-info')
//     }else{
//         navbar.remove('bg-info');
//     }
// };