var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var player = new Player(ctx, canvas);
var lava = new Lava(ctx, canvas);
//var obstacule = new Obstacule(ctx, canvas);

function update() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.render();
  //lava.renderMap();
};
lava.renderMap();
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




