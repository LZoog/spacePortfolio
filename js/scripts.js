$(function(){

  //owl carousel
  // $('.owl-carousel').owlCarousel({
  //   items: 4
  // });


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
  $('.navbar-default .navbar-toggle').click(function(){
    $('#blackout').toggleClass('visibility');
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

  //id, text displayed on hover, text displayed normally, image displayed normally
  projectHover('#p1', '&nbsp; (Full site)<br>test', $('#p1').text(), $('#p1 img').attr('src'));
  projectHover('#p2', '&nbsp; (Full site)', $('#p2').text());
  projectHover('#p3', '&nbsp; &nbsp; &nbsp;(Rails)', $('#p3').text());
  projectHover('#p4', '&nbsp; &nbsp; &nbsp; (JS)', $('#p4').text());
  projectHover('#p5', '&nbsp; (this site)', $('#p5').text());

  function projectHover(id, hoverText, activeText, activeImage) {
    var hoverImage = 'img/icon-projects.png';
    $(id).hover(function() {
      $(id+' p').html(hoverText);
      $(id+' img').attr('src', hoverImage);
    }, function() {
      $(id+' p').html(activeText);
      $(id+' img').attr('src', activeImage);
    });
  };

});
