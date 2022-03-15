
$(document).ready(function () {
   $('.subheader__burger').click(function (event) {
      $('.subheader__burger, .menu, .subheader__container').toggleClass('active');
       $('html, body').toggleClass('lock');
   });
   $('.sublink1').click(function (event) {
      $('.subheader__sublist, .sublink1').toggleClass('active');
      $('.subheader__sublist2, .sublink2').removeClass('active');
   });
   $('.sublink2').click(function (event) {
      $('.subheader__sublist2, .sublink2').toggleClass('active');
      $('.subheader__sublist, .sublink1').removeClass('active');
   });
});

