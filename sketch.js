var backgroundImg;
var rectangle;
var box;
var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7,sprite8,sprite9,sprite10,sprite11,sprite12,sprite13,sprite14,sprite15,sprite16;
var cheetahheadImg, cheetahbodyImg, cheetahlegsImg, cheetahtailImg;

function preload() {
    backgroundImg = loadImage("sprites/crumpled bg.jpg");
    cheetahheadImg = loadImage("sprites/cheetah head.PNG");
    cheetahbodyImg = loadImage("sprites/cheetahbody.PNG");
    cheetahlegsImg= loadImage("sprites/cheetahlegs.PNG");
    cheetahtailImg= loadImage("sprites/cheetahtail.PNG");
}

function setup(){
    var canvas = createCanvas(1200, 600);
    rectangle = createSprite(400, 400, 580, 370);
    //top left corner of box is at 820, 20.
    box = createSprite(1000, 180, 360, 320);
    sprite1 = createSprite(865, 60, 90, 80);
    sprite1.shapeColor = "blue";
    sprite2 = createSprite(955, 60, 90 , 80);
    sprite2.shapeColor = "purple";
    sprite3 = createSprite(1045, 60, 90, 80);
    sprite3.shapeColor = "green";
    sprite4 = createSprite(1135, 60, 90, 80);
    sprite4.shapeColor = "pink";
    sprite5 = createSprite(865, 140, 90, 80);
    sprite5.shapeColor = "pink";
    sprite6 = createSprite(955, 140, 90, 80);
    sprite6.shapeColor = "green";
    sprite7 = createSprite(1045, 140, 90 , 80);
    sprite7.shapeColor = "blue";
    sprite8 = createSprite(1135, 140, 90, 80);
    sprite8.shapeColor = "purple";
    sprite9 = createSprite(865, 220, 90, 80);
    sprite9.shapeColor = "blue";
    sprite10 = createSprite(955, 220, 90 , 80);
    sprite10.shapeColor = "purple";
    sprite11 = createSprite(1045, 220, 90, 80);
    sprite11.shapeColor = "green";
    sprite12 = createSprite(1135, 220, 90, 80);
    sprite12.shapeColor = "pink";
    sprite13 = createSprite(865, 300, 90, 80);
    sprite13.shapeColor = "pink";
    sprite14 = createSprite(955, 300, 90, 80);
    sprite14.shapeColor = "green";
    sprite15 = createSprite(1045, 300, 90 , 80);
    sprite15.shapeColor = "blue";
    sprite16 = createSprite(1135, 300, 90, 80);
    sprite16.shapeColor = "purple";
}
function draw(){
    background(backgroundImg);

    drawSprites();
}