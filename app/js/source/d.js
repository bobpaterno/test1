(function(){
  'use strict';

  var currRow = 0;
  var currCol = 0;
  var numRows;
  var numCols;

  $(document).ready(init);

  function init() {
    numRows = $('tr').length;
    numCols = $('tr:nth-child(1) td').length;

    $('#start').click(startGame);
    $('body').keydown(move);
  }

  function startGame() {
    var playerIdx = randomNum();
    var pelletIdx = randomNum();
    while(playerIdx === pelletIdx) {
      pelletIdx = randomNum();
    }
    placeCard(playerIdx, 'player');
    placeCard(pelletIdx, 'pellet');

    $('#winner').text('');
    $('#winner').css('background-color', 'white');

    currRow = Math.floor(playerIdx/numCols);
    currCol = playerIdx % numCols;
  }

  function winCond() {
    if($('.player.pellet').length) {
      $('#winner').text('Yum!');
      $('#winner').css('background-color', 'rgb(169, 201, 152)');
      $('.pellet').removeClass('pellet');
    }
  }

  function move() {
    var keyCode = event.keyCode;
    switch(keyCode) {
    case 38:
      currRow = (currRow > 0)?currRow-1 : currRow;
      break;
    case 40:
      currRow = (currRow < numRows-1)?currRow+1 : currRow;
      break;
    case 37:
      currCol = (currCol > 0)? currCol-1 : currCol;
      break;
    case 39:
      currCol = (currCol < numCols-1)? currCol+1 : currCol;
    }

    placeCard(currRow*numCols+currCol, 'player');
    winCond();

    if(keyCode<=40 && keyCode>=37) {
      event.preventDefault();
    }
  }

  function placeCard(idx, type) {
    var td = $('td')[idx];
    $('.'+type).removeClass(type);
    $(td).addClass(type);
  }

  function randomNum() {
    return Math.floor($('td').length * Math.random());
  }

})();
