var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var player = new Player(ctx, canvas);
var obstacleBaseOne = new Obstacles (0, 460, 300, 40, '#8e8e93');
var obstacleBaseTwo = new Obstacles (350, 460, 300, 40, '#8e8e93');
var obstacleBaseThree = new Obstacles (780, 460, 300, 40, '#8e8e93');
var obstacleAirOne = new Obstacles (690, 300, 200, 20, '#8e8e93');
var obstacleAirTunelOne = new Obstacles (220, 300, 400, 30, '#8e8e93');
var obstacleAirTunelTwo = new Obstacles (250, 220, 300, 30, '#8e8e93');
var obstacleAirTwo = new Obstacles (0, 300, 60, 10, '#8e8e93');
var obstacleAirThree = new Obstacles (0, 200, 20, 10, '#8e8e93');
var obstacleAirFour = new Obstacles (0, 90, 20, 10, '#8e8e93');
var obstacleAirFive = new Obstacles (530, 130, 20, 90, '#8e8e93');
var obstacleAirSix = new Obstacles (150, 120, 200, 20, '#8e8e93');
var obstacleAirSeven = new Obstacles (460, 80, 200, 20, '#8e8e93');
var obstacleAirFinal = new Obstacles (760, 60, 250, 20, '#8e8e93');
var obstacleAirOne_0 = new Obstacles (980, 340, 20, 20, '#8e8e93');

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  obstacleBaseOne.draw();
  obstacleBaseTwo.draw();
  obstacleBaseThree.draw();
  obstacleAirOne.draw();
  obstacleAirTunelOne.draw();
  obstacleAirTunelTwo.draw();
  obstacleAirTwo.draw();
  obstacleAirThree.draw();
  obstacleAirFour.draw();
  obstacleAirFive.draw();
  obstacleAirSix.draw();
  obstacleAirSeven.draw();
  obstacleAirFinal.draw();
  obstacleAirOne_0.draw();
  
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




