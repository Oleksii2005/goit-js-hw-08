// import player from '@vimeo/player';
// import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const player = new Player(iframe);

const currentTime = load('videoplayer-current-time');

player.setCurrentTime(!currentTime ? 0 : currentTime);

const onPlay = ({ seconds }) => {
  save('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
