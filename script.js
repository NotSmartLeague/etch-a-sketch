const colorPicker = document.querySelector('.color-picker');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const pixel = document.querySelector('.pixel');
const modalColor = document.querySelector('.modal-color');
const modalPixel = document.querySelector('.modal-pixel');

function setInvisible(modal){
    modal.classList.toggle("visible")       //declaring function to display the modal toggling the class visible on click
}
colorPicker.onclick = function(){           //showing modal on click calling the function
    setInvisible(modalColor);
}
pixel.onclick = function (){                //showing modal on click calling the funcion
    setInvisible(modalPixel);
}




const getPixel = document.getElementById('rangePixel');                 //selecting the element that gets the resolution
const targetNode = document.querySelector('.grid');                     //selecting the node where the div is to be added

getPixel.onclick = function(){
    let resolution = getPixel.value * getPixel.value;                   //setting the resolution
    let width = 730 / getPixel.value;                                   //calculating with of single pixel (655 is the dimention of the white board)
    let height = 730 / getPixel.value;                                  //calculating heigh of single pixel 
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
            newDiv.style.width = width + "px";                              //this create every on the pixel, but only on the first click, have to work on it 
            newDiv.style.height = height + "px"; 
            newDiv.setAttribute("onmouseenter", "toColor(this)")
            console.log("div created")
            targetNode.appendChild(newDiv);
        }
        
    }
    let newDiv = document.querySelector('.grid-item');
    function toColor(pixel){
        pixel.style.backgroundColor = "black";
    }
    

    