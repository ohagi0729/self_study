$(function(){
  
  // 発展系
  var class_closed = 'closed'; // closedを変数class_closedに代入
  $('.first').each(function(){ // $('.first')をeachメソッドで読み込み以下の命令を実行する
    var dl = $(this); // $(this)を変数dlに変換
    var dt = dl.find('dt'); // 変数dlからdtを探し変数dtに代入
    var dd = dl.find('dd'); // 変数dlからddを探し変数dtに代入
    function closeAll(){ // 関数closeAllを以下の内容で定義する
      dt.addClass(class_closed); // 変数dtにaddClassメソッドでclass_closedを付ける
      dd.addClass(class_closed); // 変数ddにaddClassメソッドでclass_closedを付ける
    };
    function open(clickDt,nextDd){ // 関数open(clickDt,nextDd)を以下の内容で定義する
      clickDt.removeClass(class_closed); // 変数clickDtをremoveClassでclass_closedを外す
      nextDd.removeClass(class_closed); // 変数nextDdをremoveClassでclass_closedを外す
    };
    closeAll(); // 関数closeAllを実行する
    dt.click(function(){ // dtがクリックされた時以下の命令を実行する
      var clickDt = $(this); // $(this)を変数clickDtに代入
      var nextDd = clickDt.next(); // clickDtの次の項目を変数nextDdに代入
      closeAll(); // 関数closeAllを実行する
      open(clickDt,nextDd); // 関数open(clickDt,nextDd)を実行する
    });
  });

  
//以下のページを参考に自主制作
//https://www.softbank.jp/energy/special/ouchi-denki/?cid=entp_2205_dkod_01&argument=jsl6aztR&dmai=a6278704e1596b
  
    $('.second').each(function(){ //$('.second')をeachメソッドで読み込む
    var dl = $(this); //$(this)をdlに代入
    var dt = dl.find('dt'); //dlからfindでdtを探し、dtに代入
    var dd = dl.find('dd'); //dlからfindでddを探し、ddに代入
    dd.hide(); //ddを非表示
    dt.css('cursor','pointer'); //cssメソッドでdtのcursorをpointerに変更
    dt.click(function(){ //dtをclickイベントで読み込む
      var clickDt = $(this); //$(this)をclickDtに代入
      var nextDd = clickDt.next(); //clickDtの次の項目をnextDdに代入
      nextDd.slideToggle(); //nextDdにslideToggleでslideDown/slideUpの動作をつける
    });
  });
  
});

// 基本系
//  $('.first').each(function(){ //$('.first')をeachメソッドで読み込む
//    var dl = $(this); //$(this)をdlに代入する
//    var dt = dl.find('dt'); //dlからfindでdtを探し、dtに代入
//    var dd = dl.find('dd'); //dlからfindでddを探し、ddに代入
//    dd.hide(); //ddを非表示
//    dt.css('cursor','pointer'); //cssメソッドでdtのcursorをpointerに変更
//    dt.click(function(){ //dtをclickイベントで読み込む
//      var clickDt = $(this); //$(this)をclickDtに代入
//      var nextDd = clickDt.next(); //clickDtの次の項目をnextDdに代入
//      dd.hide(); //ddを隠す
//      nextDd.show(); //nextDdを表示
//      dt.css('cursor','pointer'); //cssメソッドでdtのcursorをpointerに変更
//      clickDt.css('cursor','default'); //cssメソッドでclickDtのcursorをdefaultに変更
//    });