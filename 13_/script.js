$(function() {
  $('#change-text').click(function() {
    $('#text').text('ようこそ、Progateへ');
  });
  
  $('#change-html').click(function(){
    $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });
  
});