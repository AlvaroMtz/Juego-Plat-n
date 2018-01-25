var objects = [];

objects.push({
    x: 0,
    y: 460,
    width: 300,
    height: 40,
});
objects.push({
    x: 350,
    y: 460,
    width: 300,
    height: 40,
});
objects.push({
    x: 780,
    y: 460,
    width: 300,
    height: 40,
});
objects.push({
    x: 690,
    y: 300,
    width: 200,
    height: 20,
});
objects.push({
    x: 220,
    y: 300,
    width: 400,
    height: 30,
});
objects.push({
    x: 250,
    y: 220,
    width: 300,
    height: 30,
});
objects.push({
    x: 0,
    y: 300,
    width: 60,
    height: 10,
});
objects.push({
    x: 0,
    y: 200,
    width: 20,
    height: 10,
});
objects.push({
    x: 0,
    y: 90,
    width: 20,
    height: 10,
});
objects.push({
    x: 530,
    y: 130,
    width: 20,
    height: 90,
});
objects.push({
    x: 150,
    y: 120,
    width: 200,
    height: 20,
});
objects.push({
    x: 460,
    y: 80,
    width: 200,
    height: 20,
});
objects.push({
    x: 760,
    y: 60,
    width: 250,
    height: 20,
});
objects.push({
    x: 980,
    y: 340,
    width: 20,
    height: 20,
});

function drawObstacles() {
    for (var i = 0; i < objects.length; i++) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
};











// function Obstacles (x, y, width, height, color){
//     this.x = x,
//     this.y = y,
//     this.width = width,
//     this.height = height,
//     this.color = color;
//     this.style= "border: 1px solid black" 
// }

// Obstacles.prototype.draw = function(){
//     ctx.fillStyle = this.color;
//     ctx.fillStyle = this.style;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
// }


