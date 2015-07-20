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
