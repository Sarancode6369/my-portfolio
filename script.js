/* ==========================
   Typing Animation
========================== */

const typing = document.getElementById("typing");

const words = [
  "Java Full Stack Developer",
  "Backend Developer",
  "Spring Boot Developer",
  "Blockchain Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 60 : 120;

  if (!deleting && charIndex === currentWord.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


/* ==========================
   Dark Mode
========================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }

});

window.onload = () => {

  if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";

  }

};


/* ==========================
   Navbar Active Link
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

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


/* ==========================
   Scroll Reveal Animation
========================== */

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.8s";

  observer.observe(card);

});


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});


/* ==========================
   Footer Year
========================== */

const footer = document.querySelector("footer p");

if (footer) {

  footer.innerHTML =
    `© ${new Date().getFullYear()} Saran | Java Full Stack Developer`;

}