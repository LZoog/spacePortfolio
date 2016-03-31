$(function(){
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
      $('#p3 p').html("&nbsp; &nbsp;(Rails)");
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
});
