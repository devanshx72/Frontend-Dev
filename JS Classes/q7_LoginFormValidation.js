"use strict";
// Login form validation using RegExp
const usernameRegex = /^.{5,}$/; // at least 5 characters
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/; // min 8 with required classes

function validateLogin(username, password) {
  const errors = [];
  if (!usernameRegex.test(username)) errors.push('Username must be at least 5 characters');
  if (!passwordRegex.test(password)) errors.push('Password must be 8+ chars and include number, upper, lower, special');
  if (errors.length === 0) console.log('Login validation: SUCCESS');
  else console.log('Login validation errors:', errors.join('; '));
  return errors.length === 0;
}

// Example
validateLogin('user1', 'Passw0rd!');
