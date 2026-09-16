import siteConfig from "./config.js";
import "./form.js";

// =========================
// THEME CONFIGURATION
// =========================

const root = document.documentElement;

root.style.setProperty("--color-primary", siteConfig.theme.primary);

root.style.setProperty("--color-primary-dark", siteConfig.theme.primaryDark);

root.style.setProperty("--color-secondary", siteConfig.theme.secondary);

// =========================
// UPDATE PAGE CONTENT
// =========================

const businessEmail = document.querySelector("#business-email");
const phoneLinks = document.querySelectorAll(".business-phone");
const aboutImage = document.querySelector("#about-image");
const aboutParagraphs = document.querySelector("#about-paragraphs");

document.querySelector("#business-name").textContent = siteConfig.businessName;
document.querySelector("#service-area").textContent = siteConfig.serviceArea;
document.querySelector("#hero-eyebrow").textContent = siteConfig.hero.eyebrow;
document.querySelector("#hero-title").textContent = siteConfig.hero.title;
document.querySelector("#hero-text").textContent = siteConfig.hero.text;
document.querySelector("#about-eyebrow").textContent = siteConfig.about.eyebrow;
document.querySelector("#about-title").textContent = siteConfig.about.title;
document.querySelector("#contact-title").textContent = siteConfig.contact.title;
document.querySelector("#contact-text").textContent = siteConfig.contact.text;
document.querySelector("#cta-title").textContent = siteConfig.cta.title;
document.querySelector("#cta-button").textContent = siteConfig.cta.buttonText;
document.querySelector("#footer-year").textContent = new Date().getFullYear();

document.querySelector("#hero-primary-button").textContent =
  siteConfig.hero.primaryButton;
document.querySelector("#hero-secondary-button").textContent =
  siteConfig.hero.secondaryButton;
document.querySelector("#contact-eyebrow").textContent =
  siteConfig.contact.eyebrow;
document.querySelector("#footer-business-name").textContent =
  siteConfig.businessName;
document.querySelector("#footer-back-to-top").textContent =
  siteConfig.footer.backToTop;

siteConfig.about.paragraphs.forEach((paragraph) => {
  const element = document.createElement("p");
  element.textContent = paragraph;

  aboutParagraphs.appendChild(element);
});

document.querySelector("#about-button").textContent =
  siteConfig.about.buttonText;

phoneLinks.forEach((phoneLink) => {
  phoneLink.textContent = siteConfig.phone;
  phoneLink.href = `tel:${siteConfig.phone.replace(/\D/g, "")}`;
});

aboutImage.src = siteConfig.images.about.src;
aboutImage.alt = siteConfig.images.about.alt;
businessEmail.textContent = siteConfig.email;
businessEmail.href = `mailto:${siteConfig.email}`;

siteConfig.phone.replace(/\D/g, "");

// =========================
// SERVICES GRID
// =========================

const servicesGrid = document.querySelector("#services-grid");

siteConfig.services.forEach((service) => {
  const serviceCard = document.createElement("article");

  serviceCard.className = "service-card";

  serviceCard.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;

  servicesGrid.appendChild(serviceCard);
});

// =========================
// TESTIMONIALS GRID
// =========================

const testimonialsGrid = document.querySelector("#testimonials-grid");

siteConfig.testimonials.forEach((testimonial) => {
  const testimonialCard = document.createElement("article");

  testimonialCard.className = "testimonial";

  testimonialCard.innerHTML = `
        <p>"${testimonial.quote}"</p>
        <h3>${testimonial.name}</h3>
    `;

  testimonialsGrid.appendChild(testimonialCard);
});

// =========================
// GALLERY GRID
// =========================

const galleryGrid = document.querySelector("#gallery-grid");

siteConfig.images.gallery.forEach((image, index) => {
  const galleryImage = document.createElement("img");

  galleryImage.src = image.src;
  galleryImage.alt = image.alt;

  galleryGrid.appendChild(galleryImage);
});

// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
