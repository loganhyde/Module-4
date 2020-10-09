
//-------------------- global variables -----------------------//



var canvas;
var ctx;
var w = 1000;
var h = 600;
var coloursRect = [50, 30];



//--------------------- executable code ----------------------//



setUpCanvas(); //displays canvas



for(var i=0;  i<20; i++){
    rect(i*50,150,20,70, coloursRect[i%coloursRect.length]);
}


for(var i=0;  i<20; i++){
    rect(i*50,300,20,70, coloursRect[i%coloursRect.length]);
}


for(var i=0;  i<20; i++){
    rect(i*50,450,20,70, coloursRect[i%coloursRect.length]);
}



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
    ctx.fillStyle = "hsla("+c+",100%,50%,0.8)";
    ctx.fill();
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