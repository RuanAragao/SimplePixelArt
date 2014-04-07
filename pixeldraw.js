var drawb = document.getElementById('draw-box');
//coloers
var btnBlack = document.getElementById('btnBlack');
var btnRed = document.getElementById('btnRed');
var btnErase = document.getElementById('btnErase');
var colorSelected = document.getElementById('color');

//drawb.onclick = function(){
//  alert(this.id);
//};

function setColor (attr) {
  if (attr == 'erase') {
    colorPixel = 'rgba(255,255,255,0)';
  } 
  if (attr == 'brush') {
    colorPixel = colorSelected.value;
  }
}
//var colorPixel = 'Black';

function createGrid(value){
  var pixel = 24;
  drawb.style.width = value * pixel+"px";
  drawb.style.height = value * pixel+"px";
  console.log(nPixels = value * value);
  for(d=1;d <= nPixels;d++){
    drawb.innerHTML += '<span id="pixel-'+d+'" class="pixel" onclick="paint(this.id, colorPixel)"></span>';
  }
}

//drawb.onclick = function(){
//  alert(this.id);
//};

function paint(id, colorPixel){
  var element = document.getElementById(id);
  if(element.style.backgroundColor == colorPixel){
    element.style.backgroundColor = 'rgba(255,155,155,0)';
  } else {
    element.style.backgroundColor = colorPixel;
  }
  
  console.log(element.style.backgroundColor);
}


createGrid(10);