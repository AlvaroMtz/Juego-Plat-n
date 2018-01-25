function Obstacles (x, y, width, height, color){
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.color = color;
    this.style= "border: 1px solid black" 
}

Obstacles.prototype.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillStyle = this.style;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}


