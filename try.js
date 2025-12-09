let startgame = false;
let body = document.querySelector("body");
let h2 = document.querySelector("h2")
let bushes = document.querySelectorAll(".item");
let score = 0;
let mole;
let scoreshow = document.querySelector("#score-count")
let timeshow = document.querySelector("#time-count")
let initialtime = 30;
let intervalId = null;
let timerId = null;
let clickSound = new Audio("clicksound.mp3");
let bgmusic = new Audio("gamesound.mp3");
body.addEventListener("keypress",(event)=>{
    if(startgame===false){ 
if(event.key==="Enter"){
    restart();
     console.log("game is started")
    h2.innerText="GAME IS STARTED";
    startgame=true;
   timeshow.innerText = initialtime;

    if(startgame===true){
  random();
   timing();
   bgmusic.play();
}
}
}
}) 
bushes.forEach(bush => {
     mole = bush.querySelector(".mole");
    
    mole.addEventListener("click", () => {
        if (mole.classList.contains("mole-appear")) {
            score++;
            clickSound.currentTime = 0; 
      clickSound.play();
            scoreshow.innerText = score;

            
            mole.classList.remove("mole-appear");
            mole.classList.add("mole-hide");
        }
    });
});    
function random() {
   intervalId = setInterval(() => {
       const   randomIndex = Math.floor(Math.random() * bushes.length);
    const   selectedBush = bushes[randomIndex];
         mole = selectedBush.querySelector(".mole");

        mole.classList.remove("mole-hide");
        mole.classList.add("mole-appear");
        setTimeout(() => {
            mole.classList.remove("mole-appear");
            mole.classList.add("mole-hide");
        }, 900);
    }, 1400);  
}
function timing(){
  timerId = setInterval(()=>{
    initialtime--;
    timeshow.innerText = initialtime;
    if(initialtime===0){
        h2.innerText="GAME OVER PRESS ENTER TO START AGAIN"
        body.style.backgroundColor = "red";
     startgame=false;
            clearInterval(intervalId); 
            clearInterval(timerId); 
    }
    },1000)
}
function restart(){
       score = 0;
    initialtime = 30;                         
    scoreshow.innerText = score;             
    timeshow.innerText = initialtime;
    body.style.backgroundColor = "rgb(77, 157, 77)";
}