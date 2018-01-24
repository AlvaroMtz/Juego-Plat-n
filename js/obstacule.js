var Levels = [
    ["##################################################"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#                                                #"],
    ["#              ###########                       #"],
    ["#!!!###!!#    #!!!!!!!!!!!#                      #"],
    ["#!!!###!!###                                     #"],
    ["##################################################"],
];

function Lava (ctx, canvas) {
    this.heigth = 25,
    this.width = 20,
    this.color = '#DA5200',
    this.ctx = ctx,
    this.canvas = canvas;
};

Lava.prototype.draw = function(y, x){

    console.log("ENTRO")
    this.x = x,
    this.y = y,
    this.ctx.fillRect(x, y, this.heigth, this.width);
    this.ctx.fillStyle = this.color; 
}

Lava.prototype._checker_draw = function (param, alpha, beta){
    var y = alpha * 25
    var x = beta * 20

    console.log("8==============================(·)", x, y)
    switch (param) {
      case "#":
        console.log("BLOQUE");
        this.draw(y,x);
        break;
      case "!":
        console.log("LAVA");
        this.draw(y,x);
        break;
      case "O":
        console.log("OJETES");
        this.draw(y,x);
        break;
      case " ":
        console.log("NADA DE NADA");
        //this.draw(y,x);
        break;
    }
}

Lava.prototype.renderMap = function(a){
    var that = this;
    Levels.forEach(function(e,i){
        var alpha = i;
        //console.log("INDICE EN X ----------->", alpha)
          e.forEach(function(u,j){
            //console.log(u) //ESTO ES EL STRING TO FLAMA
            for(x=0; x<u.length; x++){
              var beta = x
              //console.log(u[x], beta)
              that._checker_draw(u[x], alpha, beta)
              
            }
          })
      })
}



