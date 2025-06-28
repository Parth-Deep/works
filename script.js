function loading() {
    var tl = gsap.timeline()
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.8,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.8,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.8
    }, "anim")
    tl.to("#loader", {
        opacity:0
    })
    tl.to("#loader", {
        display:"none"
    })

}
loading()
const scroll= new LocomotiveScroll({
 el: document.querySelector(`#main`),
smooth: true
})
gsap.from("#item",{
duration:2,
delay:1.6,
opacity:0,
x:40,
y:20,
stagger:1.3,
})
var materials = document.querySelectorAll(".material")
var page2=document.querySelector("#page2")
materials.forEach( function(e){
 e.addEventListener("mouseenter",function(){
   var bgimg= e.getAttribute("data-img")
   page2.style.backgroundImage=`url(${bgimg})`
 })   
})
// Hamburger menu toggle for mobile nav
const hamburger = document.getElementById('hamburger');
const navItem = document.getElementById('nav-item');
if (hamburger && navItem) {
  hamburger.addEventListener('click', () => {
    navItem.classList.toggle('active');
    hamburger.classList.toggle('active'); // Animate hamburger icon
  });
}

