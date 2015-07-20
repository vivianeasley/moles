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
    var viewNode;

    if ( popUpType === 'intro' ) {
      viewNode = VIEWS.buildIntroView( );

    } else if ( popUpType === 'fail' ) {
      viewNode = VIEWS.buildGameOverView( );

    } else if ( popUpType === 'win' ){
      viewNode = VIEWS.buildWinView( );

    } else {
      viewNode = VIEWS.buildLevelView( );

    }
    var scoreSubmitButton;
    
    var button         = viewNode.querySelector('.pop-up-button');
    var finalScore     = viewNode.querySelector('.final-score');
    var scores         = viewNode.querySelector('.high-scores');
    var levelNumber    = viewNode.querySelector('.level-number');

    GENERAL.checkLocalStorage( );

    if (finalScore) finalScore.textContent = MAIN.score;

    button.addEventListener("click", clickCall, false);

    scoreSubmitButton = viewNode.querySelector('.submit-name-button');
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


    document.body.appendChild(viewNode);

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
