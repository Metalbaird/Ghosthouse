// Get the audio element and the mute/unmute button
const bgMusic = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');

// Play the background music when the page loads
window.addEventListener('load', function() {
    bgMusic.play();
});

// Toggle mute/unmute when the button is clicked
muteButton.addEventListener('click', function() {
    if (bgMusic.paused) {
        // If music is currently paused, unmute and play
        bgMusic.play();
        muteButton.textContent = 'Mute';
    } else {
        // If music is currently playing, pause
        bgMusic.pause();
        muteButton.textContent = 'Unmute';
    }
});