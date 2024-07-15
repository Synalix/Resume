 // Function to start background music
 function startBackgroundMusic() {
    var backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Remove the overlay after it's clicked
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);
}