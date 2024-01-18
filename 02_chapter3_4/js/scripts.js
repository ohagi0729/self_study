$(function(){
$('#div1').css('border','1px solid red')
  
$('#div2').css({
  color: 'red',
  background: 'black'
  });
  
$('#div3').css({
  width: 300,
  height: 200,
  margin: '0 auto',
  color: 'white',
  background: 'black'
  });
  
$('#div4').fadeIn(1000);
  
$('#div5').fadeOut(2000 , function(){
  alert('フェードアウト完了');
  });
  
$('#div6').slideDown();
  
$('#div7').slideUp();
  
$('#div8').animate({
  bottom: 200,
  left: 400
  },function(){alert('div8完了');
  });

});
