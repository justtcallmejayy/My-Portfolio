"use strict";

/*-----------------------------------*\
  #1. Helper Function
\*-----------------------------------*/

/**
 * Toggles the 'active' class on a given element.
 * @param {HTMLElement} elem - The element to toggle.
 */
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/*-----------------------------------*\
  #2. Sidebar Toggle
\*-----------------------------------*/

// Variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar visibility
sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

/*-----------------------------------*\
  #3. Portfolio Filter
\*-----------------------------------*/

// Variables
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

/**
 * Clicking a filter button highlights the button (active)
 * and shows/hides portfolio items matching its category.
 */
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

/*-----------------------------------*\
  #4. Contact Form Validation
\*-----------------------------------*/

// Variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

/**
 * Enable/Disable the submit button based on form validity.
 */
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

/*-----------------------------------*\
  #5. Page Navigation
\*-----------------------------------*/

// Variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Clicking a nav link activates the associated page
 * and deactivates other pages.
 */
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.innerText.toLowerCase();

    // Toggle active page
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    // Toggle active nav link
    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // Scroll to the top
    window.scrollTo(0, 0);
  });
});

/*-----------------------------------*\
  #6. Dark Mode Toggle
\*-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  let darkMode = localStorage.getItem("darkMode");

  /**
   * Functions to enable or disable Dark Mode.
   */
  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", "disabled");
  };

  // Load the saved preference on page load
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // Button click toggles dark mode
  themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode"); // Refresh state from localStorage
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
