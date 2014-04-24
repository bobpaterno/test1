(function(){
  'use strict';

  $(document).ready(init);
  var BOX_LIMIT = 0.3;


  function init() {
    $('#btn-rect').click(makeNewRect);
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

  function makeNewRect() {
    var dim = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    boxRand(randSize(BOX_LIMIT*dim),randSize(BOX_LIMIT*dim),window.innerWidth, window.innerHeight);
  }

  // function selectSmallBox(event) {
  //   $('#big-box').removeClass('bigMove');
  //   $('#small-box').addClass('smallMove');
  //   event.stopPropagation();
  // }

  function boxRand(thisWid, thisHt, outerWid, outerHt) {
    var div  = $('<div>');
    var left = Math.floor((outerWid-thisWid)*Math.random());
    var top  = Math.floor((outerHt-thisHt)*Math.random());
debugger;
    $(div).css('left', left);
    $(div).css('top', top);
    $(div).css('width', thisWid);
    $(div).css('height', thisHt);
    $(div).css('background-color', 'rgb('+randSize(255)+' ,'+randSize(255)+' ,'+randSize(255)+' )');
    $(div).addClass('rect');
    $('#boxes').append(div);
  }

  function randSize(max) {
    return Math.floor( (max) * Math.random());
  }

})();
