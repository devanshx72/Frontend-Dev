"use strict";
// Simple movie ticket booking with validation
const nameReg = /^[A-Za-z\s]+$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBooking(name, email, seats) {
  if (!nameReg.test(name)) return { valid: false, message: 'Name must contain only alphabets' };
  if (!emailReg.test(email)) return { valid: false, message: 'Invalid email' };
  const seatsNum = Number(seats);
  if (Number.isNaN(seatsNum) || seatsNum < 1 || seatsNum > 10) return { valid: false, message: 'Seats must be between 1 and 10' };
  return { valid: true, booking: { name, email, seats: seatsNum } };
}

// Example
const bookingAttempt = validateBooking('Riya', 'riya@mail.com', 3);
if (bookingAttempt.valid) console.log('Ticket booked ->', bookingAttempt.booking);
else console.log('Booking failed ->', bookingAttempt.message);
