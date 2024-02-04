//発展系

$(function(){
  
  $('.slideshow').each(function(){ //$('.slideshow')をeachメソッドで読み込む
    var container = $(this); //$(this)を変数containerに代入する
    var timer; //変数timerを設定する
    function switchImg(){ //関数switchImgを以下の内容で定義する
      var imgs = container.find('a'); //変数containerの中からaを探し、変数imgに代入する
      var first = imgs.eq(0); //変数imgの中の1番目の項目を変数firstに代入する
      var second = imgs.eq(1); //変数imgの中の2番目の項目を変数secondに代入する
      first.appendTo(container).fadeOut(2000); //変数firstを変数containerの最後尾に配置し、フェードアウトする
      second.fadeIn(2000); //変数secondをフェードインする
    };
    function stopTimer(){ //関数stopTimer以下の内容で定義する
      clearInterval(timer); //変数timerを止める
    };
    function startTimer(){ //関数startTimer以下の内容で定義する
      timer = setInterval(switchImg,3000); //関数switchImgを3秒に一回繰り返す関数を変数timerに代入する
    };
    container.find('a').hover(stopTimer,startTimer); //変数containerの中からaを探し、ホバーメソッドを使用する（ホバー時は関数stopTimer、非ホバー時は関数startTimerを適応する）
    startTimer(); //関数startTimerを適応する（ページを開いた時から）
  });
});





//基本系

//$(function(){
//  
//  $('.slideshow').each(function(){ //$('.slideshow')をeachメソッドで読み込む
//    var container = $(this); //$(this)を変数containerに代入する
//    function switchImg(){ //関数switchImgを以下の内容で定義する
//      var img = container.find('img'); //変数containerの中からimgを探し、変数imgに代入する
//      var first = img.eq(0); //変数imgの中の1番目の項目を変数firstに代入する
//      var second = img.eq(1); //変数imgの中の2番目の項目を変数secondに代入する
//      first.appendTo(container).fadeOut(2000); //変数firstを変数containerの最後尾に配置し、フェードアウトする
//      second.fadeIn(2000); //変数secondをフェードインする
//    };
//    setInterval(switchImg,3000); //関数switchImgを3秒に一回繰り返す
//  });
//  
//});
