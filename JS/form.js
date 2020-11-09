class Form{
constructor(){
this.name = createInput("Name");
this.age = createInput("Age");
this.excersise = createInput("Favourite excersise");

this.submit = createButton("SUMBIT!!");
this.title = createElement("h1");
this.greeting = createElement("h2");
this.yoga = createButton("Yoga excersises");
this.cardio = createButton("Cardio excersises");
this.leg = createButton("Leg excersises");
this.abs = createButton("Abs excersises");
this.stretches = createButton("WarmDown stretches");

 }

display(){

    image(Backgroundimg,0,0,displayWidth-50,displayHeight-30);

this.title.html("Welcome To The fitness challenge");
this.title.position(displayWidth/2 - 100,10);

this.name.position(displayWidth/2,displayHeight/4);
this.age.position(displayWidth/2,displayHeight/4 + 30);
this.excersise.position(displayWidth/2,displayHeight/4 + 60);
this.submit.position(displayWidth/2 + 40,displayHeight/4 + 90);
this.submit.size(200,50);

    this.submit.mousePressed(()=>{
    this.name.hide();
    this.age.hide();
    this.title.hide();
    this.excersise.hide();
    this.submit.hide(); 
    user.name =  this.name.value();
    user.age = this.age.value();
    user.excersise = this.excersise.value();
    user.update();
    this.greeting.html("Hello " + name + " Welcome to the fitness hub");
    this.greeting.position(displayWidth/2 - 100,10);
    game.updatestate(1);


});
}
 
hide(){
    this.name.hide();
    this.age.hide();
    this.title.hide();
    this.excersise.hide();
    this.submit.hide();         
}

hide1(){
    this.yoga.hide();
    this.cardio.hide();
    this.leg.hide();
    this.abs.hide();
    this.stretches.hide();         

 }


excersises(){
    //console.log("entering");
    this.yoga.position(displayWidth/2,displayHeight/4-40);
    this.yoga.size(75,40);
    this.yoga.mousePressed(()=>{
        boy.visible=true;
        })
    this.cardio.position(displayWidth/2,displayHeight/4 + 30);
    this.cardio.mousePressed(()=>{
        boy4.visible=true;
        })
    this.leg.position(displayWidth/2,displayHeight/4 + 60);
    this.leg.mousePressed(()=>{
        boy2.visible=true;
        })
    this.abs.position(displayWidth/2 + 40,displayHeight/4 + 90);
    this.abs.mousePressed(()=>{
        boy1.visible=true;
        })
    this.stretches.position(displayWidth/2,displayHeight/4);
    this.stretches.mousePressed(()=>{
    boy3.visible = true;
    });

 }
}

  
 

