var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}
function new_Image(get_Image){
    fabric.Image.fromURL( get_Image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&keyPressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=='38'){
        Up();
        console.log("Up");
    }
    if(keyPressed=='40'){
        Down();
        console.log("Down");
    }
    if(keyPressed=='37'){
        Left();
        console.log("Left");
    }
    if(keyPressed=='39'){
        Right();
        console.log("Right");
    }
    if(keyPressed=='87'){
        new_Image('wall.jpg');
        console.log("w");
    }
    if(keyPressed=='71'){
        new_Image('ground.png');
        console.log("g");
    }
    if(keyPressed=='76'){
        new_Image('light_green.png');
        console.log("l");
    }
    if(keyPressed=='84'){
        new_Image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed=='82'){
        new_Image('roof.jpg');
        console.log("r");
    }
    if(keyPressed=='89'){
        new_Image('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed=='68'){
        new_Image('dark_green.png');
        console.log("d");
    }
    if(keyPressed=='85'){
        new_Image('unique.png');
        console.log("u");
    }
    if(keyPressed=='67'){
        new_Image('cloud.jpg');
        console.log("c");
    }
}

function Up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block_image_height is "+block_image_height);
        console.log("when up arrow is pressed, X = "+player_x+", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block_image_height is "+block_image_height);
        console.log("when down arrow is pressed, X = "+player_x+", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block_image_width is "+block_image_width);
        console.log("when left arrow is pressed, X = "+player_x+", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block_image_width is "+block_image_width);
        console.log("when right arrow is pressed, X = "+player_x+", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}