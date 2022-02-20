import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const localStorageKey = 'videoplayer-current-time';
console.log(localStorageKey);

const player = new Player('vimeo-player');
console.log(player);

const key = localStorage.getItem(localStorageKey);
if (key) {
  player.setCurrentTime(parseFloat(key));
}
console.log(key);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(localStorageKey, data.seconds.toString());
  }, 1000),
);

