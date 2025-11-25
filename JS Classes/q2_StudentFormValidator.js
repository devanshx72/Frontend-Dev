"use strict";
// Validation utilities for student registration form
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

// Validate single field values and return { valid, message }
function validateName(name) {
  if (!name) return { valid: false, message: 'Name is required' };
  return nameRegex.test(name) ? { valid: true } : { valid: false, message: 'Name must contain only alphabets/spaces' };
}
function validateEmail(email) {
  if (!email) return { valid: false, message: 'Email is required' };
  return emailRegex.test(email) ? { valid: true } : { valid: false, message: 'Invalid email format' };
}
function validatePhone(phone) {
  if (!phone) return { valid: false, message: 'Phone is required' };
  return phoneRegex.test(String(phone)) ? { valid: true } : { valid: false, message: 'Phone must be exactly 10 digits' };
}
function validatePassword(password) {
  if (!password) return { valid: false, message: 'Password is required' };
  return passwordRegex.test(password) ? { valid: true } : { valid: false, message: 'Password must have 1 uppercase, 1 number, 1 special char and be 8+ chars' };
}

// General validator for an object representing form values
function validateStudentForm(formValues) {
  const results = {
    name: validateName(formValues.name),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    password: validatePassword(formValues.password)
  };

  // Console feedback; in browser you would add borders and error messages to DOM elements
  for (const field of ['name', 'email', 'phone', 'password']) {
    const res = results[field];
    if (res.valid) console.log(`${field}: valid`);
    else console.log(`${field}: INVALID -> ${res.message}`);
  }

  return results;
}

// Example usage (can be run in Node or copied to browser console)
const exampleForm = { name: 'Mina', email: 'mina@example.com', phone: '9876543210', password: 'Pass@123' };
validateStudentForm(exampleForm);

// Note: For browser UI, you would set element.style.border = '1px solid red' and show a nearby message element when invalid.
