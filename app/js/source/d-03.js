(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(pow);
  }

  function pow() {
    var vals = $('#textbox1').val().split(',');
    vals.forEach(makeDiv);
  }

  function makeDiv(str) {
    var div = $('<div>');
    var answer = Math.pow(str*1,4);

    if(answer % 2) {
      $(div).addClass('odd');
    }
    else {
      $(div).addClass('even');
    }
    $(div).text(answer);
    $('#answers').append(div);
  }

})();
