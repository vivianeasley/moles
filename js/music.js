var MUSIC = (function ( ) {

  // Public Variables
  var MU = { };

  // Private Variables
  var fLoseNotes;
  var fLevelNotes;
  var fWhen;
  var fTempo = 72;

  var fSequence1;
  var fSequence2;
  var fSequence3;

  var fSequence4;
  var fSequence5;
  var fSequence6;

  var fSounds = typeof AudioContext !== 'undefined' ? new AudioContext : new webkitAudioContext;
    
  // Public Functions
  MU.init = function( ) {
    buildMusic( );
    buildLoseSound( );
    buildLeveledSound( );
  }

  MU.playMusic = function ( ) {
    fWhen = fSounds.currentTime;
    fSequence1.play( fWhen );
    fSequence2.play( fWhen );
    fSequence3.play( fWhen );
  }

  MU.playLoseSound = function ( ) {
    fSequence4.play( );
  }

  MU.playLeveledSound = function ( ) {
    fSequence5.play( );
  }

  MU.stopMusic = function ( ) {
    fSequence1.stop( );
    fSequence2.stop( );
    fSequence3.stop( );
  }

  MU.stopLoseSound = function ( ) {
    fSequence4.stop( );
  }


  MU.incrementTempo = function ( ) {
    fTempo = fTempo + 17;
    MU.init( );
  }

  MU.resetTempo = function ( ) {
    fTempo = 72;
    MU.init( );
  }

  // Private Functions

  function buildMusic ( ) {
    fWhen = fSounds.currentTime,

      lead = [
        'Bb2  e',
        'C3   e',
        'B2   s',
        'Bb2  e',
        'F2   q',
        'A1   e',
        'C3   e',
        'A2   s',
        'Bb2  s',
        'C2   q',
        'Bb3  e',
        'C4   e',
        'B3   s',
        'Bb3  e',
        'C3   q',
        'A2   e',
        'C4   e',
        'A3   s',
        'Bb3  s',
        'C3   q',
      ],
      harmony = [
        'Aa1  e',
        '-    e',
        '-    s',
        'Bb1  e',
        'F2   q',
        'C4   e',
        'A4   e',
        'C4   s',
        'Bb4  s',
        'C3   q',
        'Aa2  e',
        '-    e',
        '-    s',
        'Bb2  e',
        'F3   q',
        'C5   e',
        'A5   e',
        'C5   s',
        'Bb5  s',
        'C4   q',
      ],
      bass = [
        '-    e',
        '-    e',
        '-    s',
        '-    e',
        'A2   q',
        '-    e',
        '-    e',
        '-    s',
        '-    s',
        'A2   q',
      ];

    fSequence1 = new Sequence( fSounds, fTempo, lead );
    fSequence2 = new Sequence( fSounds, fTempo, harmony );
    fSequence3 = new Sequence( fSounds, fTempo, bass );

    fSequence1.staccato = 0.55;
    fSequence2.staccato = 0.55;
    fSequence3.staccato = 0.05;
    fSequence3.smoothing = 0.4;

    fSequence1.gain.gain.value = 1.0 / 90;
    fSequence2.gain.gain.value = 0.8 / 90;
    fSequence3.gain.gain.value = 0.65 / 90;

    fSequence1.mid.frequency.value = 800;
    fSequence1.mid.gain.value = 3;
    fSequence2.mid.frequency.value = 1200;
    fSequence3.mid.gain.value = 3;
    fSequence3.bass.gain.value = 6;
    fSequence3.bass.frequency.value = 80;
    fSequence3.mid.gain.value = -6;
    fSequence3.mid.frequency.value = 500;
    fSequence3.treble.gain.value = -2;
    fSequence3.treble.frequency.value = 1400;
  }

  function buildLoseSound ( ) {
    loseSoundTempo = 72;

    fLoseNotes = [
      'A2  q',
      'E2  q',
      'E1  h',
    ];

    fSequence4 = new Sequence( fSounds, loseSoundTempo, fLoseNotes );
    fSequence4.gain.gain.value = 0.65 / 90;
    fSequence4.loop = false;
  }

  function buildLeveledSound ( ) {
    levelSoundTempo = 120;

    fLevelNotes = [
      'C5  e',
      'F4  e',
      'A4  e',
      'C5  e',
      'F5  e',
      'A5  e',
      'C6  e',
      'F6  q',
    ];

    fSequence5 = new Sequence( fSounds, levelSoundTempo, fLevelNotes );
    fSequence5.gain.gain.value = 0.65 / 90;
    fSequence5.loop = false;
  }



  return MU;
}( ));


