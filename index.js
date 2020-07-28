let clock =  document.getElementById("clock")

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const colors = [
 "#78281F" , "#4A235A" , "#154360" , "#2980B9" , "#0E6251" , "#45B39D" , "#145A32" , "##F4D03F", "#17202A" , "#273746"
]

setInterval(timer ,1000);
  
function timer(){
  if(seconds < 59){
    seconds++;
    colorChange();
  }else{
    if(minutes < 59){
    seconds = 0;
    minutes++;
    }else{
      seconds =0;
      minutes = 0;
      hours++;
    }
  }
  clock.innerHTML = hours + ":" + minutes + ":" + seconds;
};

//changing colors
function colorChange(){
    let colorIndex = Math.floor(Math.random() * 10);
    let color = colors[colorIndex];
    document.body.style.backgroundColor = color;
}
