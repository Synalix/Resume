const rainContainer = document.getElementById('rain-container');
const numberOfRaindrops = 100;

for (let i = 0; i < numberOfRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Set random initial position and animation duration
    raindrop.style.left = Math.random() * 100 + 'vw';
    raindrop.style.animationDuration = Math.random() * 2 + 1 + 's';
    raindrop.style.animationDelay = Math.random() * 2 + 's';

    rainContainer.appendChild(raindrop);
}
