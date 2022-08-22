const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = form.elements[0].value;
    const password = form.elements[1].value;
    if (email.length === 0) {
        alert("Заповніть поле Email");
        return;
    }
    if (password.length === 0) {
        alert("Заповніть поле Password");
        return;
    }
    const obj = {
        email: email,
        password: password
    };
    console.log(obj);
    form.reset();
});