(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(doColorize);
  }

  function doColorize() {
    var colors = getColors();

    for(var i=0; i<colors.length; i++) {
      makeColorBox(colors[i]);
    }
  }

  function makeColorBox(color) {
    var div = $('<div>');

    $(div).addClass('col-box');
    $(div).text(color.length);
    $(div).css('background-color', color);
    $('body').append(div);
  }

  function getColors() {
    var c = $('#color-list').val();
    c = c.replace(/ /g, '');
    return c.split(',');
  }

})();


/*
for(var i=0; i<len; i++) {
  $div = $('<div>');
  $div.css('background-color', colors[i]);
  $div.text(colors[i].length);
  $('#box').append($div);
}
*/
