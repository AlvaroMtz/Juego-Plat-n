var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

console.log(canvas)

var player = new Player(ctx, canvas);

function update() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    console.log(player)
    player.update();
    player.render();
    player.move_orders();
};
setInterval(update, 20)

document.onkeydown = function(e) {
console.log("DOWN")
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
console.log("UP")
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




