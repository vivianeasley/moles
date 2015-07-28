var VIEWS = (function ( ) {

  // Public Variables
  var VE = { };

  // Private Variables
    
  // Public Functions
  VE.buildIntroView = function ( ) {
    var introScreenData = "<div class='pop-up-wrapper'>\
        <div class='pop-up'>\
          <div class='pop-up-title'>Welcome to Molee McMolerson's Molatorium</div>\
          <div class='instructions-wrapper'>\
            <div>It’s time to protect your vegetables! Whack each mole you find in your garden to score one point! If you miss and it escapes you loose a vegetable. There will be five offensives from the mole army, each with faster moles and more holes. Don’t loose all your vegetables - you have to save your harvest!</div>\
            <div class='instructions-chunk'>\
              <img class='instructions-image' src='assets/mole.png'><span>Your average, everyday mole. Whack it to receive one point.</span>\
            </div>\
            <div class='instructions-chunk'>\
              <img class='instructions-image' src='assets/queen-mole.png'><span>A rare blue queen mole. Whack it to get 5 points and an extra vegetable.</span>\
            </div>\
            <div class='instructions-chunk'>\
              <img class='instructions-image' src='assets/double-mole.png'><span>Whack two moles at the same time and a hole will collapse. You also score two points.</span>\
            </div>\
          </div>\
          <div class='pop-up-button standard-button'>Begin!</div>\
        </div>\
      </div>";

    return buildViewNode( introScreenData );

  };

  VE.buildGameOverView = function ( ) {
    var gameOverScreenData = "<div class='pop-up-wrapper'>\
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

    return buildViewNode( gameOverScreenData );

  };

  VE.buildWinView = function ( ) {
    var winScreenData = "<div class='pop-up-wrapper'>\
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

    return buildViewNode( winScreenData );

  };

  VE.buildLevelView = function ( ) {
     var levelScreenData = "<div class='pop-up-wrapper'>\
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

    return buildViewNode( levelScreenData );

  };

  VE.buildMoleView = function ( ) {
     var levelScreenData = "<div class='mole-wrapper'>\
            <img class='mole-sprite' src='assets/mole-sprite.png'>\
          </div>";

    return buildViewNode( levelScreenData );

  };


  // Private Functions
  function buildViewNode ( htmlText ) {
    var tempNode       = document.createElement( 'div' );
    tempNode.innerHTML = htmlText;
    var newNode        = tempNode.firstChild;

    return newNode;
  }


  return VE;
}( ));


