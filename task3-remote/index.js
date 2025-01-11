let tempScreen = document.querySelector("#tempScreen");
let fanScreen = document.querySelector("#fanScreen");
let lightScreen = document.querySelector(".light");
let colorswitch =document.querySelector(".colorswitch");


let acTemp = 16;
let acStatus = false;
let fanSpeed = 1;

function toggleAc() {
  if (acStatus == false) {
    acStatus = true;
    fanSpeed = 1;
    lightScreen.style.backgroundColor = "DodgerBlue";
    colorswitch.style.backgroundColor="green";
    tempScreen.innerText = acTemp;
    fanScreen.innerText = fanSpeed;

  }else{
    acStatus = false;
    lightScreen.style.backgroundColor = "grey";
    colorswitch.style.backgroundColor="red";

  }
}

function incrementTemp() {
  if(acStatus == true && acTemp<28 ){
    acTemp++;
    tempScreen.innerText = acTemp;
  }else{
  }

}
function decrementTemp() {
  if(acStatus == true && acTemp>16  ){
    acTemp--;
    tempScreen.innerText = acTemp;
  }else{
  }
}

function fanAc(){
  if(acStatus == true && fanSpeed<3){
    fanSpeed++;
    fanScreen.innerText = fanSpeed;
  }else if(fanSpeed==3){
    fanSpeed=1
    fanScreen.innerText = fanSpeed;
  }
}