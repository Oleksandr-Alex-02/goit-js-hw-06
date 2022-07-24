const textInput = document.querySelector('#name-input');
console.log(textInput);

const span = document.querySelector('#name-output');
console.log(span.textContent);

textInput.addEventListener('input', event => {
  span.textContent = event.currentTarget.value;
});

textInput.addEventListener('blur', event => {
  if (textInput.value === '') {
    span.textContent = 'Anonymous';
  }
});
