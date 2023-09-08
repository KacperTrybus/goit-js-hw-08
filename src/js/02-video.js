import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

function timeupdateFunc(data) {
  savedTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', savedTime);
}
const timeupdateFuncThrottle = throttle(timeupdateFunc, 1000);

player.on('timeupdate', timeupdateFuncThrottle);

// const savedTime = localStorage.getItem('videoplayer-current-time');

player.on('play', function () {
  const savedTimeLocal = localStorage.getItem('videoplayer-current-time');
  if (savedTimeLocal !== null) {
    player.setCurrentTime(savedTimeLocal);
  }
});
