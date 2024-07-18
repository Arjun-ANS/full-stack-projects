
document.querySelector("h1").innerHTML = "Are you lucky?";
document.addEventListener("keydown",run);
function run() {
  var number1 = Math.floor(Math.random()*6);
var number2 = Math.floor(Math.random()*6);
if (number1==number2) {
  document.querySelector("h1").innerHTML = "Draw";
}
else if(number1 > number2){
  document.querySelector("h1").innerHTML = "Winner Player 1";
}
else {
  document.querySelector("h1").innerHTML = "Winner Player 2";
}
switch (number1){
  case 1:
    document.querySelector("img").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
  default:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    break;
}
switch (number2) {
  case 1:
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
  default:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    break;
  setTimeout(function(){},2000);
}
}