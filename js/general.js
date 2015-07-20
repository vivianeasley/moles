var GENERAL = (function ( ) {

  // Public Variables
  var GE = { };
  GE.scoreArray = [ ];


  // Private Variables


  // var privateVariable = 1;
    
  // Public Functions
  GE.checkLocalStorage = function ( ) {
    var scoresStorage;
    if(typeof(Storage) !== "undefined") {
      if ( localStorage.getItem("moleScores") ) {
        scoresStorage = localStorage.getItem("moleScores");
        GE.scoreArray = JSON.parse(scoresStorage);

      }

    } else {
        alert('Your browser does not support saving your character between session. Upgrade!');
    }

  };

  GE.getRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  GE.wait = function ( time, callback ) {
    var start   = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      if ( progress < time) {
        window.requestAnimationFrame(step);
      } else {
        callback( );
        return;
      }
    }

    window.requestAnimationFrame(step);

  };

  // Private Functions



  return GE;
}( ));
