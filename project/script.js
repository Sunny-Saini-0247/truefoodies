let tl = gsap.timeline();
tl.from(".navigation a", {
    y: -30,
    opacity: 0,
    duration: 0.80,
    stagger: 0.20,
    delay: 0.50
})
tl.from(".hero-section .name ", {
    y: 30,
    opacity: 0,
    duration: 0.40,
    stagger: 0.50,

})
    .from(".hero-section .find ", {
        y: 30,
        opacity: 0,
        duration: 0.40,
        stagger: 0.20,

    })
    .from(".hero-section .search ", {
        y: 30,
        opacity: 0,
        duration: 0.40,
        stagger: 0.20,

    })
    .from(".hero-section .button ", {
        y: 30,
        opacity: 0,
        duration: 0.40,
        stagger: 0.20,

    })


gsap.from(".main-child #he", {
    y: 80,
    opacity: 0,
    stagger: 0.50,
    duration: 0.50,
    scrollTrigger: ".main-child #he"
})
gsap.from(".main-child .l", {
    y: 50,
    opacity: 0,
    stagger: 0.30,
    delay: 0.30,
    duration: 0.50,
    scrollTrigger: ".main-child .l"
})
gsap.from(" .mid-child .xcv ", {
    y: -40,
    opacity: 0,
    duration: 1.30,
    scrollTrigger:
    {
        trigger: ".mid-child .xcv",
        scroller: "body",
        start: "top 67%",

    }
})
gsap.from(".mid #lk", {
    y: -60,
    opacity: 0,
    stagger: 0.50,
    duration: 1,
    scrollTrigger: {
        trigger: ".mid #lk",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%"
    }
})

gsap.from(".sec-mid #l", {
    y: -60,
    opacity: 0,
    stagger: 0.40,
    duration: 1,
    scrollTrigger: {
        trigger: ".sec-mid #l",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 0%"
    }
})

gsap.from(".page-1 h1", {
    y: 100,
    opacity: 0,
    stagger: 0.50,
    duration: 2,
})
gsap.from(".page-1 #e-4", {
    y: 100,
    opacity: 0,
    stagger: 0.50,
    duration: 2,
})
gsap.from(".page-1 .btn-section ", {
    y: 100,
    opacity: 0,
    stagger: 0.50,
    duration: 2,
})
gsap.from(".img-sec .box-sec", {
    y: -60,
    opacity: 0,
    stagger: 0.35,
    duration: 0.90,
    scrollTrigger: {
        trigger: ".img-sec .box-sec",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from(".page-2 #u-7", {
    y: -60,
    opacity: 0,
    stagger: 0.35,
    duration: 0.90,
    scrollTrigger: {
        trigger: ".page-2 #u-7",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from(".page-2-section #u-8", {
    y: -60,
    opacity: 0,
    stagger: 0.35,
    duration: 0.90,
    scrollTrigger: {
        trigger: ".page-2-section #u-8",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from(".page-2-section2 #wop-2", {
    y: -60,
    opacity: 0,
    stagger: 0.35,
    duration: 0.80,
    scrollTrigger: {
        trigger: ".page-2-section2 #wop-2",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 0%"
    }
})

let order = document.body.querySelectorAll(".button-order");
order.forEach(button => {
    button.addEventListener("click", function () {
        alert("Your order is successfully ordered. Thank you for your order.");
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.innerHTML = "Ordered";
    });
});


