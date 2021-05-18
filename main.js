canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://www.pngkite.com/mpng/185-1853110.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://www.pngkite.com/mpng/185-1853110.png";
car2_x = 10;
car2_y = 100;

background_image = "https://thumbs.gfycat.com/MatureCrazyJunco-max-1mb.gif";

function Imagebackground(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = uploadcar1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadcar2;
    car2_image_tag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    var key_down = e.keyCode;
    console.log("key_down");
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("w key");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("s key");
    }
    if(keyPressed == '67')
    {
        car2_left();
        console.log("a key");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("d key");
    }
};
