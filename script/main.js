$(document).ready(function(){
  $('.question').click(function() {
    $(this).next().slideToggle();
  });

  //어바웃 스킬바
$(window).scroll(function(){
  let skill = $(this).scrollTop();
  console.log(skill);
  if(skill>=780){
    $('.skill > li:first-child > .bar').stop().animate({'width':'80%'},500);
    $('.skill > li:nth-child(2) > .bar').stop().animate({'width':'80%'},500);
    $('.skill > li:nth-child(3) > .bar').stop().animate({'width':'30%'},500);
    $('.skill > li:nth-child(4) > .bar').stop().animate({'width':'40%'},500);
    $('.skill > li:nth-child(5) > .bar').stop().animate({'width':'60%'},500);
    $('.skill > li:last-child > .bar').stop().animate({'width':'75%'},500);

    $('.skill > li:first-child > .bar > .ball').stop().animate({'left':'140px'},500);
    $('.skill > li:nth-child(2) > .bar > .ball').stop().animate({'left':'140px'},500);
    $('.skill > li:nth-child(3) > .bar > .ball').stop().animate({'left':'38px'},500,);
    $('.skill > li:nth-child(4) > .bar > .ball').stop().animate({'left':'58px'},500,);
    $('.skill > li:nth-child(5) > .bar > .ball').stop().animate({'left':'100px'},500);
    $('.skill > li:last-child > .bar > .ball').stop().animate({'left':'130px'},500);
  };
});
  










});


