$(function(){
  $('#sample1').hide();
});

var lastName = 'Yamada';
var me = lastName + ' Taro';
var father = lastName + ' Ichiro';
var mother = lastName + ' Hanako';
alert(me);
alert(father);
alert(mother);

$(function(){
  $('#div1').css('border' , '3px solid red');
  $('#div2').css('background' , 'pink');
  $('#div3').css('opacity' , 0.5);
});

$(function(){
  $('#div1').css({
    color: 'red',
    display: 'block'
  });
});

$(function(){
  $('#div1').show(1000);
  $('#div2').hide(1000);
  $('#div1').css('display' , 'block');
  $('#div2').css('display' , 'none');
});

$(function(){
  $('#div1').width(300);
  $('#div2').height(300);
  $('#div1').css('width' , 300);
  $('#div2').css('height' , 300);
});

$(function(){
  $('#div1').fadeIn('slow' , function(){
    alert('フェードイン完了');
  });
  $('#div2').fadeOut('fast');
});

$(function(){
  $('#div1').slideDown();
  $('#div2').slideUp();
});

$(function(){
  $('#div1').animate({
    top: 200,
    left: 400
  } , 1000 , function(){
    alert('アニメーション完了');
  });
});