function startTypingAnimation() {
    var text = "Theodore Kouvelas";
    var header = document.querySelector('header h1');
    var index = 0;

    function type() {
        if (index < text.length) {
            header.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (100ms delay)
        }
    }

    // Clear the header text and start the typing animation
    header.innerHTML = '';
    type();
}




// Start the typing animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startTypingAnimation);




function startTypingAnimation2() {
    var text = "Email: thodoriskouvelas@gmail.com | Phone: 30+6907195744 | Discord: Theo_k.";
    var header = document.querySelector('header p');
    var index = 0;

    function type() {
        if (index < text.length) {
            header.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 65); // Adjust typing speed here (100ms delay)
        }
    }

    // Clear the header text and start the typing animation
    header.innerHTML = '';
    type();
}

// Function to start the typing animation after a 3-second delay
function startTypingAnimationWithDelay2() {
    setTimeout(startTypingAnimation2, 2000); // 3000ms = 3 seconds
}

// Start the typing animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startTypingAnimationWithDelay2);
