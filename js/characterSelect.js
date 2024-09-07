// Set up canvas
const canvas = document.getElementById('characterSelectAnimation');
const ctx = canvas.getContext('2d');

// Load Jin's sprite sheet
const jinSpriteSheet = new Image();
jinSpriteSheet.src = 'assets/JinIdle.png'; 


// Event listener for triggering Jin's idle animation
document.querySelector('#JinSelect').addEventListener('click', jinSelectIdle);

//Mouse over event for image spirtes
//Trying to have sprites show up on mouse over
let Character = document.querySelector('Character');
Character.forEach(element =>{
    addEventListener("mouseover", (event) => {
        
    });
});