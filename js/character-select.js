// Set up canvas
const canvas = document.getElementById('characterSelectAnimation');
const ctx = canvas.getContext('2d');

// Load Jin's sprite sheet
const jinSpriteSheet = new Image();
jinSpriteSheet.src = 'assets/JinIdle.png'; 


// Event listener for triggering Jin's idle animation
document.querySelector('#JinSelect').addEventListener('click', jinSelectIdle);

