$(function(){
    totClickFc();
    side_on();
    headerScFc();
    go_top();
    smoothSc();
    nav_menu();
    mCscrollFc();
    clear_input_fc();
    modalLayerClose();
    option_click_Fc();
    tabFc();

});


$(window).resize(function(){

  
});


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
}





function mCscrollFc(){ 

 if( $(".mCscroll").length < 0 && isMobile()){

      $(".mCscroll").mCustomScrollBar('destroy');
    } else if ($(".mCscroll").length > 0 && !isMobile()){
      $('.mCscroll').mCustomScrollbar({ 
        theme:"minimal-dark",   
        scrollInertia: 300,
      });
    }
  


}



function headerScFc(){ 
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    //Determines up-or-down scrolling
    if (st > 1){

      $(".wrap").addClass("sc");
    } else if(st == 0){
      $(".wrap").removeClass("sc");
    }
  });

}


//팝업 열기 닫기
function openFc(obj) {
  $("#"+obj).show();
}
function closeFc(obj) {
  $("#"+obj).hide();

}

//팝업 열기 닫기
function openHiddenFc(obj) {
  $("#"+obj).show();
  $("html,body").css("overflow","hidden");
}
function closeHiddenFc(obj) {
  $("#"+obj).hide();
  $("html,body").css("overflow","visible");

}


//팝업 열기 닫기
function openPopup(obj) {
  $("#"+obj).fadeIn(300);
  $("body").css("overflow","hidden");
  $(".modal").fadeIn(300);
}
function closePopup(obj) {
  $("#"+obj).fadeOut(300);
  $("body").css("overflow","visible");
  $(".modal").fadeOut(300);

}


//레이어 열기 닫기
function openLayer(obj) {
  $("#"+obj).addClass("on");
  $("#"+obj).find(".modal").fadeIn(300);
  $("body").css("overflow","hidden");
}
function closeLayer(obj) { 
  $("#"+obj).removeClass("on");
  $("#"+obj).find(".modal").fadeOut(600);
  $("body").css("overflow","hidden");

}

// 모달배경 클릭시 닫기
function modalLayerClose() { 
  $(".modal").each(function(){
    $(this).click(function(){
      $(this).closest(".pop_layer_set").removeClass("on");
      $(this).fadeOut(600);
      $(this).closest(".pop_wp").css("display","none");
    });
  });
}


//클릭펑션
function clickFc(obj) {
  $("#"+obj).click();
  }

 //셀렉트선택시 색상변경
 function selectFc() {
  $("select").change(function(){
      $(this).css('color','#000');
  });
}
  

//사이드 메뉴클릭
function totClickFc() {

  $(".tot_menu .aside .m_div").slideUp();

  $(".tot_menu .aside > ul > li > a").click(function(){
    if(!$(this).parent().hasClass("on")){
      $(this).parent().addClass("on");
      $(this).parent().find(".m_div").slideDown(200);
    } else {
      $(this).parent().removeClass("on");
      $(this).parent().find(".m_div").slideUp(200);

    }

  });
}  


function side_on() { // 모바일 사이드메뉴 클릭

  $(".btn_menu").click(function(){
    $(".tot_menu").show();
    $(".tot_menu_in").animate({ 'right' : '50%' }, 300);
   $("html,body").css("overflow","hidden");
    
  });


  $(".tot_menu .clo").click(function(){
    $(".tot_menu_in").animate({ 'right' : '-50%' }, 300);
    setTimeout(function(){$(".tot_menu ").hide()},500);
    $("html,body").css("overflow","visible");
  });


  $(".tot_menu .glass").click(function(){
    $(".tot_menu_in").animate({ 'right' : '-50%' }, 300);
    setTimeout(function(){$(".tot_menu ").hide()},500);
    $("html,body").css("overflow","visible");
});

}

// 스무스 스크롤 
function smoothSc() {

  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
          scrollTop: target.offset().top - 130
          }, 500, function() {
          var $target = $(target);
          $target.focus();
/*
          if ($target.is(":focus")) { 
              return false;
          } else {
              $target.attr('tabindex','-1'); 
              $target.focus(); 
          };
*/
          });
      }
      }
  });
}






function basicSelect(){

  //셀렉트 박스 클릭 열기
  $(".sel_p").click(function(){

    if(!$(this).parent(".sel_box").hasClass("on")) {
      $(this).parent(".sel_box").addClass("on");
    }else {
      $(this).parent(".sel_box").removeClass("on");
    }
     
  });

   
  // 네비 셀렉트 다른곳 클릭시 닫기
  $(document).click(function (e) {

    var container = $(".sel_box");

    if (!container.is(e.target) && container.has(e.target).length === 0){

        //닫을때 내용    
        container.removeClass("on");
    }	

  });

  $(".sel_list ul li a").click(function(){
      var th_val = $(this).attr("value");
      $(this).parent().parent().parent().parent().find(".sel_p").text(th_val);
      $(this).parent().parent().parent().parent().find(".sel_p").removeClass("placeholder");
      $(this).closest(".sel_box").removeClass("on");
     
  });

  $(".sel_list ul li span").click(function(){
    var th_val = $(this).parent().attr("value");
    $(this).parent().parent().parent().parent().find(".sel_p").text(th_val);
    $(this).parent().parent().parent().parent().find(".sel_p").removeClass("placeholder");
    $(this).closest(".sel_box").removeClass("on");
   
});

}



function go_top(){
  //Keep track of last scroll
  var lastScroll = 0;
  $(window).scroll(function(event){
      //Sets the current scroll position
      var st = $(this).scrollTop();
      //Determines up-or-down scrolling
      var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (st > lastScroll){
        //스크롤 다운시
       $(".go_top").css("visibility","visible").css("opacity","1");
       
       if(st === 0){
          $(".go_top").css("visibility","hidden").css("opacity","0");

        }
      } else {
        //스크롤 업시
        $(".go_top").css("visibility","hidden").css("opacity","0");
        
        if(scrollBottom < 200){
          $(".go_top").css("visibility","visible").css("opacity","1");

        }

      }

      
      //Updates scroll position

       lastScroll = st;
      
  });


};




//클래스 교체,변경 스크립트 예)$('#id').alterClass('AAA-* BBB-*', 'AAABBB');

$.fn.alterClass = function (removals, additions) {
  var self = this;

  if (removals.indexOf('*') === -1) {
      // Use native jQuery methods if there is no wildcard matching
      self.removeClass(removals);
      return !additions ? self : self.addClass(additions);
  }

  var patt = new RegExp(
      '\\s' +
      removals.replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') +
      '\\s',
      'g'
  );

  self.each(function (i, it) {
      var cn = ' ' + it.className + ' ';
      while (patt.test(cn)) {
      cn = cn.replace(patt, ' ');
      }
      it.className = $.trim(cn);
  });

  return !additions ? self : self.addClass(additions);
  };


  function nav_menu(){
    $(".nav_menu li a").click(function(){
      if(!$(this).parent("li").hasClass("on")){
         $(this).parent("li").addClass("on");
         $(this).parent("li").siblings().removeClass("on");
      }
    });

  }

  function option_click_Fc(th){

    $(th).parent().addClass("on");
    $(th).parent().siblings().removeClass("on");

  }
  

//인풋박스 클리어
function clear_input_fc(){
    $('.search_input_box, .clear_input_box').each(function(){
        $(this).find('.clear_input').on('keyup focus', function(){
        $(this).siblings('.btn_clear').attr('style', 'visibility: visible');

        if($(this).val().length == 0){
            $(this).siblings('.btn_clear').attr('style', 'visibility: hidden');
        } else {
            $(this).siblings('.btn_clear').attr('style', 'visibility: visible');
        }
        });

        $(this).find('.btn_clear').on('click touchstart', function(){
            $(this).closest('.clear_input_box').find('.clear_input').val('');
            $(this).closest('.clear_input_box').find('.btn_clear').attr('style', 'visibility: hidden');
            return false;
        });
       
    });

    
}


function tabFc(){ //탭메뉴 클릭
  
  $(".tab_fc ul li").each(function() {
    $(this).click(function(){

      if(!$(this).hasClass("on")){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

      }

      for( var i = 1;  i <= $(this).parent().children().last().attr("data-index"); i++){
        
        if($(this).attr("data-index") == i){
          $(".tab_area").children(".tab"+i).show();
          $(".tab_area").children(".tab"+i).siblings().hide();

        }

      }
      
    });
  });
}
