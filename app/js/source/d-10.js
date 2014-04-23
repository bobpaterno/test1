(function(){
  'use strict';

  $(document).ready(init);

  var timer;
  var clock;

  function init() {
    clock = 0;
    $('#start').click(startClock);
    $('#stop').click(stopClock);
  }

  function startClock() {
    clearInterval(timer);
    timer = setInterval(clockCount, 1000);
  }

  function stopClock() {
    clearInterval(timer);
  }

  function clockCount() {
    clock++;
    $('#display').text(clock);
  }

})();
