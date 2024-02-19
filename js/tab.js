// Show the first tab and hide the rest
$('#tab li:first-child').addClass('active');
$('.tab-gp').hide();
$('.tab-gp:first').show();

// Click function
$('#tab li').click(function(){
  $('#tab li').removeClass('active');
  $(this).addClass('active');
  $('.tab-gp').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});