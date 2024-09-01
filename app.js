document.addEventListener("DOMContentLoaded", () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  if (sign_in_btn && sign_up_btn && container) {

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  } else {
    console.error("Required elements not found.");
  }

  const form = document.querySelector(".sign-up-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get form values
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();
      const phoneNumber = document.getElementById("phone-number").value.trim();
      const countryCode = document.getElementById("country-code").value;
      const dob = new Date(document.getElementById("dob").value);

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      

      // Password length validation
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      // Confirm password validation
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Date of Birth validation
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();
      if (age < 13 || (age === 13 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        alert("You must be at least 13 years old to register.");
        return;
      }

      // Phone number validation
      const phoneRegex = /^[0-9]{10}$/; // Example regex for 10-digit phone numbers
      if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      // If no errors, show success message and redirect to login page
      alert("Registration successful!");
      container.classList.remove("sign-up-mode"); // Change to the actual path of your login page
    });
  } else {
    console.error("Form element not found.");
  }
});
