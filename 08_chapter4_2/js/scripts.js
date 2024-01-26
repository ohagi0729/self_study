$(function(){
  
  
//発展系（正規表現 onメソッド）
 $('.rollover').each(function(){ //$('.rollover')をeachメソッドで読み込む
    var a = $(this); //$(this)を変数aに代入する
    var img = a.find('img'); //変数aからfindメソッドでimgを探し、変数imgに代入する
    var off = img.attr('src'); //変数imgのsrcの属性値をattrメソッドで読み込み、変数offに代入する
    var on = off.replace(/^(.+)_off(\.[^/.]+)$/,'$1_on$2');//変数offの文字列の中の_offの部分を_onに置き換えたものを変数onに代入する
    $('<img />').attr('src',on); //プリセット指示　ロールオーバーの画像のパスを指定し、切り替わり時のラグを防ぐ
    a.on('mouseenter focus',function(){ //変数aをmouseenter、focus時に以下の命令を実行する(onメソッドで複数イベント指定可能)
      img.attr('src',on); //mouseenter、focus時に変数imgのsrcの属性値をattrメソッドで変数onに変える
      });
    a.on('mouseleave blur',function(){ //変数aをmouseleave、blur時に以下の命令を実行する(onメソッドで複数イベント指定可能)
      img.attr('src',off); //mouseleave、blur時に変数imgのsrcの属性値をattrメソッドで変数offに変える
      });
  });
  
});


//基本系
//  $('.rollover').each(function(){ //$('.rollover')をeachメソッドで読み込む
//    var a = $(this); //$(this)を変数aに代入する
//    var img = a.find('img'); //変数aからfindメソッドでimgを探し、変数imgに代入する
//    var off = img.attr('src'); //変数imgのsrcの属性値をattrメソッドで読み込み、変数offに代入する
//    var on = off.replace('off','on'); //変数offの文字列の中の_offの部分を_onに置き換えたものを変数onに代入する
//    $('<img />').attr('src',on); //プリセット指示　ロールオーバーの画像のパスを指定し、切り替わり時のラグを防ぐ
//    a.hover(function(){ //変数aをhover時に以下の命令を実行する
//      img.attr('src',on); //ホバー時に変数imgのsrcの属性値をattrメソッドで変数onに変える
//      },function(){
//      img.attr('src',off); //非ホバー時に変数imgのsrcの属性値をattrメソッドで変数offに変える
//      });
//  });
