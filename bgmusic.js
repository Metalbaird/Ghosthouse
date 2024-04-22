// Get the audio element and the mute/unmute button
const bgMusic = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');

// Check if mute state is stored in localStorage
let isMuted = localStorage.getItem('isMuted') === 'true';

// Set initial mute state
if (isMuted) {
    mute();
} else {
    unmute();
}

// Play the background music when the page loads
window.addEventListener('load', function() {
    if (!isMuted) {
        bgMusic.play();
    }
});

// Toggle mute/unmute when the button is clicked
muteButton.addEventListener('click', function() {
    if (bgMusic.paused) {
        unmute();
    } else {
        mute();
    }
});

function mute() {
    bgMusic.pause();
    muteButton.textContent = 'Unmute';
    localStorage.setItem('isMuted', 'true');
}

function unmute() {
    bgMusic.play();
    muteButton.textContent = 'Mute';
    localStorage.setItem('isMuted', 'false');
}