const colorPicker = document.querySelector('.color-picker');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const pixel = document.querySelector('.pixel');
const modalColor = document.querySelector('.modal-color');
const modalPixel = document.querySelector('.modal-pixel');

function setInvisible(modal){
    modal.classList.toggle("visible")
}
colorPicker.onclick = function(){
    setInvisible(modalColor);
}
pixel.onclick = function (){
    setInvisible(modalPixel);
}


/* rainbow.addEventListener("click", function(){})
eraser.addEventListener("click", function(){})
clear.addEventListener("click", function(){})
pixel.addEventListener("click", function(){}) */

const getPixel = document.getElementById('rangePixel');
const targetNode = document.querySelector('.grid');

getPixel.onclick = function(){
    let resolution = getPixel.value * getPixel.value;
    let width = 655 / getPixel.value;
    let height = 655 / getPixel.value;
    let newDiv;
    if(newDiv == true){
        for (let i = 0; i < resolution; i++){
            console.log("working");
        }
    }
    for(i = 0; i < resolution;i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.style.width = width + "px"; 
        newDiv.style.height = height + "px"; 
        targetNode.appendChild(newDiv);
    }
}