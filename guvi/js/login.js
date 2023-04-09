const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  // Password should be at least 8 characters with at least one uppercase letter, one lowercase letter, and one number.
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password.value)) {
    alert('Password should be at least 8 characters with at least one uppercase letter, one lowercase letter, and one number.');
    return;
  }

  // If the email and password are valid, you can submit the form here.
  // form.submit();
});
