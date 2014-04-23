(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('body').click(doToggle);
  }

  function doToggle() {
    var str;
    str = 'rgb('+getColor()+','+getColor()+','+getColor()+')';
    $('#toggle-div').css('background-color', str);
  }

  function getColor() {
    return (Math.floor(256*Math.random()));
  }

})();
