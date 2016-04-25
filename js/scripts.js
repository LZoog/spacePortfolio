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

  $('#p1').hover(function() {
      $('#p1 p').html("&nbsp;(Full site)");
    }, function() {
      $('#p1 p').html("&nbsp; &nbsp; Magic");
    }
  );
  $('#p2').hover(function() {
      $('#p2 p').html("&nbsp;(Full site)");
    }, function() {
      $('#p2 p').html("&nbsp;Dry Clean");
    }
  );
  $('#p3').hover(function() {
      $('#p3 p').html("&nbsp; &nbsp; (Rails)");
    }, function() {
      $('#p3 p').html("&nbsp; &nbsp; &nbsp;HoH");
    }
  );
  $('#p4').hover(function() {
      $('#p4 p').html("&nbsp; &nbsp; &nbsp; (JS)");
    }, function() {
      $('#p4 p').html("&nbsp; tictactoe");
    }
  );
  $('#p5').hover(function() {
      $('#p5 p').html("&nbsp; (this site)");
    }, function() {
      $('#p5 p').html("&nbsp; &nbsp; astro");
    }
  );

  $('.navbar-default .navbar-toggle').click(function(){
    $('#blackout').toggleClass('visibility');
  });
});
