// accordion menu
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// Number incrementor
$(".number").on("click", function() {
  var idToFind = $(this).attr("name");
  var isDisabled = $('#' + idToFind).prop('disabled');
  if (!isDisabled) {
  var step = parseFloat($('#' + idToFind).attr('step'))
  var value = parseFloat($('#' + idToFind).attr('value'));
  console.log(value);
  var thisMin = parseFloat($('#' + idToFind).attr('min'));
  var thisMax = parseFloat($('#' + idToFind).attr('max'));
    if ($(this).hasClass('decrement')) {
      if ((value - step) >= thisMin) {
        value = value - step;
        $('#' + idToFind).attr('value', value);
      }
    }
    if ($(this).hasClass('increment')) {
      if ((value + step) <= thisMax) {
        value = value + step;
        $('#' + idToFind).attr('value', value);
      }  
    }
  }
});


// File drop down
$('.file-dropdown').on('click', function() {
  var targetName = $(this).attr('name');
  $('#' + targetName).toggleClass('show');
  var dropdownContent = $('#' + targetName);
  var i;
  for (i = 0; i < dropdownContent.length; i++) {
    var openDropdown = dropdownContent[i];
  }
  $('#' + targetName).mouseleave(function() {
    $(this).removeClass('show');
  });
});
