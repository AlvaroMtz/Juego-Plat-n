function Player(ctx, canvas){
    this.x = 20,
    this.y = 150,   
    this.vy = 0,
    this.vx = 0,
    this.speed = 3, 
    this.radius = 5,
    this.color = '#FFcc00',
    this.orders = [false, false, false], // Evaluo las pulsaciones de tecla
                                         // [izq,der,arriba]
    this.friction = 0.8,
    this.gravity = 0.2;
    this.ctx = ctx,
    this.canvas = canvas
}
        
Player.prototype.render = function () {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();    
}     
        
Player.prototype.update = function () {
    this.vx *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
 
    if (this.x >= this.canvas.width - this.radius) {
        this.x = this.canvas.width - this.radius;
    } else if (this.x <= 0) {         
        this.x = this.radius;     
    }    
  
    if(this.y >= this.canvas.height - this.radius){
        this.y = this.canvas.height - this.radius;
        this.jumping = false;
    }
}

Player.prototype.moveLeft = function () {
    console.log(this.vx > -this.speed)
    if (this.vx > -this.speed) {
        console.log("ENTRO")
        this.vx--;
    }
}

Player.prototype.moveRight = function () {
    if (this.vx < this.speed) {             
        this.vx++;         
     }
}

Player.prototype.moveUp = function () {
    if(!this.jumping){
        this.jumping = true;
        this.vy = -this.speed*2;
       }
}

Player.prototype.move_orders = function () {
    if(this.orders[0] == true){
        this.moveLeft()
    } else if(this.orders[1] == true){
        this.moveRight()
    } else if(this.orders[2] == true){
        this.moveUp()
    }
}