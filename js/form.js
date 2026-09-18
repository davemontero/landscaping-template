import siteConfig from "./config.js";

const contactForm = document.querySelector(".contact-form");
const submitButton = contactForm?.querySelector('button[type="submit"]');
const formStatus = document.querySelector("#form-status");

const setFormStatus = (message, type = "") => {
  if (!formStatus) return;

  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
};

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!submitButton) return;

  const formData = new FormData(contactForm);

  formData.set("access_key", siteConfig.form.accessKey);
  formData.set("subject", siteConfig.form.subject);

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  setFormStatus("Sending your message...", "loading");

  try {
    const response = await fetch(siteConfig.form.endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Form submission failed.");
    }

    setFormStatus(siteConfig.form.successMessage, "success");

    contactForm.reset();
  } catch (error) {
    console.error("Form submission error:", error);

    setFormStatus(siteConfig.form.errorMessage, "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});
