const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    const value = input.value;
    const dataLength = input.getAttribute('data-length');
    let num = Number(dataLength);
    if (value.length === num) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});