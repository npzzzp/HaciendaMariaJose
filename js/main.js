const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-menu a");
const revealItems = document.querySelectorAll(".reveal");
const panorama = document.querySelector("[data-panorama]");

function updateHeader() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 36);
  }

  if (progress) {
    progress.style.transform = `scaleX(${scrollRatio})`;
  }

  if (panorama) {
    const rect = panorama.getBoundingClientRect();
    const visible = 1 - Math.min(Math.max(rect.top / window.innerHeight, -1), 1);
    panorama.style.setProperty("--panorama-shift", `${visible * 28}px`);
  }
}

function setActiveLink() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 140)
    .pop();

  navLinks.forEach((link) => {
    link.classList.toggle("active", current && link.hash === `#${current.id}`);
  });
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");

    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navMenu.classList.toggle("is-open", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const delay = entry.target.dataset.revealDelay || 0;
      entry.target.style.setProperty("--delay", `${delay}ms`);
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", () => {
  updateHeader();
  setActiveLink();
}, { passive: true });

window.addEventListener("resize", updateHeader);

updateHeader();
setActiveLink();
