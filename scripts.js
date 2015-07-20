
gIntroScreenData = "<div class='pop-up-wrapper'>\
    <div class='pop-up'>\
      <div class='pop-up-title'>Welcome to Wack-a-Mole</div>\
      <div class='instructions-wrapper'>\
        <div>It’s time to protect your vegetables! Whack each mole you find in your garden to score one point! If you miss and it escapes you loose a vegetable. There will be five offensives from the mole army, each with faster moles and more holes. Don’t loose all your vegetables - you have to save your harvest!</div>\
        <div class='instructions-chunk'>\
          <img class='instructions-image' src='assets/mole.png'><span>Your average, everyday mole. Whack it to receive one point.</span>\
        </div>\
        <div class='instructions-chunk'>\
          <img class='instructions-image' src='assets/queen-mole.png'><span>A rare red queen mole. Whack it to get 10 points and an extra vegetable.</span>\
        </div>\
        <div class='instructions-chunk'>\
          <img class='instructions-image' src='assets/double-mole.png'><span>Whack two moles at the same time and a hole will collapse. You also score two points.</span>\
        </div>\
      </div>\
      <div class='pop-up-button standard-button'>Begin!</div>\
    </div>\
  </div>";

gGameOverScreenData = "<div class='pop-up-wrapper'>\
      <div class='pop-up'>\
        <div class='pop-up-title'>Your Garden! Your Precious Garden!</div>\
        <div class='instructions-wrapper'>\
          <div>The moles have swarmed your garden, your harvest is lost. You should have seen this coming. Your hubris has been your downfall. With nothing to take to market, it looks like it's back to the coal mines for you…to live out your final days in darkness... ironic.</div>\
          <div class='final-score-wrapper'>\
            Final Score: <span class='final-score'></span>\
          </div>\
          <div class=high-scores-wrapper>\
          <div class='score-input-wrapper'>\
            <input class='score-name-input' type='text' name='score-name'>\
            <div class='submit-name-button standard-button'>Submit Name</div>\
          </div>\
            <div class='high-scores'></div>\
          </div>\
        <div class='pop-up-button standard-button'>Try Again!</div>\
      </div>\
    </div>";

gWinScreenData = "<div class='pop-up-wrapper'>\
        <div class='pop-up'>\
          <div class='pop-up-title'>You Did It! You Won!</div>\
          <div class='instructions-wrapper'>\
            <div>You vanquished the evil moles and saved your garden from their evil mole onslaught. Victory tastes sweet. In fact, it tastes like fresh vegetables!</div>\
            <div class='final-score-wrapper'>\
              Final Score: <span class='final-score'></span>\
            </div>\
            <div class=high-scores-wrapper>\
              <div class='score-input-wrapper'>\
                <input class='score-name-input' type='text' name='score-name'>\
                <div class='submit-name-button standard-button'>Submit Name</div>\
              </div>\
              <div class='high-scores'></div>\
            </div>\
          <div class='pop-up-button standard-button'>Try Again!</div>\
        </div>\
      </div>";

gLevelScreenData = "<div class='pop-up-wrapper'>\
        <div class='pop-up'>\
          <div class='pop-up-title'>You Drove Back the <span class='level-number'>First</span> Wave!</div>\
          <div class='instructions-wrapper'>\
            <div>An eerie calm falls over the garden. You know what’s coming. The moles are preparing….</div>\
            <div class='final-score-wrapper'>\
              Current Score: <span class='final-score'></span>\
            </div>\
          <div class='pop-up-button standard-button'>Continue!</div>\
        </div>\
      </div>";
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && 
           isFinite(value) && 
           Math.floor(value) === value;
};
var SETTINGS = (function ( ) {

  // Public Variables
  var SE = { };

  // Story Settings
  SE.speedy      = false;
  SE.waitSeconds = 1;

  // Private Variables

  // var privateVariable = 1;
    
  // Public Functions
  // SE.init = function ( ) {
    
  // };


  // Private Functions
  


  return SE;
}( ));

var SAVE = (function ( ) {

  // Public Variables
  var SA = { };

  // Public Variables
  SA.saveData = [ ];

  // Private Variables
    
  // Public Functions
  SA.updateSave = function ( optionId ) {
    var id = [];
    id.push( optionId );

    SA.saveData.push.apply( SA.saveData, id );
    
  };


  // Private Functions
  


  return SA;
}( ));

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

var NODES = (function ( ) {

  // Public Variables
  var NO = { };

  // Private Variables


  // var privateVariable = 1;
    
  // Public Functions
 NO.buildAppendNode = function ( type, imagePath, className, targetParent ) {
    var newNode = document.createElement(type);

    if ( type === 'img' )newNode.src = imagePath;

    newNode.classList.add(className);

    targetParent.appendChild( newNode );

  };

NO.buildReturnNode = function ( type, imagePath, className ) {
  var newNode = document.createElement(type);

  if ( type === 'img' )newNode.src = imagePath;

  newNode.classList.add(className);

  return newNode;

 };

NO.removeNode = function ( node ) {
  if ( node === Array ) {
    NO.removeMultipleNodes( node );
    return;
  }

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

};

NO.removeMultipleNodes = function ( nodes ) {
  if ( nodes !== Array ) {
    NO.removeNode(nodes)
    return;
  }

  for (var i = 0; i < nodes.length; i++) {
    NO.removeNode(nodes[i])
  }

  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

};

  // Private Functions



  return NO;
}( ));

var POPUP = (function ( ) {

  // Public Variables
  var PO = { };

  //Constants
  var LEVELS = ['First', 'Second', 'Third', 'Fourth']

  // Private Variables
  var fScoreArray = [ ];

  // var privateVariable = 1;
    
  // Public Functions
  PO.installPopUp = function ( popUpType, clickCall ) {
  
    if ( popUpType === 'intro' ) {
      htmlChunk = gIntroScreenData;

    } else if ( popUpType === 'fail' ) {
      htmlChunk = gGameOverScreenData;

    } else if ( popUpType === 'win' ){
      htmlChunk = gWinScreenData;

    } else {
      htmlChunk = gLevelScreenData;

    }
    var htmlChunk;
    var scoreSubmitButton;

    var tempNode       = document.createElement( 'div' );
    tempNode.innerHTML = htmlChunk;
    var newNode        = tempNode.firstChild;
    var button         = newNode.querySelector('.pop-up-button');
    var finalScore     = newNode.querySelector('.final-score');
    var scores         = newNode.querySelector('.high-scores');
    var levelNumber    = newNode.querySelector('.level-number');

    GENERAL.checkLocalStorage( );

    if (finalScore) finalScore.textContent = MAIN.score;

    button.addEventListener("click", clickCall, false);

    scoreSubmitButton = newNode.querySelector('.submit-name-button');
    if (scoreSubmitButton) { 
      scoreSubmitButton.addEventListener("click", PO.submitScore, false);
    }


    if (levelNumber) {
      levelNumber.textContent = LEVELS[(MAIN.currentLevel - 1)];
    }


    if (scores) {

      for (var i = 0; i < GENERAL.scoreArray.length; i++) {
        var scoreNode = document.createElement( 'div' );
        scoreNode.textContent = GENERAL.scoreArray[i];
        scores.appendChild(scoreNode);
      };

    }


    document.body.appendChild(newNode);

  }


  PO.submitScore = function ( ) {
    var nameInput = document.querySelector('.score-name-input');
    
    var textScore = nameInput.value + ': ' + MAIN.score;
    GENERAL.scoreArray.push(textScore);
    localStorage["moleScores"] = JSON.stringify(GENERAL.scoreArray);

    var scores    = document.querySelector('.high-scores');
    var scoreNode = document.createElement( 'div' );
    scoreNode.textContent = textScore;
    scores.appendChild(scoreNode);

    var scoreInput = document.querySelector('.score-input-wrapper')
    NODES.removeNode(scoreInput);
  }

  // Private Functions



  return PO;
}( ));

var LIFE = (function ( ) {

  // Public Variables
  var LI = { };
  // LI.moduleProperty = 2;

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
      fLevelIncrement += fLevelIncrement;
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

  /////////////////// Create Mole and Randomly PLace It ////////////////////////////

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

  MA.restartGame = function ( ) { // remove extra holes
    MA.score    = 0;
    MA.gameOver = false;

    fMoleSpeedMilSec = 1200;
    fMoleCaught      = false;
    fDoubleMole      = false;

    fScoreNode.textContent = 0;
    
    var lifeVeggy = document.querySelectorAll('.life');

    if (lifeVeggy.length > 0) {
      NODES.removeMultipleNodes(lifeVeggy);
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
