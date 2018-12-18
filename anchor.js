$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#return-to-top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
     
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 50){
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
});

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600)  {          /* 要滑動到選單的距離 */
       $('.nbar').addClass('navFixed');   /* 幫選單加上固定效果 */
    } else {
      $('.nbar').removeClass('navFixed'); /* 移除選單固定效果 */
    }
  });
});

$(function() {
    $('#about-click').click(function(){
        $('html,body').animate({ scrollTop:$('#about').offset().top }, 'slow');   /* 滑動到about me區塊 */
        return false;
    });
});
$(function() {
    $('#portfolio-click').click(function(){
        $('html,body').animate({ scrollTop:$('#portfolio').offset().top }, 'slow');   /* 滑動到portfolio區塊 */
        return false;
    });
});
$(function() {
    $('#contact-click').click(function(){
        $('html,body').animate({ scrollTop:$('#contact').offset().top }, 'slow');   /* 滑動到contact區塊 */
        return false;
    });
});

