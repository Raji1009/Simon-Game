let gameSqu=[];
let userSqu=[];

let btns=["yellow","red","green","blue"];

let started=false;
let maxscore=0;
let level=0;
let h2=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game is started");
        started=true;


    levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        },300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
        },100);
}

function levelup(){
    userSqu=[];
    level++;
    h2.innerText=`Level ${level}`;

    let random=Math.floor(Math.random()*4);
    let ranColor=btns[random];
    let ranBtn=document.querySelector(`.${ranColor}`);

    gameSqu.push(ranColor);
    console.log(gameSqu);

    btnFlash(ranBtn);
};

function checkans(idx){
    if (userSqu[idx]==gameSqu[idx]){
        if (userSqu.length==gameSqu.length){
            setTimeout(levelup,500);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        h2.innerHTML=`Game Over! press any key to restart.<br>Your score is: ${level}`;
        setTimeout(reset,500);
    }
}



function btnPress(){
    let btn=this;
    userFlash(btn);

    let useColor=btn.getAttribute("id");
    userSqu.push(useColor);

    checkans(userSqu.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    if (level>maxscore){
        maxscore=level;
    }
    let score=document.querySelector(".highscore p");
    score.innerHTML=`Highest Score: <b>${maxscore}</b>`;
    started=false;
    level=0;
    userSqu=[];
    gameSqu=[];
}