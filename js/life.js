var LIFE = (function ( ) {

  // Public Variables
  var LI = { };

  // Private Variables
  var fLivesWrapper = document.querySelector('.lives');

  // var privateVariable = 1;
    
  // Public Functions
  LI.addLife = function( lifeToAdd ) {
    var newNode;
    var lifeNode  = document.querySelectorAll('.life');

    for (var i = 0; i < lifeToAdd; i++) {
      LI.createVeggieLifeNode( );
    };

  }

  LI.subtractLife = function ( lifeToSubtract ) {
    var lifeNode = document.querySelectorAll('.life');

    if ( (lifeNode.length - lifeToSubtract) <= 0 ) {
      NODES.removeMultipleNodes(lifeNode);

      POPUP.installPopUp( 'fail', MAIN.restartGame );
      MAIN.gameOver = true; 
      return;
    } else {
      for (var i = 0; i < lifeToSubtract; i++) {
        NODES.removeNode(lifeNode[i]);
      };

    }
      
  }

  LI.createVeggieLifeNode = function ( ) { 
    

    var randomX = GENERAL.getRandomNum(0, 8);
    var randomY = GENERAL.getRandomNum(0, 2);

    var newNode = document.createElement('div');
    newNode.backgoundImage = 'url(assets/veggies.png)';
    newNode.classList.add('life');
    newNode.style.backgroundPosition = (randomX*37) + 'px ' + (randomY*38) + 'px';

    fLivesWrapper.appendChild( newNode );
  }


  // Private Functions



  return LI;
}( ));
