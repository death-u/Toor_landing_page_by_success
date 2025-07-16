gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Responsive Navbar Toggle Script

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});







  gsap.to(".intro_text", {
    duration: 3, 
    text: "Unlock the World’s Wonders With Us!", 
    ease: "power1.inOut",
    delay:2
  });

  gsap.to(".btn_explore", {
    opacity:2,
    duration:1,
    ease: "power2,inOut"
  })


  gsap.to(".plane",{
    right:-100,
    visibility:'visible',
    duration:5
  })

  gsap.fromTo(".logo",{
    x:-1000
  },{
    x:0,
    duration:2
  })
  gsap.fromTo(".nav-links",{
    x:1000,
    visibility:'hidden'
  },{
    x:0,
    duration:2,
    visibility:'visible'
  })
let tl1 = gsap.timeline({
  scrollTrigger: { // lowercase 'scrollTrigger'
    trigger: '.plane',
    start: '70% center',
    end: 'bottom center',
    scrub: true
  }
});


tl1.to(".plane", {
  y: -90
});






// Init lenis
const lenis = new Lenis()
function raf(time){
  lenis.raf(time)
  ScrollTrigger.update(); // Synchronize ScrollTrigger with Lenis
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)



let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: '.main_slider',
    start: '50% 80%',
    end: '80% 80%',
    scrub:true
  }
})

tl2.to(".slider",{
  marginTop: '0px',
  stagger : .5
})

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sect_mid",
    start:'top 80%',
    end: 'bottom 80%',
    scrub:true
  }
})

tl3.to(".mid",{
  ease: "power1.out",
  duration:2,
  marginTop:"0px",
  opacity:1,
  stagger: {
    each:.5,
    from:'center'
  }
})