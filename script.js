// Toggle Modals
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close Modal when clicked outside
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = 'none';
    }
  }
  
  // Sign-up form validation (you can expand this as needed)
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (!name || !email || !password) {
      alert('All fields are required!');
    } else {
      console.log('Signed up with:', { name, email, password });
      alert('Sign Up successful! Now you can login.');
      toggleModal('signup');
    }
  });
  
  // Login form validation (you can expand this as needed)
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!email || !password) {
      alert('Please enter both email and password!');
    } else {
      console.log('Logged in with:', { email, password });
      alert('Login successful!');
      toggleModal('login');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}); 