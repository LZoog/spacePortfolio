$(function(){

  // * VIEW/HIDE & ANIMATE CONTACT/PROJECTS *
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

  // call w/'contact' or 'project', animation when showing, animation when hiding
  function conProjView(conOrProj, a1, a2) {
    conProjCss('#show-'+conOrProj+'s', a1);
    conProjCss('#hide-'+conOrProj+'s', a2);
    conProjCss('#'+conOrProj+'-icons', a2);
    setTimeout(function() {
      $('#show-'+conOrProj+'s').toggleClass('hide');
      $('#hide-'+conOrProj+'s').toggleClass('hide');
      $('#'+conOrProj+'-icons').toggleClass('hide');
      // hide @ 740 because animation is done in @ 750ms
    }, 740);
  }
  // call w/ #show-contacts or #show-projects, & animation (either showing or hiding)
  function conProjCss(id, animation) {
    $(id).css({'-webkit-animation': animation + ' .75s', 'animation': animation + '  .75s'});
  };

  //id, name, text displayed normally, text displayed on hover
  projectHover('#p1', 'stylebags', $('#p1').text(), '&nbsp;[full/node.js]');
  projectHover('#p2', 'hoh', $('#p2').text(), '&nbsp;[full/rails]');
  projectHover('#p3', 'wtxlawn', $('#p3').text(), '&nbsp; [front-end]');
  projectHover('#p4', 'magic', $('#p4').text(), '&nbsp; [front-end]');
  projectHover('#p5', 'tictactoe', $('#p5').text(), '&nbsp; &nbsp; &nbsp; [JS]');
  projectHover('#p6', 'astro', $('#p6').text(), '&nbsp; [portfolio]');

  function projectHover(id, name, activeText, hoverText) {
    var activeImage = 'img/icon-projects.png';
    var hoverImage = 'img/icon-projects-'+name+'.png';
    $(id).hover(function() {
      $(id+' p').html(hoverText);
      $(id+' img').attr('src', hoverImage);
    }, function() {
      $(id+' p').html(activeText);
      $(id+' img').attr('src', activeImage);
    });
  };


  // * CAROUSEL *
  $('#left').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "-=75px"
    }, "fast");
  });
  $('#right').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "+=75px"
    }, "fast");
  });

});
