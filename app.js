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

var level = 10,
var locationsHit = [];
const topRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bottomRow = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const leftEdge = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
const rightEdge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const topLeft = [1];
const topRight = [10];
const bottomLeft = [91];
const bottomRight = [100];

function topLeftSurroundingPositions() {
  surroundingPositions = [2, 11];
}

function topRightSurroundingPositions() {
  surroundingPositions = [9, 20];
}

function bottomLeftSurroundingPositions() {
  surroundingPositions = [81, 92];
}

function bottomRightSurroundingPositions() {
  surroundingPositions = [90, 99];
}

function topRowSurroundingPositions(location) {
  surroundingPositions = [location - 1, location + 1, location + 10];
}

function bottomRowSurroundingPositions(location) {
  surroundingPositions = [location - 1, location + 1, location - 10];
}

function leftEdgeSurroundPositions(location) {
  surroundingPositions = [location - 10, location + 10, location + 1];
}

function rightEdgeSurroundingPositions(location) {
  surroundingPositions = [location - 10, location + 10, location - 1];
}

function getSurroundingPosition(location) {
  if (topLeft.includes(location)) {topLeftSurroundingPositions()};
  if (topRight.includes(location)) {topRightSurroundingPositions()};
  if (bottomLeft.includes(location)) {bottomLeftSurroundingPositions()};
  if (bottomRight.includes(location)) {bottomRightSurroundingPositions()};
  if (topRow.includes(location)) {topRowSurroundingPositions(location)};
  if (bottomRow.includes(location)) {bottomRowSurroundingPositions(location)};
  if (leftEdge.includes(location)) {leftEdgeSurroundPositions(location)};
  if (rightEdge.includes(location)) {rightEdgeSurroundingPositions(location)};
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

function ships(name) {
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
