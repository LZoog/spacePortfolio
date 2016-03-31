
$(function() {
  var numOfClicks = 0;
  var numOfMoves = 0;
  var player1Wins = 0;
  var player2Wins = 0;
  var theme = '';

  updateWinCount(player1Wins, player2Wins);

  $('#default').click(function() {
    changeTheme('#default');
  });

  $('#pkmn').click(function() {
    changeTheme('#pkmn');
  });

  $('#bb').click(function() {
    changeTheme('#bb');
  });

  $('#dbz').click(function() {
    changeTheme('#dbz');
  });

  function changeTheme(themeId) {
    if ($('.board-square').is('[class*="x"]') || $('.board-square').is('[class*="z"]')) {
      $('#theme-msg').html('Sorry, you can\'t change themes mid-game.');
    } else {
      $('#theme-msg').html('Current theme: ' + $(themeId).attr('alt'));
      if (themeId == '#default') {
        theme = '';
        $('header').css('background-image', 'url(img/default-bg.png)');
      } else if (themeId == '#pkmn') {
        theme = '-pkmn';
        $('header').css('background-image', 'url(img/pkmn-bg.jpg)');
      } else if (themeId == '#bb') {
        theme = '-bb';
        $('header').css('background-image', 'url(img/bb-bg.jpg)');
      } else if (themeId == '#dbz') {
        theme = '-dbz';
        $('header').css('background-image', 'url(img/dbz-bg.jpg)');
      }
    }
  };

  $('.board-square').click(function() {
    var boardSquareId = '#' + this.id;
    makeMove(boardSquareId);
  });

  function makeMove(boardSquareId) {
    if ($(boardSquareId).is('[class*="x"]') || $(boardSquareId).is('[class*="z"]')) {
      //do nothing
    } else if (numOfClicks % 2 == 0) {
      $(boardSquareId).addClass('x' + theme);
      $('#pMove').html("Your move, Player 2.");
      var token = 'x' + theme;
      var playerNum = '1';
      numOfMoves += 1;
      numOfClicks += 1;
    } else {
      $(boardSquareId).addClass('z' + theme);
      $('#pMove').html("Your move, Player 1.");
      token = 'z' + theme;
      playerNum = '2';
      numOfMoves +=1;
      numOfClicks += 1;
    }
    checkForWin(token, playerNum, numOfClicks);
  };

  function checkForWin(token, playerNum) {
    //horizontal win
    if ($('#a').hasClass(token) && $('#b').hasClass(token) && $('#c').hasClass(token)) {
      won(playerNum);
    } else if ($('#d').hasClass(token) && $('#e').hasClass(token) && $('#f').hasClass(token)) {
      won(playerNum);
    } else if ($('#g').hasClass(token) && $('#h').hasClass(token) && $('#i').hasClass(token)) {
      won(playerNum);
    //vertical win
    } else if ($('#a').hasClass(token) && $('#d').hasClass(token) && $('#g').hasClass(token)) {
      won(playerNum);
    } else if ($('#b').hasClass(token) && $('#e').hasClass(token) && $('#h').hasClass(token)) {
      won(playerNum);
    } else if ($('#c').hasClass(token) && $('#f').hasClass(token) && $('#i').hasClass(token)) {
      won(playerNum);
    //diagonal win
    } else if ($('#a').hasClass(token) && $('#e').hasClass(token) && $('#i').hasClass(token)) {
      won(playerNum);
    } else if ($('#c').hasClass(token) && $('#e').hasClass(token) && $('#g').hasClass(token)) {
      won(playerNum);
    //check for cat
  } else if (numOfMoves == 9) {
      alert('Cat game!');
      clearboard();
    }
  };

  function won(playerNum) {
    if (playerNum == '1') {
      alert("Player 1 wins! :D\n");
      player1Wins += 1;
      threeWins(playerNum, player1Wins);
      updateWinCount(player1Wins);
    } else {
      alert("Player 2 wins! :D\n");
      player2Wins += 1;
      threeWins(playerNum, player2Wins);
      updateWinCount(undefined, player2Wins);
    }
    clearboard();
  };

  function threeWins(playerNum, playerWins) {
    if (playerWins == '3') {
      alert('Congrats player ' + playerNum + ', you won 3 rounds! *claps*');
      resetWins();
    }
  };

  function resetWins() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinCount(player1Wins, player2Wins);
  };

  function updateWinCount(player1Wins, player2Wins) {
    $('#p1Wins').html(player1Wins);
    $('#p2Wins').html(player2Wins);
  };

  function clearboard() {
    numOfMoves = 0;
    $('#board .board-square').removeClass('x' + theme);
    $('#board .board-square').removeClass('z' + theme);
  };

  $('#reset').click(function() {
    clearboard();
    resetWins();
  });

});
