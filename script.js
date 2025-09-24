// Show a welcome message on page load
    function welcomeMessage() {
      alert("Welcome! Please fill in the registration form.");
    }

    // Form Validation
    function validateForm() {
      let fullname = document.getElementById("fullname").value;
      let email = document.getElementById("email").value;
      let course = document.getElementById("course").value;
      let gender = document.querySelector('input[name="gender"]:checked');

      // Check required fields
      if (fullname === "" || email === "" || course === "" || !gender) {
        alert("Please fill all required fields!");
        return false;
      }

      // Email Validation (basic regex)
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    }
