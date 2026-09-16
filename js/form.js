import siteConfig from "./config.js";

const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  if (!siteConfig.form.endpoint) {
    alert(`Thanks, ${formData.get("name")}! Your request has been received.`);

    contactForm.reset();
    return;
  }

  try {
    const response = await fetch(siteConfig.form.endpoint, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Form submission failed.");
    }

    alert(siteConfig.form.successMessage);
    contactForm.reset();
  } catch (error) {
    console.error(error);
    alert(siteConfig.form.errorMessage);
  }
});
