

gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 800) {

    ScrollTrigger.create({
        trigger: "#card1",
        start: "top 60%",
        end: "bottom top",
        animation: gsap.fromTo('#card1', {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: "#img1",
        start: "top 60%",
        end: "bottom top",
        animation: gsap.fromTo('#img1', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: "#card2",
        start: "top 40%",
        end: "bottom top",
        animation: gsap.fromTo('#card2', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: "#img2",
        start: "top 40%",
        end: "bottom top",
        animation: gsap.fromTo('#img2', {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: "#card3",
        start: "top 60%",
        end: "bottom top",
        animation: gsap.fromTo('#card3', {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: "#img3",
        start: "top 60%",
        end: "bottom top",
        animation: gsap.fromTo('#img3', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });

    ScrollTrigger.create({
        trigger: ".footer",
        start: "top 80%",
        end: "bottom top",
        animation: gsap.fromTo('.footer', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }),
        toggleActions: "play none none none"
    });
}