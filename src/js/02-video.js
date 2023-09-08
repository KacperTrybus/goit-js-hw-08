import Player from '@vimeo/player';

const onPlay = function (data) {
  const item = {
    playtime: data,
  };
  const save = localStorage.setItem(
    'videoplayer-current-time',
    JSON.parse(item)
  );

  const playtimeNum = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
};

player.on('timeupdate', onPlay);
czas;
player.setCurrentTime(playtimeNum);
