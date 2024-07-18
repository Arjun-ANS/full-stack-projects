const str = "asdfjkl";
document.addEventListener("keydown", function(event) {
  var key = event.key;
  transparent(key);
  switch (key) {
    case 'a':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'f':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      break;
  }
});
document.addEventListener("keyup", function(event) {
  var key = event.key;
  transparentr(key);
});

function transparent(str){
  document.querySelector("."+str).classList.add("pressed");
}
function transparentr(str){
  document.querySelector("."+str).classList.remove("pressed");
}
