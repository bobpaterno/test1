(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(pow);
  }

  function pow() {
    var tmp = $('#textbox1').val().split('-');
    var num = tmp[0].split(',');
    var pows= tmp[1].split(',');

    for(var i=0; i<num.length; i++) {
      var maindiv = $('<div>');
      var top = '<div class=\'top\'>'+num[i]+'<sup>'+pows[i]+'</sup></div>';
      $(maindiv).append(top);

      var bot = '<div class=\'bottom\'>'+Math.pow(num[i], pows[i])+'</div>';
      $(maindiv).append(bot);

      $(maindiv).addClass('box');
      $('#answers').append(maindiv);
    }
  }

})();
