$(function(){

  $('#show-projects').click(function(){
      $('#show-projects').css({"-webkit-animation": "slideRight .75s", "animation": "slideRight .75s"});
      $('#hide-projects').css({"-webkit-animation": "slideLeft .75s", "animation": "slideLeft .75s"});
      $('#project-icons').css({"-webkit-animation": "slideLeft .75s", "animation": "slideLeft .75s"});

    setTimeout(function() {
      $('#show-projects').toggleClass('hide');
      $('#hide-projects').toggleClass('hide');
      $('#project-icons').toggleClass('hide');
    }, 740);
  });

  $('#hide-projects').click(function(){
      $('#show-projects').css({"-webkit-animation": "slideLeft .75s", "animation": "slideLeft .75s"});
      $('#hide-projects').css({"-webkit-animation": "slideRight .75s", "animation": "slideRight .75s"});
      $('#project-icons').css({"-webkit-animation": "slideRight .75s", "animation": "slideRight .75s"});

    setTimeout(function() {
      $('#show-projects').toggleClass('hide');
      $('#hide-projects').toggleClass('hide');
      $('#project-icons').toggleClass('hide');
    }, 740);

  });

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
