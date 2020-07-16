let load = document.querySelector('.loader-inside-0');
let loadMin = document.querySelector('.loader-inside-1');
let loadMic = document.querySelector('.loader-inside-2');

let circles = document.querySelectorAll('.circles');
let ballsBounce = document.querySelectorAll('.ballsBounce')
let ballsScale = document.querySelectorAll('.ballsScale');
let ballsOpacity = document.querySelectorAll('.ballsOpacity');
let squars = document.querySelectorAll('.squar');
anime({
  targets: circles,
  rotate: '1turn',
  duration: 1500,
  loop: true,
  easing: 'linear',
  autoplay: true
})
/*Ball bouncing */
anime({
  targets: ballsBounce,
  keyframes: [
    {translateY: 15, easing: 'easeOutBounce',},
    {translateY: 0}
  ],
  duration: 1500,
  loop: true,
  delay: anime.stagger(100)
})
/**BallScalling */
anime({
  targets: ballsScale,
  scale: [
    {value: .5, duration: 500},
    {value: 1, duration: 500}
  ],
  delay: anime.stagger(100, {grid: [14, 5], from: 'center'}),
  loop: true,
})
/**ballsOpacity */
anime({
  targets: ballsOpacity,
  keyframes: [
    {scale: 1.5, opacity: 0},
    {scale: .1},
    {scale: 1, opacity: 1}
  ],
  easing: 'easeInOutQuad',
  delay: anime.stagger(100),
  loop: true,
})
/**squars */
anime({
  targets: squars,
  keyframes: [
    {scaleY: .2, opacity: .2},
    {scaleY: 1, opacity: 1}
  ],
  delay: anime.stagger(200),
  easing: 'linear',
  loop: true,
})

