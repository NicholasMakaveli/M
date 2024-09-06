

// 1. Set up the canvas and 2D context. DONE 
// 2. Preload the character sprite images.
// 3. When all images are loaded, allow the animation to start.
// 4. Set an event listener on the character's image.
// 5. When the character is clicked, start animating the sprite.
// 6. Each animation frame:
//     a. Clear the canvas.
//     b. Draw the next image frame in the center of the canvas.
//     c. Loop back to the first frame when all frames have been shown.
// 7. Optionally, add a way to stop the animation.

// Set up canvas
const canvas = document.getElementById('characterSelectAnimation');
const ctx = canvas.getContext('2d');

// Array for Jin sprite files 

let jinFrames = [];  //Files will be pushed into this array 
let totalFrames = 14; //total frames/files for animation
let frameDelay = 5; //Animation speed 
let imagesLoaded =0; // for preloading/tracking all the images are loading. will change dynamically as files are loaded. 
let currentFrame = 0; //Start point
let frameCounter =0; //count frames/animations to trigger actions/for smooth animnations 
let AnimationActive = false; //is the animation running rn? 

//starting frame/file number for Jin Idle Animation
let startFrame = 36;

// Load Jin's sprite sheet/preload images with for loop 
for (let i = startFrame; i < startFrame + totalFrames; i++)




//Mouse over event for image spirtes
//Trying to have sprites show up on mouse over
let Character = document.querySelector('Character');
Character.forEach(element =>{
    addEventListener("mouseover", (event) => {
        
    });
});

// Event listener for triggering Jin's idle animation
document.querySelector('#JinSelect').addEventListener('click', jinSelectIdle);

