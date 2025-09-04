// ================================
// Part 1: Basic Event Handling
// ================================
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});

// ================================
// Part 2: Interactive Features
// ================================

// 🔹 Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔹 Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// 🔹 Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqContent = document.querySelector(".faq-content");

faqToggle.addEventListener("click", () => {
  faqContent.style.display = faqContent.style.display === "block" ? "none" : "block";
});

// ================================
// Part 3: Form Validation
// ================================
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let isValid = true;

  // Validate Name
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate Email (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully! ✅";
    form.reset();
  }
});
