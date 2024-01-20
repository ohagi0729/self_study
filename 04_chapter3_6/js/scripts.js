$(function(){
  var basket = $('#basket');
  
  $('#mangoes').appendTo(basket);
  
  basket.append($('#apple'));
  
  basket.prepend($('#banana'),$('#orange'));
  
  $('#div1').append($('<h1>h1です</h1>'));
  
  $('#div2').append($('<h2>h2です</h2>'
                    + '<p>p要素です</p>'
                    + '<img src="img/cat.jpg" alt="cat">'));
  
  $('#div3').remove();
  
  $('#div4').empty();
});