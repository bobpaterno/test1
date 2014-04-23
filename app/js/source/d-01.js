(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(addMe);
  }

  function addMe() {
    var val = $('#num1').val()*1 + $('#num2').val()*1;
    $('#answer').text(val);
  }


})();
