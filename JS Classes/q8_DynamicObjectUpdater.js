"use strict";
// Dynamic object updater: build/update form and reflect changes on the object
const user = { name: 'John', email: 'john@mail.com', age: 21 };

// When used in browser, call attachUpdater(document.getElementById('root'))
function attachUpdater(containerElement) {
  if (!containerElement) throw new Error('Container required');
  containerElement.innerHTML = `
    <form id="userForm">
      <label>Name: <input name="name" value="${user.name}"/></label><br/>
      <label>Email: <input name="email" value="${user.email}"/></label><br/>
      <label>Age: <input name="age" value="${user.age}"/></label><br/>
      <button type="submit">Save</button>
    </form>
    <pre id="output"></pre>
  `;
  const form = containerElement.querySelector('#userForm');
  const output = containerElement.querySelector('#output');

  function renderOutput() { output.textContent = JSON.stringify(user, null, 2); }
  renderOutput();

  // Update in real-time on input
  form.addEventListener('input', (e) => {
    const target = e.target;
    if (target.name) {
      user[target.name] = target.name === 'age' ? Number(target.value) : target.value;
      renderOutput();
    }
  });

  form.addEventListener('submit', (ev) => { ev.preventDefault(); console.log('User saved ->', user); });
}

// Node-friendly fallback: show current user
console.log('User initial object ->', user);

// Note: In browser, call attachUpdater to create the live updater UI.
