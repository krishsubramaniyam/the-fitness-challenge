class Game{
constructor(){

 }

getstate(){
database.ref("Gamestate").on("value",(data)=>{
gamestate = database.val();
});
}

updatestate(state){
database.ref("/").update({
Gamestate : state
})

}

start(){
if (gamestate === 0){
    user = new User();
    form = new Form();
    form.display();
 }
}

excersises(){
form.excersise();
 }
}