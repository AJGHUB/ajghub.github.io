
// /*___________________________Get Elements_______________________*/
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreen = player.querySelector('.player__fullscreen')

const togglePlay = () =>
  video.paused ? video.play() : video.pause()


// /*_________________________Build out functions___________________*/

  const updateButton = function () {
  toggle.textContent = this.paused ? '►' : '❚ ❚'
}

const skip = function () {
  video.currentTime += parseFloat(this.dataset.skip)
}

const handleRangeUpdate = function () {
  video[this.name] = this.value
}

const handleProgress = function () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

const handleFullscreen = () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen()
      .catch(err =>
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      )
  } else {
    document.exitFullscreen()
  }
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}


// /*_________________________Hook up the event listeners___________*/


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
fullscreen.addEventListener('click', handleFullscreen)

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => (mouseDown = true))
progress.addEventListener('mouseup', () => (mouseDown = false))