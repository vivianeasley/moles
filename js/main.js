var MAIN = (function ( ) {

  // Public Variables
  var MA          = { };
  MA.score        = 0;
  MA.currentLevel = 1;
  MA.gameOver     = false;

  // Private Variables - These are set in MA.restartGame( ).
  var fMoleSpeedMilSec;
  var fMoleCaught;
  var fDoubleMole;
  var fLevelIncrement;  //Number of points before you get to the next level

  //Nodes
  var fScoreNode        = document.querySelector('.score');
  var fLivesNode        = document.querySelector('.lives');
  var fHolesWrapperNode = document.querySelector('.main-grid');
  var fHoleNodes        = document.querySelectorAll('.main-grid-box');
    

  MA.init = function ( ) {
    POPUP.installPopUp( 'intro', MAIN.restartGame );
    
  };

  /////////////////// Main Game Logic and Mole Handling ////////////////////////////

  MA.gameLoop = function ( ) {
    // If the game has ended makes game loop stop.
    if ( MA.gameOver === true ) {
      MA.gameOver = false;
      return;
    }

    // This checks you score and increases the level, or registers a win, accordingly.
    if ( MA.score > fLevelIncrement ) {
      if ( MA.currentLevel > 3 ) {
        POPUP.installPopUp( 'win', MAIN.restartGame )
        return;
      } 
      fLevelIncrement += 15;
      increaseLevelAttributes( );
      POPUP.installPopUp( 'leveled', MAIN.continueGame );
      MA.currentLevel++;
      return;
    }

    // Get the amount of time to wait until a mole appears.
    var randomTimeInterval = GENERAL.getRandomNum(700, 1300); 

    GENERAL.wait( randomTimeInterval, chooseMoleType )
  }

  function chooseMoleType ( ) {
    // This randomly decides if you will get a double, single, or queen mole.
    var randNum = GENERAL.getRandomNum(0, 100);

    if ( randNum < 80 ) {
      createMole( 'mole' );

    } else if ( randNum > 95 ) {
      createMole( 'queen-mole' );

    } else {
      createMole( 'mole' );
      createMole( 'mole' );
      fDoubleMole = true;

    }

    GENERAL.wait( fMoleSpeedMilSec, removeMole );
  }

  function removeMole ( ) { 
    //Handles Removing of uncaught moles and then continues the loop
    var moles = document.querySelectorAll('.mole-wrapper');

    if ( fDoubleMole === true && moles.length === 0 ) {
      removeHole( );
    }

    if ( moles ) {
      for (var i = 0; i < moles.length; i++) {
        NODES.removeNode( moles[i] ); 
      };
    }

    if ( fMoleCaught === false ) {
      LIFE.subtractLife( moles.length );
    } else {
      fMoleCaught = false;
    }

    fDoubleMole = false;

    MA.gameLoop( ); 
  }

  /////////////////// Create Mole and Randomly Place It ////////////////////////////

  function createMole ( moleType ) {
    var randomHole  = GENERAL.getRandomNum( 0, (fHoleNodes.length - 1) );
    var imagePath   = 'assets/' + moleType + '-sprite.png';
    var boxOccupied = fHoleNodes[randomHole].querySelector('.mole-sprite'); 

    // This makes sure you don't place a mole on an existing mole when you get a double mole.
    if (boxOccupied) {
      if (randomHole === (fHoleNodes.length - 1) ) {
        randomHole = randomHole - 1;
      } else {
        randomHole = randomHole + 1;
      }
    }

    // Build mole and append. Add click events for mole.
    var moleWrapper = document.createElement('div');
    moleWrapper.classList.add('mole-wrapper');

    var newNode = NODES.buildReturnNode( 'img', imagePath, 'mole-sprite', moleWrapper );
    moleWrapper.appendChild( newNode );

    fHoleNodes[randomHole].appendChild( moleWrapper );

    SPRITE.animate( newNode, 116, 103, 50, 12, undefined );

    moleWrapper.addEventListener("mousedown", function ( ) { moleCaptured( this, moleType ); }, false)

  }


  /////////////////// Basic Game Functionality ////////////////////////////

  MA.restartGame = function ( ) {
    MA.score    = 0;
    MA.gameOver = false;

    fMoleSpeedMilSec    = 1200;
    fMoleCaught         = false;
    fDoubleMole         = false;
    fLevelIncrement     = 15; 

    MA.score            = 0;
    MA.currentLevel     = 1;
    MA.gameOver         = false;

    fScoreNode.textContent = 0;
    
    var lifeVeggy = document.querySelectorAll('.life');

    if (lifeVeggy.length > 0) {
      for (var i = 0; i < lifeVeggy.length; i++) {
        NODES.removeNode(lifeVeggy[i])
      }
    }

    LIFE.addLife(4);

    for (var i = 0; i < fHoleNodes.length; i++) {
      NODES.removeNode( fHoleNodes[i] );
    };

    for (var i = 0; i < 9; i++) {
      NODES.buildAppendNode( 'div', undefined, 'main-grid-box', fHolesWrapperNode );
    };
    
    fHoleNodes = document.querySelectorAll('.main-grid-box');

    MA.continueGame( );
  }

  MA.continueGame = function ( ) {
    var popUpNode = document.querySelector('.pop-up-wrapper')
    document.body.removeChild(popUpNode);
    MA.gameLoop( );
  }


  function moleCaptured ( self, moleType ) {
    fMoleCaught = true;

    if ( moleType === 'queen-mole' ) {
      LIFE.addLife( 1 );
      updateScore( 5 );
    } else {
      updateScore( 1 );
    }

    NODES.removeNode( self );

  }

  function updateScore( points ) {
    MA.score += points;
    fScoreNode.textContent = MA.score;
  }

  function increaseLevelAttributes ( ) {
    // Increases mole speed and number of holes each level
    fMoleSpeedMilSec = fMoleSpeedMilSec*0.85;
    addHole( );
  }

  function removeHole ( ) {
    // Make sure there are no fewer than 3 holes.
    var lastHole = fHoleNodes.length - 1 ;
    if ( lastHole < 3 ) return; 

    NODES.removeNode( fHoleNodes[lastHole] );
    fHoleNodes = document.querySelectorAll('.main-grid-box');
  }

  function addHole ( ) {
    NODES.buildAppendNode('div', undefined, 'main-grid-box', fHolesWrapperNode)

    fHoleNodes = document.querySelectorAll('.main-grid-box');
  }
 
  return MA;
}( ));

MAIN.init( );
