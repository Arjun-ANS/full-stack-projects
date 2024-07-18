$(document).ready(function(){
  $(document).keydown(function(){
    if (event.key == 'a'){
      gameStart();
    }
  });
});
var audio;
var answer = [];
var times = 0;
var level= 1;
var select;
var colors = ["green","red","yellow","blue"];
var temparr = [];
function gameStart(){
  temparr = [];
  answer = [];
  level = 1;
  times = 0;
  gamerun();
  //$('#'+'green').removeClass("pressed");
}
$('.btn').click(perform);
function gamerun(){
  $('h1').text("Level "+level.toString());
  answer = [];
  select = Math.floor(Math.random()*4);
  temparr.push(colors[select]);
  console.log(temparr);
  setTimeout(function(){
    $('#'+colors[select]).fadeOut(100).fadeIn(100);
  },500);
  times = 0;
  level+=1;
}
function checkuser() {
  if (times == temparr.length){
    console.log("over");
    gamerun();
  }
}
function perform() {
  var color = $(this).attr('id');
  playSound(color);
  if (color == temparr[times]){
    times += 1;
    checkuser();
  }
  else{
    gamestop();
    return ;
  }
}

function gamestop(){
  $('h1').text("Game Over Press a to start");
  playSound('wrong');
  $('body').addClass('game-over');
  setTimeout(function(){
    $('body').removeClass('game-over');
  },100);
  startOver();
  }
function playSound(name){
  audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function judge(answer,temparr){
  for (var i=0;i<answer.length;i++){
    if (answer[i] != temparr[i]){
      return false;
    }
  }
  return true;
}
function startOver(){
  $(document).keydown(gameStart);
}
