$(function(){

  $('#show-projects').click(function(){
    projectView('slideRight', 'slideLeft', 'slideLeft');
  });
  $('#hide-projects').click(function(){
    projectView('slideLeft', 'slideRight', 'slideRight');
  });

  function projectView(a1, a2, a3) {
    projectCss('#show-projects', a1);
    projectCss('#hide-projects', a2);
    projectCss('#project-icons', a3);
    setTimeout(function() {
    $('#show-projects').toggleClass('hide');
    $('#hide-projects').toggleClass('hide');
    $('#project-icons').toggleClass('hide');
    }, 749);
  };
  function projectCss(id, animation) {
    $(id).css({'-webkit-animation': animation + ' .75s', 'animation': animation + '  .75s'});
  }

  projectHover('#p1', "&nbsp;(Full site)", "&nbsp; &nbsp; Magic");
  projectHover('#p2', "&nbsp;(Full site)", "&nbsp;Dry Clean");
  projectHover('#p3', "&nbsp; &nbsp; (Rails)", "&nbsp; &nbsp; &nbsp;HoH");
  projectHover('#p4', "&nbsp; &nbsp; &nbsp; (JS)", "&nbsp; tictactoe");
  projectHover('#p5', "&nbsp; (this site)", "&nbsp; &nbsp; astro");

  function projectHover(id, text1, text2) {
    $(id).hover(function() {
      $(id+' p').html(text1);
    }, function() {
      $(id+' p').html(text2);
    })
  };

  $('.navbar-default .navbar-toggle').click(function(){
    $('#blackout').toggleClass('visibility');
  });
  
});
