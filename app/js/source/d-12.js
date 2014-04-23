(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(compute);
  }

  function compute() {
    var vals = $('#values').val().replace(/ /g, '').split(',');
    vals = vals.map(sqCube);
    vals.map(disp);
  }

  function sqCube(x) {
    return (x%2)? Math.pow(x,3) :x*x;
  }

  function disp(x) {
    var div = $('<div>');
    if(x%2) {
      $(div).addClass('boxR');
    }
    else {
      $(div).addClass('boxB');
    }
    $(div).text(x);
    $('#answers').append(div);
  }

})();
