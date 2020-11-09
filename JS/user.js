class User{
constructor(){
this.name = null;
this.age = null;
this.excersise = null;

}

update(){
database.ref("user").set({
name : this.name,
age : this.age,
excersise : this.excersise

})

 }
}