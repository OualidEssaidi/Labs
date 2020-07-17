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
/*Circle Rotations-1*/
let firstCircle = '.circleS:nth-child(1)';
animationBalls(firstCircle, 33, 33, 0, 0, false);

let secendCircle = '.circleS:nth-child(2)';
animationBalls(secendCircle, 33, -33, 0, 0, true);

let theredCircle = '.circleS:nth-child(3)';
animationBalls(theredCircle, -33, -33, 0, 0, false);

let fouredCircle = '.circleS:nth-child(4)';
animationBalls(fouredCircle, -33, 33, 0, 0, true);

function animationBalls(target, val1,val2, val3, val4, index){
  anime({
    targets: target,
    keyframes:(index) ? [
      {translateY: val1},
      {translateX: val2},
      {translateY: val3},
      {translateX: val4}
    ] : [
      {translateX: val1},
      {translateY: val2},
      {translateX: val3},
      {translateY: val4}
    ],
    duration: 3000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  })
}
/*############### Advenced Loaders ###############*/
/*Circle Rotations-2*/
let firstBall = '.ball:nth-child(1)';
anime({
  targets: firstBall,
  translateX: [
    { value: 33, duration: 750},
    { value: 0, duration: 750, delay: 750 }
  ],
  translateY: [
    { value: 33, duration: 750, delay: 750 },
    { value: 0, duration: 750, delay: 750 }
  ],
  scaleX: [
    { value: 1.4, duration: 100, easing: 'easeOutExpo' },
    { value: 1, duration: 650 },
    { value: 1.4, duration: 50, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: 1.4, duration: 100, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.4, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
})

let secendBall = '.ball:nth-child(2)';
anime({
  targets: secendBall,
  translateY: [
    { value: 33, duration: 750},
    { value: 0, duration: 750, delay: 750 }
  ],
  translateX: [
    { value: -33, duration: 750, delay: 750 },
    { value: 0, duration: 750, delay: 750 }
  ],
  scaleY: [
    { value: 1.4, duration: 100, easing: 'easeOutExpo' },
    { value: 1, duration: 650 },
    { value: 1.4, duration: 50, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleX: [
    { value: 1.4, duration: 100, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.4, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
})

let thiredBall = '.ball:nth-child(3)';
anime({
  targets: thiredBall,
  translateX: [
    { value: -33, duration: 750},
    { value: 0, duration: 750, delay: 750 }
  ],
  translateY: [
    { value: -33, duration: 750, delay: 750 },
    { value: 0, duration: 750, delay: 750 }
  ],
  scaleX: [
    { value: 1.4, duration: 100, easing: 'easeOutExpo' },
    { value: 1, duration: 650 },
    { value: 1.4, duration: 50, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: 1.4, duration: 100, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.4, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
})

let fouredBall = '.ball:nth-child(4)';
anime({
  targets: fouredBall,
  translateY: [
    { value: -33, duration: 750},
    { value: 0, duration: 750, delay: 750 }
  ],
  translateX: [
    { value: 33, duration: 750, delay: 750 },
    { value: 0, duration: 750, delay: 750 }
  ],
  scaleY: [
    { value: 1.4, duration: 100, easing: 'easeOutExpo' },
    { value: 1, duration: 650 },
    { value: 1.4, duration: 50, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleX: [
    { value: 1.4, duration: 100, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.4, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
})

/*Circle Rotations-3 with changing colors*/
let ballToRings = '.colorBall';
anime({
  targets: ballToRings,
  translateX: [
    { value: 29, duration: 750},
    { value: 0, duration: 750, delay: 750 }
  ],
  translateY: [
    { value: 29, duration: 750, delay: 750 },
    { value: 0, duration: 750, delay: 750 }
  ],
  scaleX: [
    { value: 1.4, duration: 100, easing: 'easeOutExpo' },
    { value: 1, duration: 650 },
    { value: 1.4, duration: 50, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: 1.4, duration: 100, delay: 750, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.4, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  background: [
    {value: '#3498db', duration: 750},
    {value: '#9b59b6', duration: 750},
    {value: '#e67e22', duration: 750},
    {value: '#2ecc71', duration: 750}
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  autoplay: true
})
