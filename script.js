const colorPicker = document.querySelector('.color-picker');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const pixel = document.querySelector('.pixel');
const shade = document.querySelector('.shade');
const modalColor = document.querySelector('.modal-color');
const modalPixel = document.querySelector('.modal-pixel');

function setInvisible(modal){
    modal.classList.toggle("visible")       //declaring function to display the modal toggling the class visible on click
}
function getRandomColor(){                  //this function generat a random hex color
    let letters = "ABCDEF0123456789";
    let color = '';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 15) + 1];
    }
    color = '#' + color;
    return color;
}
colorPicker.onclick = function(){           //showing modal on click calling the function
    setInvisible(modalColor);
}
pixel.onclick = function (){                //showing modal on click calling the funcion
    setInvisible(modalPixel);
}

const getColor = document.querySelector("#color");
getColor.onchange = function(){
    let divToReplace = document.querySelectorAll('.grid-item')
    for (let i = 0; i < divToReplace.length; i++){
        divToReplace[i].removeAttribute("onmouseenter");
        divToReplace[i].setAttribute("onmouseenter", "toColor(this)") 
    }
    let color = getColor.value;
    console.log(color);  
    setInvisible(modalColor);                                  //this get the color from input
    return color;
}


const getPixel = document.getElementById('rangePixel');                 //selecting the element that gets the resolution
const targetNode = document.querySelector('.grid');                     //selecting the node where the div is to be added
let boardWidth = document.querySelector(".main").clientWidth;
console.log(boardWidth);
getPixel.onclick = function(){
    let resolution = getPixel.value * getPixel.value;                   //setting the resolution
    let width = boardWidth / getPixel.value;                                   //calculating with of single pixel (655 is the dimention of the white board)
    let height = boardWidth / getPixel.value;                                  //calculating heigh of single pixel 
    let newDiv = document.querySelector('.grid-item');
    let divNodeList = document.querySelectorAll('.grid-item')
    divNodeList.forEach(
        function(){
            let divToRemove = document.querySelector('.grid-item')
            divToRemove.remove();
            console.log("div removed")
        }
        )
        
        for(i = 0; i < resolution;i++){
            newDiv = document.createElement('div');
            newDiv.classList.add('grid-item');
            newDiv.style.width = width + "px";                              //this create every on the pixel
            newDiv.style.height = height + "px"; 
            newDiv.setAttribute("onmouseenter", "toColor(this)")
            console.log("div created")
            targetNode.appendChild(newDiv);
            modalPixel.onclick = function (){                //showing modal on click calling the function
                setInvisible(modalPixel);
            }
        }
        
    }

    let newDiv = document.querySelector('.grid-item');
    function toColor(pixel){                                //setting the color of the pixels on hover
        pixel.style.backgroundColor = getColor.value;
    }
    
clear.onclick = function(){
    let divNodeList = document.querySelectorAll('.grid-item')
    let divToRemove = document.querySelector('.grid-item')
    console.log("the node list is ", divNodeList);              //it reset all the pixel color 
    divNodeList.forEach(
        function(divToRemove){
            divToRemove.style.backgroundColor ="white";
            console.log("div removed");
        }
        )
}

function toRainbow(pixel){
    pixel.style.backgroundColor = getRandomColor();
}
rainbow.onclick = function(){
    let divToReplace = document.querySelectorAll('.grid-item');
    for (let i = 0; i < divToReplace.length; i++){
        divToReplace[i].removeAttribute("onmouseenter");
        divToReplace[i].setAttribute("onmouseenter", "toRainbow(this)")
        
    }
}

function toErase(pixel){
    pixel.style.backgroundColor = "white";
}
eraser.onclick = function(){
    let divToReplace = document.querySelectorAll('.grid-item');
    for (let i = 0; i < divToReplace.length; i++){
        divToReplace[i].removeAttribute("onmouseenter");
        divToReplace[i].setAttribute("onmouseenter", "toErase(this)")
        
    }
}
function toShade(pixel){
    let i = 0.10;
    pixel.onmouseenter = function(){
        i += 0.10;
        pixel.style.backgroundColor = "rgb(0, 0, 0 ," + i + ")";
        console.log(pixel.style.backgroundColor.value)
    }

}
shade.onclick = function(){
    let divToReplace = document.querySelectorAll('.grid-item');
    for (let i = 0; i < divToReplace.length; i++){
        divToReplace[i].removeAttribute("onmouseenter");
        divToReplace[i].setAttribute("onmouseenter", "toShade(this)");
    }
}