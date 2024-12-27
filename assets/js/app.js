// Debugged JavaScript File by CHATGPT

"use strict";

// Ensure DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // element toggle function
  const elementToggleFunc = function (elem) {
    if (elem) {
      elem.classList.toggle("active");
    } else {
      console.error("Element not found for toggling.");
    }
  };

  // Sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // Sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  } else {
    console.error("Sidebar button not found.");
  }

  // Testimonials variables
  const testimonialsItem = document.querySelectorAll(
    "[data-testimonials-item]"
  );
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // Modal variables
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // Modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    } else {
      console.error("Modal elements not found.");
    }
  };

  // Add click event to all modal items
  testimonialsItem.forEach((item) => {
    item.addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        const avatar = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const text = this.querySelector("[data-testimonials-text]");

        if (avatar) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
        }

        if (title) modalTitle.innerHTML = title.innerHTML;
        if (text) modalText.innerHTML = text.innerHTML;

        testimonialsModalFunc();
      } else {
        console.error("Modal content elements not found.");
      }
    });
  });

  // Add click event to modal close button
  if (modalCloseBtn && overlay) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // Custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  } else {
    console.error("Custom select element not found.");
  }

  // Add event in all select items
  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.innerText.toLowerCase();

      // Toggle active class on buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
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

  // Add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // Contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // Add input event to enable/disable the submit button based on form validation
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });

  // Add submit event to handle form submissions (optional, for later back-end integration)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I’ll get back to you soon.");
    form.reset();
    formBtn.setAttribute("disabled", ""); // Disable the button after submission
  });

  // Page navigation variables
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.innerText.toLowerCase();
      pages.forEach((page) => {
        page.classList.toggle("active", page.dataset.page === target);
      });
      navigationLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
