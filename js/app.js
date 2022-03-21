const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $back = document.querySelector('#back');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress')

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleBack() {
  $video.currentTime -= 10;
}

function handleForward() {
  $video.currentTime += 10;
}

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$back.addEventListener('click', handleBack);
$forward.addEventListener('click', handleForward);

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

function handleInput() {
  $video.currentTime = $progress.value;
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);