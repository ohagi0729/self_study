$(function(){
  
//  $('.animal').each(function(){
//    var name = $(this).text();
//    alert(name);
//  });
  
  $('.animal').each(function(){
    alert($(this).text());
  });
//  アラートを「.animal」がついた要素の分だけ出せ
//  （中に表示するテキストは「.animal」要素のテキスト）
  
//  alert($('#div1').width());
//  alert($('#div1').height());
//  alert($('#div1').css('fontSize'));
//  alert($('#div1').text());
  
  var div1 = $('#div1');
  alert(div1.width());
  alert(div1.height());
  alert(div1.css('fontSize'));
  alert(div1.text());

});
