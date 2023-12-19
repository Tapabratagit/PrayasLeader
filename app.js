const names = ['Tapabrata','Souvik','Tuhin','Pramit','Amit','Soham'];
$(".name").click(function (){
var index = Math.floor(Math.random() * 6);
$("#chosenName").text(names[index]);
});