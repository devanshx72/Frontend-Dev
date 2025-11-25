"use strict";
// FormBuilder class to dynamically create forms and retrieve form data
class FormBuilder {
  constructor(fields = []) {
    this.fields = fields; // array of objects like { type: 'text', label: 'Username', name: 'username' }
  }

  // Render form HTML into a container element
  render(containerElement) {
    if (!containerElement) throw new Error('Container element is required');
    let html = '<form id="dynamicForm">';
    for (const f of this.fields) {
      html += `<label>${f.label}: <input type="${f.type}" name="${f.name || f.label.toLowerCase()}" /></label><br/>`;
    }
    html += '<button type="submit">Submit</button></form>';
    containerElement.innerHTML = html;
    const formEl = containerElement.querySelector('#dynamicForm');
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const data = this.getFormData(formEl);
      console.log('Form submitted data ->', data);
    });
  }

  // Collect values from a form element and return as object
  getFormData(formElement) {
    const formData = new FormData(formElement);
    const result = {};
    for (const [key, value] of formData.entries()) result[key] = value;
    return result;
  }
}

// Example usage (in browser):
// const fields = [{type:'text',label:'Username',name:'username'},{type:'email',label:'Email',name:'email'}];
// const fb = new FormBuilder(fields); fb.render(document.getElementById('root'));

// If run in Node, just log the available methods
console.log('FormBuilder ready. Use in browser to render dynamic forms.');
