var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var player = new Player(ctx, canvas);
// var obstacleOne = new Obstacles(250,450, 90, 20);
// var obstacleTwo = new Obstacles(370,420, 90, 20);
// var obstacleThree = new Obstacles(520,380, 90, 20);
// var obstacleFour = new Obstacles(330,320, 90, 20);
var obstacleBaseOne = new Obstacles (0, 460, 300, 40, '#000000');
var obstacleBaseTwo = new Obstacles (350, 460, 300, 40);
var obstacleBaseThree = new Obstacles (780, 460, 300, 40);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  // obstacleOne.draw();
  // obstacleTwo.draw();
  // obstacleThree.draw();
  // obstacleFour.draw();
  obstacleBaseOne.draw();
  obstacleBaseTwo.draw();
  obstacleBaseThree.draw();
 
};

setInterval(update, 10)



function setPlayerKey(keyCode, value) {
  switch (keyCode) {
    case 38:
      player.orders.up = value;
      break;
    case 37:
      player.orders.left = value;
      break;
    case 39:
      player.orders.right = value;
      break;
    case 40:
      player.orders.down = value;
      break;
  }
}

document.onkeydown = function (e) {
  setPlayerKey(e.keyCode, true)
}

document.onkeyup = function (e) {
  setPlayerKey(e.keyCode, false);
}




