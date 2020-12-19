
function floatFunction(){
    var float  = gsap.timeline();

    float.to(".platform", {opacity: 0.5});
    float.to(".platform",{y:20, x:10, yoyoEase:"Linear.ease", yoyo: true, duration: 2, repeat: -1});

    return float;
}

var animTimeline = gsap.timeline(); //TIMELINE START

    //TIMELINE UNIT 0

        animTimeline.set(".animations", {duration: 1, y: 75, opacity:0});
        animTimeline.to(".animations", {duration: 1, y: 75, opacity:0.2}, 0);

        animTimeline.set(".yinyang", {x: 35, y: 200, zIndex: 1 }, 0);

        animTimeline.from(".content", {duration: 1.3, x: -750, opacity: 0, rotationZ: -25,  ease: "power4.out"}, 0);

    //TIMELINE UNIT 1

        //animTimeline.from(".animations", {y: 75}, 1);
        //animTimeline.to(".animations", {duration: 1, y: -50, opacity:1}, 1);
        animTimeline.fromTo(".animations", {y: 75}, {duration: 1, y: -50, opacity:1}, 1);

        animTimeline.add(floatFunction()); //DEFAULT ORDER LAST 

    //TIMELINE UNIT 2

        animTimeline.to(".yinyang", {duration: 1, y: 130}, 2)
        animTimeline.to(".yinyang", {duration: 2, ease: "power4.out", scale: 1.2}, 2);
        animTimeline.to(".yinyang", 10, {rotation: 360, ease: Linear.easeNone, repeat: -1}, 2);


    //FORM:- animTimeline.to/from("target", {modifier properties}, timing order);
    
        




