var canvas;
var yogaimg,Backgroundimg,skippingimg,plankimg,splitimg,stretches;
var gamestate = 0;
var user,form,game;


function preload(){
yogaimg = loadAnimation("images/tile000.jpg","images/tile001.jpg","images/tile002.jpg","images/tile003.jpg","images/tile004.jpg","images/tile005.jpg","images/tile006.jpg");
Backgroundimg = loadImage("images/backgroundimg.jpg");
skippingimg = loadImage("images/skipping.png")
plankimg = loadImage("images/plank excersise.png")
splitimg= loadImage("images/split excersise.png")
stretchesimg = loadImage("images/stretches.jpg")
}


function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    boy = createSprite(700,350,10,10);
    boy.shapeColor = "red";
    boy.addAnimation("ex1",yogaimg);
    boy.visible = false;

    boy1 = createSprite(700,350,10,10);
    boy1.shapeColor = "green";
    boy1.addImage(plankimg);
    boy1.visible = false;

    boy2 = createSprite(700,350,10,10);
    boy2.shapeColor = "blue";
    boy2.addImage(splitimg);
    boy2.visible = false;

    boy3 = createSprite(700,350,10,10);
    boy3shapeColor = "pink";
    boy3.addImage(stretchesimg);
    boy3.visible = false;

    boy4 = createSprite(700,350,10,10);
    boy4.shapeColor = "green";
    boy4.addImage(skippingimg);
    boy4.visible = false;

   

    database.ref("Gamestate").on("value",(data)=>{
    gamestate = data.val();                                                                        
    });

    //user = new User(); 
    //form= new Form();
    game = new Game();
    game.start();
    //form.display();


}

function draw(){ 
if (gamestate === 0){
//form.hide1();
}
//console.log(gamestate);
if(gamestate===1){
form.hide();
form.excersises();               
}
   
    drawSprites();
}

