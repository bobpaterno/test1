(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(doColor);
  }

  function doColor() {
    var str = $('#textbox1').val().replace(/ /g, '');
    str = str.split(',');
    str.forEach(makeDiv);

  }

  function makeDiv(str) {
    var div = $('<div>');

    if(str.length % 2) {
      $(div).addClass('odd');
      str = str.toUpperCase();
    }
    else {
      $(div).addClass('even');
      str = str.toLowerCase();
    }
    $(div).text(str);
    $('#answers').append(div);
  }



})();
