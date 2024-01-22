$(function(){
  
  var div1 = $('#div1');
  div1.click(function(){
  div1.text('クリックされました');
  });

  var div2 = $('#div2');
  div2.mouseenter(function(){
  div2.addClass('active');
  });
  div2.mouseleave(function(){
  div2.removeClass('active');
  });
  
  var div3 = $('#div3');
  div3.hover(function(){
  div3.css('font-weight', 'bold');
  }, function(){
  div3.css('font-weight', 'normal');
  });
  
  var input1 = $('#input1');
  input1.attr('name','your_name');
  input1.focus(function(){
  input1.addClass('active');
  });
  input1.blur(function(){
  input1.removeClass('active');
  });
  
  $('.clickTest').click(function(){
    $(this).text('クリックされました');
  });
  
});
