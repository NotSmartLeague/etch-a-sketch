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

pixel.onclick = function (){
    setInvisible(modalPixel);
}
colorPicker.onclick = function(){
    setInvisible(modalColor);
}
rainbow.addEventListener("click", function(){})
eraser.addEventListener("click", function(){})
clear.addEventListener("click", function(){})
pixel.addEventListener("click", function(){})
