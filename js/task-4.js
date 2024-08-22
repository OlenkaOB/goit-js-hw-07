const form = document.querySelector('.login-form');

const handleFormSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert(`All form fields must be filled in`);
    return;
  }
  const data = {
    formEmail: email,
    formPassword: password,
  };
  console.log('data: ', data);
  form.reset();
};

form.addEventListener('submit', handleFormSubmit);
