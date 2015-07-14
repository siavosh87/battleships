// Setup the two boards
// Choose the positions where you want your battle ships to go.
// Make the computer choose the positions of their battleships (AI)
// You choose to hit one of their squares
// Save the choice of square in an array
// Make the computer make a random choice of squares (primative AI)
// Then work out when the game is finished

var level = 10,

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

$(function(){
  start();
})
