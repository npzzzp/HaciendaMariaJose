const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-menu a");
const revealItems = document.querySelectorAll(".reveal");
const routeButtons = document.querySelectorAll("[data-route]");
const routePanel = document.querySelector(".route-panel");
const routeText = document.querySelector("[data-route-text]");
const panorama = document.querySelector("[data-panorama]");

const routeContent = {
  amanecer: {
    time: "6:00 a.m.",
    title: "Ordeño y leche fresca",
    copy: "Comenzamos con el ordeño matutino y la recolección de leche fresca que da inicio a toda nuestra producción.",
  },
  sendero: {
    time: "9:30 a.m.",
    title: "Transformación cuidadosa",
    copy: "La leche pasa por un proceso controlado donde se prepara para convertirse en productos confiables y naturales.",
  },
  queseria: {
    time: "11:00 a.m.",
    title: "Maduración del queso",
    copy: "El queso se elabora y se deja reposar con atención para lograr la textura y el aroma de la finca.",
  },
  atardecer: {
    time: "5:20 p.m.",
    title: "Envasado y salida",
    copy: "Terminamos el día con el envasado de productos listos para distribución, manteniendo siempre la frescura.",
  },
};

function updateHeader() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;

  header.classList.toggle("is-scrolled", window.scrollY > 36);
  progress.style.transform = `scaleX(${scrollRatio})`;

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

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.classList.toggle("is-open");

  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navMenu.classList.toggle("is-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const route = button.dataset.route;
    const content = routeContent[route];

    routeButtons.forEach((item) => item.classList.toggle("active", item === button));
    routePanel.dataset.mode = route;
    routeText.innerHTML = `
      <span>${content.time}</span>
      <h3>${content.title}</h3>
      <p>${content.copy}</p>
    `;
  });
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
