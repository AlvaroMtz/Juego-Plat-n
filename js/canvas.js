//dibujar canvas
//dibujar obstaculos
window.onload = function() {
  function draw(){
      var ctx = document.getElementById('canvas').getContext('2d');
          //Líneas verdes
          ctx.fillStyle='#8E8E93';
          ctx.fillRect(0, 0, 10, 800);
          ctx.fillRect(790, 0, 520, 800);
          ctx.fillRect(0,0, 800, 10);
          ctx.fillRect(0,790, 800, 10);
  
  };
  draw();
};