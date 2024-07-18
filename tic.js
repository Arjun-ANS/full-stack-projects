const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");
const line = document.querySelector(".line");
trackerx = [];
trackero = [];
window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
}

let playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
playerSign = "X",
runBot = true;

function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}
function ch(x,y,array) {
    if(c(x-1,array)&&c(y-1,array)){
        return true;
    } 
    return false;
}
function c(x,array){
    if (array.includes(x+1)){
        return true;
    }
}
function bot(){
    let array = [];
    let arr = [];
    if(runBot){
        playerSign = "O";
    
        trackerx = [];
        trackero = [];
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
            else {
                arr.push(i+1);
            }
            if (allBox[i].id == "X"){
               if (players.classList.contains("player")) {
                    trackero.push(i+1);
               }
                else{
                   trackerx.push(i+1);
                }
            }
            if (allBox[i].id == "O"){
                if (players.classList.contains("player")) {
                    trackerx.push(i+1);
                }
                else{
                  trackero.push(i+1);
                }               
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        let rand = randomBox;
        var f = false;
        if (trackerx.length == 1) {
            console.log("enteren");
            if (arr.includes(5)==false){
                console.log("working fine");
                randomBox = 4;
            }
            else{
                let first = [0,2,6,8];
                randomBox = first[Math.floor(Math.random()*4)];
            }
        }
        console.log(arr);
        for (let j = 1 ; j< 10; j++){
            if (f) break;
            if (trackerx.length <= 1 ) break;
            for (let i = j+1; i< 10; i++){
                if (f) break;
                if (ch(i,j,trackero) || ch(i,j,trackerx) ){
                    if (1==1){
                        console.log(i,j);
                        console.log("gone inside");
                        if (i-j==1 && i!=4 && i!=7){
                            console.log("row checker 1");
                            if (i%3==0){
                                if (c(i-3,arr)) continue;
                                randomBox = i-3;
                            } 
                            else{
                                if(c(i,arr)) continue;
                                randomBox = i;
                            }
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if(i-j==2 && i%3==0){
                            console.log("row checker 2");
                            if(c(i-2,arr)) continue;
                            randomBox = i-2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        } 
                        else if(i-j==3){
                            console.log("column checker 3");
                            if (i>6){
                                if (c(j-4,arr)) continue;
                                randomBox = j-4;
                            } 
                            else {
                                if(c(i+2,arr)) continue;
                                randomBox = i+2;
                            }
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i-j==6){
                            console.log("column checker 6");
                            if (c(j+2,arr)) continue;
                            console.log("correct");
                            randomBox = j+2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==5 && j ==1){
                            console.log("diagonal checker");
                            if(c(8,arr)) continue;
                            randomBox = 8;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==9 && j ==5){
                            console.log("diagonal checker");
                            if(c(0,arr)) continue;
                            randomBox = 0;
                            f =  true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==5 && j ==3){
                            console.log("diagonal checker");
                            if(c(6,arr)) continue;
                            randomBox = 6; 
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==7 && j ==5){
                            console.log("diagonal checker");
                            if(c(2,arr)) continue;
                            randomBox = 2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==9 && j ==1){
                            console.log("diagonal checker");
                            if(c(4,arr)) continue;
                            randomBox = 4;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==7 && j ==3){
                            console.log("diagonal checker");
                            if(c(4,arr)) continue;
                            randomBox = 4;
                            f= true;
                            console.log("chosen random is ",randomBox);
                        }
                        
                    }
                }
            }
        }
        f = false;
        console.log(arr);
        for (let j = 1 ; j< 10; j++){
            if (f) break;
            if (trackero.length <= 1 ) break;
            for (let i = j+1; i< 10; i++){
                if (f) break;
                if (ch(i,j,trackero)){
                    if (1==1){
                        console.log(i,j);
                        console.log("gone inside");
                        if (i-j==1 && i!=4 && i!=7){
                            console.log("row checker 1");
                            if (i%3==0){
                                if (c(i-3,arr)) continue;
                                randomBox = i-3;
                            } 
                            else{
                                if(c(i,arr)) continue;
                                randomBox = i;
                            }
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if(i-j==2 && i%3==0){
                            console.log("row checker 2");
                            if(c(i-2,arr)) continue;
                            randomBox = i-2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        } 
                        else if(i-j==3){
                            console.log("column checker 3");
                            if (i>6){
                                if (c(j-4,arr)) continue;
                                randomBox = j-4;
                    
                            } 
                            else {
                                if(c(i+2,arr)) continue;
                                randomBox = i+2;
                            }
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i-j==6){
                            console.log("column checker 6");
                            if (c(j+2,arr)) continue;
                            console.log("correct");
                            randomBox = j+2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==5 && j ==1){
                            console.log("diagonal checker");
                            if(c(8,arr)) continue;
                            randomBox = 8;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==9 && j ==5){
                            console.log("diagonal checker");
                            if(c(0,arr)) continue;
                            randomBox = 0;
                            f =  true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==5 && j ==3){
                            console.log("diagonal checker");
                            if(c(6,arr)) continue;
                            randomBox = 6; 
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==7 && j ==5){
                            console.log("diagonal checker");
                            if(c(2,arr)) continue;
                            randomBox = 2;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==9 && j ==1){
                            console.log("diagonal checker");
                            if(c(4,arr)) continue;
                            randomBox = 4;
                            f = true;
                            console.log("chosen random is ",randomBox);
                        }
                        else if (i==7 && j ==3){
                            console.log("diagonal checker");
                            if(c(4,arr)) continue;
                            randomBox = 4;
                            f= true;
                            console.log("chosen random is ",randomBox);
                        }
                        
                    }
                }
            }
        }
        
        console.log("chosen pos is ",randomBox+1);
        console.log("x: ",trackerx);
        console.log("O: ", trackero)
        if(array.length > 0){
            if(players.classList.contains("player")){ 
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                allBox[randomBox].setAttribute("id", playerSign);
                players.classList.add("active");
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}

function getIdVal(classname){
    return document.querySelector(".box" + classname).id;
}
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}
function setter(x,y,z){
    line.style["backgroundColor"] = "grey";
    if (x==1 && y==2 && z==3){
        line.style["transform"] = "translateY(-250px)";
    }
    else if (x==4 && y==5 && z==6){
        line.style["transform"] = "translateY(-150px)";
    }
    else if (x==7 && y==8 && z==9){
        line.style["transform"] = "translateY(-50px)";
    }
    else if (x==2 && y==5 && z==8){
        line.style["rotate"] = "90deg";
        line.style["transform"] = "translate(-150px,0)";
    }
    else if (x==3 && y==6 && z==9){
        line.style["rotate"] = "90deg";
        line.style["transform"] = "translate(-150px,-100px)";
    }
    else if (x==1 && y==4 && z==7){
        line.style["rotate"] = "90deg";
        line.style["transform"] = "translate(-150px,100px)";
    }
    else if (x==1 && y==5 && z==9){
        line.style["rotate"] = "45deg";
        line.style["transform"] = "translate(-100px,-100px)";
    }
    else if (x==3 && y==5 && z==7){
        line.style["rotate"] = "-45deg";
        line.style["transform"] = "translate(100px,-100px)";
    }
   
}
function selectWinner(){
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        
        if (checkIdSign(1,2,3,playerSign))
            {
                setTimeout(()=> {
                    setter(1,2,3)
                },200);
            }
        else if (checkIdSign(4,5,6,playerSign))
            {
                    setTimeout(()=> {
                        setter(4,5,6)
                    },200);
            }
        else  if (checkIdSign(7,8,9,playerSign))
                {
                    setTimeout(()=> {
                        setter(7,8,9);
                    },200);
                }
        else  if (checkIdSign(1,4,7,playerSign))
                {
                    setTimeout(()=> {
                        setter(1,4,7);
                    },200);
                }
        else  if (checkIdSign(2,5,8,playerSign))
                    {
                        setTimeout(()=> {
                            setter(2,5,8);
                        },200);
                    }
         else  if (checkIdSign(3,6,9,playerSign))
                        {
                            setTimeout(()=> {
                                setter(3,6,9);
                            },200);
                        }
        else  if (checkIdSign(1,5,9,playerSign))
                    {
                        setTimeout(()=> {
                            setter(1,5,9);
                            },200);
                    }
        else {
            setTimeout(()=> {
                setter(3,5,7);
            },200);
        }
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            line.style['backgroundColor'] = "";
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 1000);
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }
    else{
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            }, 1000);
            wonText.textContent = "Match has been drawn!";
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload();
}