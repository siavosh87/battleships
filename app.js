/**
* Setup the two boards
* Choose the positions where you want your battle ships to go.
* Make the computer choose the positions of their battleships (AI)
* Prompt user for a guess
* Save the choice of square in an array
* Check the user's guess against the battleship to look for a hit, miss or sink
* Make the computer make a random choice of squares (primative AI)
* Then work out when the game is finished
*/

var level = 10;
var locationsHit = [];
// const topRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const bottomRow = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// const leftEdge = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
// const rightEdge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const topLeft = [1];
// const topRight = [10];
// const bottomLeft = [91];
// const bottomRight = [100];

function Board() {
  this.topRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.bottomRow = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  this.leftEdge = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
  this.rightEdge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  this.topLeft = [1];
  this.topRight = [10];
  this.bottomLeft = [91];
  this.bottomRight = [100];
}



function includes(array, location) {
  var found = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == location) {
      found = true;
      break;
    }
  }
  return found;
}

function isOuterEdge(location) {
  var result = false;
  if (includes(topRow,location) || includes(bottomRow,location)
      || includes(leftEdge,location) || includes(rightEdge,location)) {
    result = true;
  }
  return result;
}

function topLeftSurroundingPositions() {
  surroundingPositions = [2, 11];
  return surroundingPositions;
}

function topRightSurroundingPositions() {
  surroundingPositions = [9, 20];
  return surroundingPositions;
}

function bottomLeftSurroundingPositions() {
  surroundingPositions = [81, 92];
  return surroundingPositions;
}

function bottomRightSurroundingPositions() {
  surroundingPositions = [90, 99];
  return surroundingPositions;
}

function topRowSurroundingPositions(location) {
  surroundingPositions = [location - 1, location + 1, location + 10];
  return surroundingPositions;
}

function bottomRowSurroundingPositions(location) {
  surroundingPositions = [location - 1, location + 1, location - 10];
  return surroundingPositions;
}

function leftEdgeSurroundPositions(location) {
  surroundingPositions = [location - 10, location + 10, location + 1];
  return surroundingPositions;
}

function rightEdgeSurroundingPositions(location) {
  surroundingPositions = [location - 10, location + 10, location - 1];
  return surroundingPositions;
}

function getSurroundingEdgePositions(location) {
  if (includes(leftEdge,location)) {return topLeftSurroundingPositions()};
  if (includes(topRight,location)) {return topRightSurroundingPositions()};
  if (includes(bottomLeft,location)) {return bottomLeftSurroundingPositions()};
  if (includes(bottomRight,location)) {return bottomRightSurroundingPositions()};
  if (includes(topRow,location)) {return topRowSurroundingPositions(location)};
  if (includes(bottomRow,location)) {return bottomRowSurroundingPositions(location)};
  if (includes(leftEdge,location)) {return leftEdgeSurroundPositions(location)};
  if (includes(rightEdge,location)) {return rightEdgeSurroundingPositions(location)};
}

function getSurroundingPositions(location) {
  if (isOuterEdge(location)) {
    return getSurroundingEdgePositions(location);
  } else {
    surroundingPositions = [location - 1, location + 1, location - 10, location + 10];
    return surroundingPositions;
  }
}



buildTables = function(side){
  $('body').append("<ul class='"+side+"''></ul>")
  var $grid = $('.'+side);
  var i = 0;
  for (i; i < (level*level); i++) {
    $grid.append("<li data-value='"+side+"-"+i+"'></li>");
  }
},

start = function() {
  buildTables("left");
  buildTables("right");
};

function Ships(name) {
  if (!(this instanceof ships)) {
    return new Ships(name);
  }
  this.name = name;
}

function Game() {
  this.users = users;
  this.shipsUsed = shipsUsed;
}



function getRandomPosition() {
  // will add content later
}

$(function(){
  start();
})
