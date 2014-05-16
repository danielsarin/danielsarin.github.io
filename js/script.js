$(function() {
  
  $(document).on('click', '.thumbnail', function() {
    $('.modal').html($(this).html());
    $('.modal').show();
  });
  
  $(document).on('click', '.modal', function() {
    $('.modal').hide();
  });
  
});