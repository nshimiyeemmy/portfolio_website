//select the elements you want to animate

const mouse_circle = document.querySelector(".mouse_circle");
const mouse_dot = document.querySelector(".mouse_dot");

//create a function in w/c we have to define the top and left positions for both elements

//mouse_circle, x&y are the values of top & left positions
const mouseCircleFunction = (x,y)=>{
    mouse_circle.style.cssText = `top:${y}px;left:${x}px;opacity:1`
    mouse_dot.style.cssText = `top:${y}px;left:${x}px;opacity:1`
} 
document.body.addEventListener("mousemove",(e)=>{
    //callback function w/c will be executed when eventLIstener is fired
     let x = e.clientX;
     let y = e.clientY;
     mouseCircleFunction(x,y);
})

//hide both elements when the user leaves the page
document.body.addEventListener("mouseleave",(e)=>{
    mouse_circle.style.opacity = '0';
    mouse_dot.style.opacity = '0';
})