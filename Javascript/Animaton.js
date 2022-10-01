const element = document.getElementById('BOL')
const answer = [ 'yes', 'no', 'maybe', 'try again']
const question2 = document.getElementById('question2')



function Animate(){
    element.classList.add('ball-outer-layer-animation'); // start animation
    setTimeout(() => {element.classList.remove('ball-outer-layer-animation');}, 3000) // Remove Animation Class
    randomAnswer = Math.floor(Math.random() * answer.length);
    setTimeout (() => {document.getElementById("eightBall").innerHTML = answer[randomAnswer];}, 3000);
    
}
