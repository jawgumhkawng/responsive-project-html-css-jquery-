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

// Show the first sec-tab and hide the rest
$('#sec-tab li:first-child').addClass('sec-tab-active');
$('.sec-tab-gp').hide();
$('.sec-tab-gp:first').show();

// Click function
$('#sec-tab li').click(function(){
  $('#sec-tab li').removeClass('sec-tab-active');
  $(this).addClass('sec-tab-active');
  $('.sec-tab-gp').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});