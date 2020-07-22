// Don't use `.getElementsByClassName()`
var bg = document.querySelector('.bg,body');
var colours = ["#CCCDFF", "#BAC7E8", "#D9EEFF", "#BADFE8", "white"];
var index = 0; // Will keep track of which color to use

function change() {
  // If we have run out of colors, stop the timer
  if(index >= colours.length){ clearInterval(timer); }
  
  // Set the color and increment the index
  bg.style.backgroundColor = colours[index++];
}

// Start the timer but get a reference to it 
// so we can stop it later

var timer = setInterval(change, 5000); 