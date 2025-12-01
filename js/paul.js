document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact-form");
  if (!contactSection) return;

  const form = contactSection.querySelector("form");
  if (!form) return;
  
  form.setAttribute("novalidate", true);

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (message.length < 10) {
      alert("Please write a slightly longer message (at least 10 characters).");
      messageInput.focus();
      return;
    }

    alert("Thank you! Your message has been sent.");
    form.reset();
  });
});
