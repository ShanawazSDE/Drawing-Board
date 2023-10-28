const canvas =  document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
const c = canvas.getContext("2d");
let currentPos = null;
// c.beginPath();
// c.moveTo(1,1);
// c.lineTo(500,500);
// c.strokeStyle="black";
// c.lineWidth="3";
// c.stroke();
// c.closePath();
const pencil = document.querySelector(".pencil");
let pencilSelected = false;
pencil.addEventListener("click",onPencilClick)
 function onPencilClick(e){
   pencil.classList.toggle("transparent-btn-click");
   pencilSelected = !pencilSelected;
   if(pencilSelected){
    canvas.style.cursor="crosshair";
  
    canvas.addEventListener("mousedown",onMouseDown);
    

    canvas.addEventListener("mouseup",onMouseUp);
  
   }
   else{

    canvas.style.cursor="auto";
    canvas.removeEventListener("mousedown",onMouseDown);
    canvas.removeEventListener("mouseup",onMouseUp);
    canvas.removeEventListener("mousemove",onMouseMove);
    console.log("removed");
   }

   function onMouseDown(mdo){
    // console.log([mdo.clientX,mdo.clientY]);
    // currentPos = [mdo.clientX,mdo.clientY];
    c.beginPath();
    c.moveTo(mdo.clientX,mdo.clientY);
    c.lineWidth= "5";
    c.strokeStyle="black";
    canvas.addEventListener("mousemove",onMouseMove);
    
}

function onMouseUp(omu){
    c.closePath();
    canvas.removeEventListener("mousemove",onMouseMove);
}
   function onMouseMove(omm){
    if(!pencilSelected)return;
    c.lineTo(omm.clientX,omm.clientY);
    c.stroke();
    c.moveTo(omm.clientX,omm.clientY);
    
    // currentPos=[omm.clientX,omm.clientY];
    console.log([omm.clientX,omm.clientY]);

}
 }
