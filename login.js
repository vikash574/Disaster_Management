const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
// Function to validate password
function validatePassword(password) {
    var isValid = true;
  
    // Minimum length of 8 characters
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      isValid = false;
    }
  
    // At least one digit
    if (!/\d/.test(password)) {
      alert('Password must contain at least one digit');
      isValid = false;
    }
  
    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert('Password must contain at least one special character');
      isValid = false;
    }
  
    return isValid;
  }
  
  
  
  // Sign up form submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
  
    // Perform signup logic (dummy example)
    // Replace this with your actual signup logic
    // For demonstration, let's assume signup is successful if email and password meet criteria
    if (validatePassword(password)) {
      alert('Wait for the response from the admin side');
      // Redirect to login page after successful signup
    //   window.location.href = 'dis_mgmt.html';
    } else {
    //   alert('Invalid password');
    }
  });
  // Function to validate password
function validatePassword(password) {
    var isValid = true;
  
    // Minimum length of 8 characters
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      isValid = false;
    }
  
    // At least one digit
    if (!/\d/.test(password)) {
      alert('Password must contain at least one digit');
      isValid = false;
    }
  
    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert('Password must contain at least one special character');
      isValid = false;
    }
  
    return isValid;
  }
  
  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var role = document.getElementById('role').value;

    // Simulated authentication logic (replace with secure server-side validation)
    if (role === 'Officer' && email === 'officer1' && password === 'officer@1234') {
        alert('Officer login successful!');
        document.getElementById('loginForm').submit();
        window.location.href = 'dis_mgmt.html';
      } else if (role === 'Rescuer' && email === 'rescuer01' && password === 'rescuer@1234') {
          document.getElementById('loginForm').submit();
          alert('Rescuer login successful!');
        window.location.href = 'sold.html';
      } else if (email === 'officer01' && validatePassword(password)) {
        // Redirect to dashboard page upon successful login
        window.location.href = 'dis_mgmt.html';
      } else {
        alert('Invalid username, password, or role. Please try again.');
      }
  
    // Perform login authentication (dummy example)
    // Replace this with your actual login authentication logic
    // For demonstration, let's assume login is successful if email and password match
    if (email === 'soldier1' && validatePassword(password)) {
      // Redirect to dashboard page upon successful login
      window.location.href = 'dis_mgmt.html';
    } /*else {
      //alert('Invalid email or password');
    }*/
  });
  
  // Function to generate random captcha
function generateCaptcha() {
    let captcha = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }
  
  // Generate random CAPTCHA string
function generateCaptcha() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha = "";
    for (var i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Update CAPTCHA text and input value
function updateCaptcha() {
    var captchaText = generateCaptcha();
    document.getElementById("captchaText").textContent = captchaText;
    document.getElementById("captchaInput").value = "";
}

// Refresh CAPTCHA when page loads
window.onload = updateCaptcha();


// Validate CAPTCHA on form submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var captchaInput = document.getElementById("captchaInput").value;
    var captchaText = document.getElementById("captchaText").textContent;
    if (captchaInput !== captchaText) {
        alert("CAPTCHA input is incorrect.");
        updateCaptcha(); // Refresh CAPTCHA
        event.preventDefault(); // Prevent form submission 
        window.location.href = 'login.html';
    } else {
        // CAPTCHA is correct, form submission can proceed
        // You can optionally perform additional validation or processing here
    }
});