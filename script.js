
let circleOne = document.querySelector('.circleOne');
let circleTwo = document.querySelector('.circleTwo');
let circleThree = document.querySelector('.circleThree');

document.querySelector('.clickOne').addEventListener('click', randomNumber);
document.querySelector('.clickTwo').addEventListener('click', randomNumberTwo);
document.querySelector('.clickThree').addEventListener('click', randomNumberThree);


function randomNumber(){
let r = Math.floor(Math.random()*255+1);
let g = Math.floor(Math.random()*255+1);
let b = Math.floor(Math.random()*255+1);

let total = `rgb(${r}, ${g}, ${b})`;

circleOne.style.backgroundColor = total;

}

function randomNumberTwo(){
    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);
    
    let total = `rgb(${r}, ${g}, ${b})`;

    circleTwo.style.backgroundColor = total;
    
}

function randomNumberThree(){
    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);

    let total = `rgb(${r}, ${g}, ${b})`;

    circleThree.style.backgroundColor = total;

}
