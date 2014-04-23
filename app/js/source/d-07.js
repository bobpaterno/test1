(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(pow);
  }

  function pow() {
    var vals = $('#textbox1').val().split(',');
    vals = makeArray(vals[0]*1,vals[1]*1);
  debugger;
    while(vals.length > 1) {
      var div = $('<div>');
      var answer = vals.shift() + vals.pop();

      $(div).addClass('box');
      $(div).text(answer);
      $('#answers').append(div);
    }
    if(vals.length) {
      var divlast = $('<div>');
      $(divlast).addClass('box');
      $(divlast).text(vals);
      $('#answers').append(divlast);
    }
  }

  function makeArray(start,end) {
    var a = [];
    for(var i=start; i<=end; i++) {
      a.push(i);
    }
    return a;
  }

})();
