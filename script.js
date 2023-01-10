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
    let width = 655 / getPixel.value;                                   //calculating with of single pixel (655 is the dimention of the white board)
    let height = 655 / getPixel.value;                                  //calculating heigh of single pixel 
    let newDiv = document.querySelector('.grid-item');
    let divToRemove = document.querySelectorAll('.grid-item')
    //START OF NOT WORKING STUFF//
    if(divToRemove != null){
        for (let i = 0; i < resolution; i++){                           //it removes all the divs if they exist,                                    
            divToRemove.remove();                
            console.log("removed");
        }
    }
    
    for(i = 0; i < resolution;i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.style.width = width + "px";                              //creating every pixel, but only on the first click, next time i can try editing dimension with js 
        newDiv.style.height = height + "px"; 
        console.log("div created")
        targetNode.appendChild(newDiv);
    }
    console.log(newDiv)
    
}
//END OF NO WORKING STUFF//
    
