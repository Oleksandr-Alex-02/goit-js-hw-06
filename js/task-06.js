const onInput = document.querySelector('#validation-input');
const lengthInput = onInput.getAttribute('data-length');

onInput.addEventListener('input', event => {
  onInput.addEventListener('blur', event => {
    if (event.currentTarget.value.length >= Number(lengthInput)) {
      onInput.setAttribute('id', 'validation-input.valid');
    } else {
      onInput.setAttribute('id', 'validation-input.invalid');
    }
  });
});
