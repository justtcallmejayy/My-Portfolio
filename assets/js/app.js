"use strict";

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Portfolio filter variables
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();

    // Toggle active button
    filterBtns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    // Filter portfolio items
    filterItems.forEach((item) => {
      const itemCategory = item.dataset.category;
      if (category === "all" || category === itemCategory) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/Disable submit button based on form validation
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event listener to each navigation link
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.innerText.toLowerCase();

    // Toggle active page and link
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });
});

// DARK MODE SETUP
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

/**
 * Toggles the "darkmode" class on <body>,
 * saving or removing the preference in localStorage.
 */
const toggleDarkMode = () => {
  const isDark = document.body.classList.toggle("darkmode");
  localStorage.setItem("darkmode", isDark ? "active" : null);
};

// If the saved preference in localStorage is 'active', enable dark mode on load
if (darkmode === "active") {
  document.body.classList.add("darkmode");
}

// Listen for clicks on the theme switch button
themeSwitch.addEventListener("click", toggleDarkMode);

const backToTopBtn = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
