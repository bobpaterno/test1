(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#square-it').click(squareIt);
  }

  function squareIt() {
    var n = getNums();
    displayNums(n);
    n = squareNums(n);
  }

  function displayNums(n) {
    var sq;
    var $div = $('<div>');
    for(var i=0; i<n.length; i++) {
      sq = n[i] * n[i];
      $div = $('<div>');
      $div.text(sq);
      if(sq%2) { // odd
        $('#odds').append($div);
      }
      else {
        $('#evens').append($div);
      }
    }
  }

  function squareNums(x) {
    for(var i=0; i<x.length; i++) {
      x[i] *= x[i];
    }
    return x;
  }

  function getNums() {
    var a = $('#nums-sq').val();
    a = a.replace(/ /g, '');
    return a.split(',');
  }

})();
