$(document).ready(function () {
  $('.accordion-item').click(function () {
    $(this).toggleClass('open');
    $(this).find('.accordion-content').slideToggle();
  });
});