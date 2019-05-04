$(function() {
  tweenA = new TimelineMax().add([
    TweenMax.fromTo(
      '#sun-burst',
      3,
      { y: '0', scale: 1.5, transformOrigin: '50% 50%' },
      { y: '-=50', scale: 1, ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#cloud-1',
      3,
      { y: 0, scale: 1.2, transformOrigin: '50% 50%' },
      { y: '+=60', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#cloud-2',
      3,
      { y: 0, scale: 1.1, transformOrigin: '50% 50%' },
      { y: '+=40', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-1',
      3,
      { y: 0, scale: 1 },
      { y: '-=40', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-2',
      3,
      { y: 0, scale: 1 },
      { y: '-=20', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-3',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-4',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=20', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-5',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=40', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-6',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=50', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-7',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=60', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-8',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=70', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-9',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=80', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-10',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=90', ease: Linear.easeNone }
    ),
    TweenMax.fromTo(
      '#mountain-11',
      3,
      { y: 0, scale: 1, transformOrigin: '50% 50%' },
      { y: '+=100', ease: Linear.easeNone }
    ),
  ])
})
