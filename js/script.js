// ===============================
// AOS INITIALIZATION
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// TYPING ANIMATION
// ===============================

var typed = new Typed("#typing", {
    strings: [
        "Aspiring Data Scientist",
        "Data Analyst",
        "Machine Learning Enthusiast",
        "AI Enthusiast"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// NAVBAR SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.35)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===============================
// PROJECT CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// SKILL CARD ANIMATION
// ===============================

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "translateY(-10px) rotate(2deg)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "translateY(0) rotate(0deg)";

    });

});

// ===============================
// PAGE LOADER (Optional)
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .7s";

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"%cWelcome to Ashwin's Portfolio 🚀",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);
// Mobile Menu

const menuBtn=document.getElementById("menu-btn");
const nav=document.getElementById("navLinks");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

}

// Dark Mode

const themeBtn=document.getElementById("theme-toggle");

themeBtn.onclick=()=>{

document.body.classList.toggle("light");

}
// ==========================
// Scroll To Top Button
// ==========================

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
//==========================
// Scroll Progress Bar
//==========================

window.addEventListener("scroll", () => {

const winScroll = document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled = (winScroll / height) * 100;

document.getElementById("progress-bar").style.width =
scrolled + "%";

});
particlesJS("particles-js", {
    particles: {
        number: {
            value: 70
        },
        color: {
            value: "#38BDF8"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.4
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#38BDF8",
            opacity: 0.3,
            width: 1
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        }
    }
});