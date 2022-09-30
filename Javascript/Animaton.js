const element = document.getElementById('BOL')
const answer = [ 'yes', 'no', 'maybe', 'try again']

function Animate(){
    element.classList.add('ball-outer-layer-animation'); // start animation
    setTimeout(() => {element.classList.remove('ball-outer-layer-animation');}, 3000) // Remove Animation Class
    randomAnswer = Math.floor(Math.random() * answer.length);
    console.log(answer[randomAnswer])
    return answer[randomAnswer]
}


