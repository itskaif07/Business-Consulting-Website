let x = document.querySelector('#x')
let menu = document.querySelector('#menu')
let sidebar = document.querySelector('#sidebar')

menu.addEventListener('click', function () {
  gsap.to(sidebar, {
    opacity: 1,
    translateY: 0,
  })
})
x.addEventListener('click', function () {
  gsap.to(sidebar, {
    opacity: 0,
    translateY: '-100%',
  })
})

let tl = gsap.timeline()

tl.from('#logo, #hero, #subs, #down', {
  opacity: 0,
  x: -100,
  duration: 0.5,
  stagger: 1,
  ease: Power4,
})

gsap.from('#why, #self-paced, #simple-enrollment, #prof-mentors', {
  opacity: 0,
  x: -100,
  stagger: 1,
  ease: Expo.easeOut(),
  scrollTrigger: {
    trigger: '#section2',
    scroller: 'body',
    start: 'top 0%',
    end: 'bottom 100%',
  },
})

gsap.from('#threehead, #threebody', {
  opacity: 0,
  x: -100,
  stagger: 1,
  ease: Expo.easeOut(),
  scrollTrigger: {
    trigger: '#section3',
    scroller: 'body',
    start: 'top 0%',
    end: 'bottom 100%',
  },
})

gsap.from('#fourhead, #fourbody', {
  opacity: 0,
  x: -100,
  stagger: 1,
  ease: Expo.easeOut(),
  scrollTrigger: {
    trigger: '#section4',
    scroller: 'body',
    start: 'top 0%',
    end: 'bottom 100%',
  },
})

gsap.from('#fivehead, #podcast, #branding, #staying', {
  opacity: 0,
  x: -100,
  stagger: 1,
  ease: Expo.easeOut(),
  scrollTrigger: {
    trigger: '#section5',
    scroller: 'body',
    start: 'top 0%',
    end: 'bottom 100%',
  },
})

gsap.from('#sixhead, #sixbody', {
  opacity: 0,
  y: 100,
  duration:0.5,
  ease: Expo.easeIn(),
  scrollTrigger: {
    trigger: '#section6',
    scroller: 'body',
    start: 'top 0%',
    end: 'bottom 100%',
  },
})

gsap.from('#sevenleft, #sevenright, #scrollToTop', {
  opacity: 0,
  x: -100,
  duration:0.5,
  stagger:1,
  ease: Expo.easeIn(),
  scrollTrigger: {
    trigger: '#section7',
    scroller: 'body',
    start: 'top 50%',
    end: 'bottom 100%',
  },
})

document.querySelector('#scrollToTop').addEventListener('click', function(){
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: 'Expo.easeIn' });
})
