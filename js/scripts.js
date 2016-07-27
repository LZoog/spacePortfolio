$(function(){

  var projWidth;

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
    // get projWidth after animation is completed (1500ms), 4 for #carousel spacing
    setTimeout(function(){projWidth = $('#carousel-inner a').outerWidth(true) + 4;},1510);
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

  //project name, text displayed on hover
  projectHover('dragonduel', '[full/node.js]');
  projectHover('stylebags', '[full/node.js]');
  projectHover('hoh', '[full/rails]');
  projectHover('wtxlawn', '[front-end]');
  projectHover('magic',  '[front-end]');
  projectHover('tictactoe', '[JS]');
  projectHover('astro', '[portfolio]');

  function projectHover(name, hoverText) {
    var id = '#'+name;
    var activeText = $('#'+name+'').text();
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
  $($('#carousel-inner')).scroll(function(){
    arrows();
  });

  // arrows animation
  function arrows(){
    // current carousel scroll position
    var carouselScroll = $('#carousel-inner').scrollLeft();
    // furthest scroll position; -4 for first 4 projects, - 1/2 projWidth for middle of last project
    var maxScroll = (($('#carousel-inner a').length - 4) * projWidth) - projWidth/2;

    if (carouselScroll <= 0) {
      $('#left').removeClass('active-arrow');
    // there are more projects to the left
    } else if (carouselScroll >= projWidth/2) {
      $('#left').addClass('active-arrow');
    }
    // if user is scrolled to the right max
    if (carouselScroll >= maxScroll) {
      $('#right').removeClass('active-arrow');
    } else {
      // there are more projects to the right
      $('#right').addClass('active-arrow');
    }
  };

  // right & left buttons
  $('#left').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "-="+projWidth+"px"
    }, 200);
    setTimeout(arrows, 210);
  });
  $('#right').click(function(){
    $('#carousel-inner').animate({
      scrollLeft: "+="+projWidth+"px"
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

  $('#carousel-inner a, #home-text-bottom a').click(function(){
    var divId = $(this).data("featherlight");

    // needs to be refactored to utilize divId to avoid using img.each
    $('img[class^="screen"]').each(function(){
      $(this).css('opacity', '0').addClass('fade-in');

    });

    // TEMPORARY HEIGHT FIX
    // var trueHeight = $(divId+' .content')[1].scrollHeight + 25;
    // if ($(divId).hasClass('sm-width')) {
    //   $(divId+'.sm-width').css('max-height', trueHeight+'px');
    // } else {
    //   $(divId).css('max-height', trueHeight+'px');
    // }

    // <hr /> animation
    // needs to be refactored to utilize divId to avoid using h1.each
    setTimeout(function(){
      $('.container.feather h1').each(function(){
        if ($(this).width() !== 0) {
          for (i = 0; i <= $(this).width()+20; i++) {
            load($(this), i);
          }
        }
      });
    },300);

  });
  function load(h1, i) {
    setTimeout(function() {
      // h1.div.hr - can be better
      h1.parent().next().width(i+'px');
    }, i * .8);
  }

  // * PROJECT SCREENSHOT/FEATURE VIEW *
  $('.screenshots img').click(function(){
    // img will have fade-in class; only grab screen#
    var screenNum = $(this).attr('class').split(' ')[0];
    var screenSrc = $(this).attr('src');


    $(this).parents('.feather').find('.screenshots img').removeClass('current');
    $(this).addClass('current');

    $('div[class^="info"]').css('display', 'none');
    $('div.info-'+screenNum).css('display','block');

    $(this).parents().siblings('.main-screenshot').find('.screen0').attr('src', screenSrc);
  });

});
