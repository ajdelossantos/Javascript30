// Get elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButton = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

// Build functions
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  };
};

// hookup event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);