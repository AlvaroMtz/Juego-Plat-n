function Player(ctx, canvas) {
    this.x = 330,
    this.y = 390,
    this.vy = 0,
    this.vx = 0,
    this.speed = 6,
    this.radius = 7,
    this.jumpStrength = 6;
    this.color = '#4cd964',
    this.orders = {
        up: false,
        down: false,
        left: false,
        right: false
    };
    this.friction = 0.8,
    this.gravity = 0.6,
    this.ctx = ctx,
    this.canvas = canvas,
    this.grounded = true,
    this.jumping = false;
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
    this.grounded = false;

    if (this.x >= this.canvas.width - this.radius) {
        this.x = this.canvas.width - this.radius;
    } else if (this.x <= 0) {
        this.x = this.radius;
    }

    if (this.y >= this.canvas.height - this.radius) {
        this.y = this.canvas.height - this.radius;
        this.jumping = false;
    }

    this.move_orders();
}

Player.prototype.moveLeft = function () {
    if (this.vx > -this.speed) {
        this.vx--;
    }
}

Player.prototype.moveRight = function () {
    if (this.vx < this.speed) {
        this.vx++;
    }
}

Player.prototype.moveUp = function () {

    if (!this.jumping) { 
        this.vy = 1 -this.jumpStrength * 2;
        this.jumping = true;
    }
}

Player.prototype.move_orders = function () {
    if (this.orders.left == true) {
        this.moveLeft()
    }
    if (this.orders.right == true) {
        this.moveRight()
    }
    if (this.orders.up == true) {
        this.moveUp()
    }
}

Player.prototype.collision = function () {
    var that = this
    objects.forEach(function(i){
        let vectorX = (that.x + (that.radius / 2)) - (i.x + (i.width / 2));
        let vectorY = (that.y + (that.radius / 2)) - (i.y + (i.height / 2));
        let halfWidths = (that.radius / 2) + (i.width / 2);
        let halfHeights = (that.radius / 2) + (i.height / 2);
        let collisionDirection = null;
    
        if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
            let offsetX = halfWidths - Math.abs(vectorX);
            let offsetY = halfHeights - Math.abs(vectorY);
            if (offsetX < offsetY) {
                if (vectorX > 0) {
                    collisionDirection = "left";
                    that.x += offsetX;
                } else {
                    collisionDirection = "right";
                    that.x -= offsetX;
                }
            } else {
                if (vectorY > 0) {
                    collisionDirection = "top";
                    that.y += offsetY;
                } else {
                    collisionDirection = "bottom";
                    that.y -= offsetY;
                }
            }
        };
       
        return collisionDirection;
       }) 
       
};