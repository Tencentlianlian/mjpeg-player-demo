import {Player} from 'qcloud-iot-mjpeg-player';

const progressEl = document.querySelector('#progress');

const player = new Player({
  videoUrl: 'http://localhost:3000/video.mpg',
  audioUrl: 'http://localhost:3000/audio.aac',
  container: document.querySelector('.container'),
  onTimeUpdate(time, duration) {
    progressEl.value = time / duration * 100;
  }
});

player.load().then(() => {
  document.querySelector('#play').addEventListener('click', () => {
    console.log('click');
    player.play();
  })
  document.querySelector('#pause').addEventListener('click', () => {
    console.log('pause');
    player.pause();
  })
});

console.log('player:', player);

// 修改播放进度
progressEl.addEventListener('change', (e) => {
  console.log(e.target.value);
  const time = player.duration * e.target.value / 100;
  player.currentTime = time;
})
