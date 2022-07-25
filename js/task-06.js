const onInput = document.querySelector('#validation-input');
const lengthInput = onInput.getAttribute('data-length');

onInput.addEventListener('input', () => {
  onInput.addEventListener('blur', event => {
    if (event.currentTarget.value.length === Number(lengthInput)) {
      onInput.classList.add('valid');
      onInput.classList.remove('invalid');
    } else {
      onInput.classList.remove('valid');
      onInput.classList.add('invalid');
    }
  });
});

// onInput.addEventListener('blur', () => {
//   if (onInput.value.length < onInput.getAttribute('data-length')) {
//     onInput.classList.add('invalid');
//     return;
//   }
//   onInput.classList.remove('invalid');
//   onInput.classList.add('valid');
// });
