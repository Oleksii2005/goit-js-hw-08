import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// functions
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const loadFormData = () => {
  const { email, message } = load('feedback-form-state') || {};
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
};

const inputForm = () => {
  const { email, message } = form.elements;
  save('feedback-form-state', {
    email: email.value.trim(),
    message: message.value.trim(),
  });
};

const submitForm = e => {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
  if (email.value.trim() === '' || message.value.trim() === '')
    return alert('Please fill in all the fields!');
  console.log({ email: email.value.trim(), message: message.value.trim() });
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

// script
loadFormData();
form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);
