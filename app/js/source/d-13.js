(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(compute);
  }

  function compute() {
    var vals = $('#values').val().replace(/ /g, '').split('-');
    var sums = (vals[0]).split('+');
    var prod = (vals[1]).split('*');
    var oddTotal;
    var oddProd;
    sums = sums.filter(oddVal);
    prod = prod.filter(oddVal);
    oddTotal = getOddSums(sums);
    oddProd  = getOddProd(prod);

    var divsum = $('<div>');
    var divprd = $('<div>');
    $(divsum).text(oddTotal);
    $(divprd).text(oddProd);
    $(divsum).addClass('box');
    $(divprd).addClass('box');
    $('#answers').append(divsum);
    $('#answers').append(divprd);
  }
  function getOddSums(x) {
    var result = 0;
    for(var i=0; i<x.length; i++) {
      result += (x[i] * 1);
    }
    return result;
  }

  function getOddProd(x) {
    var result = 1;
    for(var i=0; i<x.length; i++) {
      result *= (x[i] * 1);
    }
    return result;
  }

  function oddVal(x) {
    return x%2;
  }

})();
