(function(){
  'use strict';

  $(document).ready(init);

  function init() {
//    $('body').on('click','#toggle-div', doToggle);
    $('body').click(doToggle);
  }

  function doToggle() {
    debugger;
    $('#toggle-div').toggleClass('green');
  }

})();
