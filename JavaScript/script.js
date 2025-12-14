/* ============================
      GLOBAL SCROLL REVEAL
============================= */
const revealSections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  revealSections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("fade-up");
    }
  });
});

/* ============================
      BIO GENERATOR
============================= */
document.getElementById("generateBio").addEventListener("click", () => {
  const text = document.getElementById("achievements").value.trim();
  const tone = document.getElementById("tone").value;

  if (!text) return alert("Masukkan pencapaian kamu dulu ya!");

  const tones = {
    professional: "Dengan pendekatan profesional, saya telah ",
    casual: "Aku biasanya mengerjakan hal-hal seperti ",
    friendly: "Dengan gaya yang ramah, aku sering terlibat dalam ",
    confident: "Dengan penuh percaya diri, saya memiliki pengalaman dalam ",
  };

  document.getElementById("resultBio").innerText =
    tones[tone] + text.toLowerCase();

  document.getElementById("resultContainer").style.display = "block";
});

/* ============================
      SKILL BAR
============================= */
const skillBars = document.querySelectorAll(".fill");
let skillsTriggered = false;

function animateSkills() {
  skillBars.forEach((bar) => {
    const value = bar.dataset.fill;
    bar.style.width = value + "%";

    const tooltip = bar.nextElementSibling;
    if (tooltip) tooltip.innerText = value + "%";
  });
}

window.addEventListener("scroll", () => {
  const rect = document.getElementById("skills-expert").getBoundingClientRect();

  if (!skillsTriggered && rect.top < window.innerHeight - 100) {
    animateSkills();
    skillsTriggered = true;
  }
});

/* ============================
      TIMELINE ANIMATION
============================= */
const timelineItems = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach(
      (entry) => entry.isIntersecting && entry.target.classList.add("show")
    ),
  { threshold: 0.2 }
);
timelineItems.forEach((item) => observer.observe(item));

/* ============================
      NAVBAR TOGGLE
============================= */
document.getElementById("navToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Auto close saat klik menu
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* ============================
      HERO REVEAL
============================= */
const hero = document.querySelector(".hero-content");
setTimeout(() => {
  hero.style.opacity = "1";
  hero.style.transform = "translateY(0)";
}, 200);

/* ============================
      REVEAL ON SCROLL
============================= */
const reveal = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveal.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* ============================
      3D TILT CARD
============================= */
document.querySelectorAll(".card-3d").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 20;
    const y = (e.clientY - r.top - r.height / 2) / 20;

    card.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

/* ============================
      PARALLAX LAYERS
============================= */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / innerWidth - 0.5) * 20;
  const y = (e.clientY / innerHeight - 0.5) * 20;

  document.querySelector(
    ".layer-1"
  ).style.transform = `translate(${x}px, ${y}px)`;
  document.querySelector(".layer-2").style.transform = `translate(${
    x * 1.5
  }px, ${y * 1.5}px)`;
  document.querySelector(".layer-3").style.transform = `translate(${
    x * 0.7
  }px, ${y * 0.7}px)`;
});

/* ============================
      FOOTER GLOW
============================= */
document.querySelectorAll(".footer-right a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textShadow = "0 0 25px #BF00FF";
  });
  link.addEventListener("mouseleave", () => {
    link.style.textShadow = "0 0 5px #BF00FF";
  });
});
