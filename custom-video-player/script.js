/*___________________________Get Elements_______________________*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = progress.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.player__fullscreen')



/*_________________________Build out functions___________________*/

const togglePlay = () =>
video.paused ? video.play() : video.pause();







/*_________________________Hook up the event listeners___________*/