var t1 = gsap.timeline()


t1.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.6,
    stagger:0.2,
})
t1.from(".centre-part1 h1",{
    x:-500,
    opacity:0,
    duration:0.4,
})

t1.from(".centre-part1 p",{
    x:-500,
    opacity:0,
    duration:0.4,
})
t1.from(".centre-part1 button",{
    opacity:0,
    duration:0.4,
})
t1.from(".centre-part2 img",{
    opacity:0,
    duration:0.4,
    scale:0.5,
    x:200,
},"-=1") 


gsap.registerPlugin();

let marquee = gsap.to(".marquee-inner", {
  xPercent: -50, 
  duration: 15,  
  ease: "none",
  repeat: -1
});

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        
        start:"top 50%",
        end: "bottom 20%",
        scrub:1.2,
        
    }
})


t2.from(".services",{
    x:-300,
    opacity:0,
    duration:0.5,
})


t2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "one")
t2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "one")

t2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "two")
t2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "two")

t2.from(".elem.line3.left", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "three")
t2.from(".elem.line3.right", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "three")

gsap.to(".elem2 img", {
  y: 60,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});



var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cta-section",
    scroller: "body",
    start: "top 70%",
    end: "top 10%",
    scrub: 1,
    
    
  }
});

t3.from(".cta-content h2", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
});

t3.from(".cta-content p", {
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.4"); 

t3.from(".cta-content button", {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
   immediateRender: false
}, "-=0.3");

t3.from(".cta-illustration img", {
  x: 150,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.4");


gsap.to(".cta-illustration img", {
  y: 60,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".case-study",
    scroller: "body",
    start: "top 70%",   
    end: "bottom 20%",  
    scrub: 1.2,             
  }
});


t4.from(".case h3", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
});

t4.from(".case p", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.4"); 


t4.from(".case-boxes .case-box", {
  y: 120,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,        
  ease: "power2.out"
}, "-=0.3");