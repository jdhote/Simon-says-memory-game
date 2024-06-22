let gameSeq=[];
let userSeq=[];
let btns=["yellow", "green", "red", "blue"];
let level=0;
let started=false;
let h3=document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game has started");
        started=true;
        levelup();
    }
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
}, 250);
}


function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rdnIdx= Math.floor(Math.random() * 3);
let rdnColor=btns[rdnIdx];
let rdnBtn= document.querySelector(`.${rdnColor}`);
    btnFlash(rdnBtn);
    gameSeq.push(rdnColor);
}

function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        if(idx>0){
            document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        }, 150);
        }
       
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}