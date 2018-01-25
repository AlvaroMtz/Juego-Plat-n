var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var player = new Player(ctx, canvas);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  drawObstacles();
  //player.collision();
   //console.log (player.collision());
  for (let i = 0; i < objects.length; i++) {
    //console.log(objects[i]);
    
    let direction = player.collision(objects[i]);
    if (direction == "left" || direction == "right") { player.vx = 0;
    } else if (direction == "bottom") {
      player.jumping = false;
      player.grounded = true;
    } else if (direction == "top") { player.vy *= -1; }
  }

    if (player.grounded) {  player.vy = -1;  }
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
//CONTADOR DE TIEMPO

// var n = 0;
// var l = document.getElementById("number");
// window.setInterval(function(){
//   l.innerHTML = n;
//   n++;
// },1000);


// var obstacleBaseOne = new Obstacles (0, 460, 300, 40, '#8e8e93');
// var obstacleBaseTwo = new Obstacles (350, 460, 300, 40, '#8e8e93');
// var obstacleBaseThree = new Obstacles (780, 460, 300, 40, '#8e8e93');
// var obstacleAirOne = new Obstacles (690, 300, 200, 20, '#8e8e93');
// var obstacleAirTunelOne = new Obstacles (220, 300, 400, 30, '#8e8e93');
// var obstacleAirTunelTwo = new Obstacles (250, 220, 300, 30, '#8e8e93');
// var obstacleAirTwo = new Obstacles (0, 300, 60, 10, '#8e8e93');
// var obstacleAirThree = new Obstacles (0, 200, 20, 10, '#8e8e93');
// var obstacleAirFour = new Obstacles (0, 90, 20, 10, '#8e8e93');
// var obstacleAirFive = new Obstacles (530, 130, 20, 90, '#8e8e93');
// var obstacleAirSix = new Obstacles (150, 120, 200, 20, '#8e8e93');
// var obstacleAirSeven = new Obstacles (460, 80, 200, 20, '#8e8e93');
// var obstacleAirFinal = new Obstacles (760, 60, 250, 20, '#8e8e93');
// var obstacleAirOne_0 = new Obstacles (980, 340, 20, 20, '#8e8e93');

// var obst = [obstacleBaseOne, obstacleBaseTwo, obstacleBaseThree, obstacleAirOne, obstacleAirOne_0, obstacleAirTunelOne, 
//             obstacleAirTunelTwo, obstacleAirTwo, obstacleAirThree, obstacleAirFour, obstacleAirFive, obstacleAirSix, 
//             obstacleAirSeven, obstacleAirFinal];

// obstacleBaseOne.draw();
  // obstacleBaseTwo.draw();
  // obstacleBaseThree.draw();
  // obstacleAirOne.draw();
  // obstacleAirTunelOne.draw();
  // obstacleAirTunelTwo.draw();
  // obstacleAirTwo.draw();
  // obstacleAirThree.draw();
  // obstacleAirFour.draw();
  // obstacleAirFive.draw();
  // obstacleAirSix.draw();
  // obstacleAirSeven.draw();
  // obstacleAirFinal.draw();
  // obstacleAirOne_0.draw();
