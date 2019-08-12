 



$(document).ready(function(){
    var database = firebase.database();
    var led1,led2,led3;
     database.ref().on('value',function(snap){
         led1 = snap.val().ledStatus1;
         console.log(led1);
     })
})