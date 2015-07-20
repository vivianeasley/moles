var SPRITE = (function ( ) {

  // Public Variables
  var SP = { };
  // SP.moduleProperty = 2;

  // Private Variables
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var cancelAnimationFrame = window.cancelAnimationFrame

  var fStartTime = 0;

  // var privateVariable = 1;
    
  // Public Functions
  SP.animate = function ( spriteSheetClass, viewHoleWidth, viewHoleHeight, animationSpeed, maxFrameNumber, callback ) {
    beginAnimationProcess ( )
    
    var begin = true;

    return ;

    function beginAnimationProcess ( ) {

      var imageHeight = spriteSheetClass.clientHeight;
      var imageWidth = spriteSheetClass.clientWidth;

      var framesWide = Math.round(imageWidth/viewHoleWidth);
      var framesTall = Math.round(imageHeight/viewHoleHeight);

      if ( maxFrameNumber !== undefined ) {
        var totalFrames = maxFrameNumber;
      } else {
        var totalFrames = framesWide*framesTall;
      }

      startAnimation( viewHoleHeight, viewHoleWidth, framesWide, framesTall, totalFrames );

    }


    function startAnimation ( viewHoleHeight, viewHoleWidth, framesWide, framesTall, totalFrames ) {
      var endWidthFrame  = (framesWide-1)*viewHoleWidth;
      var endHeightFrame = (framesTall-1)*viewHoleHeight;

      function animate(timestamp) {
        var time = fStartTime + timestamp;

        var frameNumber = (Math.floor(time/animationSpeed))%(totalFrames); //// Time stamp

        if ( begin === true && frameNumber > 0 ) {
          requestAnimationFrame(animate);
          return;
        } else {
          begin = false
        }

        var rightShift = frameNumber%framesWide;
        var downShift  = Math.floor(frameNumber/framesWide)%framesTall;

        var moveSide   = rightShift*viewHoleWidth;
        var moveUpDown = downShift*viewHoleHeight;

        var translateSpriteSheet = "translate( -" + moveSide + "px, -" + moveUpDown + "px) translateZ(0)";

        spriteSheetClass.style.transform       = translateSpriteSheet;
        spriteSheetClass.style.moszTransform   = translateSpriteSheet;
        spriteSheetClass.style.webkitTransform = translateSpriteSheet;

        if ( frameNumber === (maxFrameNumber-1)) {
          fStartTime = timestamp;

          if ( callback !== undefined ) {
            callback( );
          }
          return;
        }

        requestAnimationFrame(animate);

      }

      requestAnimationFrame(animate);
    }

  };



  // Private Functions



  return SP;
}( ));
