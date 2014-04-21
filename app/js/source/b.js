(function(){
  'use strict';

  $(document).ready(init);
  var flipCount = 0;
  var headCount = 0;
  var tailsCount = 0;

  function init() {
    $('#flip').click(flipCoin);
  }

  function flipCoin() {
    var coin = headsOrTails();
    updateCount(coin);
    flipCount++;
    $('#num-heads').text(headCount);
    $('#num-tails').text(tailsCount);
    $('#pct-heads').text(  100*(headCount/flipCount).toFixed(2) + '%');
    $('#pct-tails').text(  100*(tailsCount/flipCount).toFixed(2)+ '%' );
  }

  function updateCount(coin) {
    if(coin) {
        headCount++;
    }
    else {
      tailsCount++;
    }
  }

  function headsOrTails() {
    return Math.floor(2*Math.random());
  }

})();
