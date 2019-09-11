$(".sidebar > a").on("click", function() {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
  $('#main > .sidebar').find('> a').removeClass('selected');
  $('#main > .sidebar').find('> span').removeClass('visible');
    $(this).toggleClass('selected');
  }
  var sectionName = $(this).attr('href').substring(1);
  $('.' + sectionName + '_section').toggleClass('visible');

});