$(function(){
  $('.box1').text('私の名前は花子です。');
  $('.box2').html('猫の名前は<small>タマ</small>です。');
  $('.box3').empty();
  $('.box3').addClass('boxBlue');
  $('.box4 img').attr('src' , 'img/cat.jpg');
  $('.box4 img').attr('alt' , '猫です。');
  $('.box4').removeClass('boxBlue');
  $('.box5').val('（例）山田 太郎');
  $('.box5').attr('disabled' , 'true');
  $('.box6').val('お申し込み内容を記入ください。');
});
