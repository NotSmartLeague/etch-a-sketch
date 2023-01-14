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

const getColor = document.querySelector("#color");
getColor.onchange = function(){
    let color = getColor.value;
    console.log(color);  
    setInvisible(modalColor);                                  //this get the color from input
    return color;
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
            newDiv.style.width = width + "px";                              //this create every on the pixel
            newDiv.style.height = height + "px"; 
            //write if else to know what tool is selected(eraser, rainbow ecc)
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

    