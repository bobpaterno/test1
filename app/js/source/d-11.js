(function(){
  'use strict';

  $(document).ready(init);
  var bbWid= 400;
  var bbHt = 400;
  var sbWid= 100;
  var sbHt = 100;

  function init() {
    boxRand('#small-box', sbWid,sbHt,bbWid,bbHt);
    boxRand('#big-box',bbWid,bbHt, window.innerWidth,window.innerHeight);
    $('#big-box:not(#small-box)').click(selectBigBox);
    $('#small-box').click(selectSmallBox);
    $('body').keydown(moveSelectedBox);
  }

  function moveSelectedBox(event) {
    var keyCode = event.keyCode;
    var left, top;
    var boxname = $('.bigMove').length ? '#big-box' : '#small-box';

    left = $(boxname).css('left');
    top =  $(boxname).css('top');
    left = 1*left.substring(0,left.length-2);  // remove "px"
    top = 1*top.substring(0,top.length-2);

    switch(keyCode) {
    case 38: // up arrow
      top = (top > 10)? top-10 : top;
      break;
    case 40: // down arrow
      top = (top < $(boxname).parent().innerHeight()-$(boxname).innerHeight()-10) ? top+10 : top;
      break;
    case 37: // left
      left = (left > 10)? left-10 : left;
      break;
    case 39: // right
      left = (left < $(boxname).parent().innerWidth()-$(boxname).innerWidth()-12) ? left+10: left;
    }
    $(boxname).css('left', left);
    $(boxname).css('top', top);

    if(keyCode<=40 && keyCode>=37) {
      event.preventDefault();
    }
  }

  function selectBigBox() {
    $('#small-box').removeClass('smallMove');
    $('#big-box').addClass('bigMove');
  }

  function selectSmallBox(event) {
    $('#big-box').removeClass('bigMove');
    $('#small-box').addClass('smallMove');
    event.stopPropagation();
  }

  function boxRand(boxname, thisWid, thisHt, outerWid, outerHt) {
    var left = Math.floor((outerWid-thisWid)*Math.random());
    var top  = Math.floor((outerHt-thisHt)*Math.random());

    $(boxname).css('left', left);
    $(boxname).css('top', top);
  }

})();
