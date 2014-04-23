(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(evenSq);
  }

  function evenSq() {
    var vals = $('#textbox1').val().split(',');
    var arr = makeArray(vals[0]*1,vals[1]*1);
    arr = arr.map(function(x){ return x*x; }).filter(isOdd);
    arr.map(makeDiv);

    console.log(arr);
  }

  function makeArray(start,end) {
    var a = [];
    for(var i=start; i<=end; i++) {
      a.push(i);
    }
    return a;
  }

  function isOdd(x) {
    return (x%2);
  }

  function makeDiv(str) {
    var div = $('<div>');
    $(div).text(str);
    $(div).addClass('box');
    $('#answers').append(div);
  }

})();
