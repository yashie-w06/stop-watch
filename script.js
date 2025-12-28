
let min = document.querySelector(".minute");
let  sec  = document.querySelector(".second");


let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");


sec.textContent = "00";
min.textContent = "00";


let intervalCount = 0;
let interval = null;


btnStart.addEventListener("click",()=>{

  if (interval === null){
    interval = setInterval(()=>{
      // console.log(interval);
      intervalCount++;
      sec.textContent = `${String(intervalCount%60).padStart(2,"0")}`
      min.textContent = `${String(Math.floor(intervalCount/60)).padStart(2,"0")}`

    },1000);

    console.log(interval);
  }
});


btnStop.addEventListener("click",()=>{
  clearInterval(interval);
  interval = null;
})


btnReset.addEventListener("click",()=>{
   intervalCount = 0;
   sec.textContent = "00";


})








