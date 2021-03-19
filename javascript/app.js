//GSAP Animations

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl
        .fromTo('.title', 2.5, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power3.easeInOut
        })
        .fromTo('.description', 1, {
            opacity: 0,
            y: -50
        }, {
            opacity: 1,
            y: 0
        }, 1.4)
        .fromTo('.headerContainer', 1.7, {
            opacity: 0,
            x: 50,
        }, {
            opacity: 1,
            x: 0,
            ease: Back.easeOut.config(1.7)
        }, 2)
});