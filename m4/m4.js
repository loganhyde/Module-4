
//-------------------- global variables -----------------------//


var canvas;
var ctx;
var w = 1000;
var h = 600;
var colours = ["red", "orange", "yellow", "green", "blue", "purple"];
var coloursRect = [100, 50, 30, 230, 300];
var rn = rand(5);



//--------------------- executable code ----------------------//


setUpCanvas(); //displays canvas

for(var i=0; i<200; i++){
    arc(rand(w), rand(h), 10+rand(20), colours[i%colours.length]);
}


for(var i=0;  i<20; i++){
    rect(i*50,h/2,20,100, coloursRect[i%coloursRect.length]);
}



//rect(w/2, h/2, 100, 100, coloursRect[randi(coloursRect.length)]);
//arc(w/2, h/2, 30, colours[randi(5)]);



//----------------------- functions -------------------------//



function rect(x,y,w,h,c){ //rectangle
    x = x-w/2;
    y = y-h/2;
    ctx.beginPath();
    ctx.moveTo(x  , y);
    ctx.lineTo(x+w, y);
    ctx.lineTo(x+w, y+h);
    ctx.lineTo(x  , y+h);
    ctx.lineTo(x  , y);
    ctx.fillStyle = "hsla("+c+",100%,50%,0.5)";
    ctx.fill();
}




function arc(x,y,r,c){ //circle
    ctx.beginPath();
    ctx.arc(x,y,r,0, Math.PI*2);
    ctx.fillStyle = c;
    ctx.fill();
}
// ctx.strokeStyle
// ctx.stroke()




// Math.floor always rounds down to the nearest integer
function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}




function rand(r){
    var result = Math.random()*r;
    return result
}





function setUpCanvas(){
    canvas = document.querySelector("#myCanvas"); //links canvas to html
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "5px dotted orange";
}



//----------------------------------------------------------//

console.log("module 4")
