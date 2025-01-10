let tempScreen = document.querySelector("#tempScreen");
let fanScreen = document.querySelector("#fanScreen");
let lightScreen = document.querySelector(".light");


let acTemp = 16;
let acStatus = false;
let fanSpeed = 1;

function toggleAc() {
  if (acStatus == false) {
    acStatus = true;
    fanSpeed = 1;
    lightScreen.style.backgroundColor = "blue";
    tempScreen.innerText = acTemp;
    fanScreen.innerText = fanSpeed;
  }else{
    acStatus = false;
    lightScreen.style.backgroundColor = "grey";
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













// let studentDgree = prompt("ادخل مجموعك لمعرفه التقييم  ");
// if( studentDgree >= 0 ){
//     if(studentDgree >= 50 ){
//         if(studentDgree >= 65){
//             if(studentDgree >= 75){
//                 if(studentDgree >= 85){
//                     if(studentDgree > 100){
//                         document.write(" your degree not correct");    
//                         window.alert(` " wrong value " please enter degree from 0 to 100`)    
//                     }else{
//                         document.write("ممتاز "); 
//                     }
//                 }else{
//                     document.write(" جيد جدا"); 
//                 }
//             }else{
//                 document.write("جيد "); 
//             }
//         }else{
//             document.write("مقبول"); 
//         }
//     }else{
//         document.write(" راسب");            
//     }
// }
// else{
//     document.write(" your degree not correct");    
//     window.alert(` "wrong value" please enter degree from 0 to 100`)         
// }