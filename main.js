





// ===== Mobile Navbar Toggle UX =====
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#mainNavbar");
const navLinksMobile = document.querySelectorAll(".navbar-nav .nav-link");

navbarToggler.addEventListener("click", () => {
  const expanded = navbarToggler.getAttribute("aria-expanded") === "true";

  if (!expanded) {
    navbarCollapse.classList.add("show");
  }
});

navLinksMobile.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth < 992 &&
    !navbarCollapse.contains(e.target) &&
    !navbarToggler.contains(e.target)
  ) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
});

const navbar = document.querySelector(".custom-navbar");
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

const timeline = document.querySelector(".progress-line");
const stepCards = document.querySelectorAll(".step-card");

window.addEventListener("scroll", () => {
  const section = document.querySelector("#how-it-works");
  const sectionTop = section.offsetTop - window.innerHeight / 2;

  if (window.scrollY > sectionTop) {
    timeline.style.width = "100%";
  }

  stepCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("active");
    }, index * 150);
  });
});
