const element = document.getElementById('BOL')
const answer = [ 'yes', 'no', 'maybe', 'try again']
const question2 = document.getElementById('question2')



function Animate(){
    element.classList.add('ball-outer-layer-animation'); // start animation
    setTimeout(() => {element.classList.remove('ball-outer-layer-animation');}, 3000) // Remove Animation Class
    randomAnswer = Math.floor(Math.random() * answer.length);
    setTimeout (() => {document.getElementById("eightBall").innerHTML = answer[randomAnswer];}, 3000);
    
}

// LaQuanta's Backend Java-Script

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
