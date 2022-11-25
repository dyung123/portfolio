$(document).ready(function(){
    
  let gnb = $('.gnb >ul >li');//메인메뉴 변수

  $(window).scroll(function(){

      let sPos = $(this).scrollTop();
      console.log(sPos);
      if(sPos>=880){
          $('.gnb').addClass('on');
      }else{
          $('.gnb').removeClass('on');
      }

      gnb.find('a').removeClass('act');
      

      //방법1. 세로스크롤값을 각각 체크하여 수식작성
  //     if(sPos>=140 &&sPos<=1050){
  //         gnb.eq(0).find('a').addClass('act');
  //     }else if(sPos>=1142 && sPos<=1820){
  //         gnb.eq(1).find('a').addClass('act');
  //     }else if(sPos>=1740 &&sPos<=2650){
  //         gnb.eq(2).find('a').addClass('act');
  //     }else if(sPos>=2540 &&sPos<=3480){
  //         gnb.eq(3).find('a').addClass('act');
  //     }else if(sPos>=3600){
  //         gnb.eq(4).find('a').addClass('act');
  //     }else{
  //         gnb.find('a').removeClass('act');
  //     }
  // });

  //방법2. 섹션태그의 높이값이 
  //세로스크롤 값 영역과 비교하여 0일때 addClass적용하기
  $('section').each(function(i){
      let top = $(this).offset().top-400;//선택한 section의 위치값을 변수에 저장

      if(sPos>=top){//section태그가 위에서 떨어진 값이 스크롤값보다 크면
          gnb.find('a').removeClass('act');//기존서식을 제거하고
          gnb.eq(i).find('a').addClass('act');//해당 a에만 서식 적용
      };
  });
  });


  //내비세이션 각각 클릭시 해당 기능 삽입하기
      gnb.click(function(){
          let i = $(this).index();
          console.log(i);

          $('html ,body').animate({scrollTop:$('main section').eq(i).offset().top},300,'easeOutElastic');

          
          return false;
      });
});
