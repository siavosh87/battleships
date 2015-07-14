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
    locationsHit = [],
    playerLocations = [],
    computerLocations = [];


Boat = function(width) {
  this.width = width;
}

createFleet = function(){
  var fleet = [];
  $.each([4,4,3,3,3,2], function(index, value){
    var boat = new Boat(value)
    fleet.push(boat);
  }
  return fleet;
}

play = function(){
  var playersBoats = createFleet(),
      computersBoats = createFleet();

  if (playerLocations.length < 6) {
    playersBoats[playerLocations.length]
    
  }
}

getSurroundingPositions = function(){
  var initialValue = parseInt($(this).data("value").split('-')[1]),
      compass = {
          n: level,
          s: -level,
          e: 1,
          w: -1
      },
      surroundingPositions = [],
      correctPositions = [];

  $.each(Object.keys(compass), function(index,key) {
    surroundingPositions.push(initialValue+compass[key]);
  })

  $(surroundingPositions).each(function(index, value) {
    if (value > 0 && value < 100)
      correctPositions.push(value)
  });
  console.log(correctPositions);

  return correctPositions;
},

buildTables = function(){
  $.each(["left", "right"], function(index, side){
    $('body').append("<ul class='"+side+"''></ul>")
    var $grid = $('.'+side);
    var i = 0;
    for (i; i < (level*level); i++) {
      $grid.append("<li data-value='"+side+"-"+i+"'>"+i+"</li>");
    }
  });
  // $('li').on("click", getSurroundingPositions)
  play();
},

start = function() {
  buildTables();
};

function getRandomPosition() {
  // will add content later
}

$(function(){
  start();
})
