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
  // for arrows animation; - 4 because of first 4 shown, 73.5 is the scrollLeft of one project; - 37px for middle of project
  var maxScroll = (($('#carousel-inner a').length - 4) * 73.5) - 37;

  // arrows animation
  function arrows(){
    var carouselScroll = $('#carousel-inner').scrollLeft();
    if (carouselScroll <= 0) {
      $('#left').removeClass('more');
    // there are more projects to the left
    } else if (carouselScroll >= 37) {
      $('#left').addClass('more');
    }
    // if user is scrolled to the right max
    if (carouselScroll >= maxScroll) {
      $('#right').removeClass('more');
    } else {
      // there are more projects to the right
      $('#right').addClass('more');
    }
  };

  // right & left buttons
  $('#left').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "-=74px"
    }, 200);
    setTimeout(arrows, 210);
  });
  $('#right').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "+=74px"
    }, 200);
    setTimeout(arrows, 210);
  });

  // * draggable *
  var mouseDownX, mouseX, drag = false;
  // disable clicking & dragging image to save
  $('#carousel-inner img').on('dragstart', false);

  // enable dragging on mouse click
  $('#carousel-inner, #carousel-inner a').mousedown(function(e){
    $(this).css('cursor', 'ew-resize');
    drag = true;
    //current mouse x position - everything left of the div + scrollLeft of div
    mouseDownX = e.pageX - this.offsetLeft + $('#carousel-inner').scrollLeft();
  });
  // disable dragging on mouse up
  $(window).mouseup(function(){
    $('#carousel-inner, #carousel-inner a').css('cursor', 'pointer');
    drag = false;
  });

  // change scrollLeft on mousemove
  $('#carousel-inner').mousemove(function(e){
    if (drag === true) {
      //current mouse x position - everything left of the div + scrollLeft of div
      mouseX = e.pageX - this.offsetLeft + $('#carousel-inner').scrollLeft();
      // get the difference between mouse x position on click & on drag
      var diff = mouseDownX - mouseX;
      $(this).scrollLeft($('#carousel-inner').scrollLeft() + diff);
      arrows();
    }
  });

});
