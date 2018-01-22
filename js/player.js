function Elements(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this. width = width;
    this.strength = strength;
};

Elements.prototype.attack = function(){
    return this.strength;
}

//Función constructora de jugadores, falta por incluir el movimiento ¿?
function Player (health, x, y, height, width){
    Elements.call (this, x, y, height, width);
    this.health = health;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
Player.prototype.receiveDamage = function(damage){
    this.health = this.health - damage;
}
Player.prototype.movement = function(){

}
Elements.prototype = Object.create(Player.prototype);
Elements.prototype.constructor = Elements;

//Función constructora de obstaculos, NO NECESITAN MOVIMIENTO
function Obstacule (x, y, height, width, strength) {
    Elements.call(this, x, y, height, width);
    this.strength = strength;
}

Elements.prototype = Object.create(Obstacule.prototype);
Elements.prototype.constructor = Elements;

//movimietos
//Colisiones -->
// Comprobar si esta tocando algun objeto.  ->> Funcion que llamo en un loop
// que comprueba la posicion que tiene el player y todos los objetos que he creado.
