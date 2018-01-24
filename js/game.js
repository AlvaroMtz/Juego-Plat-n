var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var player = new Player(ctx, canvas);
//var obstacule = new Obstacule(ctx, canvas);

function update() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.update();
    player.render();
    player.move_orders();
};
setInterval(update, 20)

document.onkeydown = function(e) {
switch (e.keyCode) {
    case 38:
    player.orders[2] = true;
      break;
    case 37:
    player.orders[0] = true;
      break;
    case 39:
    player.orders[1] = true;
      break;
  }
}
document.onkeyup = function(e) {
switch (e.keyCode) {
      case 38:
      player.orders[2] = false;    
        break;
      case 37:
      player.orders[0] = false;  
        break;
      case 39:
      player.orders[1] = false; 
        break;
    }
  }




