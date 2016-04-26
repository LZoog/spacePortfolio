$(function(){
  $('#hide-contacts').click(function(){
    conProjView('contact','cSlideLeft', 'cSlideRight');
  });
  $('#show-contacts').click(function(){
    conProjView('contact','cSlideRight', 'cSlideLeft');
  });
  $('#hide-projects').click(function(){
    conProjView('project','pSlideLeft', 'pSlideRight');
  });
  $('#show-projects').click(function(){
    conProjView('project','pSlideRight', 'pSlideLeft');
  });

  function conProjView(conOrProj, a1, a2) {
    conProjCss('#show-'+conOrProj+'s', a1);
    conProjCss('#hide-'+conOrProj+'s', a2);
    conProjCss('#'+conOrProj+'-icons', a2);
    setTimeout(function() {
      $('#show-'+conOrProj+'s').toggleClass('hide');
      $('#hide-'+conOrProj+'s').toggleClass('hide');
      $('#'+conOrProj+'-icons').toggleClass('hide');
    }, 740);
  }
  function conProjCss(id, animation) {
    $(id).css({'-webkit-animation': animation + ' .75s', 'animation': animation + '  .75s'});
  };

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
