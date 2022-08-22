const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', () => {
    const value = input.value;
    span.style.fontSize = value + 'px';
});