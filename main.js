var canvas= new fabric.Canvas('myCanvas');
// player position
playerX=10;
playerY=10;
//block hieght and width 
var blockWidth=30;
var blockHeight=30;
//var player and block object
var playerObject="";
var blockObject="";
//fun update player move
function playerUpdate() {
fabric.Image.fromURL("player.png" , 
function(Img){
playerObject=Img;
playerObject.scaleToWidth(150);
playerObject.scaleToHeight(140);
playerObject.set({
   top:playerY,
   left:playerX 
}
);
canvas.add(playerObject);
}
);
}

//fun update block 
function new_image(get_image) {
    fabric.Image.fromURL(get_image , 
    function(Img){
    blockObject=Img;
    blockObject.scaleToWidth(blockWidth);
    blockObject.scaleToHeight(blockHeight);
    blockObject.set({
       top:playerY,
       left:playerX 
    }
    );
    canvas.add(blockObject);
    }
    );
    }
    //listener
window.addEventListener("keydown",myKeyDown);
//my key down func
function myKeyDown(e) {
   keyPressed=e.keyCode;
   //increase block width 
console.log(keyPressed)
if (e.shiftKey == true && keyPressed == '80') {
   blockHeight=blockHeight + 10;
   blockWidth=blockWidth + 10 ;
document.getElementById("Current_width").innerHTML=blockWidth;
document.getElementById("Current_height").innerHTML=blockHeight; 
}
//increase height width 
console.log(keyPressed)
if (e.shiftKey == true && keyPressed == '77') {
   blockHeight=blockHeight - 10;
   blockWidth=blockWidth - 10 ;
document.getElementById("Current_width").innerHTML=blockWidth;
document.getElementById("Current_height").innerHTML=blockHeight; 
}
// movement funcs
//up
if (keyPressed == '38') {
   up();
console.log("up");
}

//down
if (keyPressed == '40') {
   down();
   console.log("down");
   }

   //right
if (keyPressed == '39') {
   right();
   console.log("right");
   }

   //left
if (keyPressed == '37') {
   left();
   console.log("left");
   }
   
//c
if (keyPressed == '67') {
   new_image('Cloud.png');
   console.log("c");
   }

   //b
if (keyPressed == '66') {
   new_image('Building.jpg');
   console.log("b");
   }
    
   //v
if (keyPressed == '86') {
   new_image('view.jpg');
   console.log("v");
   }
   
   //f
if (keyPressed == '70') {
   new_image('fort.jpg');
   console.log("f");
   }

//i
if (keyPressed == '73') {
   new_image('images.png');
   console.log("i");
   }

//l
if (keyPressed == '76') {
   new_image('libary.jpg');
   console.log("l");
   }

//w
if (keyPressed == '87') {
   new_image('walk.png');
   console.log("w");
   }

//p
if (keyPressed == '71') {
   new_image('glass.jpg');
   console.log("p");
   }

//j
if (keyPressed == '74') {
   new_image('joKarna.jpg');
   console.log("j");
   }

   //s
if (keyPressed == '83') {
   new_image('statue.png');
   console.log("s");
   }

//d
if (keyPressed == '68') {
   new_image('dk.jpg');
   console.log("d");
   }


//h
if (keyPressed == '72') {
   new_image('House.png');
   console.log("h");
   }

   //r
if (keyPressed == '82') {
   new_image('ruppes.jpg');
   console.log("r");
   }

   //delete
if (keyPressed == '46') {
   canvas.remove(blockObject);
   console.log("delete");
   }


}
//canvas width=1000 height=700
//function up
function up() {
   if (playerY > 0 ) {
      playerY= playerY - blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}

//function down
function down() {
   if (playerY < 600 ) {
      playerY= playerY + blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}
//function right
function right() {
   if (playerX < 900 ) {
      playerX= playerX + blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}
//function left
function left() {
   if (playerX > 0 ) {
      playerX= playerX - blockHeight;
      canvas.remove(playerObject)
      playerUpdate()
   }
}

