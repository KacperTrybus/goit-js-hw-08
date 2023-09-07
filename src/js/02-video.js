import Player from '@vimeo/player';

// getCurrentTime(): Promise<number, Error>
// Get the current playback position in seconds.

// player.getCurrentTime().then(function(seconds) {
// seconds = the current playback position
// }).catch(function(error) {
// an error occurred
// });

localStorage.setItem('videoplayer-current-time', 'playtime');
