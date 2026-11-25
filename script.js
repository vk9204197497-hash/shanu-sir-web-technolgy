"use strict";

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Course search
const courseSearch = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");
const noResults = document.getElementById("noResults");

courseSearch.addEventListener("input", function () {
  const searchText = courseSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  courseCards.forEach(function (card) {
    const cardText = (
      card.innerText + " " + card.dataset.search
    ).toLowerCase();

    const matches = cardText.includes(searchText);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
});

// JavaScript demo button
const demoButton = document.getElementById("demoButton");

demoButton.addEventListener("click", function () {
  alert("Hello, Student! Welcome to Shanu Sir Web Technology Academy.");
});

// Automatically update the copyright year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Contact form: open the user's email application
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const topic = document.getElementById("enquiryTopic").value;
  const message = document.getElementById("message").value.trim();

  const recipient = "vk9204197497@gmail.com";

  const subject = encodeURIComponent(
    "Academy Enquiry: " + topic
  );

  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Student Email: " + email + "\n" +
    "Topic: " + topic + "\n\n" +
    "Message:\n" + message
  );

  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + subject +
    "&body=" + body;

  formStatus.textContent =
    "Opening your email application. Please review and send the email there.";

  window.location.href = mailtoLink;
});