$(function(){

  $('#hide-contacts').click(function(){
    contactView('cSlideLeft', 'cSlideRight', 'cSlideRight');
  });
  $('#show-contacts').click(function(){
    contactView('cSlideRight', 'cSlideLeft', 'cSlideLeft');
  });
  $('#hide-projects').click(function(){
    projectView('pSlideLeft', 'pSlideRight', 'pSlideRight');
  });
  $('#show-projects').click(function(){
    projectView('pSlideRight', 'pSlideLeft', 'pSlideLeft');
  });

  function projectView(a1, a2, a3) {
    conProjCss('#show-projects', a1);
    conProjCss('#hide-projects', a2);
    conProjCss('#project-icons', a3);
    setTimeout(function() {
      $('#show-projects').toggleClass('hide');
      $('#hide-projects').toggleClass('hide');
      $('#project-icons').toggleClass('hide');
    }, 740);
  };
  function contactView(a1, a2, a3) {
    conProjCss('#show-contacts', a1);
    conProjCss('#hide-contacts', a2);
    conProjCss('#contact-icons', a3);
    setTimeout(function() {
      $('#show-contacts').toggleClass('hide');
      $('#hide-contacts').toggleClass('hide');
      $('#contact-icons').toggleClass('hide');
    }, 740);
  };
  function conProjCss(id, animation) {
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
